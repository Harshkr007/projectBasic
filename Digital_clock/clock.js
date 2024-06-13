const clock = document.querySelector(`.clock`);

let swt = false;
let interval;
clock.addEventListener('click', (e) => {
    const ele = e.target;
    if (ele.className == 'clockDisplay display') {
        if (!swt) {
            swt = true;
            interval = setInterval(function () {
                let time = new Date();
                ele.innerHTML = `${time.toLocaleTimeString()}`
            }, 1000)
        } else {
            swt = false;
            location.reload();
        }
    }});