const images = [
  { src: "/image5.png", alt: "image5", colSpan: 2, rowSpan: 2 },
  { src: "/image4.png", alt: "image4", colSpan: 1, rowSpan: 1 },
  { src: "/image6.png", alt: "image6", colSpan: 1, rowSpan: 2 },
  { src: "/image3.png", alt: "image3", colSpan: 1, rowSpan: 1 },
  { src: "/image2.png", alt: "image2", colSpan: 1, rowSpan: 1 },
  { src: "/image1.png", alt: "image1", colSpan: 1, rowSpan: 1 },
];

const Section5 = () => {
  return (
    <section className="w-full h-fit grid grid-cols-4 grid-rows-2">
      {images.map((image, index) => (
        <div
          key={index}
          className={`col-span-${image.colSpan} row-span-${image.rowSpan} w-full h-auto`}
        >
          <img
            className="w-full h-[40vh] object-cover"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </section>
  );
};

export default Section5;
