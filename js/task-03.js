const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//========================================
//const imageContainerEl = document.querySelector('gallery');

//const elements = images.map(option => {
//const liEl = document.createElement('li');
//liEl.classList.add('gallery-item');

//const imageEl = document.createElement('img');
//imageEl.url = option.url;
//imageEl.alt = option.alt;

//liEl.appendChild(imageEl);

//return liEl;
//return imageEl;
//})

//console.log(elements);

//imageContainerEl.append(...elements);

//=============================================
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(`afterbegin`, images.map((img) =>
  `<li class="gallery-item">
  <img
  src="${img.url}" 
  alt="${img.alt}">
  </li>`
    )
    .join("")
);

console.log(galleryEl);
