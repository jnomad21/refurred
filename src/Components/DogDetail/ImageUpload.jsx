import React, { useState } from 'react';
import { uploadImageToS3 } from '../../utilities/uploadImageToS3';

export default function ImageUpload({ onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        const imageUrl = await uploadImageToS3(selectedImage);
        onUpload(imageUrl);
        console.log('Uploaded image URL:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      {/* Removed the nested <form> */}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="button" onClick={handleUpload}>
        Upload the image
      </button>
    </div>
  );
}