import React, { Component } from 'react';


import {Link} from 'react-router-dom';


class List extends Component{
    render(){
        return(
            <div style={{ padding: 20 }}>
                <Link to='/'>app/页面</Link>
            </div>
        )
    }
}

export default List;