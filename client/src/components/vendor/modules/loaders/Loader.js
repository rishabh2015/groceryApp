import React, { Component } from 'react';



export default class Loader extends Component{

    render(){
        return(
            <div class="loader__overlay loader__overlay--hidden">
                <div class="loader  middle-center-aligned">
                    <span class="loader__circle "></span>
                    <span class="loader__circle "></span>
                    <span class="loader__circle "></span>
                </div>
            </div>
        );
    }
}