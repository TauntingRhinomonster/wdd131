// ||| Funtions
function createCard(data) {
  return `
    <article class="card" tabindex="0">
      <img src="${data.imgSrc}" alt="Book cover of ${data.imgAlt}">
      <h3>${data.title}</h3>
	  <p><strong>${data.date}</strong></p>
      <p><strong>Genre:</strong> ${data.genre}</p>
      <p><strong>Description:</strong> ${data.description}</p>
	  <p><strong>Ages:</strong> ${data.ages}</p>
	  <p>${data.stars}</p>
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
		stars: '⭐⭐⭐⭐'
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
	},
	{
		id: 3,
		title: 'The Stormlight Archive: The Way of Kings',
		date: 'August 31, 2010',
		description:
			'The Way of Kings is an epic fantasy novel set in the storm-ravaged world of Roshar, a land shaped by supernatural tempests and ancient wars. The story follows multiple characters across different regions and social classes, each gradually revealing pieces of a larger, world-shaking mystery.',
		imgSrc:
			'https://lh5.googleusercontent.com/proxy/kpg8UwljBWmBR3rKVURQdlGvj21mTEPkYV1Z4G8f0fYmgRMlhbg1MGVGq0M9StU8Yu2AtQr0dxpVWW1ajdecqd7jJ2FEOM0E80V4BuEJahOnbJQozL_4-sUKRB4BBu64Jv1fpvG86MEagyYKXLIt5BS8',
		imgAlt: 'Book cover for Way of Kings',
		ages: '16+',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	},
	{
	id: 4,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
	}
]

// ||| Variables
const dialog = document.getElementById('dialog-element');
const galleryButtonList = document.querySelectorAll('#main-gallery button');
const gallery = document.getElementById('main-gallery');

// ||| Causing things to happen
console.log(galleryButtonList);
gallery.innerHTML = articles.map(createCard).join('');
document.getElementById('year').textContent = new Date().getFullYear();
