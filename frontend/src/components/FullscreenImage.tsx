'use client'

import React, { useState, useEffect } from 'react';

interface FullscreenImageProps {
  src: string;
  alt: string;
  css?: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt, css }) => {
    const [isFullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        if(isFullscreen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = '';
        }
    })

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            setFullscreen(false);
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <img
                src={src} 
                alt={alt} 
                className={`${css} cursor-pointer object-cover rounded p-0 m-0`}
                onClick={() => setFullscreen(!isFullscreen)}
            />

            {isFullscreen && (
                <div 
                    className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-0 m-0'
                    onClick={() => setFullscreen(false)}
                >
                    <img 
                        src={src}
                        alt={alt}
                        className="max-w-[900px] max-h-[900px] rounded"
                    />
                </div >
            )}
        </>
    )
};

export default FullscreenImage;