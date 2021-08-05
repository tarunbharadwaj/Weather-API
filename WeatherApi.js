function weather(){
    var location = document.getElementById("location").value;
    var url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    // call the api
    fetch(url,{method:'GET'})

    // resolve the data
    .then((response) => response.json())

    // use the data
    .then((data) => {
        var result = data.list[0].temp.day
        document.getElementById("output").innerText = `The weather of ${location} is ${result} °C`
    })
}