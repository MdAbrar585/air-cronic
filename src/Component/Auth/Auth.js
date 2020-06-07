// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../../firebaseConfig';
// import React, { useState, useEffect, useContext, createContext } from "react";
// import { Route, Redirect } from "react-router-dom";

// // firebase.initializeApp(firebaseConfig);

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const auth = Auth();
//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// }

// const getUser = user => {
//   const { displayName, email, photoURL } = user;
//   return { name: displayName, email, photo: photoURL }
// }

// export const useAuth = () => useContext(AuthContext);

// const Auth = () => {
//   const [user, setUser] = useState(null);

  // const signOut = () => {
  //   return firebase.auth().signOut()
  //     .then(() => {
  //       setUser(null);
  //       return true;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return false;
  //     });
  // };

  // const signin = (email, password) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return err.message;
  //     });
  // };

  // const signup = (email, password) => {
  //   return firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     })
  //     .catch(res => {
  //       console.log(res);
  //       return res;
  //     })
  //     ;
  // };

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       const currUser = getUser(user);
  //       console.log(currUser);
  //       setUser(user);
  //     } else {
  //       // setUser(false);
  //     }
  //   })
  // }, []);

//   return {
//     user,
//     signOut,
//     signin,
//     signup
//   }
// }

// export const PrivateRoute = ({ children, ...rest }) => {
//   const auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

// // Provider hook that creates auth object and handles state
// // function useProvideAuth() {
// //   const [user, setUser] = useState(null);

// //   // Wrap any Firebase methods we want to use making sure ...
// //   // ... to save the user to state.
// //   const signin = (email, password) => {
// //     return firebase
// //       .auth()
// //       .signInWithEmailAndPassword(email, password)
// //       .then(response => {
// //         setUser(response.user);
// //         return response.user;
// //       })
// //       .catch(err => {
// //         console.log(err);
// //         return err.message;
// //       });
// //   };

// //   const signinWithGoogle = () => {
// //     const provider = new firebase.auth.GoogleAuthProvider();
// //     firebase.auth()
// //       .setPersistence(firebase.auth.Auth.Persistence.SESSION)
// //       .then(() => {
// //         firebase.auth()
// //           .signInWithPopup(provider)
// //           .then(result => {
// //             console.log(result);

// //           })
// //       })
// //   }

// //   const signup = (email, password) => {
// //     return firebase
// //       .auth()
// //       .createUserWithEmailAndPassword(email, password)
// //       .then(response => {
// //         setUser(response.user);
// //         return response.user;
// //       })
// //       .catch(res => {
// //         console.log(res);
// //         return res;
// //       })
// //       ;
// //   };

// //   const signout = () => {
// //     return firebase
// //       .auth()
// //       .signOut()
// //       .then(() => {
// //         setUser(false);
// //       });
// //   };

// //   const sendPasswordResetEmail = email => {
// //     return firebase
// //       .auth()
// //       .sendPasswordResetEmail(email)
// //       .then(() => {
// //         return true;
// //       });
// //   };

// //   const confirmPasswordReset = (code, password) => {
// //     return firebase
// //       .auth()
// //       .confirmPasswordReset(code, password)
// //       .then(() => {
// //         return true;
// //       });
// //   };

// //   // Subscribe to user on mount
// //   // Because this sets state in the callback it will cause any ...
// //   // ... component that utilizes this hook to re-render with the ...
// //   // ... latest auth object.
// //   useEffect(() => {
// //     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
// //       if (user) {
// //         setUser(user);
// //       } else {
// //         setUser(false);
// //       }
// //     });

// //     // Cleanup subscription on unmount
// //     return () => unsubscribe();
// //   }, []);

// //   // Return the user object and auth methods
// //   return {
// //     user,
// //     signin,
// //     signinWithGoogle,
// //     signup,
// //     signout,
// //     sendPasswordResetEmail,
// //     confirmPasswordReset
// //   };
// // }

// export default Auth;