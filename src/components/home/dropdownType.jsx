import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


class DropdownType extends Component {
    render() {
        return (
            <div className="dropdown">
                <DropdownButton variant="success" id="dropdown-item-button" title="PM Element">
                    <Dropdown.Item as="button" onClick={() => { this.props.updateDropdownSelection("text") }}>Text</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => { this.props.updateDropdownSelection("link") }}>Link</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => { this.props.updateDropdownSelection("image") }}>Image</Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}
export default DropdownType;