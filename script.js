document.body.addEventListener('click', function() {
    // 为 body 添加 .clicked 类，触发 CSS 动画
    document.body.classList.add('clicked');

    // 延迟跳转到 index.html，确保动画完成
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1200); // 动画时间与 CSS 的 transition 保持一致
});
