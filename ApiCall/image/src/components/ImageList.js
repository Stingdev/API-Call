import ImageItem from './ImageItem';

function ImageList ({imagesPlaceholder}) {
    return ( 
        <div className="ImageList">
            {imagesPlaceholder.map((image,index) =>{
                return <ImageItem key={index} image={image} />;
            })}
        </div>
     );
}

export default ImageList ;