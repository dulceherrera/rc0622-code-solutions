import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const topics = [
  { name: 'Sarabi', description: "Sarabi, after losing Mufasa (and thinking she loses Simba), remains a pillar of hope and strength that keeps their spirit alive despite Scar's reign of terror." },
  { name: 'Rafiki', description: "His presence in this movie feels like it is grounded despite how dire the situation seems under Scar's rule." },
  { name: 'Nala', description: 'She is what pulls Simba back into the orbit of their kingdom because he is the rightful king.' },
  { name: 'Scar', description: 'His constant thirst for power and his dedication to stop at nothing until he is seated on that throne makes him the perfect villain for this movie. ' }
];

root.render(<Accordion topics={topics}/>);
