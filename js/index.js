// ARE YOU READING THIS? YOU'RE REALLY INTERESTED! LOL
const width = window.innerWidth;
const numberOfCards = 3;
function resizeCards(){
    if(width < 540){

        for(let i = 0; i < numberOfCards; i++){
        const resizeHeight = document.querySelectorAll(".my-card")[i]
        resizeHeight.style.height = "500px"
        resizeHeight.style.border = "0.5px solid whitesmoke"
        }
    }
}

function viewOnGithubIn() {
    // add blur and change z-index
    const image = document.getElementById("profile-photo")
    const text = document.getElementById("text-over-image")
    image.classList.add("blurred")
    text.classList.add("index-show");
}
function viewOnGithubOut() {
    // remove blur and change z-index
    const image = document.getElementById("profile-photo")
    const text = document.getElementById("text-over-image")
    image.classList.remove("blurred")
    text.classList.remove("index-show");
}
