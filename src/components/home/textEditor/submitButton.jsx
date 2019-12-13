import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SubmitButton extends Component {
    render() {
        return (
            <Button variant="success" type="submit">
                Submit
            </Button>
        )
    }
}

export default SubmitButton;