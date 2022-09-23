async function fetchTime() {
    
    let e = document.getElementById("wahters");
    value = e.value;
    let text = e.options[e.selectedIndex].text;
    let response = await fetch(`http://worldtimeapi.org/api/timezone/Asia/${text}`);
    let data = await response.json();
    time1 = data.datetime;
    console.log(data.datetime);
    document.querySelector(".CIty").innerHTML=data.timezone;
    document.querySelector(".timeDay").innerHTML=time1.slice(-32,-22);
    document.querySelector(".timeHour").innerHTML=time1.slice(-21,-13);

}

// -------------------------------

    


const fetchText2 = async() => {
      let response = await fetch("https://api.unsplash.com/photos/?client_id=IFjGofIxgQTG6umPBj6imKs_2HN_KTgfgZr8C3Kxejc");
      let data = await response.json();
      console.log(data);
      data.map((item) => {
          console.log(item.urls.raw);
          let element = document.createElement("img");
          element.src = item.urls.thumb;
          
          
          
            let div = document.querySelector(".groubCard");
            div.appendChild(element);
      });
  
     
  };
  
  fetchText2();
