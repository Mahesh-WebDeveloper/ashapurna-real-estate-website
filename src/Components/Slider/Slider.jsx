import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Import your custom CSS file
import axios from 'axios';

function SlickSlider() {
  const settings = {
    dots: false,           // Show dots for navigation
    infinite: true,        // Infinite scrolling
    speed: 500,            // Transition speed in ms
    slidesToShow: 1,       // Number of slides to show
    slidesToScroll: 1,     // Number of slides to scroll
    autoplay: true,        // Enable auto-slide
    autoplaySpeed: 2000,   // Auto-slide interval
  };

  const Apibaseurl = process.env.REACT_APP_ApiBaseUrl;
  const [apidata, setapidata] = useState([]);
  const [sliderbaseurl, setsliderbaseurl] = useState("");

  // Fetch data from API
  const fetchSliderData = async () => {
    try {
      const response = await axios.get(Apibaseurl);
      const data = response.data._data;
      setapidata(data.getSliders || []);
      setsliderbaseurl(data.slider_image_path || "");
    } catch (error) {
      console.error("Error fetching slider data", error);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []); // Only fetch data once on component mount

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        {/* Slider component */}
        <Slider {...settings}>
          {apidata.length > 0 ? (
            apidata.map((slide) => (
              <div key={slide.id}>
                <img
                  src={`${sliderbaseurl}${slide.image}`}
                  className="w-full"
                  alt={slide.alt_image_text || "Slide Image"}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p> // Show loading text if no data is available
          )}
        </Slider>
      </div>

      {/* Filter Section */}
      <div className="max-w-[1200px] mx-auto">
        {/* Add filter-related content here */}
      </div>
    </>
  );
}

export default SlickSlider;
