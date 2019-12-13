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
            autoPopulateText: "",
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

    // Change the auto populated pm-tag to the selection of the user
    setAutoPopulateText = (newText) => {
        let tagContent = { ...this.state.tagContent };
        tagContent.autoPopulateText = newText;
        this.setState({ tagContent });
    }

    // Render the max-length or the length-default based on the boolean preferMaxLengthOverDefault
    renderTextLengthFields = () => {
        if (this.state.preferMaxLengthOverDefault) {
            return <MaxLengthInput />
        }
        else {
            return <LengthDefaultInput />
        }
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <PmTextInput />
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
                    <EnclosingTagSelect />
                    <TextContentInput />
                    <EditableCheckbox toggleEditable={this.toggleEditable} />
                    {this.renderEditableFields()}
                    <SubmitButton />
                </Form>
            </div>
        )
    }
}
export default TextEditor;