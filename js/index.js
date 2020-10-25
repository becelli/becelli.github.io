// ARE YOU READING THIS? YOU'RE REALLY INTERESTED! LOL


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
 