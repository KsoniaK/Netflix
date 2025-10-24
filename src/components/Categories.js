import '../styles/sass/components/_categories.scss';

function Categories({medias}){

  async function createCardGallery() {
    const listeMedia = document.getElementById('liste-media');
    medias.forEach(media => listeMedia.innerHTML +=
      `<article id='category' className='category'>
          <div id='category_container' data-id="${media.mediaId}" className='category_container'>
            <img data-id="${media.mediaId}" className='img-projet' src="${media.pictureCategory}" alt='illustration'/>
          </div>
        </article>`    
  )}
  createCardGallery();

}
export default Categories;