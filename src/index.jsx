import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

function BemVindo(props) {
  return <h1> Olá, {props.nome}</h1>
}

const elemento = <BemVindo nome="Beatriz" />;

ReactDOM.render(
  elemento,
  document.getElementById('caminho')
)