function showContent(id, button) {
    document.querySelectorAll('.Hobbies-content').forEach(el => el.style.display = 'none');

    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.Hobbies-tab').forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    showContent('Hobbies-cook', document.querySelector('.Hobbies-tab'));
});