import React, { Component } from 'react';
import { Text, View, Platform, Alert, StyleSheet, ImageBackground, StatusBar, Image } from 'react-native'
import axios from 'axios'

export default class IssLocationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }
    }

    componentDidMount() {
        this.getIssLocation()
        try{
            setInterval(async()=>{
                this.getIssLocation()
            },5000)
        }
        catch(e){console.log(e)}
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState(
                    {
                        location: response.data
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
        return(
            <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>latitude:{this.state.location.latitude}</Text>
                            <Text style={styles.infoText}>longitude:{this.state.location.longitude}</Text>
                            <Text style={styles.infoText}>altitude(km):{this.state.location.altitude}</Text>
                            <Text style={styles.infoText}>velocity(km/h):{this.state.location.velocity}</Text>
                        </View>
        )
    }
}
}