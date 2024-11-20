import './App.css';
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"; // Icône de poubelle

//etape 1 2 3 

/* function App() {
  // Variables à valeur initiale
  const nom = "SAAD";
  const prenom = "ILIAS";  
  // État pour stocker l'heure
  const [heure, setHeure] = useState(new Date().toLocaleTimeString());
  
   // Mettre à jour l'heure chaque seconde
   useEffect(() => {
     const interval = setInterval(() => {
       setHeure(new Date().toLocaleTimeString());
     }, 1000);
 
     // Nettoyage de l'intervalle quand le composant est démonté
     return () => clearInterval(interval);
   }, []);
 
   return (
    <div className="App">
        <h1>Me voilà {nom}, {prenom}</h1>
        <h1>Heure actuelle : {heure}</h1>
    </div>

   );
} */


//etape 4 fct
/*  function Message(props) {
  return (
    <h1>
      Me voilà {props.nom}, {props.prenom}
    </h1>
  );
} */ 

//etape 4 probs
/*  function App() {
  return (
    <div className="App">
      <Message nom="SAAD" prenom="ILIAS" />
    </div>
  );
}  */

//etape 5
/* function App() {
  // État pour le compteur
  const [compteur, setCompteur] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementerCompteur = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div className="App">
      <h1>Compteur : {compteur}</h1>
      <button onClick={incrementerCompteur}>Incrémenter</button>
    </div>
  );
} */


//etape 6
/* function App() {
  // États pour stocker le nom et l'âge
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer l'affichage du message
  const afficherMessage = () => {
    setMessage(`Hello, ${nom}! Vous avez ${age} ans.`);
  };

  return (
    <div className="App">
      <h1>Formulaire</h1>
      <div>
        <label>
          Nom : 
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Âge : 
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <button onClick={afficherMessage}>Soumettre</button>
      {message && <p>{message}</p>}
    </div>
  );
}
 */


//etape 7
function App() {
  // Liste initiale
  const [liste, setListe] = useState(["Apprendre React", "Faire du sport", "Lire un livre"]);

  // Fonction pour supprimer un élément de la liste
  const supprimerElement = (index) => {
    setListe(liste.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Ma Liste</h1>
      <ul>
        {liste.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ flex: 1 }}>{item}</span>
            <FaTrash
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => supprimerElement(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
/* export default Message;
 */