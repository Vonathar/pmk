import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TextContentInput extends Component {
    render() {
        return (
            <Form.Group controlId="textContent" className="editor-input-wide">
                <Form.Label>Text content</Form.Label>
                <Form.Control onChange={(event) => { this.props.changeTagContentState(event.target.value, "customText") }} type="text" placeholder="Enter the text which should be within the tag" />
            </Form.Group>
        )
    }
}

export default TextContentInput;