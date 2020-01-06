import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

export default class LeftDrawerLink extends Component {
    render() {
        return (
            <Link to={this.props.linkTo}>
                <ListItem button key={this.props.linkName} onClick={this.props.onClickHandler}>
                    <ListItemIcon>
                        {this.props.linkIcon}
                    </ListItemIcon>
                    {this.props.linkSize === "primary"
                        ? <ListItemText primary={this.props.linkName} />
                        : <ListItemText secondary={this.props.linkName} />}
                </ListItem>
            </Link>
        )
    }
}