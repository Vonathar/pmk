// Imports
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import AutoPopulateSelect from './autoPopulateSelect';
import TextContentInput from './textContentInput';
import PmLinkInput from './pmLinkInput';
import MaxLengthInput from './maxLengthInput';
import SubmitButton from './submitButton';
import Checkbox from '../../common/checkbox';
import TextInput from '../../common/textInput';
import SelectInput from '../../common/selectInput'
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

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <PmLinkInput setPmLink={this.setPmLink} />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isOptional" displayName="Optional" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isLinkEditable" displayName="Link editable" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isTextEditable" displayName="Text editable" />
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
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isEditable" displayName="Editable" />
                    {this.renderEditableFields()}
                    <SubmitButton updateFinalTag={this.props.updateFinalTag} mainState={this.state} />
                </Form>
            </div>
        )
    }
}
export default LinkEditor;
