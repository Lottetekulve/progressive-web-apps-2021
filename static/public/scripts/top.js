const btn = document.querySelector("button")

btn.addEventListener("click", topFunction)

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

