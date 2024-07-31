import React from 'react';
import "./App.css";
import kx250Image from './image/kx250.jpg'; // Import obrázku
import ttr250 from './image/ttr250.webp'

function Nadpis() {

  return (
    <div className='App'>
      <h1 className='nadpis'>Rozdíl mezi 2 dobým a 4 dobým motorem?</h1>
      <img src={kx250Image} alt='na obrazku je kx 250 2takt' className='obrazek1'></img>
      <p className='popis popis-desktop'>
        <b>&#8592; Kx 250 je 2 taktni motorka</b>
      </p>
      <p className='popis popis-mobile'>
        <b>&#8592;Kx 250: 2 takt</b>
      </p>
      <img src={ttr250} alt='Na obrazku je ttr 250 4 takt' className='obrazek2' />
      <p className='popis2'><b>Ttr250 je 4 taktni motorka &#8594;</b></p>
    </div>
  );
}
export default Nadpis;