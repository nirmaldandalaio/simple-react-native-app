import React, { Component, Props } from "react";
import {CheckBox, Button, Text, Container} from 'native-base';

export default class LoginComponent extends Component <any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            checkbox1: true
        }
    }

    toggleSwitch1() {
        this.setState({
          checkbox1: !this.state.checkbox1
        });
    }

    render() {
        return (
            <Container>
                <CheckBox
                    checked={this.state.checkbox1}
                    onPress={() => this.toggleSwitch1()}
                />
            </Container>
        )
    }
}