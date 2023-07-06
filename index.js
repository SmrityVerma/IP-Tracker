const lookupBtn=document.querySelector(".lookup-btn");
const ipDisplay=document.querySelector(".ip-display");
const cityDisplay=document.querySelector(".city-display");
const stateDisplay=document.querySelector(".state-display");
const postalDisplay=document.querySelector(".postal-display");
const currencyDisplay=document.querySelector(".currency-display");
const coordinateDisplay=document.querySelector(".coordinate-display");
const connectionDisplay=document.querySelector(".connection-display");
const callingCodeDisplay=document.querySelector(".callingCode-display");
const loader=document.querySelector(".loader-container");     // containing 3 loading bars for transition
const details=document.querySelector(".details");      //Taking this because we wants to hide all the details inside details class as we click on button, 
                                                      
lookupBtn.addEventListener("click",()=>{

    loader.style.display="flex";  //for design    // as we click on button, loading animation works
    details.style.display="none";  //for design   // and display become invisible

    fetch(`https://ipapi.co/json/`)  // use inside `` backtick mark
    .then((Response)=>Response.json())  

    .then( (data) =>{                 //data have response.json, means whole data
 
        loader.style.display="none";  //for design    // after we get data, loding animation hides
        details.style.display="block"; //for design   // and we again can see data

        cityDisplay.textContent=`City : ${data.city}`
        stateDisplay.textContent=`State : ${data.region}`
        postalDisplay.textContent=`Postal : ${data.postal}`
        currencyDisplay.textContent=`Currency : ${data.currency_name}`
        coordinateDisplay.textContent=`Coordinates : ${data.latitude},${data.longitude}`
        connectionDisplay.textContent=`Connection : ${data.org}`
        callingCodeDisplay.textContent=`Calling Code : ${data.country_calling_code}`
        //ipDisplay.textContent=`IP : ${data.ip}`
    })
     
})

