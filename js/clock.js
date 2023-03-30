let userName = prompt("Lütfen Adinizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = userName;

function showTime() { 

    let myClock = document.querySelector("#myClock");
    let date = new Date();   
    let days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"]

    myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${days[date.getDay()]}
    `
}

setInterval(showTime,1000); 
