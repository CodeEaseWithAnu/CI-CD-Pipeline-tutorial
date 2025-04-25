import React from 'react';

function Greeting({ name }) {
  return <p>Hello , {name || 'Guest'}!</p>;
}

export default Greeting;