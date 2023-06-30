let tempurature;
let wind;

if (tempurature>=50 && wind>3.0){
    let windChill = 35.74 + 0.6215*tempurature - 35.75*wind**0.16 + 0.4275*tempurature*wind**0.16;
    document.getElementById("windSpeed").textContent = windChill;

}else{
    document.getElementById("windSpeed").textContent = "N/A";
}