// part2

// document.querySelector('button').addEventListener('click',()=>{
//     const a = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     const c = Math.floor(Math.random()*256);
//     document.querySelector('body').style.backgroundColor=`rgb(${a},${b},${c})`
// })


// part3

// document.getElementById('input').addEventListener('change',(e)=>{
//     const ol = document.querySelector('ol')
//     const li = document.createElement('li')
//     li.innerHTML=  e.target.value
//     ol.appendChild(li)
//     e.target.value=""
// })

// part1
document.addEventListener('keydown',(e)=>{
    const box = document.querySelector('.box');
    const step = 5;
    switch(e.code){
        case "ArrowRight":
            box.style.left = (parseInt(box.style.left)|| 0)+step+ 'px';
            break;
        case "ArrowLeft":
            box.style.left = (parseInt(box.style.left)|| 0) - step+ 'px';
            break;
        case "ArrowUp":
            box.style.top = (parseInt(box.style.top)|| 0)-step+ 'px';
            break;
        case "ArrowDown":
            box.style.top = (parseInt(box.style.top)|| 0)+step+ 'px';
            break;
    }
})