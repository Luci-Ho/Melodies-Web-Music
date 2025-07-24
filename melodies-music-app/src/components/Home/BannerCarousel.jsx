import React, { useEffect, useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../../style/Home/Carousel-Banner.css';

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/banners')
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.error('Lỗi fetch banner:', err));
  }, []);

  return (
    <Carousel
      autoplay
      arrows
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
      dots
      className="banner-carousel"
    >
      {banners.map((item, index) => (
        <div key={index} className="banner-slide">
          <div className="banner-content" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="banner-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="banner-buttons">
                {item.buttons.map((btn, i) => (
                  <Button key={i} type={btn.type} className="banner-btn">
                    {btn.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
