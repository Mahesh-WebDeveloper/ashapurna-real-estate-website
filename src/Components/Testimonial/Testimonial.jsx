import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

// Custom arrow components


const TestimonialSlider = () => {

  const [ApiData, SetApiData] = useState([]);
  const [ApiDataleft, SetApiDataleft] = useState([]);

  const testimonialbaseurl = "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/";
  const ApiBaseUrl = process.env.REACT_APP_ApiBaseUrl;

  const getData = async () => {
    try {
      const response = await axios.get(ApiBaseUrl);
      const data = await response.data?._data?.getTestimonials || [];
      const leftdata = await response.data?._data?.getHomePage || [];
      SetApiDataleft(leftdata)
      SetApiData(data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(ApiData);
  
 const testimonials =  ApiData.map((v)=>( {
    id: 1,
    name: v.name,
    role: v.position,
    image:`${testimonialbaseurl}${v.image}`,
    content: v.message
  }))

  // const testimonialssss = [
  //   {
  //     id: 1,
  //     name: ApiData.name,
  //     role: ApiData.position,
  //     image:`images/${ApiData.image}`,
  //     content: ApiData.message
  //   },
    
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="mt-6">
        <div className="h-2 w-2 rounded-full bg-amber-300 hover:bg-amber-500" />
      </div>
    ),
  };

  // Decorative dots
  const decorativeDots = Array.from({ length: 24 });

  return (
    <div className="bg-slate-800 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Content Section */}
        <div className="lg:w-2/5">
          <h3 className="text-amber-500 font-medium mb-4">  {ApiDataleft.our_testimonial_title}</h3>
          <h2 className="text-white text-4xl font-bold mb-6">
            {ApiDataleft.our_testimonial_tagline}
          </h2>
          <p className="text-gray-300 mb-8">
          {ApiDataleft.our_testimonial_description}
          </p>
        </div>

        {/* Right Slider Section */}
        <div className="lg:w-3/5 relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
          <div className="bg-white rounded-lg p-8 shadow-lg relative">
            <div className="flex items-center gap-6">
              {/* Profile Image */}
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24  rounded-full object-cover border-4 border-amber-100"
                />
              </div>
        
              {/* Reviewer Name & Role */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-amber-500 font-medium">{testimonial.role}</p>
              </div>
            </div>
        
            {/* Testimonial Content */}
            <p className="text-gray-600 leading-relaxed mt-6">{testimonial.content}</p>
          </div>
        </div>
        
           
            ))}
          </Slider>

          {/* Decorative Dots Pattern */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
            {decorativeDots.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-amber-500 opacity-20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;