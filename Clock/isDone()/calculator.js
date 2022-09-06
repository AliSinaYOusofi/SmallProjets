

setInterval(function () {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let amPM = (hour => 12) ? 'PM' : 'AM';
    if (hour > 12)
    {
        hour -= 12;
    }

    document.querySelector('h1').textContent = String(hour + ':' + minute + ':' + seconds + '  '+ amPM);
}, 1000)
