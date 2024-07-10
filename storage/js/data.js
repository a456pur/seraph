function exportData() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageData[key] = localStorage.getItem(key);
    }

    const data = {
        cookies: cookies,
        localStorage: localStorageData
    };
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const link = document.createElement('a');
    const currentDate = new Date().toISOString().slice(0, 10);
    link.href = URL.createObjectURL(blob);
    link.download = `seraphdata-${currentDate}.save`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.save';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = JSON.parse(e.target.result);

                Object.keys(data.cookies).forEach(name => {
                    document.cookie = `${name}=${data.cookies[name]}; path=/`;
                });
                Object.keys(data.localStorage).forEach(key => {
                    localStorage.setItem(key, data.localStorage[key]);
                });
                
                window.location.reload();
            };
            reader.readAsText(file);
        } else {
        }
    };

    input.click();
}

function clearData() {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
        localStorage.clear();
        document.cookie.split(";").forEach(cookie => {
            const [name] = cookie.split("=");
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        });
        window.location.reload();
    }
}
