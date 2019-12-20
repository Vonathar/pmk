// Imports
import React, { Component } from 'react';
import TopMenu from './topMenu';
import TextEditor from './textEditor/textEditor';
import LinkEditor from './linkEditor/linkEditor';
import ImageEditor from './imageEditor/imageEditor';
import TagDisplay from './tagDisplay';
import '../../css/tagEditor/tagEditor.css'

class Home extends Component {
    state = {
        isDrawerOpen: false,
        dropdownSelection: "link",
        finalTag: "..."
    }

    // Open or close the drawer
    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ isDrawerOpen: open })
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
            return <TextEditor updateFinalTag={this.updateFinalTag} />
        }
        if (this.state.dropdownSelection === "link") {
            return <LinkEditor updateFinalTag={this.updateFinalTag} />
        }
        if (this.state.dropdownSelection === "image") {
            return <ImageEditor />
        }
    }

    render() {
        return (
            <div id="div-tagEditor">
                <TopMenu updateDropdownSelection={this.updateDropdownSelection} mainState={this.state} toggleDrawer={this.toggleDrawer}></TopMenu>
                {this.renderEditor()}
                <TagDisplay mainState={this.state} />
            </div>
        );
    }
}

export default Home;