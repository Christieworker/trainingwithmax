
function startThermostat(temperature, isSunny, isHome) {
  
    if (temperature < 20 && isSunny){
        return "ON";
    } else  if (temperature >= 20 || !isSunny){
        return "OFF";
    } else if (temperature < 20 && !isSunny && isHome){
        return "ON";
    } else {
        return "OFF";
    }

}