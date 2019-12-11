import React, { Component } from 'react';
import DropdownType from './dropdownType';
import TextEditor from './textEditor';
import LinkEditor from './linkEditor';
import ImageEditor from './imageEditor';
import '../../css/home/home.css'

class Home extends Component {
    state = {
        dropdownSelection: "link"
    }
    updateDropdownSelection = (newSelection) => {
        this.setState({
            dropdownSelection: newSelection
        })
    }
    renderEditor = () => {
        if (this.state.dropdownSelection === "text") {
            return <TextEditor></TextEditor>
        }
        if (this.state.dropdownSelection === "link") {
            return <LinkEditor></LinkEditor>
        }
        if (this.state.dropdownSelection === "image") {
            return <ImageEditor></ImageEditor>
        }
    }
    render() {
        return (
            <div id="div-home" className="bg-secondary">
                <p id="topTitle">PMK 0.1</p>
                <DropdownType updateDropdownSelection={this.updateDropdownSelection}></DropdownType>
                {this.renderEditor()}
            </div>
        );
    }
}

export default Home;