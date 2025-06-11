const btnGithub = document.querySelector("#github-button");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");

btnGithub.addEventListener('click', () => {
    window.open('https://github.com/facebookresearch/differentiable-robot-model', '_blank');
});


btnLinkedin.addEventListener('click', () => {
    window.open('https://www.instagram.com/robots_event?igsh=b2xid3Y5ZTk1Nmc2', '_blank');
});


btnTwitter.addEventListener('click', () => {
    window.open('https://x.com/TomLikesRobots?s=09', '_blank');
});



btnEmail.addEventListener('click', () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfC7eiiV4H5JSii_Ck5Oc5eGKG_JIr6i-1XH8BT40Unn2pLiw/viewform?usp=header', '_blank');
});


btnWebsite.addEventListener('click', () => {
    window.open('https://bostondynamics.com/', '_blank');
});
