import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class EnclosingTagSelect extends Component {
    render() {
        return (
            <Form.Group controlId="exampleForm.ControlSelect2" className="editor-input-small">
                <Form.Label>Enclosing tag</Form.Label>
                <Form.Control as="select">
                    <option>&lt;p&gt;</option>
                    <option>&lt;div&gt;</option>
                    <option>&lt;span&gt;</option>
                </Form.Control>
            </Form.Group>
        )
    }
}

export default EnclosingTagSelect;