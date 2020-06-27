import React from 'react'

const CurrentWeather =(props)=> {
    const {summary,temperature,precipProbability,humidity} = props
    return (
        <div>
             <div className="current-weather">
                    <div className="row">
                        <div className="col s6">
                           <h4>Vancouver</h4>
                           <p>16:00</p>
                           <p>{summary}</p>
                          <i>fantastic icon</i>
                            <p>{temperature}</p>
                        </div>
                        <div className="col s6">
                            <p>Precipitation:{precipProbability}</p>
                            <p>Humidity:{humidity}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CurrentWeather