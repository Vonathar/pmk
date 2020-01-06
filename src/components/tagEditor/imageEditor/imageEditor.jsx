// Imports
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../common/checkbox';
import SelectInput from '../../common/selectInput'
import SubmitButton from './submitButton'

import '../../../css/tagEditor/imageEditor.css'

class ImageEditor extends Component {
    state = {
        isSwappable: false,
        isUploadable: false,
        isOptional: false,
        isToggle: false,
        tagContent: {
            autoPopulateImage: "None"
        }
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

    render() {
        return (
            <div id="div-imageEditor" >
                <p className="editor-h1">
                    Image editor
                </p>
                <Form>
                    <SelectInput changeTagContentState={this.changeTagContentState} parameterName="autoPopulateImage" displayName="Auto-populate" size="medium" options={["None", "Partner logo"]} />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isSwappable" displayName="Swappable" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isUploadable" displayName="Uploadable" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isToggle" displayName="Toggle" />
                    <Checkbox toggleStateBoolean={this.toggleStateBoolean} parameterName="isOptional" displayName="Optional" />
                    <SubmitButton mainState={this.state} updateFinalTag={this.props.updateFinalTag} />
                </Form>
            </div>
        )
    }
}
export default ImageEditor;

