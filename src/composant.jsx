import React, { Component } from "react";
 
class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état
    this.state = {
      count: 0,
    };
 
    // Liaison explicite de la méthode à la classe
    this.incrementWithBind = this.incrementWithBind.bind(this);
  }
 
  // Méthode attachée (bindée)
  incrementWithBind() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
 
  // Méthode non attachée (non bindée)
  incrementWithoutBind() {
    console.log("Valeur de this :", this); // Peut être undefined si appelée sans bind
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
 
  // Méthode avec fonction fléchée (liaison automatique du contexte)
  incrementWithArrow = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
 
  render() {
    return (
      <div>
        <p>Compteur : {this.state.count}</p>
        <button onClick={this.incrementWithBind}>Incrémenter (bind)</button>
        <button
          onClick={() => this.incrementWithoutBind()} // Nécessite une fonction fléchée ici
        >
          Incrémenter (sans bind)
        </button>
        <button onClick={this.incrementWithArrow}>Incrémenter (arrow)</button>
      </div>
    );
  }
}
 
export default Counter;