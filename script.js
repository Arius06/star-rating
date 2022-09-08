const dot = document.querySelectorAll(".dot")
const dotArr = Array.from(dot);

dotArr.forEach((dot, index) => {
    dot.addEventListener('mouseover', (ev) => {
        dotArr.forEach((element, ind) => {
            if (ind <= index && element.className !== "star") return element.classList.add("makegold")
        })
    })
    dot.addEventListener('mouseout', (ev) => {
        dotArr.forEach(item => item.classList.remove("makegold"))
    })

    dot.addEventListener('click', (ev) => {
        dotArr.forEach((element, ind) => {
            if (ind <= index) {
                element.classList.remove("dot", "makegold")
                element.classList.add("star")
            }
        })
    })
    dot.addEventListener('click', (ev) => {
        dotArr.forEach((element, ind) => {
            if (ind >= index + 1 && element.className === "star") {
                element.classList.remove("star", "makegold")
                element.classList.add("dot")
            }
        })
    })
})