const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=f3cb941409db8e8ba35009671d8615ea&units=imperial'

    request({ url, json: true}, (error, { body}) => {
        if (error) {
            console.log('Unable to connect to weather service!')
        } else if (body.message){
            console.log('Unable to find location')
        } else {
            callback(undefined, 'There are ' + (body.weather[0].description)+ 
            ". It is currently " + (body.main.temp) + ' degrees in ' + (body.name) +
             '.  The temp feels like ' +  (body.main.feels_like) + ' degrees!')
        }
    })
}

module.exports = forecast