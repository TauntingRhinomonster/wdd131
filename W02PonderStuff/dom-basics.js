const newParagraph = document.createElement('p');
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200');
newImage.setAttribute('alt', 'An image of a something');
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
document.body.appendChild(newSection);

const newHeader2 = document.createElement('h2');
newHeader2.innerText = 'DOM Basics';
newSection.appendChild(newHeader2);

const newestParagraph = document.createElement('p');
newestParagraph.innerText = 'This was added through Javascript';
newSection.appendChild(newestParagraph);
