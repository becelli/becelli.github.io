// ARE YOU READING THIS? YOU'RE REALLY INTERESTED! LOL
const width = window.innerWidth
const height = window.innerHeight
const numberOfCards = 3



// function resizeCards(){
//     if(width < 540){
//         for(let i = 0; i < numberOfCards; i++){
//             const resizeHeight = document.querySelectorAll(".my-card")[i]
//             resizeHeight.style.height = "500px"
//             resizeHeight.style.border = "0.5px solid whitesmoke"
//         }
//     }
//     else {
//         const headerHeight = document.getElementById("header").offsetHeight
//         const footerHeight = document.querySelector(".footer").offsetHeight
//         alert(headerHeight + " and " + footerHeight)
//         const
//     }
// }
function resizeCards(){
    var newWidth, mobile = 0;
    if(width < 540){
        newWidth = 500;
        mobile = 1;
    } else if(width > 992){
        const headerHeight = document.getElementById("header").offsetHeight
        const footerHeight = document.querySelector(".footer").offsetHeight
        newWidth = height - (headerHeight + footerHeight)
    }
    for(let i = 0; i < numberOfCards; i++){
        const resizeHeight = document.querySelectorAll(".my-card")[i]
        resizeHeight.style.height = newWidth + "px"
        if(mobile){
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
    text.classList.remove("index-show")
}
