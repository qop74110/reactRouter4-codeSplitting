import React from 'react';

// 引入React-Router模块
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// bundle模型用来异步加载组件
import Bundle from './Bundle';

// 同步引入
import Index from '../pages/index.js';
// 异步引入
const pages = {
    list: () => import('../pages/list')

};

const BundleCom = (props,loader) => {
    return (
        <Bundle load={loader}>
            {(Com) => <Com {...props}/>}
        </Bundle>
    )
}

export default (
        <BrowserRouter basename={'app'} >
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/list" component={(props)=>BundleCom(props, pages.list) } />
            </Switch>
        </BrowserRouter>
)