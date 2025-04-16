import React, { useState, useEffect } from "react";
import axios from "axios";

const BestChoice = () => {
  const ApiBaseUrl = process.env.REACT_APP_ApiBaseUrl;

  const [apiData, setApiData] = useState({});
  const [features, setFeatures] = useState([]);

  // Fetch Data
  const getData = async () => {
    try {
      const response = await axios.get(ApiBaseUrl);
      const data = response.data._data;

      setApiData(data);
      const imageBaseUrl = data.why_choose_us_image_path;

      // Process features dynamically
      const processedFeatures = data.getWhyChooseUs.map((item) => ({
        icon: `${imageBaseUrl}${item.image}`, // Full image URL
        title: item.title,
        description: `${item.short_description}...`,
        link: "#",
      }));
      console.log(processedFeatures)

      setFeatures(processedFeatures);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('images/whyashapurna-bg.webp')" }}
    >
      <div className="py-16 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {apiData?.getHomePage?.why_us_tagline || "Why Choose Us"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {apiData?.getHomePage?.why_us_description || "Loading..."}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-b-8 border-[#be8553] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon/Image */}
                <div className="mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 py-2 border-[#be8553]">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {/* Link */}
                <a
                  href={feature.link}
                  className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
