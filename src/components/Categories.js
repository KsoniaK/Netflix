import '../styles/sass/components/_categories.scss';
import '../styles/sass/components/_carrousel.scss';

function Categories({ medias, onMediaClick }){

  return (
    <section id="liste-media">
      {medias.map(media => (
        <article key={media.mediaId} className="category">
          <div
            className="category_container"
            onClick={() => {
              onMediaClick(media.mediaId)
            }}
          >
            <img
              className="img-projet"
              src={process.env.PUBLIC_URL + media.pictureCategory}
              alt={media.title}
            />
          </div>
        </article>
      ))}
    </section>
    )
}
export default Categories;