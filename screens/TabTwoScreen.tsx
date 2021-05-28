
import React, { Component, Props } from "react";
import { Container, Spinner, Content } from 'native-base';
import { SafeAreaView, Text } from 'react-native';
import { View } from '../components/Themed';
import SearchMovieComponent from "../components/SearchMovie/SearchMovieComponent";

export default class TabTwoScreen extends Component <any, any>{
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
          <Container style={this.state.styles.container}>
              <SearchMovieComponent />
          </Container>
        )
    }
}
