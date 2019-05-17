let url_to_fetch = "http://localhost:5000"
let dateLocal = new Date(Date.now())
let dateServer = new Date();


function getTimeServer(){
    let tmp_url = url_to_fetch + "/time"
    fetch(tmp_url).then((resp) => resp.json()).then(function(data) {
        if (data.year) {
            dateServer.setYear(data.year)
            dateServer.setMonth(data.month)
            dateServer.setDate(data.day)
            dateServer.setHours(data.hour)
            dateServer.setMinutes(data.min)
            dateServer.setSeconds(data.sec)
            console.log("server " + dateServer.toString())
            console.log("local " + dateLocal.toString())
        } else{
            console.log("failed")
        }
    })
}


function updateDates(){
    dateServer.setSeconds(dateServer.getSeconds() + 1);
    dateLocal.setSeconds(dateLocal.getSeconds() + 1);
    document.getElementById("clock_local").innerHTML = dateLocal.toString()
    document.getElementById("clock_server").innerHTML = dateServer.toString()
}


setInterval(updateDates, 1000);

setInterval(getTimeServer, 1000*60*60); //updates remote clock every hour