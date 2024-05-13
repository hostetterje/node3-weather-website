const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=adfaf82ab0481ff8b51701558db772f9&query='+encodeURI(address)

    request({ url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to connect to geocode!', undefined)
        } else if (!body || !body.data) {
            callback('No data found!' , undefined)
        } else if (body.data.length === 0){
             console.log('Unable to find location')
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}
module.exports = geocode

