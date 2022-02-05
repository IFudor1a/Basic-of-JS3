function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor(seconds/60) - hours*60;
    seconds = seconds%60
    pad = (el) =>{
        return el<10?'0'+el:el;
    }
    return pad(hours)+':'+pad(minutes)+':'+pad(seconds);

}