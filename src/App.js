import React, { useEffect } from "react";
import PrivateLayout from "./layout/PrivateLayout";
import { auth, db } from './firebase'; 
import { useAuthState } from "react-firebase-hooks/auth";
import "./assets/scss/app.scss";
import PublicLayout from "./layout/PublicLayout";

function App({ children, history }) {
    const [user, loading] = useAuthState(auth);
    let publicPage = false;
    if (history.location.pathname === "/" || history.location.pathname === "/login") {
        publicPage = true;
    }
    
    useEffect(() => {
        if (user) {
          db.collection('users').doc(user.uid).set({
              email: user.email,
              lastSeen: Date.now(),
              photoURL: user.photoURL,
              },
              { merge: true }
              );
          }
    }, [user]);

    if (loading) return <div>...loading</div>

  return (
        <>
        {
          publicPage ? (
            <PublicLayout history={history} user={user} >
              {children}
            </PublicLayout>
          ) : (
            <PrivateLayout history={history} user={user} >
              { children }
          </PrivateLayout>
          )
        }
        </>
  );
}

export default App;
