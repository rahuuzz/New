import React , { Component } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import myActions from '../actions'
import Display from '../components/Display'
import {connect} from 'react-redux'

class Form extends Component {
    
    constructor(props){
        super(props)
        this.refLat=null
        this.refLon=null
    }


    handleSubmit = e => {
        e.preventDefault()
        const {onSubmit}=this.props
        let latitude = this.refLat.value
        let longitude= this.refLon.value
        onSubmit(latitude,longitude)  
                    
    }

    render()
    {  
        
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <Input
                        name={'latitude'}
                        title={"Latitude"}
                        inpRef={(input)=>this.refLat = input}
                    />

                    <Input 
                        name={'longitude'}
                        title={'Longitude'}
                        inpRef={(input)=> {this.refLon=input}}
                    />

                    <Button 
                        action={this.handleSubmit}
                        title={"Submit"}
                    />

                    {/* <Button 
                        action={''}
                        title={"Clear"}
                    /> */}
                    </form>
                </div>
                <div>
                    <Display 
                        data={this.props.data}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        lati: state.form.lat,
        longi: state.form.lon,
        data: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSubmit : (lat,lon) => {
            dispatch(myActions.getWeather(lat,lon))
        }
         
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
        
// connect uses store.subscribe(listenr)