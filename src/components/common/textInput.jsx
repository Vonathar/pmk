import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class TextInput extends Component {

    renderSizeClass = () => {
        return "editor-input-" + this.props.size;
    }

    render() {
        return (
            <Form.Group controlId={this.props.parameterName} className={this.renderSizeClass()}>
                <Form.Label>{this.props.displayName}</Form.Label>
                <Form.Control onChange={(event) => { this.props.changeTagContentState(event.target.value, this.props.parameterName) }} type="text" placeholder={this.props.placeholder} />
            </Form.Group>
        )
    }
}