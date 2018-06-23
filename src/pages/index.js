import React, { Component } from 'react';


import {Link} from 'react-router-dom';

export default class Index extends Component{
    render(){
        return(
            <div>
                <Link to='/list' className="link-btn">app/list页面</Link>
            </div>
        )
    }
}
