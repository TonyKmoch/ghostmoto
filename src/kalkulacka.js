import React, { useState } from 'react';
function Pocitani() {
    const [pocet, setpocet] = useState(0);


    return (
        <div align="center">
            <p>Pocet: {pocet}</p>
            <h1>{"Pocet cisel:"}</h1>
            <button onClick={() => setpocet(pocet + 1)}>pridej
            </button>
            <button onClick={() => setpocet(pocet - 1)}>uber</button>
            <button onClick={() => setpocet(pocet * 2)}>nasob</button>
        </div>
    );
}

export default Pocitani;