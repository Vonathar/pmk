import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class MaxLengthInput extends Component {
    render() {
        return (
            <Form.Group controlId="maxLength" className="editor-input-small">
                <Form.Label>Max length</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
            </Form.Group>
        )
    }
}

export default MaxLengthInput;