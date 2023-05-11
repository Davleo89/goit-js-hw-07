import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryCollage = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
         <img class="gallery__image"
         src="${element.preview}"
         alt="${element.description}"
         />
      </a>
   </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryCollage);

let modalGallery = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250
});
