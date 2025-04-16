import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ChevronRight } from 'lucide-react';
import axios from 'axios';

const MediaEventsSlider = () => {

  const ApiBaseUrl = process.env.REACT_APP_ApiBaseUrl;
  const [apifinaldata,setapifinaldata] = useState([]);

  const getData = async ( ) =>{
    var getdata = await axios.get(ApiBaseUrl);
    var data = await getdata?.data?._data?.getUtsavCamps || [];
    setapifinaldata(data);

  }

  useEffect(()=>{
    getData();
  },[])
  apifinaldata && console.log(apifinaldata);
  var events = [];
  if(apifinaldata.length>=1){
   var events =  apifinaldata.map((v)=>( {
        id: 1,
        title: v.title,
        location: v.location,
        date: v.date,
        image: `https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/${v.image}`,
       }))
  } 



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Media And Event</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
          See All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <Slider {...settings} className="media-events-slider">
        {events.map((event) => (
          <div key={event.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500 mt-1"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaEventsSlider;