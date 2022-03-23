const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chooseImg = images[Math.floor(Math.random() * images.length)];

const viewImg = document.createElement("img");

viewImg.src = `img/${chooseImg}`;

document.body.appendChild(viewImg)