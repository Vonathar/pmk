import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SubmitButton extends Component {

    // Fetch all the relevant information from the mainState and build the final tag
    buildTag = () => {
        // Opening tag
        let tag = "<";

        tag += this.props.mainState.tagContent.enclosingTag;

        tag += ">"
        // Inner content
        if (this.props.mainState.tagContent.autoPopulateText !== null) {
            tag += this.props.mainState.tagContent.autoPopulateText;
        } else {
            tag += this.props.mainState.tagContent.customText;
        }
        this.props.updateFinalTag(tag);
    }

    render() {
        return (
            <Button onClick={(e) => {
                e.preventDefault();
                this.buildTag();
            }} variant="success" type="submit">
                Generate
            </Button>
        )
    }
}

export default SubmitButton;