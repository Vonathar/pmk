import '../../css/home/featuresMenu.css'
import FeatureBubble from './featureBubble'
import React, { Component } from 'react';

export default class FeaturesMenu extends Component {
    render() {
        return (
            <div id="featuresMenu-div">
                <FeatureBubble title="PM Tag Editor" desc="Dynamically generate pm-ready tags for use in any project. Available for text, images and links." linkPath="/editor" />
            </div>
        )
    }
}