import React, { useState, useRef } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]); // State to store uploaded images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const fileInputRef = useRef(null); // Ref to trigger the hidden file input

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    const newImages = files.map((file) => URL.createObjectURL(file)); // Create object URLs for preview
    setImages((prevImages) => [...prevImages, ...newImages]); // Update state with new images
  };

  // Show the previous images
  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(images.length - 3, 0) : prevIndex - 1
    );
  };

  // Show the next images
  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-gallery">
      <div className="gallery-slider">
        {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
          <img key={index} src={src} alt={`Slide ${currentIndex + index}`} className="gallery-image" />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={showPrevImage} className="slider-button">Prev</button>
        <button onClick={showNextImage} className="slider-button">Next</button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <button className="add-image-button" onClick={() => fileInputRef.current.click()}>
        Add Image
      </button>
    </div>
  );
};

export default ImageGallery;
