import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SubmitButton extends Component {

    // Fetch all the relevant information from the mainState and build the final tag
    buildTag = () => {
        // Opening tag
        let tag = "<";
        tag += this.props.mainState.tagContent.enclosingTag;
        console.log(this.props.mainState.tagContent.pmText)

        // If the pm-text is set to Auto Populate
        if (this.props.mainState.tagContent.autoPopulateText !== null || this.props.mainState.tagContent.autoPopulateText !== "None") {
            tag += " pm-text=\"";
            if (this.props.mainState.tagContent.autoPopulateText === "Company Name") {
                tag += "companyname"
            }
            if (this.props.mainState.tagContent.autoPopulateText === "Company Website") {
                tag += "companyurl"
            }
            if (this.props.mainState.tagContent.autoPopulateText === "Company Phone") {
                tag += "companyphone"
            }
            if (this.props.mainState.tagContent.autoPopulateText === "Company Address") {
                tag += "companyaddress"
            }
            if (this.props.mainState.tagContent.autoPopulateText === "Link to LP") {
                tag += "landingpage"
            }
            tag += "\""
        }

        if (this.props.mainState.tagContent.autoPopulateText === null || this.props.mainState.tagContent.autoPopulateText === "None") {
            tag += this.props.mainState.tagContent.pmText;
        }
        tag += " >"
        // Text content
        if (this.props.mainState.tagContent.customText !== null) {
            tag += this.props.mainState.tagContent.customText;
        }
        // Closing tag
        tag += "</" + this.props.mainState.tagContent.enclosingTag + ">";
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