alert("JS is ok");


function showContent(id, button) {
    document.querySelectorAll('.Hobbies-content').forEach(el => el.style.display = 'none');

    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.Hobbies-tab').forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

function drinkInvite() {
    const box = document.createElement("div");

    box.innerHTML = `
        <div id="drinkBox" style="
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.45);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:99999;
        ">
            <div style="
                width:75%;
                max-width:320px;
                background:white;
                padding:25px 20px;
                border-radius:18px;
                text-align:center;
                box-shadow:0 10px 40px rgba(0,0,0,.3);
                font-family:sans-serif;
            ">
                <h2>🍻 酒局邀请</h2>
                <p>今晚一起喝一杯？</p>

                <div style="display:flex;gap:15px;justify-content:center;">
                    <button id="yesBtn" style="
                        padding:12px 25px;
                        border:0;
                        border-radius:10px;
                        background:#07c160;
                        color:white;
                        font-size:16px;
                    ">Yes</button>

                    <button id="noBtn" style="
                        padding:12px 25px;
                        border:0;
                        border-radius:10px;
                        background:#eee;
                        color:#333;
                        font-size:16px;
                    ">No</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(box);

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.addEventListener("click", function (e) {
        e.preventDefault();

        noBtn.style.position = "fixed";

        const maxX = window.innerWidth - noBtn.offsetWidth - 10;
        const maxY = window.innerHeight - noBtn.offsetHeight - 10;

        noBtn.style.left = Math.max(10, Math.random() * maxX) + "px";
        noBtn.style.top = Math.max(10, Math.random() * maxY) + "px";
    });

    yesBtn.addEventListener("click", function () {
        alert("🍻 好！今晚不见不散！");
        box.remove();
    });
}

drinkInvite();

document.addEventListener("DOMContentLoaded", function () {
    showContent('Hobbies-cook', document.querySelector('.Hobbies-tab'));
});
