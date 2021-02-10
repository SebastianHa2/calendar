const date = new Date()

const renderCalendar = function(){

    const monthDays = document.querySelector(".days")


    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)


    const lastDayIndex = lastDay.getDay()

    date.setDate(1)

    const firstDayIndex = date.getDay()


    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()



    switch (date.getMonth()){
        case 0:
            month = "January"
            break
        case 1:
            month = "February"
            break
        case 2:
            month = "March"
            break
        case 3:
            month = "April"
            break
        case 4:
            month = "May"
            break
        case 5:
            month = "June"
            break
        case 6:
            month = "July"
            break
        case 7:
            month = "August"
            break
        case 8:
            month = "September"
            break
        case 9:
            month = "October"
            break
        case 10:
            month = "November"
            break
        case 11:
            month = "December"
            break
        
    }

    document.querySelector("h1").textContent = month

    document.querySelector("p").textContent = date.toDateString()

    let days = ''

    for (let x = firstDayIndex; x > 0; x-- ){
        days += `<div class="prev-days">${prevLastDay + 1 - x}</div>`
    }

    for (let i = 1; i <= lastDay.getDate(); i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){
            days += `<div class="today">${i}</div>`
        }
        else{
            days += `<div>${i}</div>`
        }
    
    }

    for(let y = 1; y <= 6 - lastDayIndex; y++ ){
        days += `<div class="prev-days">${y}</div>`
    }


    monthDays.innerHTML = days
}

// Arrow functions


const left = document.querySelector(".prev")
const right = document.querySelector(".next")

left.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

right.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})


renderCalendar()

