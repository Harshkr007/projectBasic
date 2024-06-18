// //target Element
// const body = document.querySelector('.body');
// const watch = document.querySelector('.para');
// const startStop = document.querySelector('.start-stop');
// const reset = document.querySelector('.reset');

// //values
// let centiSecond = 0;
// let second = 0;
// let minute = 0;

// let key = undefined;

// body.addEventListener('click', (e) => {
//     if (e.target.className == 'str') {
//         if (key == undefined) {
//             startStop.innerHTML = `<img class="str" src=".\pngfile\pause.png" alt="start">`
//             key = setInterval(function () {
//                 if (centiSecond != 99) {
//                     centiSecond++;
//                 } else {
//                     centiSecond = 0;
//                     if (second != 59) second++;
//                     else {
//                         second = 0;
//                         minute++;
//                     }
//                 }
//                 watch.innerHTML = `${minute} : ${second} : ${centiSecond}`;
//             }, 10);
//         }
//         else{
//             clearInterval(key);
//             key = undefined;
//         }
//     }
//     if (e.target.className == 're') {
//         location.reload(true);
//     }

// })

const body = document.querySelector('.body');
const watch = document.querySelector('.para');
const startStop = document.querySelector('.start-stop');
const reset = document.querySelector('.reset');

//values
let centiSecond = 0;
let second = 0;
let minute = 0;

let key = undefined;
let swt = false;

body.addEventListener('click', (e) => {
    if (e.target.className == 'str') {
        if (key == undefined) {
            startStop.innerHTML = `<img class="str" src="./pngfile/pause.png" alt="start">`
            key = setInterval(function () {
                if (centiSecond != 99) {
                    centiSecond++;
                } else {
                    centiSecond = 0;
                    if (second != 59) second++;
                    else {
                        second = 0;
                        minute++;
                    }
                }
                watch.innerHTML = `${minute} : ${second} : ${centiSecond}`;
            }, 10);
        }
        else {
            startStop.innerHTML = `<img class="str" src="./pngfile/play.png" alt="start">`
            clearInterval(key);
            key = undefined;
        }
    }
    if (e.target.className == 're') {
        location.reload(true);
    }
})

