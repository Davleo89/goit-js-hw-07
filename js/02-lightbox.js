import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");

const galleryMerkup = galleryItems
  .map(
    (element) =>
      `<li class = "gallery__item">
                <a class = "gallery__link" href = "${element.original}">
                    <img
                        class= "gallery__image"
                        src= "${element.preview}"
                        alt= "${element.description}"
                    /img>
                </a>
            </li>`
  )
  .join("");

containerGallery.insertAdjacentHTML("afterbegin", galleryMerkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
});
