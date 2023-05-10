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

const a = galleryList.querySelectorAll(".gallery__image");

a.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    const imageURL = event.target.getAttribute("data-source");
    const lightbox = basicLightbox.create(`<img src="${imageURL}">`);
    lightbox.show();
  });
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

console.log(lightbox);
