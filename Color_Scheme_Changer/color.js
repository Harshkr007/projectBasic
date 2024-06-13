

// const outbox = document.querySelector('.main_div');
// console.log(outbox);

// outbox.addEventListener('click', (e) => {
//     const color = e.target;
//     if (color.className == "color") {
//         document.querySelector('.body').style.backgroundColor = color.id; // Assuming id is defined somewhere
//         document.querySelector('.head').style.color = "white";
//     }
// });

// document.querySelector('.body').addEventListener((e) => {
//     if(e.target.className != 'main_body'){
//         location.reload();
//     }
// })

const outbox = document.querySelector('.main_div');
console.log(outbox);

outbox.addEventListener('click', (e) => {
    const color = e.target;
    if (color.className == "color") {
        document.querySelector('.body').style.backgroundColor = color.id; // Assuming id is defined somewhere
        const headder = document.querySelectorAll('.head');
        headder.forEach((value) => {
            value.style.color = `white`;
        })
    }
});

document.querySelector('.body').addEventListener('click', (e) => { 
    console.log(e.target);
    console.log(e.target.className)
    if (e.target.className != 'main_body' && e.target.className != 'color') {
        location.reload();
    }
});

// const outbox = document.querySelector('.main_div');
// console.log(outbox);

// outbox.addEventListener('click', (e) => {
//     const color = e.target;
//     if (color.className == "color") {
//         document.querySelector('.body').style.backgroundColor = color.id; // Assuming id is defined somewhere
//         document.querySelector('.head').style.color = "white";
//     }
// });

// document.querySelector('.body').addEventListener('click', (e) => {
//     if (!outbox.contains(e.target)) {
//         location.reload();
//     }
// });