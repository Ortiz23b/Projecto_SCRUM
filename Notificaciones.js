import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_WboKkJaI2lKwt2gY6nWx6t2_gWXHaLs",
  authDomain: "poyecto2-b69e0.firebaseapp.com",
  projectId: "poyecto2-b69e0",
  storageBucket: "poyecto2-b69e0.appspot.com",
  messagingSenderId: "712565390251",
  appId: "1:712565390251:web:62c62c0d830e976bda70ee",
  measurementId: "G-DP4C2X3G62"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'notificaciones'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setNotificaciones(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Notificaciones en Tiempo Real</h1>
      <ul>
        {notificaciones.map((notificacion, index) => (
          <li key={index}>{notificacion.mensaje}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notificaciones;
