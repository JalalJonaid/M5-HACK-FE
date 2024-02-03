// firebaseAuthProvider.js
import React, { useEffect, useState, createContext } from "react";
//noice here we are refrenceing the service we set up earlier
import { auth } from "../Services/Firebase";



export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        //listen for changes
            auth.onAuthStateChanged(async (user) => {
                console.log(user)
              if (user) {
                // get return values from Firebase
                const { email, displayName, photoURL, uid } = user;
              // save them in state
                setUser({ email, displayName, photoURL, uid });
              } else {
                setUser(null);
              }
            });
          }, []);
     return (
       <AuthContext.Provider value={user}>
     {/* props.children will render any nested child components */}           
           <div>{props.children}</div>
      </AuthContext.Provider>
      )
    }

    
export const AuthContext = createContext(null);