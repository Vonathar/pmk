// Imports
import React, { Component } from 'react';
import '../../css/home/textEditor.css'
import { Form, Button } from 'react-bootstrap';

class TextEditor extends Component {
    state = {
        isEditable: true,
        isOptional: false,
        hasRichText: false,
        preferMaxLengthOverDefault: false
    }

    // Render the max-length or the length-default based on the boolean preferMaxLengthOverDefault
    renderTextLengthFields = () => {
        if (this.state.preferMaxLengthOverDefault) {
            return (
                <Form.Group controlId="maxLength" className="editor-input-small">
                    <Form.Label>Max length</Form.Label>
                    <Form.Control type="text" placeholder="Enter" />
                </Form.Group>)
        }
        else {
            return (
                <Form.Group controlId="lengthDefault" className="editor-input-small">
                    <Form.Label>Length default</Form.Label>
                    <Form.Control type="text" placeholder="Enter" />
                </Form.Group>)
        }
    }

    // Render the editable properties of the PM tags based on the boolean isEditable
    renderEditableFields = () => {
        if (this.state.isEditable) {
            return (
                <span>
                    <Form.Group controlId="pmText" className="editor-input-medium">
                        <Form.Label>PM-Text</Form.Label>
                        <Form.Control type="text" placeholder="Enter the unique pm-text attribute" />
                    </Form.Group>
                    <Form.Group controlId="maxLengthCheckbox">
                        <Form.Check type="checkbox" label="Use max-length" onChange={() => {
                            this.setState({ preferMaxLengthOverDefault: !this.state.preferMaxLengthOverDefault })
                        }} />
                    </Form.Group>
                    {this.renderTextLengthFields()}
                    <Form.Group controlId="optionalCheckbox">
                        <Form.Check type="checkbox" label="Optional" onChange={() => {
                            this.setState({ isOptional: !this.state.isOptional })
                        }} />
                    </Form.Group>
                    <Form.Group controlId="richTextCheckbox">
                        <Form.Check type="checkbox" label="Rich Text" onChange={() => {
                            this.setState({ hasRichText: !this.state.hasRichText })
                        }} />
                    </Form.Group>
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
                    <Form.Group controlId="exampleForm.ControlSelect1" className="editor-input-medium">
                        <Form.Label>Auto-populate</Form.Label>
                        <Form.Control as="select">
                            <option>None</option>
                            <option>Company Name</option>
                            <option>Company Website</option>
                            <option>Company Email</option>
                            <option>Company Phone</option>
                            <option>Company Address</option>
                            <option>Value Proposition</option>
                            <option>Link to LP</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2" className="editor-input-small">
                        <Form.Label>Enclosing tag</Form.Label>
                        <Form.Control as="select">
                            <option>&lt;p&gt;</option>
                            <option>&lt;div&gt;</option>
                            <option>&lt;span&gt;</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="textContent" className="editor-input-wide">
                        <Form.Label>Text content</Form.Label>
                        <Form.Control type="text" placeholder="Enter the text which should be within the tag" />
                    </Form.Group>
                    <Form.Group controlId="editableCheckbox">
                        <Form.Check type="checkbox" label="Editable" onChange={() => {
                            this.setState({ isEditable: !this.state.isEditable })
                        }} />
                    </Form.Group>

                    {this.renderEditableFields()}
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default TextEditor;