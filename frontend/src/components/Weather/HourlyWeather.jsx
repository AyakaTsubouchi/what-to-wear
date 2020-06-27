import React,{useState} from 'react'
import moment from 'moment'
import chart from 'chart.js'

const HourlyWeather =(props)=> {
    const [time,setTime] = useState()
    const hourlyWeather = props.hourlyWeather
    const eightHours = []
    
    for(let i=0;i<8;i++){
      eightHours.push(hourlyWeather[i])
     }
   
  const timeConvert = (time)=>{
      const str = moment.unix(time).format()
    return str.slice(11,16)
  }
  const renderList = ()=>{
  return   eightHours.map(item=>
    <li>{timeConvert(item.time)}{item.temperature}</li>
  )
  }
  
 

  const str = "2020-06-01T21:00:00-07:00"
    return (
        <div>
          {renderList()}

          
        </div>
    )
}

export default HourlyWeather