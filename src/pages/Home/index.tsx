import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <button>
        <Link to="dashboard">Sair</Link>
      </button>
    </div>
  );
};
