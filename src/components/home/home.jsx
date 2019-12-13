// Imports
import React, { Component } from 'react';
import DropdownType from './dropdownType';
import TextEditor from './textEditor/textEditor';
import LinkEditor from './linkEditor/linkEditor';
import ImageEditor from './imageEditor/imageEditor';
import TagDisplay from './tagDisplay';
import '../../css/home/home.css'

class Home extends Component {
    state = {
        dropdownSelection: "text",
        finalTag: "..."
    }
    // Switch the currently open editor [Image/Text/Link]
    updateDropdownSelection = (newSelection) => {
        this.setState({
            dropdownSelection: newSelection
        })
    }

    // Update the final tag
    updateFinalTag = (newTag) => {
        this.setState({
            finalTag: newTag
        })
    }

    // Render the relevant editor based on the value of the dropdown menu at the top
    renderEditor = () => {
        if (this.state.dropdownSelection === "text") {
            return <TextEditor />
        }
        if (this.state.dropdownSelection === "link") {
            return <LinkEditor />
        }
        if (this.state.dropdownSelection === "image") {
            return <ImageEditor />
        }
    }

    render() {
        return (
            <div id="div-home">
                <p id="topTitle">PMK 0.1</p>
                <DropdownType updateDropdownSelection={this.updateDropdownSelection}></DropdownType>
                {this.renderEditor()}
                <TagDisplay mainState={this.state} />
            </div>
        );
    }
}

export default Home;