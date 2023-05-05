import { useState } from 'react';

const Slider = () =>{
  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Image 3',
    },
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  function handlePrevious() {
    const currentIndex = images.findIndex((image) => image.id === currentImage.id);
    const previousIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[previousIndex]);
  }

  function handleNext() {
    const currentIndex = images.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentImage(images[nextIndex]);
  }

  return (
    <div className="relative flex items-center justify-center mx-10">
      <img src={currentImage.src} alt={currentImage.alt} className="w-full object-cover h-96 rounded-lg" />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:shadow-outline"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md focus:outline-none focus:shadow-outline"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
}

export default Slider;
