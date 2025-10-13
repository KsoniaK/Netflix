import "../styles/sass/components/_categories.scss";

function Categories({media, categorie}){
  const mediaContainer = document.getElementById('media_container');

  function OpenMedia(){
    mediaContainer.style.display = "block";
  };

      // Afficher les infos de l'image cliquée
      function ShowMedia() {
        // Récupérer id image cliquée
        const imgsCategoryClicked = Array.from(document.getElementsByTagName('img'));        
        
        imgsCategoryClicked.map(imgCategoryClicked =>(
          console.log("data-id de l'image cliquée est " + imgCategoryClicked.getAttribute('data-id'))
        ));
      };
  
  if(categorie.id === media.id){
    return(
      <>
            <div data-id={media.mediaId} className='category_container' onClick={ShowMedia}>
              <img data-id={media.mediaId} className='img-projet' src={media.pictureCategory} alt='illustration' onClick={OpenMedia}/>
            </div>
      </>
    )
  }

}
export default Categories;