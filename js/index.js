// ARE YOU READING THIS? YOU'RE REALLY INTERESTED! LOL
const width = window.innerWidth
const height = window.innerHeight
// Cards: Projects, Videos and Posts
const numberOfCards = 3

// Resize the width of the cards, based on which device is acessing.
function resizeCards(){
    var newWidth, mobile = 0;

    // For mobile device
    if(width < 540){
        newWidth = 500;
        mobile = 1;

    // For extra-large screen
    } else if(width > 992){
        const headerHeight = document.getElementById("header").offsetHeight
        const footerHeight = document.querySelector(".footer").offsetHeight
        // The height of the cards will be perfectly to AVOID scrollbar
        newWidth = height - (headerHeight + footerHeight)
    }

    // Getting the elements and effectivelly changing height.
    for(let i = 0; i < numberOfCards; i++){
        const resizeHeight = document.querySelectorAll(".my-card")[i]
        resizeHeight.style.height = newWidth + "px"
        if(mobile){
            // Add borders on mobile device. It's just prettier.
            resizeHeight.style.borderBottom = "3px solid whitesmoke"
        }
    }
}

// Functions to apply effects on profile photo.
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
    text.classList.remove("index-show")
}
