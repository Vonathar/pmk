// Imports
import React, { Component } from 'react';
import '../../css/home/tagDisplay.css'

class TagDisplay extends Component {

    buildTag = () => {
        let tag = "";
        tag += "\<" + "p" + "\>"
    }

    render() {
        return (
            <div id="div-tagDisplay">
                <p className="tagDisplay-h1">
                    Result
                </p>
                <p className="tagDisplay-result">
                    {this.props.mainState.finalTag}
                </p>
            </div>
        )
    }
}
export default TagDisplay;