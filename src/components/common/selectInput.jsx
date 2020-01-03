import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class SelectInput extends Component {

    renderSizeClass = () => {
        return "editor-input-" + this.props.size;
    }

    render() {
        return (
            <Form.Group controlId={this.props.parameterName} className={this.renderSizeClass()}>
                <Form.Label>{this.props.displayName}</Form.Label>
                <Form.Control onChange={(e) => this.props.changeTagContentState(e.target.value, this.props.parameterName)} as="select" >
                    {this.props.options.map((value) => {
                        return <option>{value}</option>
                    })}
                </Form.Control>
            </Form.Group>
        )
    }
}