import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class PmTextInput extends Component {
    render() {
        return (
            <Form.Group onChange={(event) => { this.props.changeTagContentState(event.target.value, "pmText") }} controlId="pmText" className="editor-input-medium">
                <Form.Label>PM-Text</Form.Label>
                <Form.Control type="text" placeholder="Enter the unique pm-text attribute" />
            </Form.Group>
        )
    }
}
export default PmTextInput;