const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/200/200/animals');
image.setAttribute('alt', "created image");
document.body.appendChild(image);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newH2 = document.createElement('h2');
newH2.innerText = 'CSE 121b';
document.body.appendChild(newH2);

const paragraphNew = document.createElement('p');
paragraphNew.innerText = 'Welcome to Javascript Language';
document.body.appendChild(paragraphNew);

document.body.appendChild(newSection);