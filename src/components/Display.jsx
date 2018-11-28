import React from 'react'

const Display = props => {

    const {code,location,main,weather}=props.data

    let icon= weather[0] ? weather[0].icon : ""
    const imgUrl="http://openweathermap.org/img/w/"+icon+".png"
    
    return (
        <div>
            {
                code === 200 ? 
                    (<div>
                        <ul>
                            <li>Location : {location}</li>
                            <li>Temperature (C): {Math.floor(main.temp -273.15)}</li>
                            <li>Pressure: {main.pressure}</li> 
                            <li>Humidity: {main.humidity}</li>
                            <li><div>
                                    <img src={imgUrl} alt="icon"/>
                                    <span>Description : {weather[0].description}</span>

                                </div></li>  
                        </ul>
                                               
                    </div>) : (<div style={{color:"red"}}> You havn't requested any weather yet. </div>)

            }
        </div>
    )
}
export default Display
