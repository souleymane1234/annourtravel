import InfiniteLogoSlider from './InfiniteLogoSlider'
import image1 from"../../public/img/partenaires/airivoire.jpg";
import image2 from'../../public/img/partenaires/airfrance.jpg';
import image3 from"../../public/img/partenaires/emirates.jpg";
import image4 from'../../public/img/partenaires/ram.jpg';
import image5 from"../../public/img/partenaires/sky.jpg";
import image6 from'../../public/img/partenaires/corsair.jpg';
import image7 from"../../public/img/partenaires/egypteair.jpg";
import image8 from'../../public/img/partenaires/as.jpg';
import image9 from"../../public/img/partenaires/kenya.jpg";
import image10 from'../../public/img/partenaires/senegal-removebg-preview.png';
import image11 from"../../public/img/partenaires/brussels.jpg";
import image12 from'../../public/img/partenaires/airburkina.jpg';
import image13 from"../../public/img/partenaires/qatar.jpg";
import image14 from'../../public/img/partenaires/tunisair.jpg';
import image15 from"../../public/img/partenaires/algerie.jpg";
import image16 from'../../public/img/partenaires/mauritanie.jpg';

const logos = [
  { src: image1, alt: 'Logo 1' },
  { src: image2, alt: 'Logo 2' },
  { src: image3, alt: 'Logo 3' },
  { src: image4, alt: 'Logo 4' },
  { src: image5, alt: 'Logo 5' },
  { src: image6, alt: 'Logo 6' },
  { src: image7, alt: 'Logo 7' },
  { src: image8, alt: 'Logo 8' },
  { src: image9, alt: 'Logo 9' },
  // { src: image10, alt: 'Logo 10' },
  { src: image11, alt: 'Logo 11' },
  { src: image12, alt: 'Logo 12' },
  { src: image13, alt: 'Logo 13' },
  { src: image14, alt: 'Logo 14' },
  { src: image15, alt: 'Logo 15' },
  { src: image16, alt: 'Logo 16' },
]

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
                    <div className="row">
              <div className="col-md-6">
                  {/* <div className="subtitle mb20">Achat de code</div> */}
                  <h2 className="wow fadeInUp text-gradient">Nos Partenaires</h2>
                  <div className="spacer-20"></div>
              </div>
              
            </div>
      <div className="w-full max-w-6xl">
        <InfiniteLogoSlider />
      </div>
    </main>
  )
}

