// Imports
import '../../../css/home/textEditor.css'
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import AutoPopulateSelect from './autoPopulateSelect';
import EnclosingTagSelect from './enclosingTagSelect';
import TextContentInput from './textContentInput';
import EditableCheckbox from './editableCheckbox';
import MaxLengthInput from './maxLengthInput';
import LengthDefaultInput from './lengthDefaultInput';
import PmTextInput from './pmTextInput';
import PreferMaxLengthCheckbox from './preferMaxLengthCheckbox';
import OptionalCheckbox from './optionalCheckbox';
import RichTextCheckbox from './richTextCheckbox';
import SubmitButton from './submitButton';

class TextEditor extends Component {
    state = {
        isEditable: true,
        isOptional: false,
        hasRichText: false,
        preferMaxLengthOverDefault: false,
        tagContent: {
            enclosingTag: "div",
            autoPopulateText: null,
            pmText: null,
            customText: null,
            maxLength: 0,
            lengthDefault: 0,
        },
    }

    // Toggle whether the user can insert 'max-length' or 'length-default'
    toggleMaxLength = () => {
        this.setState({ preferMaxLengthOverDefault: !this.state.preferMaxLengthOverDefault })
    }

    // Toggle whether the pm-tag is editable
    toggleEditable = () => {
        this.setState({ isEditable: !this.state.isEditable })
    }

    // Toggle whether the pm-tag is optional
    toggleOptional = () => {
        this.setState({ isOptional: !this.state.isOptional })
    }

    // Toggle whether the pm-tag has rich text
    toggleRichText = () => {
        this.setState({ hasRichText: !this.state.hasRichText })
    }

    // Change the element which encloses the text [p/div/span]
    setEnclosingTag = (newTag) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.enclosingTag = newTag;
        this.setState({ tagContent });
    }

    // Manually change the pm-text from the text input
    setPmText = (newText) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.pmText = newText;
        this.setState({ tagContent });
    }

    // Change the auto populated pm-text to the selection of the user
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

    // Set the value of the attribute length-default
    setLengthDefaultValue = (newValue) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.lengthDefault = newValue;
        this.setState({ tagContent });
        console.log(newValue)
    }

    // Render the max-length or the length-default based on the boolean preferMaxLengthOverDefault
    renderTextLengthFields = () => {
        if (this.state.preferMaxLengthOverDefault) {
            return <MaxLengthInput setMaxLengthValue={this.setMaxLengthValue} />
        }
        else {
            return <LengthDefaultInput setLengthDefaultValue={this.setLengthDefaultValue} />
        }
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <PmTextInput setPmText={this.setPmText} />
                    <PreferMaxLengthCheckbox toggleMaxLength={this.toggleMaxLength} />
                    {this.renderTextLengthFields()}
                    <OptionalCheckbox toggleOptional={this.toggleOptional} />
                    <RichTextCheckbox toggleRichText={this.toggleRichText} />
                </span>
            )
        }
    }



    render() {
        return (
            <div id="div-textEditor" >
                <p className="editor-h1">
                    Text editor
                </p>
                <Form>
                    <AutoPopulateSelect setAutoPopulateText={this.setAutoPopulateText} />
                    <EnclosingTagSelect setEnclosingTag={this.setEnclosingTag} />
                    <TextContentInput setCustomText={this.setCustomText} />
                    <EditableCheckbox toggleEditable={this.toggleEditable} />
                    {this.renderEditableFields()}
                    <SubmitButton mainState={this.state} updateFinalTag={this.props.updateFinalTag} />
                </Form>
            </div>
        )
    }
}
export default TextEditor;