import React from 'react';

function Greeting({ name }) {
  return <p>hi , {name || 'Guest'}!</p>;
}

export default Greeting;