async function fech(city) {



    try {

        let a = await fetch('http://api.weatherapi.com/v1/current.json?key=1fdad4d08748409dbbe64954241506&q=' + city + ' &aqi=no')

        let c = await a.json()

        document.querySelector('#location').innerHTML = c.location.name

        document.querySelector('#degree').innerHTML = c.current.temp_c + `&degC`

        document.querySelector('#place').innerHTML = c.location.country

        document.querySelector('#windspeed').innerHTML = c.current.
            wind_kph + "km/h"

        document.querySelector('#humidity ').innerHTML = c.current.
            humidity + "%"

        document.querySelector('#condition').innerHTML = c.current.condition.text

        setInterval(() => {

            document.querySelector('#day').innerHTML = c.location.
            localtime
        }, 1000)


    } catch (error) {
        console.log(error)


    }

}

document.querySelector('button').addEventListener('click',()=>{
   let a =  document.querySelector('input').value
   fech(a)
})