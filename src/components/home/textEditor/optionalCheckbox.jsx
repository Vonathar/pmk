import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class OptionalCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="optionalCheckbox">
                <Form.Check type="checkbox" label="Optional" onChange={() => {
                    this.props.toggleOptional();
                }} />
            </Form.Group>
        )
    }
}

export default OptionalCheckbox;