import '../../css/home/home.css'
import FeaturesMenu from './featuresMenu'
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="home-div">
                <p>This is the homepage - to be added</p>
                <FeaturesMenu />
            </div>
        )
    }
}