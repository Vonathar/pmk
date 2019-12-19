// Imports
import React, { Component } from 'react';
import '../../css/tagEditor/tagDisplay.css'

class TagDisplay extends Component {

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