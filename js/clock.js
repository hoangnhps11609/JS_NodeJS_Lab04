

function displayTime(){
    const now = new Date();

    const timeString = ` ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    document.writeln('<h1>' + timeString+ '</h1>')
    setTimeout(refresh, 1000);

}

function refresh(){
    location.reload();
}

displayTime();