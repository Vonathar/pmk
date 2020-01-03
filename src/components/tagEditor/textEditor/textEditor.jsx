// Imports
import '../../../css/tagEditor/textEditor.css'
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
        isEditable: false,
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

    // Invert the boolean value of a given state property
    // Accepts one single formal parameter, which is the parameter identifier
    toggleStateBoolean = (booleanName) => {
        this.setState({ [booleanName]: !this.state[booleanName] })
    }

    changeTagContentState = (newValue, parameterName) => {
        let tagContent = { ...this.state.tagContent };
        tagContent[parameterName] = newValue;
        this.setState({ tagContent });
    }

    // Render the max-length or the length-default based on the boolean preferMaxLengthOverDefault
    renderTextLengthFields = () => {
        return (this.state.preferMaxLengthOverDefault)
            ? <MaxLengthInput changeTagContentState={this.changeTagContentState} />
            : <LengthDefaultInput changeTagContentState={this.changeTagContentState} />
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <PmTextInput changeTagContentState={this.changeTagContentState} />
                    <PreferMaxLengthCheckbox toggleStateBoolean={this.toggleStateBoolean} />
                    {this.renderTextLengthFields()}
                    <OptionalCheckbox toggleStateBoolean={this.toggleStateBoolean} />
                    <RichTextCheckbox toggleStateBoolean={this.toggleStateBoolean} />
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
                    <AutoPopulateSelect changeTagContentState={this.changeTagContentState} />
                    <EnclosingTagSelect changeTagContentState={this.changeTagContentState} />
                    <TextContentInput changeTagContentState={this.changeTagContentState} />
                    <EditableCheckbox toggleStateBoolean={this.toggleStateBoolean} />
                    {this.renderEditableFields()}
                    <SubmitButton mainState={this.state} updateFinalTag={this.props.updateFinalTag} />
                </Form>
            </div>
        )
    }
}
export default TextEditor;