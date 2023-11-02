

const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")




setInterval(showTime, 1000)

function showTime() {
    
    let date = new Date()
    formatTime()
    
    function formatTime() {
        let seconds = date.getSeconds()
        let min = date.getMinutes()
        let hours = date.getHours()
        let days = date.getDay()
        
        let formatMin = min >= 10 ? min : "0"+min
        let formathours = hours >= 10 ? hours : "0"+hours
        let formatseconds = seconds >= 10 ? seconds : "0"+seconds
        let formatdays = days >= 10 ? days : "0"+days
        
        box1.textContent = formatdays
        box1.style.color = "yellow"
        box2.textContent = formatdays
        box3.textContent = formathours
        box4.textContent = formathours
        box5.textContent = formatMin
        box6.textContent = formatMin
        box7.textContent = formatseconds
        box8.textContent = formatseconds
       
       
    }
}





















