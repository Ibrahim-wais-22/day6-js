GetTime();

function GetTime(){
  var Time = new Date()
  var hour = Time.getHours()
  var minute = Time.getMinutes()
  var second = Time.getSeconds()

  if(minute < 10){
    minute = "0" + minute
  }

  if(second < 10){
    second = "0" + second
  }

  var GetCurrentTime = hour + ":" + minute + ":" + second + " ";

  if(hour > 11){
    GetCurrentTime += "p.m."
  }else{
    GetCurrentTime += "a.m."
  }

  document.getElementById("timeHour").innerHTML = GetCurrentTime;
  setTimeout(GetTime,1000)
}
async function fetchText() {
    
    let e = document.getElementById("wahters");
    lvalue = e.value;
    let text = e.options[e.selectedIndex].text;
    let response = await fetch(`http://worldtimeapi.org/api/timezone/Asia/${text}`);
    let data = await response.json();
    time1 = data.datetime;
    // console.log(data.datetime);
    document.querySelector(".CIty").innerHTML=data.timezone
    document.querySelector(".timeDay").innerHTML=time1.slice(-32,-22)
    document.querySelector(".timeHour").innerHTML=time1.slice(-21,-13)
    
}
// -------------------------------
function cards(){
    for (let index = 1; index < 10; index++) {

        console.log(index)
    }
}
cards()
