import React, { useState } from 'react';
import { uploadImageToS3 } from '../../utilities/uploadImageToS3';

function ImageUpload({ onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        const imageUrl = await uploadImageToS3(selectedImage);
        onUpload(imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

export default ImageUpload;
