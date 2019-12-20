import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SubmitButton extends Component {

    // Return a pm-text="" tag with the relevant attribute value
    buildAutoPopulatedPmLink = () => {
        let snippet = "";
        if (this.props.mainState.tagContent.autoPopulateText === "Landing page") {
            snippet += " pm-link-default-url=\"global_companyurl"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Privacy policy") {
            snippet += " pm-link-default-url=\"privacy_policy"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Company email") {
            snippet += " pm-link-default-email=\"global_companyemail"
        }
        snippet += "\""
        return snippet;
    }

    // Return a pm-text="" with the user-added attribute
    buildPmLink = () => {
        let snippet = " pm-link=\"";
        if (this.props.mainState.tagContent.autoPopulateText === "Privacy policy") {
            snippet += "privacy_policy"
        } else {
            snippet += this.props.mainState.tagContent.pmLink;
            snippet += "\""
        }
        console.log(this.props.mainState.tagContent.pmLink)
        return snippet;
    }

    buildLengthAttribute = () => {
        return (
            " max-length=\"" +
            this.props.mainState.tagContent.maxLength +
            "\""
        )
    }

    // Build the opening tag and its relevant attributes
    buildOpeningTag = () => {
        let snippet = "<a";
        // If the pm-text is set to Auto Populate
        if (this.props.mainState.tagContent.autoPopulateText) {
            snippet += this.buildAutoPopulatedPmLink();
        }
        // If the pm-text is NOT set to Auto Populate
        if (!this.props.mainState.tagContent.autoPopulateText && this.props.mainState.tagContent.pmLink) {
            snippet += this.buildPmLink();
        }
        // Add the editable attribute (if applicable)
        if (this.props.mainState.isTextEditable) {
            snippet += " text-editable=\"true\"";
            snippet += this.buildLengthAttribute();
        }
        // Add the link-editable attribute (if applicable)
        if (this.props.mainState.isLinkEditable) {
            snippet += " link-editable=\"true\"";
        }

        // Add the optional attribute (if applicable)
        if (this.props.mainState.isOptional) {
            snippet += " optional=\"true\"";
        }
        snippet += ">"
        return snippet;
    }

    // Build the final tag
    buildFinalTag = () => {
        let tag = this.buildOpeningTag();

        // Text content
        if (this.props.mainState.tagContent.customText !== null) {
            tag += this.props.mainState.tagContent.customText;
        }
        // Closing tag
        tag += "</a>";
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