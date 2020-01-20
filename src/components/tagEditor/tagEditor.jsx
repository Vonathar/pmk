// Imports
import React, { Component } from "react";
import TextEditor from "./textEditor/textEditor";
import LinkEditor from "./linkEditor/linkEditor";
import ImageEditor from "./imageEditor/imageEditor";
import TagDisplay from "./tagDisplay";
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    isDrawerOpen: false,
    finalTag: "..."
  };

  // Update the final tag
  updateFinalTag = newTag => {
    this.setState({
      finalTag: newTag
    });
  };

  // Render the relevant editor based on the value of the dropdown menu at the top
  renderEditor = () => {
    if (this.props.activeEditor.activeEditor === "text") {
      return <TextEditor updateFinalTag={this.updateFinalTag} />;
    }
    if (this.props.activeEditor.activeEditor === "link") {
      return <LinkEditor updateFinalTag={this.updateFinalTag} />;
    }
    if (this.props.activeEditor.activeEditor === "image") {
      return <ImageEditor updateFinalTag={this.updateFinalTag} />;
    }
  };



  render() {
    return (
      <div id="div-tagEditor">
        {this.renderEditor()}
        <TagDisplay mainState={this.state} />
      </div>
    );
  }
}

let mapStateToProps = function (state) {
  return {
    activeEditor: state.activeEditor
  }
}

export default connect(mapStateToProps)(Home);
