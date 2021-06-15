import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ProductAdd from './ProductAdd';
import ProductEdit from './ProductEdit';
import ProductManage from './ProductManage';

const MainContent = ({match}) => {
    
    return (
        <div className="admin__content">
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <ProductManage />
                    </Route>
                    <Route path={`${match.path}/manage`}>
                        <ProductManage />
                    </Route>
                    <Route path={`${match.path}/add`}>
                        <ProductAdd />
                    </Route>
                    <Route path={`${match.path}/edit`}>
                        <ProductEdit />
                    </Route>
                </Switch>
            </div>
    );
};

export default MainContent;