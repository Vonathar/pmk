import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SubmitButton extends Component {

    // Return a pm-image="" tag with the relevant attribute value
    buildAutoPopulatedImage = () => {
        let snippet = " pm-image=\"";
        if (this.props.mainState.tagContent.autoPopulateImage === "Partner logo") {
            snippet += "partner.logo"
        }
        snippet += "\""
        return snippet;
    }


    // Build the opening tag and its relevant attributes
    buildOpeningTag = () => {
        let snippet = "<img";
        // If the pm-text is set to Auto Populate
        if (this.props.mainState.tagContent.autoPopulateImage) {
            snippet += this.buildAutoPopulatedImage();
        }
        // Add the optional attribute (if applicable)
        if (this.props.mainState.isOptional) {
            snippet += " optional=\"true\"";
        }
        // Add the swappable attribute (if applicable)
        if (this.props.mainState.isSwappable) {
            snippet += " swappable=\"true\"";
        }
        // Add the uploadable attribute (if applicable)
        if (this.props.mainState.isUploadable) {
            snippet += " uploadable=\"true\"";
        }
        // Add the uploadable attribute (if applicable)
        if (this.props.mainState.isToggle) {
            snippet += " toggle=\"insert-toggle-name\"";
        }
        return snippet;
    }

    // Build the final tag
    buildFinalTag = () => {
        let tag = this.buildOpeningTag();

        // Closing tag
        tag += " />";
        this.props.updateFinalTag(tag);
    }

    render() {
        return (
            <Button onClick={(e) => {
                e.preventDefault();
                this.buildFinalTag();
            }} variant="contained" color="primary" type="submit">
                Generate
            </Button>
        )
    }
}

export default SubmitButton;