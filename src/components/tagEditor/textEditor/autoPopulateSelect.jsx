import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class AutoPopulateSelect extends Component {
    render() {
        return (
            <Form.Group controlId="exampleForm.ControlSelect1" className="editor-input-medium">
                <Form.Label>Auto-populate</Form.Label>
                <Form.Control onChange={(e) => this.props.setAutoPopulateText(e.target.value)} as="select" >
                    <option>None</option>
                    <option>Company Name</option>
                    <option>Company Website</option>
                    <option>Company Email</option>
                    <option>Company Phone</option>
                    <option>Company Address</option>
                    <option>Value Proposition</option>
                    <option>Link to LP</option>
                </Form.Control>
            </Form.Group>
        )
    }
}
export default AutoPopulateSelect;