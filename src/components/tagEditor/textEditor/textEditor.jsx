// Imports
import '../../../css/tagEditor/textEditor.css'
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../common/checkbox';
import TextInput from '../../common/textInput';
import SelectInput from '../../common/selectInput'
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

    // Change the value of a given property that's present in the state
    // Accepts two formal parameters: (1) the new value and (2) the unique property identifier
    changeTagContentState = (newValue, parameterName) => {
        let tagContent = { ...this.state.tagContent };
        tagContent[parameterName] = newValue;
        this.setState({ tagContent });
    }

    // Render the max-length or the length-default based on the boolean preferMaxLengthOverDefault
    renderTextLengthFields = () => {
        return (this.state.preferMaxLengthOverDefault)
            ? <TextInput changeTagContentState={this.changeTagContentState} parameterName="maxLength" displayName="Max length" size="small" placeholder="Enter" />
            : <TextInput changeTagContentState={this.changeTagContentState} parameterName="lengthDefault" displayName="Length default" size="small" placeholder="Enter" />
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <TextInput changeTagContentState={this.changeTagContentState} parameterName="pmText" displayName="PM Text" size="medium" placeholder="Enter the unique pm-text attribute" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="preferMaxLengthOverDefault" displayName="Use max-length" />
                    {this.renderTextLengthFields()}
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isOptional" displayName="Optional" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="hasRichText" displayName="Rich text" />
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
                    <SelectInput changeTagContentState={this.changeTagContentState} parameterName="autoPopulateText" displayName="Auto-populate" size="medium" options={["None", "Company Name", "Company Website", "Company Email", "Company Phone", "Company Address", "Value Proposition", "Link to LP"]} />
                    <SelectInput changeTagContentState={this.changeTagContentState} parameterName="enclosingTag" displayName="Enclosing tag" size="small" options={["div", "p", "span"]} />
                    <TextInput changeTagContentState={this.changeTagContentState} parameterName="customText" displayName="Text content" size="wide" placeholder="Enter the text which should be within the tag" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isEditable" displayName="Editable" />
                    {this.renderEditableFields()}
                    <SubmitButton mainState={this.state} updateFinalTag={this.props.updateFinalTag} />
                </Form>
            </div>
        )
    }
}
export default TextEditor;