import '../../css/home/home.css'
import TopMenu from '../common/topMenu'
import FeaturesMenu from './featuresMenu'
import React, { Component } from 'react';

export default class Home extends Component {

    state = {
        isDrawerOpen: false
    }

    // Open or close the drawer
    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ isDrawerOpen: open })
    }

    render() {
        return (
            <div id="home-div">
                <TopMenu mainState={this.state} toggleDrawer={this.toggleDrawer} />
                <FeaturesMenu />
            </div>
        )
    }
}