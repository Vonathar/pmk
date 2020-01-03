import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class EnclosingTagSelect extends Component {
    render() {
        return (
            <Form.Group onChange={(event) => { this.props.changeTagContentState(event.target.value, "enclosingTag") }} controlId="exampleForm.ControlSelect2" className="editor-input-small">
                <Form.Label>Enclosing tag</Form.Label>
                <Form.Control as="select">
                    <option>div</option>
                    <option>p</option>
                    <option>span</option>
                </Form.Control>
            </Form.Group>
        )
    }
}

export default EnclosingTagSelect;