// Imports
import React, { Component } from "react";
import { connect } from 'react-redux'

class TagDisplay extends Component {
  render() {
    return (
      <div id="div-tagDisplay">
        <p className="tagDisplay-h1">Result</p>
        <p className="tagDisplay-result">{this.props.finalTag}</p>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    finalTag: state.finalTag.finalTag
  }
}

export default connect(mapStateToProps)(TagDisplay);
