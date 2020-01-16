import React, { Component } from "react";
import Home from "./components/home/home";
import TopMenu from "./components/common/topMenu";
import TagEditor from "./components/tagEditor/tagEditor";
import { Switch, Route } from "react-router-dom";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import HomeIcon from "@material-ui/icons/Home";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import LeftDrawerLink from "./components/common/leftDrawerLink";
import "./scss/app.scss";

class App extends Component {
  state = {
    isDrawerOpen: false,
    openEditor: "text",
    links: [
      <LeftDrawerLink
        linkIcon={<HomeIcon />}
        linkName="Home"
        linkSize="primary"
        linkTo="/"
      />,
      "Divider",
      <LeftDrawerLink
        linkIcon={<TextFieldsIcon />}
        linkName="Text editor"
        linkSize="secondary"
        linkTo="/editor"
        onClickHandler={() => {
          this.setState({ openEditor: "text" });
        }}
      />,
      <LeftDrawerLink
        linkIcon={<LinkIcon />}
        linkName="Link editor"
        linkSize="secondary"
        linkTo="/editor"
        onClickHandler={() => {
          this.setState({ openEditor: "link" });
        }}
      />,
      <LeftDrawerLink
        linkIcon={<ImageIcon />}
        linkName="Image editor"
        linkSize="secondary"
        linkTo="/editor"
        onClickHandler={() => {
          this.setState({ openEditor: "image" });
        }}
      />
    ]
  };

  // Open or close the drawer
  toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ isDrawerOpen: open });
  };

  updateDrawerLinks = arrayOfLinks => {
    let links = [...this.state.links];
    links = arrayOfLinks;
    this.setState({ links });
  };

  render() {
    return (
      <div className="App">
        <TopMenu
          mainState={this.state}
          toggleDrawer={this.toggleDrawer}
          links={this.state.links}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/editor"
            render={() => <TagEditor openEditor={this.state.openEditor} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
