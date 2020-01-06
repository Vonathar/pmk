// Imports
import React, { Component } from 'react';
import LeftDrawer from './leftDrawer'
import LeftDrawerTwo from '../common/leftDrawer';
import LeftDrawerLink from '../common/leftDrawerLink';
import { AppBar, Toolbar, IconButton, Typography, SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


export default class TopMenu extends Component {

    render() {
        return (
            <div className="dropdown" >
                <AppBar position="static">
                    <Toolbar >
                        <IconButton onClick={this.props.toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" variant="h6" style={{ flex: 1, textAlign: "left" }} >
                            PMK 0.1
                        </Typography>
                        <SwipeableDrawer
                            open={this.props.mainState.isDrawerOpen}
                            onClose={this.props.toggleDrawer(false)}
                            onOpen={this.props.toggleDrawer(true)}
                        >
                            <LeftDrawer
                                updateDropdownSelection={this.props.updateDropdownSelection}
                                toggleDrawer={this.props.toggleDrawer}
                                topMenuState={this.state} />
                        </SwipeableDrawer>
                    </Toolbar>

                </AppBar>
            </div>
        );
    }
}