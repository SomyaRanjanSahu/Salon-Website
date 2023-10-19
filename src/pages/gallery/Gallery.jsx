import React, { useState } from 'react';
import './gallery.css';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';

const Gallery = () => {
  const shop = [{ id: 1, src: 'https://i.postimg.cc/Zq8x3Rcv/bcb5b29b-c577-41d0-8396-576d0cf9c2b8.png', alt: 'Image 1' },
  { id: 2, src: 'https://i.postimg.cc/Ssm7GhTT/891f1893-31a2-40d2-a815-8d078e246d4e.png', alt: 'Image 2' },
  { id: 3, src: 'https://i.postimg.cc/zfZkVWn1/6264a796-4de1-418f-9851-23a82b4e7f82.png', alt: 'Image 3' },
  { id: 4, src: 'https://i.postimg.cc/QtSg4yvX/acaf80ee-e0b4-4fc8-b989-924ec26cc21f.png', alt: 'Image 4' },
  ];

  const barbers = [{ id: 1, src: 'https://i.postimg.cc/7hsV6WNB/3725f34b-9296-4b4e-b958-eac4e10b4e15.png', alt: 'Image 1' },
  { id: 2, src: 'https://i.postimg.cc/ydTnqd3C/6538a314-7215-4b7f-8158-26e948378f37.png', alt: 'Image 2' },
  { id: 3, src: 'https://i.postimg.cc/bY3L3ZjQ/6d8f062f-c769-427d-8a7d-860631f412a6.png', alt: 'Image 3' },
  { id: 4, src: 'https://i.postimg.cc/ZnKHJS6B/5e6b090a-9843-46bd-8c8d-b79f85ba86a9.png', alt: 'Image 4' },
  ];

  const customers = [{ id: 1, src: 'https://i.postimg.cc/MTwtrRTY/4cc13b5e-2b02-4a82-a622-b2be71df526a.png', alt: 'Image 1' },
  { id: 2, src: 'https://i.postimg.cc/rFsjbq87/7de2fa68-cdb5-4f2b-b073-842a66766999.png', alt: 'Image 2' },
  { id: 3, src: 'https://i.postimg.cc/NjWdmZvS/a6e55dab-c79e-48cd-ae71-8f0da0de577c.png', alt: 'Image 3' },
  { id: 4, src: 'https://i.postimg.cc/sDLmCbxx/0051d61b-62ed-4cdb-86e0-b89b6b499f1e.png', alt: 'Image 4' },
  { id: 5, src: 'https://i.postimg.cc/0NDcfZ8Q/efed28b2-ac38-49fd-bfa3-41615346afa2.png', alt: 'Image 5' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {selectedImage ? null : <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
      <h2>Gallery</h2>
      <p>Immerse in Barber Shop Artistry, Through Our Gallery</p>
      <h3>💈Our shop</h3>
      <div className="image-grid">      
        {shop.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      <h3>💇🏻‍♂️ Meet our barbers</h3>
      <div className="image-grid">      
        {barbers.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      <h3>🧑🏻 Our happy customers</h3>
      <div className="image-grid">      
        {customers.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
        </div>
      )}
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Gallery;