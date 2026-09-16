import Image from "next/image";

export default function RevealImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw",
}) {
  return (
    <div className="product-thumb">
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
    </div>
  );
}
