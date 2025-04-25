import React from 'react';

function Greeting({ name }) {
  return <p>Hello hi, {name || 'Guest'}!</p>;
}

export default Greeting;