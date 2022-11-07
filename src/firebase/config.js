import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDvgudqTI4a1QESzTqxBfxj9e1LE-16AXQ',
	authDomain: 'cooking-ninja-site-2540b.firebaseapp.com',
	projectId: 'cooking-ninja-site-2540b',
	storageBucket: 'cooking-ninja-site-2540b.appspot.com',
	messagingSenderId: '130794775736',
	appId: '1:130794775736:web:2959e3106bd8329fd2804d',
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
