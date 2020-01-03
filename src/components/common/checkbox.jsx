import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export default class Checkbox extends Component {
    render() {
        return (
            <Form.Group controlId={this.props.parameterName}>
                <Form.Check type="checkbox" label={this.props.displayName} onChange={() => {
                    this.props.toggleStateBoolean(this.props.parameterName);
                }} />
            </Form.Group>
        )
    }
}