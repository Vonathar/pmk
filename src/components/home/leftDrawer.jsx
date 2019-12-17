import React, { Component } from 'react';
import TextFields from '@material-ui/icons/TextFields'
import LinkIcon from '@material-ui/icons/Link'
import ImageIcon from '@material-ui/icons/Image';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


export default class LeftDrawer extends Component {
    render() {
        return (
            <div
                className={this.props.topMenuState.classes.list}
                role="presentation"
                onClick={this.props.toggleDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => this.props.updateDropdownSelection("text")} button key="PM-Text">
                        <ListItemIcon>
                            <TextFields />
                        </ListItemIcon>
                        <ListItemText primary="PM-Text" />
                    </ListItem>
                    <ListItem onClick={() => this.props.updateDropdownSelection("link")} button key="PM-Link">
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="PM-Link" />
                    </ListItem>
                    <ListItem onClick={() => this.props.updateDropdownSelection("image")} button key="Image editor">
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Image editor" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Reserved for later">
                        <ListItemText primary="Reserved for later" />
                    </ListItem>
                </List>
            </div>
        )
    }
}