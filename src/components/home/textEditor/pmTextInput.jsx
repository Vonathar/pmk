import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class PmTextInput extends Component {
    render() {
        return (
            <Form.Group controlId="pmText" className="editor-input-medium">
                <Form.Label>PM-Text</Form.Label>
                <Form.Control type="text" placeholder="Enter the unique pm-text attribute" />
            </Form.Group>
        )
    }
}
export default PmTextInput;