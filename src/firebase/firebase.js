import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyBFYseK5SYoA1svNsfQ159KTIK9TkNwjhA",
    authDomain: "overloadedpixel-cd38c.firebaseapp.com",
    databaseURL: "https://overloadedpixel-cd38c.firebaseio.com",
    projectId: "overloadedpixel-cd38c",
    storageBucket: "overloadedpixel-cd38c.appspot.com",
    messagingSenderId: "1078041824168"
};

const devConfig = {
    apiKey: "AIzaSyBFYseK5SYoA1svNsfQ159KTIK9TkNwjhA",
    authDomain: "overloadedpixel-cd38c.firebaseapp.com",
    databaseURL: "https://overloadedpixel-cd38c.firebaseio.com",
    projectId: "overloadedpixel-cd38c",
    storageBucket: "overloadedpixel-cd38c.appspot.com",
    messagingSenderId: "1078041824168"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();


export {
    db,
    auth,
};
