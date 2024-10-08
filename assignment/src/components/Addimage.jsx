import { useState, useRef } from 'react';
import sliderImage from '../assets/sliderImage.png';
import questionMark from '/public/images/question.png';
import rectangle from '/public/images/rectangle.png';


function AddImage() {
    const defaultImages = [
        sliderImage,
        sliderImage,
        sliderImage,
        sliderImage,
    ]

    const [images, setImages] = useState(defaultImages);
    const [currentIndex, setCurrentIndex] = useState(0);
    const fileInputRef = useRef(null);

    // Handles image upload from the file input
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    // Shows the previous image set
    const showPrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 3 : Math.max(prevIndex - 1, 0)
        );
    };

    // Shows the next image set
    const showNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= images.length ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="top-right bottom-right">
            <div className="ques-rect">
                <img src={questionMark} alt="questionmark image" />
                <img src={rectangle} alt="group of square" />
            </div>
            <div id="gallery-container">
                <div className="gallery-btn">
                    <div className="gallery">Gallery</div>
                    <div className="btn">
                        <button className="add-image-button" onClick={() => fileInputRef.current.click()}>
                            + ADD IMAGE
                        </button>
                        <input
                            id="addImage"
                            type="file"
                            multiple
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                        <div className="slider-controls">
                            <button onClick={showPrevImage} className="slider-button">
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button onClick={showNextImage} className="slider-button">
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="image-slider">
                    {/* Slider track to contain all images and apply transformation */}
                    <div className="slider-track" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, }}>
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Slide ${index}`} className="gallery-images" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddImage;
