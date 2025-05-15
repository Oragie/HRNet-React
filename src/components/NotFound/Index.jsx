import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Non Trouvée</h2>
      <p className="notfound-message">
        La page que vous recherchez n'existe pas.
      </p>
      <Link to="/" className="notfound-button">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
