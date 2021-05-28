import React, { Component, Props } from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class TabThreeScreen extends Component <any, any>{
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

    render() {
        return (
          <View style={this.state.styles.container}>
            <Text style={this.state.styles.title}>Tab Three</Text>
            <View style={this.state.styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
          </View>
        )
    }
}
