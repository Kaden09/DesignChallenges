const first_point = document.querySelector("#first-point")
const second_point = document.querySelector("#second-point")
const third_point = document.querySelector("#third-point")
const percents = document.querySelector("#percents")
const progressbar = document.querySelector(".progressbar")
const energy = document.querySelector(".energy")
const charging_title = document.querySelector(".charging-title")
const minutes = document.querySelector(".minutes")

first_point.style.opacity = 0
second_point.style.opacity = 0
third_point.style.opacity = 0

function pointsAnimation(){
    [first_point, second_point, third_point].forEach((el, i)=>{
        el.style.opacity=0
        setTimeout(()=>{
            el.style.opacity=1
        }, (i+1)*500)
    })
}

function energyAnimation() {
    energy.style.width = 0
    let progress = 0
    let interval =     setInterval(()=>{
        if(progress===20){
            progressbar.style.overflow = "visible";
            energy.style.boxShadow = "0 0 20px 2px rgba(255,255,255,0.5)"
        }
        if(progress===50){
           clearInterval(interval)
        }else{
            progress++;
            energy.style.width = `${progress}%`
            percents.innerText = progress + "%"
            minutes.innerText = `${Math.floor(progress/5)} min left`;
        }
    }, 40)
    setTimeout(()=>{
        let interval =     setInterval(()=>{
        if(progress===80){
           clearInterval(interval)
        }else{
            progress++;
            energy.style.width = `${progress}%`
            percents.innerText = progress + "%"
            minutes.innerText = `${Math.floor(progress/5)} min left`;
        }
    }, 50)
    }, 2000)
    setTimeout(()=>{
        let interval = setInterval(()=>{
        if(progress===100){
           clearInterval(interval)
           energy.style.animation = "pulse 3s infinite"
           charging_title.style.opacity = 0;
           setTimeout(()=>{
               charging_title.innerText = "Complete"
               charging_title.style.opacity = 1
           }, 400)
        }else{
            progress++;
            energy.style.width = `${progress}%`
            percents.innerText = progress + "%"
            minutes.innerText = `${Math.floor(progress/5)} min left`;
        }
        }, 80)
    }, 3500)
}

energyAnimation()
pointsAnimation();

setInterval(()=>{
    pointsAnimation()
}, 2000)
