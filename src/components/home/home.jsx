import React, { Component } from 'react';
import DropdownType from './dropdownType'
import '../../css/home/home.css'

class Home extends Component {
    render() {
        return (
            <div id="div-home" class="bg-secondary">
                <p>PMK 0.1</p>
                <DropdownType></DropdownType>
            </div>
        );
    }
}

export default Home;