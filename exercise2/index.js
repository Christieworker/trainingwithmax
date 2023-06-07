
function thermos(temperature, isSunny, isHome) {
    isSunny = true;
    isHome = true;

    if (temperature < 20 && isSunny){
        return "ON";
    } else  if (temperature > 20 || !isSunny){
        return "OFF";
    } else if (temperature < 20 && !isSunny && isHome){
        return "ON"
    }

}