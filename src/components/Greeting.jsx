import React from 'react';

function Greeting({ name }) {
  return <p>Hello welcome , {name || 'Guest'}!</p>;
}

export default Greeting;