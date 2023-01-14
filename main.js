// Задание -1

// const box = document.querySelector('.box')

// let leftPos = 0;
// let topPos = 0;

// function move() {
//     if(leftPos < 450 && topPos === 0) {
//         leftPos++;
//         box.style.left = `${leftPos}px`;
//         setTimeout(move,1.3)
//     }else if (leftPos >= 450 && topPos < 450 ) {
//         topPos++
//         box.style.top = `${topPos}px`;
//         setTimeout(move,1.3)
//     }else if (leftPos > 0 && topPos >= 450) {
//         leftPos--
//         box.style.left = `${leftPos}px`;
//         setTimeout(move,1.3)
//     }else if (leftPos === 0 && topPos > 0) {
//         topPos--
//         box.style.top = `${topPos}px`;
//         setTimeout(move,1.3)
//     }
// }

// move()

//Задание - 2

const num = document.querySelector('#count')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const restart = document.querySelector('#restart')

const count = () => {
    let inter = setInterval(() => {
        num.innerText++
    },800)

    stop.addEventListener('click', () => {
        clearInterval(inter)
    })
}

start.addEventListener('click', count)

restart.addEventListener('click', () => {
    location.reload()
})


