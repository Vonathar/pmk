import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class LinkEditableCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="linkEditableCheckbox">
                <Form.Check type="checkbox" label="Link editable" onChange={() => {
                    this.props.toggleLinkEditable();
                }} />
            </Form.Group>
        )
    }
}