

const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")


let date = new Date("10 november 2023")


setInterval(showTime, 1000)

function showTime() {
    
    let currentDate = new Date()
    let milliSec = date.getTime() - currentDate.getTime()

    days(milliSec)
    hours(milliSec)
    min(milliSec)
    sec(milliSec)


    function days(milliSec) {

        let currentDay = Math.floor((milliSec/(1000*60*60*24)))
        let formatdays = currentDay >= 10 ? currentDay : "0"+ currentDay
        box1.textContent = formatdays
        box2.textContent = formatdays

    }


    function hours(milliSec) {

        let currentHours = Math.floor((milliSec/(1000*60*60)%24))
        let formatHours = currentHours >= 10 ? currentHours : "0"+ currentHours
        box3.textContent = formatHours
        box4.textContent = formatHours

    }


    function min(milliSec) {

        let currentMin = Math.floor((milliSec/(1000*60)%60))
        let formatMin = currentMin >= 10 ? currentMin : "0"+ currentMin
        box5.textContent = formatMin
        box6.textContent = formatMin

    }


    function sec(milliSec) {

        let currentSec = Math.floor((milliSec/(1000)%60))
        let formatSec = currentSec >= 10 ? currentSec : "0"+ currentSec
        box7.textContent = formatSec
        box8.textContent = formatSec

    }
       
}



















