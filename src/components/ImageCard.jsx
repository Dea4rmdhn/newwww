import React from 'react';

export const ImageCard = ({ imageUrl, altText = "image", title, description, size = "large", position = "top", type = "message" }) => {

    const imageSizeClasses = {
        small: "w-24 h-24",
        medium: "w-48 h-48",
        large: "w-full h-full"
    };

    const positionClasses = {
        top: "self-start",
        bottom: "self-end",
        left: "float-left mr-4 mb-4",
        right: "float-right ml-4 mb-4"
    };

    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg p-6">
        <div className={`${size === "large" ? "w-full h-[25rem]" : imageSizeClasses[size]} ${positionClasses[position]}`}>
          <img
            src={imageUrl}
            alt={altText}
            className={`w-full h-full object-cover ${size === "large" ? "" : "rounded-lg"}`}
          />
        </div>
        <div className="mt-4">
          <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700 font-comic text-lg leading-relaxed">{description}</p>

        </div>
      </div>


    );
  };
