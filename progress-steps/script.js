const progress = document.getElementById('progress');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
            return
        }
        circle.classList.remove('active')
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
        return
    }

    if (currentActive === circles.length) {
        next.disabled = true
        return
    }

    prev.disabled = false
    next.disabled = false
}