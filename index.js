const button = document.querySelector("button");

const div = document.querySelector("div")





button.addEventListener("click", function () {
    const colors = ["red", "black", "white", "purple", "cyan", "magenta"]
    const randomColor = Math.floor(Math.random() * colors.length)
    console.log(colors.length)
    div.style.backgroundColor = colors[randomColor]
})
