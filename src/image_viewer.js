import img from '../assests/ants.jpg'

import '../styles/image_viewer.css';

export default () => {
const image = document.createElement('img');
image.src = img;

document.body.appendChild(image);
};
