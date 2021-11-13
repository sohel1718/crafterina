import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from "react-helmet"
import {AllRoutes} from '../../Routes';

const AllRouter = ({ user, ...rest }) => {
    
    return (
        AllRoutes.map(({ path, Component, title }, key) => (
            <Route exact path={path} render={(props) =>
                <>
                   {title &&
                   <Helmet>
                       <title>{title}</title>
                   </Helmet>
                   }
                   <Component {...props} />
               </>
            } key={key} />
        ))
    )
};

export default AllRouter
