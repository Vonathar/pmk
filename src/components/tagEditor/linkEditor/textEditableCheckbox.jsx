import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class TextEditableCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="textEditableCheckbox">
                <Form.Check type="checkbox" label="Text editable" onChange={() => {
                    this.props.toggleTextEditable();
                }} />
            </Form.Group>
        )
    }
}