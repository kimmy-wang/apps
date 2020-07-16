/**
 * 添加暗色主题
 */
function addDarkTheme() {
    const body = document.getElementById("body");
    body.classList.add('dark')
}
/**
 * 移除暗色主题
 */
function removeDarkTheme() {
    const body = document.getElementById("body");
    body.classList.remove('dark')
}
/**
 * 切换主题
 */
const toggleTheme = () => {
    const body = document.getElementById("body");
    if(body.classList.contains('dark')) {
        removeDarkTheme()
    } else {
        addDarkTheme()
    }
};

function load() {
    let media = window.matchMedia('(prefers-color-scheme: dark)');
    const body = document.getElementById("body");
    let callback = (e) => {
        let prefersDarkMode = e.matches;
        if (prefersDarkMode) {
            // 搞事情
            addDarkTheme()
        } else {
            removeDarkTheme()
        }
    };
    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
    } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
    }
}