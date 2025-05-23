// ||| Funtions
function createCard(data) {
  return `
    <article class="card" tabindex="0">
      <img src="${data.imgSrc}" alt="Book cover of ${data.imgAlt}">
      <h3>${data.title}</h3>
      <p><strong>Genre:</strong> ${data.genre}</p>
      <p><strong>Description:</strong> ${data.description}</p>
      <button class="read-more">Read more</button>
    </article>
  `;
}

// ||| Objects
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

// ||| Causing things to happen
const gallery = document.getElementById('main-gallery');
gallery.innerHTML = articles.map(createCard).join('');
document.getElementById('year').textContent = new Date().getFullYear();
