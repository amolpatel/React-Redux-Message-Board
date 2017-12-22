import * as firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD0GVgbr-Z2G7FLUbHxQ_n19_u2BxajwSQ",
    authDomain: "cryptome-bf464.firebaseapp.com",
    databaseURL: "https://cryptome-bf464.firebaseio.com",
    projectId: "cryptome-bf464",
    storageBucket: "cryptome-bf464.appspot.com",
    messagingSenderId: "253721492754"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');