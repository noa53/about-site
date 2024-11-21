document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        loadingScreen.style.display = 'none'; // ローディング画面を隠す
    }
});

// window load イベントを使って、全てのリソースが読み込まれた後にローディング画面を隠す
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        loadingScreen.style.display = 'none'; // ローディング画面を隠す
    }
});
