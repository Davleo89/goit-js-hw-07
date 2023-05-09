import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryCollage = galleryItems
  .map(
    (element) =>
      `<li class= "gallery__item">
                <a class= "gallery__link" href = "${element.original}">
                    <img
                        class= "gallery__image"
                        src= "${element.preview}"
                        alt= "${element.description}"
                    /img>
                </a>
            </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryCollage);

galleryList.querySelectorAll(".gallery__image").forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    const imageURL = event.target.getAttribute("src");
    const lightbox = basicLightbox.create(`<img src="${imageURL}">`);
    lightbox.show();
  });
});
