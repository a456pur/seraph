"use strict";

/*

This is the backend for voice channels and LAN servers in eaglercraft

it links with TeaVM EaglerAdapter at runtime

Copyright 2022 ayunami2000 & lax1dude. All rights reserved.

*/


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% VOICE CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeVoiceClient = (() => {

    const READYSTATE_NONE = 0;
    const READYSTATE_ABORTED = -1;
    const READYSTATE_DEVICE_INITIALIZED = 1;

    const PEERSTATE_FAILED = 0;
    const PEERSTATE_SUCCESS = 1;
    const PEERSTATE_LOADING = 2;

    class EaglercraftVoicePeer {

        constructor(client, peerId, peerConnection, offer) {
            this.client = client;
            this.peerId = peerId;
            this.peerConnection = peerConnection;
            this.stream = null;

            const self = this;
            this.peerConnection.addEventListener("icecandidate", (evt) => {
                if (evt.candidate) {
                    self.client.iceCandidateHandler(self.peerId, JSON.stringify({
                        sdpMLineIndex: evt.candidate.sdpMLineIndex,
                        candidate: evt.candidate.candidate
                    }));
                }
            });

            this.peerConnection.addEventListener("track", (evt) => {
                self.rawStream = evt.streams[0];
                const aud = new Audio();
                aud.autoplay = true;
                aud.muted = true;
                aud.onended = function () {
                    aud.remove();
                };
                aud.srcObject = self.rawStream;
                self.client.peerTrackHandler(self.peerId, self.rawStream);
            });

            this.peerConnection.addStream(this.client.localMediaStream.stream);
            if (offer) {
                this.peerConnection.createOffer((desc) => {
                    const selfDesc = desc;
                    self.peerConnection.setLocalDescription(selfDesc, () => {
                        self.client.descriptionHandler(self.peerId, JSON.stringify(selfDesc));
                        if (self.client.peerStateInitial != PEERSTATE_SUCCESS) self.client.peerStateInitial = PEERSTATE_SUCCESS;
                    }, (err) => {
                        console.error("Failed to set local description for \"" + self.peerId + "\"! " + err);
                        if (self.client.peerStateInitial == PEERSTATE_LOADING) self.client.peerStateInitial = PEERSTATE_FAILED;
                        self.client.signalDisconnect(self.peerId);
                    });
                }, (err) => {
                    console.error("Failed to set create offer for \"" + self.peerId + "\"! " + err);
                    if (self.client.peerStateInitial == PEERSTATE_LOADING) self.client.peerStateInitial = PEERSTATE_FAILED;
                    self.client.signalDisconnect(self.peerId);
                });
            }

            this.peerConnection.addEventListener("connectionstatechange", (evt) => {
                if (self.peerConnection.connectionState === 'disconnected') {
                    self.client.signalDisconnect(self.peerId);
                } else if (self.peerConnection.connectionState === 'connected') {
                    if (self.client.peerState != PEERSTATE_SUCCESS) self.client.peerState = PEERSTATE_SUCCESS;
                } else if (self.peerConnection.connectionState === 'failed') {
                    if (self.client.peerState == PEERSTATE_LOADING) self.client.peerState = PEERSTATE_FAILED;
                    self.client.signalDisconnect(self.peerId);
                }
            });

        }

        disconnect() {
            this.peerConnection.close();
        }

        mute(muted) {
            this.rawStream.getAudioTracks()[0].enabled = !muted;
        }

        setRemoteDescription(descJSON) {
            const self = this;
            try {
                const remoteDesc = JSON.parse(descJSON);
                this.peerConnection.setRemoteDescription(remoteDesc, () => {
                    if (remoteDesc.type == 'offer') {
                        self.peerConnection.createAnswer((desc) => {
                            const selfDesc = desc;
                            self.peerConnection.setLocalDescription(selfDesc, () => {
                                self.client.descriptionHandler(self.peerId, JSON.stringify(selfDesc));
                                if (self.client.peerStateDesc != PEERSTATE_SUCCESS) self.client.peerStateDesc = PEERSTATE_SUCCESS;
                            }, (err) => {
                                console.error("Failed to set local description for \"" + self.peerId + "\"! " + err);
                                if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                                self.client.signalDisconnect(self.peerId);
                            });
                        }, (err) => {
                            console.error("Failed to create answer for \"" + self.peerId + "\"! " + err);
                            if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                            self.client.signalDisconnect(self.peerId);
                        });
                    }
                }, (err) => {
                    console.error("Failed to set remote description for \"" + self.peerId + "\"! " + err);
                    if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                    self.client.signalDisconnect(self.peerId);
                });
            } catch (err) {
                console.error("Failed to parse remote description for \"" + self.peerId + "\"! " + err);
                if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                self.client.signalDisconnect(self.peerId);
            }
        }

        addICECandidate(candidate) {
            try {
                this.peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
                if (this.client.peerStateIce != PEERSTATE_SUCCESS) this.client.peerStateIce = PEERSTATE_SUCCESS;
            } catch (err) {
                console.error("Failed to parse ice candidate for \"" + this.peerId + "\"! " + err);
                if (this.client.peerStateIce == PEERSTATE_LOADING) this.client.peerStateIce = PEERSTATE_FAILED;
                this.client.signalDisconnect(this.peerId);
            }
        }

    }

    class EaglercraftVoiceClient {

        constructor() {
            this.ICEServers = [];
            this.hasInit = false;
            this.peerList = new Map();
            this.readyState = READYSTATE_NONE;
            this.peerState = PEERSTATE_LOADING;
            this.peerStateConnect = PEERSTATE_LOADING;
            this.peerStateInitial = PEERSTATE_LOADING;
            this.peerStateDesc = PEERSTATE_LOADING;
            this.peerStateIce = PEERSTATE_LOADING;
            this.iceCandidateHandler = null;
            this.descriptionHandler = null;
            this.peerTrackHandler = null;
            this.peerDisconnectHandler = null;
            this.microphoneVolumeAudioContext = null;
        }

        voiceClientSupported() {
            return typeof window.RTCPeerConnection !== "undefined" && typeof navigator.mediaDevices !== "undefined" &&
                typeof navigator.mediaDevices.getUserMedia !== "undefined";
        }

        setICEServers(urls) {
            this.ICEServers.length = 0;
            for (var i = 0; i < urls.length; ++i) {
                var etr = urls[i].split(";");
                if (etr.length == 1) {
                    this.ICEServers.push({urls: etr[0]});
                } else if (etr.length == 3) {
                    this.ICEServers.push({urls: etr[0], username: etr[1], credential: etr[2]});
                }
            }
        }

        setICECandidateHandler(cb) {
            this.iceCandidateHandler = cb;
        }

        setDescriptionHandler(cb) {
            this.descriptionHandler = cb;
        }

        setPeerTrackHandler(cb) {
            this.peerTrackHandler = cb;
        }

        setPeerDisconnectHandler(cb) {
            this.peerDisconnectHandler = cb;
        }

        activateVoice(tk) {
            if (this.hasInit) this.localRawMediaStream.getAudioTracks()[0].enabled = tk;
        }

        initializeDevices() {
            if (!this.hasInit) {
                const self = this;
                navigator.mediaDevices.getUserMedia({audio: true, video: false}).then((stream) => {
                    self.microphoneVolumeAudioContext = new AudioContext();
                    self.localRawMediaStream = stream;
                    self.localRawMediaStream.getAudioTracks()[0].enabled = false;
                    self.localMediaStream = self.microphoneVolumeAudioContext.createMediaStreamDestination();
                    self.localMediaStreamGain = self.microphoneVolumeAudioContext.createGain();
                    var localStreamIn = self.microphoneVolumeAudioContext.createMediaStreamSource(stream);
                    localStreamIn.connect(self.localMediaStreamGain);
                    self.localMediaStreamGain.connect(self.localMediaStream);
                    self.localMediaStreamGain.gain.value = 1.0;
                    self.readyState = READYSTATE_DEVICE_INITIALIZED;
                    this.hasInit = true;
                }).catch((err) => {
                    self.readyState = READYSTATE_ABORTED;
                });
            } else {
                this.readyState = READYSTATE_DEVICE_INITIALIZED;
            }
        }

        setMicVolume(val) {
            if (this.hasInit) {
                if (val > 0.5) val = 0.5 + (val - 0.5) * 2.0;
                if (val > 1.5) val = 1.5;
                if (val < 0.0) val = 0.0;
                this.localMediaStreamGain.gain.value = val * 2.0;
            }
        }

        resetPeerStates() {
            this.peerState = this.peerStateConnect = this.peerStateInitial = this.peerStateDesc = this.peerStateIce = PEERSTATE_LOADING;
        }

        getPeerState() {
            return this.peerState;
        }

        getPeerStateConnect() {
            return this.peerStateConnect;
        }

        getPeerStateInitial() {
            return this.peerStateInitial;
        }

        getPeerStateDesc() {
            return this.peerStateDesc;
        }

        getPeerStateIce() {
            return this.peerStateIce;
        }

        getReadyState() {
            return this.readyState;
        }

        signalConnect(peerId, offer) {
            if (!this.hasInit) this.initializeDevices();
            try {
                const peerConnection = new RTCPeerConnection({
                    iceServers: this.ICEServers,
                    optional: [{DtlsSrtpKeyAgreement: true}]
                });
                const peerInstance = new EaglercraftVoicePeer(this, peerId, peerConnection, offer);
                this.peerList.set(peerId, peerInstance);
                if (this.peerStateConnect != PEERSTATE_SUCCESS) this.peerStateConnect = PEERSTATE_SUCCESS;
            } catch (e) {
                if (this.peerStateConnect == PEERSTATE_LOADING) this.peerStateConnect = PEERSTATE_FAILED;
            }
        }

        signalDescription(peerId, descJSON) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                thePeer.setRemoteDescription(descJSON);
            }
        }

        signalDisconnect(peerId, quiet) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                this.peerList.delete(thePeer);
                try {
                    thePeer.disconnect();
                } catch (e) {
                }
                this.peerDisconnectHandler(peerId, quiet);
            }
        }

        mutePeer(peerId, muted) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                thePeer.mute(muted);
            }
        }

        signalICECandidate(peerId, candidate) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                thePeer.addICECandidate(candidate);
            }
        }

    }

    window.constructVoiceClient = () => new EaglercraftVoiceClient();
});

window.startVoiceClient = () => {
    if (typeof window.constructVoiceClient !== "function") {
        window.initializeVoiceClient();
    }
    return window.constructVoiceClient();
};


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% LAN CLIENT CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeLANClient = (() => {

    const READYSTATE_INIT_FAILED = -2;
    const READYSTATE_FAILED = -1;
    const READYSTATE_DISCONNECTED = 0;
    const READYSTATE_CONNECTING = 1;
    const READYSTATE_CONNECTED = 2;

    class EaglercraftLANClient {

        constructor() {
            this.ICEServers = [];
            this.peerConnection = null;
            this.dataChannel = null;
            this.readyState = READYSTATE_CONNECTING;
            this.iceCandidateHandler = null;
            this.descriptionHandler = null;
            this.remoteDataChannelHandler = null;
            this.remoteDisconnectHandler = null;
            this.remotePacketHandler = null;
        }

        LANClientSupported() {
            return typeof window.RTCPeerConnection !== "undefined";
        }

        initializeClient() {
            try {
                if (this.dataChannel != null) {
                    this.dataChannel.close();
                    this.dataChannel = null;
                }
                if (this.peerConnection != null) {
                    this.peerConnection.close();
                }
                this.peerConnection = new RTCPeerConnection({
                    iceServers: this.ICEServers,
                    optional: [{DtlsSrtpKeyAgreement: true}]
                });
                this.readyState = READYSTATE_CONNECTING;
            } catch (e) {
                this.readyState = READYSTATE_INIT_FAILED;
            }
        }

        setICEServers(urls) {
            this.ICEServers.length = 0;
            for (var i = 0; i < urls.length; ++i) {
                var etr = urls[i].split(";");
                if (etr.length == 1) {
                    this.ICEServers.push({urls: etr[0]});
                } else if (etr.length == 3) {
                    this.ICEServers.push({urls: etr[0], username: etr[1], credential: etr[2]});
                }
            }
        }

        setICECandidateHandler(cb) {
            this.iceCandidateHandler = cb;
        }

        setDescriptionHandler(cb) {
            this.descriptionHandler = cb;
        }

        setRemoteDataChannelHandler(cb) {
            this.remoteDataChannelHandler = cb;
        }

        setRemoteDisconnectHandler(cb) {
            this.remoteDisconnectHandler = cb;
        }

        setRemotePacketHandler(cb) {
            this.remotePacketHandler = cb;
        }

        getReadyState() {
            return this.readyState;
        }

        sendPacketToServer(buffer) {
            if (this.dataChannel != null && this.dataChannel.readyState == "open") {
                this.dataChannel.send(buffer);
            } else {
                this.signalRemoteDisconnect(false);
            }
        }

        signalRemoteConnect() {
            const self = this;

            const iceCandidates = [];

            this.peerConnection.addEventListener("icecandidate", (evt) => {
                if (evt.candidate) {
                    if (iceCandidates.length == 0) setTimeout(() => {
                        if (self.peerConnection != null && self.peerConnection.connectionState != "disconnected") {
                            self.iceCandidateHandler(JSON.stringify(iceCandidates));
                            iceCandidates.length = 0;
                        }
                    }, 3000);
                    iceCandidates.push({
                        sdpMLineIndex: evt.candidate.sdpMLineIndex,
                        candidate: evt.candidate.candidate
                    });
                }
            });

            this.dataChannel = this.peerConnection.createDataChannel("lan");
            this.dataChannel.binaryType = "arraybuffer";

            this.dataChannel.addEventListener("open", async (evt) => {
                while (iceCandidates.length > 0) {
                    await new Promise(resolve => setTimeout(resolve, 0));
                }
                self.remoteDataChannelHandler(self.dataChannel);
            });

            this.dataChannel.addEventListener("message", (evt) => {
                self.remotePacketHandler(evt.data);
            }, false);

            this.peerConnection.createOffer((desc) => {
                const selfDesc = desc;
                self.peerConnection.setLocalDescription(selfDesc, () => {
                    self.descriptionHandler(JSON.stringify(selfDesc));
                }, (err) => {
                    console.error("Failed to set local description! " + err);
                    self.readyState = READYSTATE_FAILED;
                    self.signalRemoteDisconnect(false);
                });
            }, (err) => {
                console.error("Failed to set create offer! " + err);
                self.readyState = READYSTATE_FAILED;
                self.signalRemoteDisconnect(false);
            });

            this.peerConnection.addEventListener("connectionstatechange", (evt) => {
                if (self.peerConnection.connectionState === 'disconnected') {
                    self.signalRemoteDisconnect(false);
                } else if (self.peerConnection.connectionState === 'connected') {
                    self.readyState = READYSTATE_CONNECTED;
                } else if (self.peerConnection.connectionState === 'failed') {
                    self.readyState = READYSTATE_FAILED;
                    self.signalRemoteDisconnect(false);
                }
            });
        }

        signalRemoteDescription(descJSON) {
            try {
                this.peerConnection.setRemoteDescription(JSON.parse(descJSON));
            } catch (e) {
                console.error(e);
                this.readyState = READYSTATE_FAILED;
                this.signalRemoteDisconnect(false);
            }
        }

        signalRemoteICECandidate(candidates) {
            try {
                const candidateList = JSON.parse(candidates);
                for (let candidate of candidateList) {
                    this.peerConnection.addIceCandidate(candidate);
                }
            } catch (e) {
                console.error(e);
                this.readyState = READYSTATE_FAILED;
                this.signalRemoteDisconnect(false);
            }
        }

        signalRemoteDisconnect(quiet) {
            if (this.dataChannel != null) {
                this.dataChannel.close();
                this.dataChannel = null;
            }
            if (this.peerConnection != null) {
                this.peerConnection.close();
            }
            if (!quiet) this.remoteDisconnectHandler();
            this.readyState = READYSTATE_DISCONNECTED;
        }

    };

    window.constructLANClient = () => new EaglercraftLANClient();
});

window.startLANClient = () => {
    if (typeof window.constructLANClient !== "function") {
        window.initializeLANClient();
    }
    return window.constructLANClient();
};


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% LAN SERVER CODE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

window.initializeLANServer = (() => {

    const PEERSTATE_FAILED = 0;
    const PEERSTATE_SUCCESS = 1;
    const PEERSTATE_LOADING = 2;

    class EaglercraftLANPeer {

        constructor(client, peerId, peerConnection) {
            this.client = client;
            this.peerId = peerId;
            this.peerConnection = peerConnection;
            this.dataChannel = null;

            const self = this;

            const iceCandidates = [];

            this.peerConnection.addEventListener("icecandidate", (evt) => {
                if (evt.candidate) {
                    if (iceCandidates.length == 0) setTimeout(() => {
                        if (self.peerConnection != null && self.peerConnection.connectionState != "disconnected") {
                            self.client.iceCandidateHandler(self.peerId, JSON.stringify(iceCandidates));
                            iceCandidates.length = 0;
                        }
                    }, 3000);
                    iceCandidates.push({
                        sdpMLineIndex: evt.candidate.sdpMLineIndex,
                        candidate: evt.candidate.candidate
                    });
                }
            });

            this.peerConnection.addEventListener("datachannel", async (evt) => {
                while (iceCandidates.length > 0) {
                    await new Promise(resolve => setTimeout(resolve, 0));
                }
                self.dataChannel = evt.channel;
                self.client.remoteClientDataChannelHandler(self.peerId, self.dataChannel);
                self.dataChannel.addEventListener("message", (evt) => {
                    self.client.remoteClientPacketHandler(self.peerId, evt.data);
                }, false);
            }, false);

            this.peerConnection.addEventListener("connectionstatechange", (evt) => {
                if (self.peerConnection.connectionState === 'disconnected') {
                    self.client.signalRemoteDisconnect(self.peerId);
                } else if (self.peerConnection.connectionState === 'connected') {
                    if (self.client.peerState != PEERSTATE_SUCCESS) self.client.peerState = PEERSTATE_SUCCESS;
                } else if (self.peerConnection.connectionState === 'failed') {
                    if (self.client.peerState == PEERSTATE_LOADING) self.client.peerState = PEERSTATE_FAILED;
                    self.client.signalRemoteDisconnect(self.peerId);
                }
            });

        }

        disconnect() {
            if (this.dataChannel != null) {
                this.dataChannel.close();
                this.dataChannel = null;
            }
            this.peerConnection.close();
        }

        setRemoteDescription(descJSON) {
            const self = this;
            try {
                const remoteDesc = JSON.parse(descJSON);
                this.peerConnection.setRemoteDescription(remoteDesc, () => {
                    if (remoteDesc.type == 'offer') {
                        self.peerConnection.createAnswer((desc) => {
                            const selfDesc = desc;
                            self.peerConnection.setLocalDescription(selfDesc, () => {
                                self.client.descriptionHandler(self.peerId, JSON.stringify(selfDesc));
                                if (self.client.peerStateDesc != PEERSTATE_SUCCESS) self.client.peerStateDesc = PEERSTATE_SUCCESS;
                            }, (err) => {
                                console.error("Failed to set local description for \"" + self.peerId + "\"! " + err);
                                if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                                self.client.signalRemoteDisconnect(self.peerId);
                            });
                        }, (err) => {
                            console.error("Failed to create answer for \"" + self.peerId + "\"! " + err);
                            if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                            self.client.signalRemoteDisconnect(self.peerId);
                        });
                    }
                }, (err) => {
                    console.error("Failed to set remote description for \"" + self.peerId + "\"! " + err);
                    if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                    self.client.signalRemoteDisconnect(self.peerId);
                });
            } catch (err) {
                console.error("Failed to parse remote description for \"" + self.peerId + "\"! " + err);
                if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
                self.client.signalRemoteDisconnect(self.peerId);
            }
        }

        addICECandidate(candidates) {
            try {
                const candidateList = JSON.parse(candidates);
                for (let candidate of candidateList) {
                    this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
                }
                if (this.client.peerStateIce != PEERSTATE_SUCCESS) this.client.peerStateIce = PEERSTATE_SUCCESS;
            } catch (err) {
                console.error("Failed to parse ice candidate for \"" + this.peerId + "\"! " + err);
                if (this.client.peerStateIce == PEERSTATE_LOADING) this.client.peerStateIce = PEERSTATE_FAILED;
                this.client.signalRemoteDisconnect(this.peerId);
            }
        }

    }

    class EaglercraftLANServer {

        constructor() {
            this.ICEServers = [];
            this.hasInit = false;
            this.peerList = new Map();
            this.peerState = PEERSTATE_LOADING;
            this.peerStateConnect = PEERSTATE_LOADING;
            this.peerStateInitial = PEERSTATE_LOADING;
            this.peerStateDesc = PEERSTATE_LOADING;
            this.peerStateIce = PEERSTATE_LOADING;
            this.iceCandidateHandler = null;
            this.descriptionHandler = null;
            this.remoteClientDataChannelHandler = null;
            this.remoteClientDisconnectHandler = null;
            this.remoteClientPacketHandler = null;
        }

        LANServerSupported() {
            return typeof window.RTCPeerConnection !== "undefined";
        }

        initializeServer() {
            // nothing to do!
        }

        setICEServers(urls) {
            this.ICEServers.length = 0;
            for (var i = 0; i < urls.length; ++i) {
                var etr = urls[i].split(";");
                if (etr.length == 1) {
                    this.ICEServers.push({urls: etr[0]});
                } else if (etr.length == 3) {
                    this.ICEServers.push({urls: etr[0], username: etr[1], credential: etr[2]});
                }
            }
        }

        setICECandidateHandler(cb) {
            this.iceCandidateHandler = cb;
        }

        setDescriptionHandler(cb) {
            this.descriptionHandler = cb;
        }

        setRemoteClientDataChannelHandler(cb) {
            this.remoteClientDataChannelHandler = cb;
        }

        setRemoteClientDisconnectHandler(cb) {
            this.remoteClientDisconnectHandler = cb;
        }

        setRemoteClientPacketHandler(cb) {
            this.remoteClientPacketHandler = cb;
        }

        sendPacketToRemoteClient(peerId, buffer) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                if (thePeer.dataChannel != null && thePeer.dataChannel.readyState == "open") {
                    thePeer.dataChannel.send(buffer);
                } else {
                    this.signalRemoteDisconnect(peerId);
                }
            }
        }

        resetPeerStates() {
            this.peerState = this.peerStateConnect = this.peerStateInitial = this.peerStateDesc = this.peerStateIce = PEERSTATE_LOADING;
        }

        getPeerState() {
            return this.peerState;
        }

        getPeerStateConnect() {
            return this.peerStateConnect;
        }

        getPeerStateInitial() {
            return this.peerStateInitial;
        }

        getPeerStateDesc() {
            return this.peerStateDesc;
        }

        getPeerStateIce() {
            return this.peerStateIce;
        }

        signalRemoteConnect(peerId) {
            try {
                const peerConnection = new RTCPeerConnection({
                    iceServers: this.ICEServers,
                    optional: [{DtlsSrtpKeyAgreement: true}]
                });
                const peerInstance = new EaglercraftLANPeer(this, peerId, peerConnection);
                this.peerList.set(peerId, peerInstance);
                if (this.peerStateConnect != PEERSTATE_SUCCESS) this.peerStateConnect = PEERSTATE_SUCCESS;
            } catch (e) {
                if (this.peerStateConnect == PEERSTATE_LOADING) this.peerStateConnect = PEERSTATE_FAILED;
            }
        }

        signalRemoteDescription(peerId, descJSON) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                thePeer.setRemoteDescription(descJSON);
            }
        }

        signalRemoteICECandidate(peerId, candidate) {
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                thePeer.addICECandidate(candidate);
            }
        }

        signalRemoteDisconnect(peerId) {
            if (peerId.length == 0) {
                for (const thePeer of this.peerList.values()) {
                    if ((typeof thePeer !== "undefined") && thePeer !== null) {
                        this.peerList.delete(peerId);
                        try {
                            thePeer.disconnect();
                        } catch (e) {
                        }
                        this.remoteClientDisconnectHandler(peerId);
                    }
                }
                this.peerList.clear();
                return;
            }
            var thePeer = this.peerList.get(peerId);
            if ((typeof thePeer !== "undefined") && thePeer !== null) {
                this.peerList.delete(peerId);
                try {
                    thePeer.disconnect();
                } catch (e) {
                }
                this.remoteClientDisconnectHandler(peerId);
            }
        }

        countPeers() {
            return this.peerList.size;
        }

    };

    window.constructLANServer = () => new EaglercraftLANServer();
});

window.startLANServer = () => {
    if (typeof window.constructLANServer !== "function") {
        window.initializeLANServer();
    }
    return window.constructLANServer();
};
