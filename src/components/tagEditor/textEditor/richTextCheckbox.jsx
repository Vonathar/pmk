import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class RichTextCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="richTextCheckbox">
                <Form.Check type="checkbox" label="Rich Text" onChange={() => {
                    this.props.toggleStateBoolean("hasRichText");
                }} />
            </Form.Group>
        )
    }
}

export default RichTextCheckbox;