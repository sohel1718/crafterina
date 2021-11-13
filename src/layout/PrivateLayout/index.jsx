import React from 'react';
import { Redirect } from 'react-router';
import FooterMenu from '../FooterMenu';
import Header from '../Header';

const PrivateLayout = ({ user, history, children }) => {
    if (!user) {
        return <Redirect to={{ pathname: '/login', user: user, history: history, state: { from: history.location.pathname } }} />
    }

    return (
       <div className="private-layout">
            <Header />        
                {children}
            <FooterMenu /> 
       </div> 
    )
}

export default PrivateLayout