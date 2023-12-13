function ImageItem({ image }) {
  console.log(image);
  return <div >
    <img className="ImageLıstImg" src={image.urls.small} alt={image.alt_description}></img>
  </div>;
}

export default ImageItem;
