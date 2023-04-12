import React,{Component} from 'react';
import {Text,View,Alert} from 'react-native'
import axios from'axios'
export default class MeteorsScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
            meteors: {}
        }
    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=prVo09w0niUdKiCGbHI6Hrxit8rEzIhn7nhSB03e")
            .then(response => {
                this.setState(
                    {
                        meteors: response.data.near_earth_objects
                    }
                )
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render(){

        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        }

        else{

            let meteorArray=Object.keys(this.state.meteors)
            .map(meteor_date=>{
                return this.state.meteors[meteor_date]
            })
            let meteors=[].concat.apply([],meteorArray)
            meteors.forEach(function (element)
            {
                let diameter=(element.estimated_diameter.kilometers.estimated_diameter_min+element.estimated_diameter.kilometers.estimated_diameter_max)/2
            let threadScore=(diameter/element.close_approach_data[0].miss_distance.kilometers)*10000000000
            })

        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text>
                    Meteors Screen
                </Text>
            </View>
        )
    }
}
}

