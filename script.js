function showContent(id, button) {
    document.querySelectorAll('.shumi-content').forEach(el => el.style.display = 'none');

    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.shumi-tab').forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    showContent('shumi-ryouri', document.querySelector('.shumi-tab'));
});