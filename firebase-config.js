const firebaseConfig = {
    apiKey: "AIzaSyA9-wpSAodBNEdapqemMB4_jzjtghUJpG4",
  authDomain: "refundradar-c2d0a.firebaseapp.com",
  projectId: "refundradar-c2d0a",
  storageBucket: "refundradar-c2d0a.firebasestorage.app",
  messagingSenderId: "186595300827",
  appId: "1:186595300827:web:cddc280aedf0d3866843fe",
  measurementId: "G-TDDTDFPH86"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
