import React, { Component, Props } from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import LoginComponent from '../components/LoginComponent';

export default class TabOneScreen extends Component <any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            checkbox1: true,
            styles: {
                container: {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                title: {
                  fontSize: 20,
                  fontWeight: 'bold'
                },
                separator: {
                  marginVertical: 30,
                  height: 1,
                  width: '80%'
                },
            }
        }
    }

    toggleSwitch1() {
        this.setState({
          checkbox1: !this.state.checkbox1
        });
    }

    render() {
        return (
          <View style={this.state.styles.container}>
            <Text style={this.state.styles.title}>Tab One</Text>
            <View style={this.state.styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
          </View>
        )
    }
}
