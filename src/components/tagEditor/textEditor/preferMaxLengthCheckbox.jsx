import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class PreferMaxLengthCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="maxLengthCheckbox">
                <Form.Check type="checkbox" label="Use max-length" onChange={() => {
                    this.props.toggleStateBoolean("preferMaxLengthOverDefault")
                }} />
            </Form.Group>
        )
    }
}
export default PreferMaxLengthCheckbox;