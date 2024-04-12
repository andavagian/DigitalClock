let data = new Date()

let hour = data.getHours()
let min = data.getMinutes()
let sec = data.getSeconds()

let i = sec * 6
let sec_hand_func = setInterval(() => {
    i = i + 6
    sec_hand.style.transform = `rotate(${i}deg)`
    if(i == 360){
        i = 0
    }
},1000)

let j = min * 6 + sec * 0.1
let min_hand_func = setInterval(() => {
    j = j + 0.1
    min_hand.style.transform = `rotate(${j}deg)`
    if(j == 360){
        j = 0
    }
},1000)

let k = 0
if(hour > 12){
    k = (hour - 12) * 30 + min * 0.5 + (sec * (1/120))
} else {
    k = hour * 30 + min * 0.5 + (sec * (1/120))
}

let hour_hand_func = setInterval(() => {
    k = k + 1/120
    hour_hand.style.transform = `rotate(${k}deg)`
    if(k == 360){
        k = 0
    }
},1000)

let dots = document.querySelectorAll('.dots');

setInterval(() => {
    dots.forEach(dot => {
        if (dot.style.opacity === '1' || dot.style.opacity === '') {
            dot.style.opacity = 0;
        } else if (dot.style.opacity === '0') {
            dot.style.opacity = 1;
        }
    });
}, 500);

setInterval(() => {
    let data = new Date()
    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    if(hour <= 9){
        hour_div.innerHTML = `0${hour}`
    } else {
        hour_div.innerHTML = `${hour}`
    }
    
    if(min <= 9){
        min_div.innerHTML = `0${min}`
    } else {
        min_div.innerHTML = `${min}`
    }

    if(sec <= 9){
        sec_div.innerHTML = `0${sec}`
    } else {
        sec_div.innerHTML = `${sec}`
    }


},1000)