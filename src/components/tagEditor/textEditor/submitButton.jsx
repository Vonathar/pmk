import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { finalTagUpdated } from '../../../redux/actions/finalTag'
import { connect } from 'react-redux';

class SubmitButton extends Component {

    // Return a pm-text="" tag with the relevant attribute value
    buildAutoPopulatedPmText = () => {
        let snippet = " pm-text=\"";
        if (this.props.mainState.tagContent.autoPopulateText === "Company Name") {
            snippet += "companyname"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Company Website") {
            snippet += "companyurl"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Company Email") {
            snippet += "companyemail"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Company Phone") {
            snippet += "companyphone"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Company Address") {
            snippet += "companyaddress"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Value Proposition") {
            snippet += "valueproposition"
        }
        if (this.props.mainState.tagContent.autoPopulateText === "Link to LP") {
            snippet += "landingpage"
        }
        snippet += "\""
        return snippet;
    }

    // Return a pm-text="" with the user-added attribute
    buildManualPmText = () => {
        let snippet = " pm-text=\"";
        snippet += this.props.mainState.tagContent.pmText;
        snippet += "\""
        return snippet;
    }

    buildLengthAttribute = () => {
        if (this.props.mainState.preferMaxLengthOverDefault) {
            return (
                " max-length=\"" +
                this.props.mainState.tagContent.maxLength +
                "\""
            )
        }
        return (
            " length-default=\"+" +
            this.props.mainState.tagContent.lengthDefault +
            "\""
        )
    }

    // Build the opening tag and its relevant attributes
    buildOpeningTag = () => {
        let snippet = "<";
        snippet += this.props.mainState.tagContent.enclosingTag;
        // If the pm-text is set to Auto Populate
        if (this.props.mainState.tagContent.autoPopulateText) {
            snippet += this.buildAutoPopulatedPmText();
        }
        // If the pm-text is NOT set to Auto Populate
        if (!this.props.mainState.tagContent.autoPopulateText && this.props.mainState.tagContent.pmText) {
            snippet += this.buildManualPmText();
        }
        // Add the editable attribute (if applicable)
        if (this.props.mainState.isEditable) {
            snippet += " editable=\"true\"";
            // Add the rich text attribute (if applicable)
            if (this.props.mainState.hasRichText) {
                snippet += " rich-text=\"true\"";
            }
            snippet += this.buildLengthAttribute();
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
        tag += "</" + this.props.mainState.tagContent.enclosingTag + ">";
        this.props.dispatch(finalTagUpdated(tag));
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

let mapStateToProps = (state) => {
    return {
        finalTag: state.finalTag.finalTag
    }
}

export default connect(mapStateToProps)(SubmitButton);