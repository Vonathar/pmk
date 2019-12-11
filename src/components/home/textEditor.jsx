import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import '../../css/home/textEditor.css'

class TextEditor extends Component {
    render() {
        return (
            <div id="div-textEditor" >
                <p className="editor-h1">
                    Text editor
                </p>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        )
    }
}
export default TextEditor;