import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyA4fg3Gdt5uhSU-h2VlSJkvUWpdHoycGiI",
  authDomain: "kyukyubird.firebaseapp.com",
  databaseURL: "https://kyukyubird.firebaseio.com",
  projectId: "kyukyubird",
  storageBucket: "",
  messagingSenderId: "592560296460",
  appId: "1:592560296460:web:a24654a5209cf759"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //set a document inside the ref for which snapshot currently dont exist
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      //userRef snapshot now exists
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//3 main methods to fetch some junk
// firestore.collection('users').doc('abc').collection('cart').doc('def')
// firestore.doc('/users/abc/cart/def')
// firestore.collection('/users/abc/cart')

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;