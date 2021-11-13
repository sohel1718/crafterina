import React from 'react';
import { Redirect } from 'react-router';
import FooterMenu from '../FooterMenu';
import Header from '../Header';

const PublicLayout = ({ children, user, history }) => {

    if (user) {
        return <Redirect to={{ pathname: '/home', user: user, history: history, state: { from: history.location.pathname } }} />
    }

    return (
       <div className="private-layout">
           {children}
       </div> 
    )
}

export default PublicLayout