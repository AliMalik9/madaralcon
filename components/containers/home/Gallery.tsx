"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "@/public/img/gallery/gallery-1.jpg";
import img2 from "@/public/img/gallery/gallery-2.jpg";
import img3 from "@/public/img/gallery/gallery-3.jpg";
import img4 from "@/public/img/gallery/gallery-4.jpg";

const galleryImages = [img1, img2, img3, img4];

const Gallery = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="portfolio__two section-padding pt-0">
      <div className="container">
        {/* Arabic Title */}
        <div className="row mb-30">
          <div className="col-xl-12 text-center">
            <div className="team__two-title">
              <h2>معرض أعمالنا</h2>
              <p>
                اكتشف مجموعة من أعمالنا السابقة التي نفخر بها في مجال صيانة الأجهزة المنزلية وتقديم الخدمات الاحترافية في جميع أنحاء المملكة.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 mb-4" // changed col-lg-4 to col-lg-6
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div
                className="gallery__image-wrapper"
                onClick={() => setModalImage(img.src)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img}
                  alt={`صورة من المعرض ${index + 1}`}
                  className="w-100 rounded gallery__image"
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="modal-backdrop" onClick={() => setModalImage(null)}>
          <Image
            src={modalImage}
            alt="عرض الصورة"
            className="modal-img"
            fill={false}
            width={800}
            height={600}
            style={{ objectFit: "contain", borderRadius: "10px", cursor: "pointer", maxWidth: "90%", maxHeight: "90%" }}
            onClick={() => setModalImage(null)}
          />
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .gallery__image-wrapper {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery__image-wrapper:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        .gallery__image {
          transition: transform 0.3s ease;
        }
        .gallery__image-wrapper:hover .gallery__image {
          transform: scale(1.05);
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1055;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: 10px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
