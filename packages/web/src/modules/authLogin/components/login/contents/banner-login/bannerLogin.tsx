import { useEffect, useState } from 'react';
import mapImage1 from './Screenshot 2024-10-02 090111.png';

export const BannerLogin = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [mapImage1, mapImage1, mapImage1, mapImage1];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='relative mx-auto overflow-hidden w-2/4'>
            <div
                className='flex transition-transform ease-in-out duration-500'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className='min-w-full' key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className='w-full rounded-lg' />
                    </div>
                ))}
            </div>
            <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};
