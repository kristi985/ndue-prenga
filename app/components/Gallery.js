import Image from "next/image";
import Reveal from "./Reveal";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PHOTOS = [
  {
    src: "/images/derrasa.jpg",
    alt: "Dërrasa druri të stivuara në shtresa.",
    title: "Dërrasa druri",
    detail: "Për punime marangozërie",
  },
  {
    src: "/images/betoforme.jpg",
    alt: "Detaj i sipërfaqes dhe shtresave të një paneli betoforme.",
    title: "Betoforme",
    detail: "Panele për kallëpe betoni",
  },
  {
    src: "/images/ristel.jpg",
    alt: "Ristela druri të grupuara në pako, me skajet e prerjes të dukshme.",
    title: "Ristela druri",
    detail: "Për punime të brendshme dhe struktura të lehta",
    position: "64% center",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-head gallery-head">
          <div className="sh-left">
            <span className="eyebrow">Materialet në detaj</span>
            <h2 className="section-title" id="gallery-title">Druri, nga afër.</h2>
          </div>
          <p className="section-sub">
            Format, teksturat dhe detajet e materialeve të katalogut.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <Reveal as="figure" className="gallery-item" key={photo.src}>
              <div className="gallery-image">
                <Image
                  src={BP + photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 44px), (max-width: 1280px) 35vw, 455px"
                  style={{ objectFit: "cover", objectPosition: photo.position || "center" }}
                />
              </div>
              <figcaption className="gallery-caption">
                <span className="gallery-caption-title">{photo.title}</span>
                <span className="gallery-caption-detail">{photo.detail}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
