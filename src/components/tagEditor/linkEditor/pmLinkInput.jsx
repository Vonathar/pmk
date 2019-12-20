import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class PmLinkInput extends Component {
    render() {
        return (
            <Form.Group onChange={(event) => { this.props.setPmLink(event.target.value) }} controlId="pmLink" className="editor-input-medium">
                <Form.Label>PM-Link</Form.Label>
                <Form.Control type="text" placeholder="Enter the unique pm-text attribute" />
            </Form.Group>
        )
    }
}