// CSS
const css = `
    @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

    :root {
        --accent-color: #bd2015;
        --base-color: #000;
    }

    .hamburg {
        position: absolute;
        width: 40px;
        height: auto;
        padding: .6rem;
        background-color: var(--base-color);
        border-radius: 10px;
        z-index: 80;
        box-shadow: 0 0 12px 1px rgba(189, 32, 21, 0.7);
    }

    .ard-sosmed {
        display: block;
        cursor: pointer;
        position: fixed;
        bottom: 25%;
        left: 10px;
        font-family: "Raleway", sans-serif;
        z-index: 79;
    }

    .ard-sosmed ul {
        margin: 0;
        padding: 0;
    }

    .ard-sosmed ul li {
        position: absolute;
        list-style: none;
        transform: translate(0, 0);
        transition: all .5s ease;
        opacity: 0;
    }

    .ard-sosmed.open ul li:nth-child(1) {
        transform: translateY(-100px);
        transition-delay: .20s;
        opacity: 1;
    }

    .ard-sosmed.open ul li:nth-child(2) {
        transform: translate(52px, -77px);
        transition-delay: .16s;
        opacity: 1;
    }

    .ard-sosmed.open ul li:nth-child(3) {
        transform: translate(105px, -42px);
        transition-delay: .12s;
        opacity: 1;
    }

    .ard-sosmed.open ul li:nth-child(4) {
        transform: translate(125px, 12px);
        transition-delay: .08s;
        opacity: 1;
    }

    .ard-sosmed.open ul li:nth-child(5) {
        transform: translate(99px, 67px);
        transition-delay: .04s;
        opacity: 1;
    }

    .ard-sosmed.open ul li:nth-child(6) {
        transform: translate(45px, 111px);
        transition-delay: 0s;
        opacity: 1;
    }

    .ard-sosmed ul li a img {
        width: 90%;
        height: auto;
    }

    .ard-sosmed ul li a {
        display: flex;
        width: 55px;
        height: 55px;
        border: solid 2px var(--accent-color);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        background-color: #000;
    }

    .bar1, .bar2, .bar3 {
        width: 80%;
        height: 5px;
        background-color: var(--accent-color);
        margin: 6px auto;
        transition: .4s;
        position: relative;
        transform: translateY(-1px);
    }

    .open .bar1 {
        transform: translate(0, 10px) rotate(-225deg);
    }

    .open .bar2 {
        opacity: 0;
        transform: translate(0, -6px) rotate(-225deg);
    }

    .open .bar3 {
        transform: translate(0, -12px) rotate(-315deg);
    }

    .ard-sosmed ul li div {
        position: absolute;
        transition: all .3s ease;
        opacity: 0;
        transform: scale(.1);
        font-family: "Raleway", sans-serif;
        font-size: large;
        background: rgba(0, 0, 0, 1);
        color: var(--accent-color);
        text-align: center;
        white-space: nowrap;
    }

    .ard-sosmed ul li:hover div {
        opacity: 1;
        transform: scale(1);
    }

    .ard-sosmed ul li:nth-child(1) div {
        transform: translateY(-120px);
    }

    .ard-sosmed ul li:nth-child(1):hover div {
        transform: translateY(-95px);
    }

    .ard-sosmed ul li:nth-child(2) div {
        transform: translateY(-150px);
    }

    .ard-sosmed ul li:nth-child(2):hover div {
        transform: translate(30px, -95px);
    }

    .ard-sosmed ul li:nth-child(3) div {
        transform: translateY(-150px);
    }

    .ard-sosmed ul li:nth-child(3):hover div {
        transform: translate(50px, -90px);
    }

    .ard-sosmed ul li:nth-child(4) div {
        transform: translateX(160px);
    }

    .ard-sosmed ul li:nth-child(4):hover div {
        transform: translate(50px, -90px);
    }

    .ard-sosmed ul li:nth-child(5) div {
        transform: translate(110px, 70px);
    }

    .ard-sosmed ul li:nth-child(5):hover div {
        transform: translate(62px, -80px);
    }

    .ard-sosmed ul li:nth-child(6) div {
        transform: translate(55px, 135px);
    }

    .ard-sosmed ul li:nth-child(6):hover div {
        transform: translate(65px, -65px);
    }

    .attention {
        position: relative;
        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 49% 75%, 22% 100%, 22% 75%, 0% 75%);
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 49% 75%, 22% 100%, 22% 75%, 0% 75%);
        width: 80px;
        height: 30px;
        margin-bottom: 5px;
        left: 15px;
        background-color: var(--base-color);
        cursor: default;
        color: var(--accent-color);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        opacity: 0;
    }

    .whore {
        animation: flicker .6s infinite;
    }

    @keyframes flicker {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

    @media screen and (max-width: 600px) {
        .ard-sosmed {
            bottom: 30%;
        }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

// JavaScript
function ardFunction() {
    const ard = document.querySelector('.ard-sosmed');
    const attentionWhore = document.querySelector('.attention.whore');
    ard.classList.toggle("open");
    attentionWhore.classList.remove("whore");
}
