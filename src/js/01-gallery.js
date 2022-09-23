// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', transformGalleryToString(galleryItems));
   
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
    
function transformGalleryToString(arrayOfObjects) {
    return arrayOfObjects.map(({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    ).join('');  
};