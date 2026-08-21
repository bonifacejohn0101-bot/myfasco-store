import instagramImage1 from '../assets/image (7).png';
import instagramImage2 from '../assets/image (8).png';
import instagramImage3 from '../assets/image (9).png';
import instagramImage4 from '../assets/image (10).png';
import instagramImage5 from '../assets/image (11).png';
import instagramImage6 from '../assets/image (12).png';
import instagramImage7 from '../assets/image (13).png';

function InstagramFeed() {
  const images = [
    instagramImage1,
    instagramImage2,
    instagramImage3,
    instagramImage4,
    instagramImage5,
    instagramImage6,
    instagramImage7,
  ];

  return (
    <section className="instagram-feed py-5">
      <div className="container text-center">
        <h1 className="mb-3">Follow Us on Instagram</h1>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
        </p>

        <div
          className="d-flex gap-3 overflow-auto pb-2"
          style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
        >
          {images.map((src) => (
            <div
              key={src}
              className="flex-shrink-0"
              style={{ width: '280px', scrollSnapAlign: 'center' }}
            >
              <img
                src={src}
                alt="Instagram"
                className="img-fluid rounded-4"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default InstagramFeed;