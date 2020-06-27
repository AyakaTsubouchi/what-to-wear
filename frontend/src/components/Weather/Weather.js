import React from 'react'
import moment from 'moment'
import DUMMY_WEATHER from './dammy_weather.json'
import CurrentWeather from './CurrentWeather'
import WeeklyWeather from './WeeklyWeather'
import HourlyWeather from './HourlyWeather'


class Weather extends React.Component {
    constructor(){
      super() 
        this.state={
            main:"initial",
           maxTemp:0,
           minTemp:0,
           weatherInfo:DUMMY_WEATHER
        }
    }
    
    
    componentDidMount(){
        this.getWeather();
    
    
    }
    

    
  getWeather(){
        const lat = 37.8267;
        const lon = -122.4233;
       //const api_url =`http://localhost:5000/weather/`
    //    const api_url =DUMMY_WEATHER
    //   fetch(api_url)
    //   .then(response =>response.json())
    // .then(data=>{
    //     console.log(data)
    //    this.setState({
        // main:data.currently.summary,
        // maxTemp:data.currently.temperature,
    //     weatherInfo:data
       
    //    })
       
  //  })
     //console.log(res)
     
     console.log(DUMMY_WEATHER)
     
     
    }
       
        render(){
            const date = moment(1591063200).calendar();
            console.log(date)
            console.log(this.state.weatherInfo)
            const {summary,temperature,precipProbability,humidity} = this.state.weatherInfo.currently
            return (
                <>
                <div>{moment(1591063200).format()}</div>
                <div>{moment.unix(1591063200).format()}</div>
               <CurrentWeather currentWeather={this.state.weatherInfo.currently}/>
               <HourlyWeather hourlyWeather={this.state.weatherInfo.hourly.data}/>
               <WeeklyWeather currentWeather={this.state.weatherInfo.currently}/>
               
               
               
                
                </>
            )
        }
    
}
export default Weather
