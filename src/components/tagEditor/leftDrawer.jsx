import '../../css/tagEditor/leftDrawer.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TextFields from '@material-ui/icons/TextFields'
import LinkIcon from '@material-ui/icons/Link';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


export default class LeftDrawer extends Component {
    render() {
        return (
            <div
                className="leftDrawer-div"
                role="presentation"
                onClick={this.props.toggleDrawer(false)}
            >
                <List>
                    <Link to='/'>
                        <ListItem button key="Reserved for later">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem onClick={() => this.props.updateDropdownSelection("text")} button key="PM-Text">
                        <ListItemIcon>
                            <TextFields />
                        </ListItemIcon>
                        <ListItemText secondary="PM-Text" />
                    </ListItem>
                    <ListItem onClick={() => this.props.updateDropdownSelection("link")} button key="PM-Link">
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                        <ListItemText secondary="PM-Link" />
                    </ListItem>
                    <ListItem onClick={() => this.props.updateDropdownSelection("image")} button key="Image editor">
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText secondary="Image editor" />
                    </ListItem>
                </List>

            </div>
        )
    }
}