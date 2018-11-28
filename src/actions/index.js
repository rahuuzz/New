import mConstants from '../constants'

const setWeather = (weatherData) => {
   
    const {main,cod,weather,name} = weatherData;
    
    let data={
        code:cod,
        location:name,
        weather:weather,
        main:main
    }
    return{
        type:'SET_WEATHER_DATA',
        data
    }
        
}

const setForm =(lat,lon) => {
    let input ={
        lat:lat,
        lon:lon
    }

    // console.log(input)
   return {
        type: 'SET_FORM_DATA',
        input
    }
}


const getWeather = (lat, lon) => {
    const {API,API_key} = mConstants
    let urlString = `${API}lat=${lat}&lon=${lon}&appid=${API_key}`
    
    
    return (dispatch) => {
        dispatch(setForm(lat,lon))
        fetch(urlString)
            .then((res)=> res.json())
                .then(data=>{
                    
                    dispatch(setWeather(data))
                })
                    .catch((e)=>{console.log("CATCH :",e)})
    }
}



const myActions = {
    getWeather,
    setForm,
    setWeather
}

export default myActions