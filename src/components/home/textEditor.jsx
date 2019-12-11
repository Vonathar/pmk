import React, { Component } from 'react';
import '../../css/home/textEditor.css'
import { Form, Button } from 'react-bootstrap';

class TextEditor extends Component {
    render() {
        return (
            <div id="div-textEditor" >
                <p className="editor-h1">
                    Text editor
                </p>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Auto-populate</Form.Label>
                        <Form.Control as="select">
                            <option>None</option>
                            <option>Company Name</option>
                            <option>Company Website</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Editable" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>PM-Text</Form.Label>
                        <Form.Control type="text" placeholder="Enter the unique pm-text attribute" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Text content</Form.Label>
                        <Form.Control type="text" placeholder="Enter the text which should be within the tag" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default TextEditor;