import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const galleryCard = createGalleryCards(galleryItems);
galleryDiv.insertAdjacentHTML('afterbegin', galleryCard);

function createGalleryCards(images) {
  return images
    .map(
      image =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}" onclick="return false;">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
            </a>
            </div>
        `
    )
    .join('');
}
const ligthbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
//
// const gallery = document.querySelector('.gallery');

// const markup = galleryItems
//   .map(
//     ({ preview, description, original }) => `<li>
//     <a class="gallery__item" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         alt="${description}"
//       />
//     </a></li>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', markup);

// const arrLinks = document.querySelectorAll('a');
// arrLinks.forEach(link => {
//   link.style.boxShadow = 'none';
// });

// new SimpleLightbox('ul.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionPosition: 'bottom',
// });
