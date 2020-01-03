import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class EditableCheckbox extends Component {
    render() {
        return (
            <Form.Group controlId="editableCheckbox">
                <Form.Check type="checkbox" label="Editable" onChange={() => {
                    this.props.toggleStateBoolean("isEditable");
                }} />
            </Form.Group>
        )
    }
}

export default EditableCheckbox;