import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class LengthDefaultInput extends Component {
    render() {
        return (
            <Form.Group onChange={(e) => { this.props.setLengthDefaultValue(e.target.value) }} controlId="lengthDefault" className="editor-input-small">
                <Form.Label>Length default</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
            </Form.Group>
        )
    }
}

export default LengthDefaultInput;