const RSVP = document.querySelector("#RSVP-btn");
const submit = document.querySelector("#sumbit-btn")
RSVP.addEventListener("click",  function(){
    window.open("https://forms.fillout.com/t/qEc1xZFDtcus", "_blank");
});

submit.addEventListener("click", function(){
window.location.href="submissions-dev.html";
});