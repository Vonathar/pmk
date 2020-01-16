import React, { Component } from "react";
import { List, Divider } from "@material-ui/core";

export default class LeftDrawer extends Component {
  render() {
    return (
      <div
        id="leftDrawer-div"
        role="presentation"
        onClick={this.props.toggleDrawer(false)}
      >
        {this.props.links.map(link => {
          return typeof link === "string" || link instanceof String ? (
            <Divider />
          ) : (
            <List>{link}</List>
          );
        })}
      </div>
    );
  }
}
