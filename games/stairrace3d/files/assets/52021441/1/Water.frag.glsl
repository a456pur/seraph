// These uniforms are all injected automatically by PlayCanvas
uniform sampler2D uDepthMap;
uniform vec4 uScreenSize;
uniform mat4 matrix_view;

uniform vec4 camera_params; // 1 / camera_far,      camera_far,     (1 - f / n) / 2,        (1 + f / n) / 2
uniform sampler2D uSurfaceTexture;
uniform float uSurfaceScale;
uniform float uTime;
uniform bool isMask;

varying vec2 vUv0;
varying vec3 WorldPosition;

#ifdef GL2
    float linearizeDepth(float z) {
        z = z * 2.0 - 1.0;
        return 1.0 / (camera_params.z * z + camera_params.w);
    }
#else
    #ifndef UNPACKFLOAT
    #define UNPACKFLOAT
    float unpackFloat(vec4 rgbaDepth) {
        const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);
        return dot(rgbaDepth, bitShift);
    }
    #endif
#endif

float getLinearScreenDepth(vec2 uv) {
    #ifdef GL2
        return linearizeDepth(texture2D(uDepthMap, uv).r) * camera_params.y;
    #else
        return unpackFloat(texture2D(uDepthMap, uv)) * camera_params.y;
    #endif
}

float getLinearDepth(vec3 pos) {
    return -(matrix_view * vec4(pos, 1.0)).z;
}

float getLinearScreenDepth() {
    vec2 uv = gl_FragCoord.xy * uScreenSize.zw;
    return getLinearScreenDepth(uv);
}

void main(void)
{
    vec4 color = vec4(0.9, 0.9, 0.9, 0.75);
    
    vec2 pos = vUv0 * 1.85;      
    pos.y += uTime * 0.002;
    pos.x += uTime * 0.001;
    
    /* sinusoidal movement */ 
    //pos.y += sin(uTime * 0.3) * 0.2;
    
    vec2 scaleVector = vec2(uSurfaceScale, uSurfaceScale);
    
    vec4 WaterLines = texture2D(uSurfaceTexture, pos * scaleVector);
    color.rgba *= WaterLines.rgba;
    
    float worldDepth = getLinearDepth(WorldPosition);
    float screenDepth = getLinearScreenDepth();
    float foamLine = clamp((screenDepth - worldDepth), 0.0, 1.0);
            
    gl_FragColor = color;
}