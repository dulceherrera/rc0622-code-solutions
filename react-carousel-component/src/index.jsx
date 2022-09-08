import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const topics = [
  { imgLink: 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/starwars-darth-hand-blog-569x329.jpg', name: 'Darth-Vader' },
  { imgLink: 'https://media.newyorker.com/photos/590960416552fa0be682e270/master/w_2560%2Cc_limit/Rothman-History-Star-Wars.jpg', name: 'three' },
  { imgLink: 'https://nationaltoday.com/wp-content/uploads/2020/05/star-wars-day-640x514.jpg', name: 'stormtrooper' },
  { imgLink: 'https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780', name: 'mando' },
  { imgLink: 'https://cdn.britannica.com/56/182856-050-A0912792/Peter-Mayhew-Harrison-Ford-Chewbacca-Han-Solo.jpg', name: 'chew' }
];

root.render(<Carousel images={topics}/>);
