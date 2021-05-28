import React, { Component, Props } from "react";
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';

export default class SearchMovieComponent extends Component <any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
            </Container>
        )
    }
}