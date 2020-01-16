// Imports
import React, { Component } from "react";
import TextEditor from "./textEditor/textEditor";
import LinkEditor from "./linkEditor/linkEditor";
import ImageEditor from "./imageEditor/imageEditor";
import TagDisplay from "./tagDisplay";

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
    if (this.props.openEditor === "text") {
      return <TextEditor updateFinalTag={this.updateFinalTag} />;
    }
    if (this.props.openEditor === "link") {
      return <LinkEditor updateFinalTag={this.updateFinalTag} />;
    }
    if (this.props.openEditor === "image") {
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

export default Home;
