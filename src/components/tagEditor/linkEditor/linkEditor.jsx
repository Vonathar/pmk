// Imports
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import AutoPopulateSelect from './autoPopulateSelect';
import TextContentInput from './textContentInput';
import EditableCheckbox from './editableCheckbox';
import PmLinkInput from './pmLinkInput';
import OptionalCheckbox from './optionalCheckbox';
import LinkEditableCheckbox from './linkEditableCheckbox';
import TextEditableCheckbox from './textEditableCheckbox';
import MaxLengthInput from './maxLengthInput';
import SubmitButton from './submitButton';
import '../../../css/tagEditor/linkEditor.css';


class LinkEditor extends Component {

    state = {
        isEditable: false,
        isOptional: false,
        isLinkEditable: false,
        isTextEditable: false,
        tagContent: {
            autoPopulateText: null,
            pmLink: null,
            customText: null,
            maxLength: 0,
        },
    }

    // Toggle whether the pm-tag is editable
    toggleEditable = () => {
        this.setState({ isEditable: !this.state.isEditable })
    }

    // Toggle whether the pm-tag is optional
    toggleOptional = () => {
        this.setState({ isOptional: !this.state.isOptional })
    }

    // Toggle whether the LINK is editable
    toggleLinkEditable = () => {
        this.setState({ isLinkEditable: !this.state.isLinkEditable })
    }

    // Toggle where the TEXT is editable
    toggleTextEditable = () => {
        this.setState({ isTextEditable: !this.state.isTextEditable })
    }

    // Manually change the pm-link from the text input
    setPmLink = (newText) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.pmLink = newText;
        this.setState({ tagContent });
    }

    // Change the auto populated pm-link to the selection of the user
    setAutoPopulateText = (newText) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.autoPopulateText = newText === "None" ? null : newText;
        this.setState({ tagContent });
    }

    // Set the text content of the tag to the user input
    setCustomText = (newText) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.customText = newText;
        this.setState({ tagContent });
    }

    // Set the value of the attribute max-length
    setMaxLengthValue = (newValue) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.maxLength = newValue;
        this.setState({ tagContent });
        console.log(newValue)
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <PmLinkInput setPmLink={this.setPmLink} />
                    <OptionalCheckbox toggleOptional={this.toggleOptional} />
                    <LinkEditableCheckbox toggleLinkEditable={this.toggleLinkEditable} />
                    <TextEditableCheckbox toggleTextEditable={this.toggleTextEditable} />
                    {this.renderMaxLengthInput()}
                </span>
            )
        }
    }

    // Render the max-length editor if the TEXT is editable
    renderMaxLengthInput = () => {
        if (this.state.isTextEditable) {
            return <MaxLengthInput setMaxLengthValue={this.setMaxLengthValue} />
        }
    }

    render() {
        return (
            <div id="div-linkEditor">
                <p className="editor-h1">
                    Link editor
                </p>
                <Form>
                    <AutoPopulateSelect setAutoPopulateText={this.setAutoPopulateText} />
                    <TextContentInput setCustomText={this.setCustomText} />
                    <EditableCheckbox toggleEditable={this.toggleEditable} />
                    {this.renderEditableFields()}
                    <SubmitButton updateFinalTag={this.props.updateFinalTag} mainState={this.state} />
                </Form>
            </div>
        )
    }
}
export default LinkEditor;
