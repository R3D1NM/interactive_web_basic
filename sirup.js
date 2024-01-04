let x = 0;
let tragetX = 0;
const speed = 0.1
const contentAll = document.querySelectorAll('.contWrap img')

const shadow = contentAll[0]
const date = contentAll[1]
const human = contentAll[2]
const textImg = contentAll[3]

// console.log(contentAll);

window.addEventListener("mousemove",(e)=>{
    x = e.pageX - window.innerWidth / 2
    // y = e.pageY - window.innerHeight / 2

    // console.log(x,y);
    mouseMoveFunc()
})


const mouseMoveFunc= () =>{
    shadow.style.transform = `translateX(${tragetX/35}px)`
    date.style.transform = `translateX(${tragetX/20}px)`
    human.style.transform = `translateX(${-tragetX/20}px)`
    textImg.style.transform = `translateX(${-tragetX/10}px)`
}

const loop = () =>{
    tragetX += (x-tragetX) *speed
    mouseMoveFunc()
    window.requestAnimationFrame(loop)
}

loop()