import { galleryItems } from './gallery-items.js';
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

// import * as basicLightbox from 'basiclightbox'

galleryDiv.addEventListener('click', openImage);

function openImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();
  galleryDiv.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
// const gallery = document.querySelector('.gallery');

// const markup = galleryItems
//   .map(
//     ({ preview, description, original }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', markup);
// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `
//            <img
//            class="gallery__image"
//            src="${e.target.dataset.source}"
//            data-source="${e.target.dataset.source}"
//            alt="${e.target.alt}"/>`,
//     {
//       onShow: () => {
//         window.addEventListener('keydown', onModalCloseByEscape);
//       },
//       onClose: () => {
//         window.removeEventListener('keydown', onModalCloseByEscape);
//       },
//     }
//   );

//   instance.show();

//   function onModalCloseByEscape(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// }
