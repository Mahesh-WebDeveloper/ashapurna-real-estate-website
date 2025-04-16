import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutSection = () => {
  const [aboutUsData, setAboutUsData] = useState({});
  const [imageBaseUrl, setImageBaseUrl] = useState("");

  const apiBaseUrl = process.env.REACT_APP_ApiBaseUrl;

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(apiBaseUrl);
        const data = response.data._data;

        // Set state with data
        setAboutUsData({
          ...data.aboutUs,
          ...data.getHomePage, // Combine homepage and counter data
        });

        setImageBaseUrl(data.home_page_image_path || "");
      } catch (error) {
        console.error("Error fetching About Us data:", error);
      }
    };

    fetchAboutData();
  }, [apiBaseUrl]);

  return (
    <div className="w-full bg-gray-50 py-16 max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          {/* Image Section */}
          {aboutUsData.homepage_image && (
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[400px]">
                <img
                  src={`${imageBaseUrl}${aboutUsData.homepage_image}`}
                  alt="Luxury Building"
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            {aboutUsData.homepage_title && (
              <div className="space-y-2">
                <h3 className="text-amber-700 text-lg font-medium">
                  {aboutUsData.homepage_title}
                </h3>
                <h2 className="text-3xl font-bold text-gray-900">
                  {aboutUsData.homepage_tagline}
                </h2>
              </div>
            )}

            {aboutUsData.homepage_description && (
              <div
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: aboutUsData.homepage_description,
                }}
              ></div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-gray-100 p-8 rounded-lg">
          {/* Dynamic Stats Rendering */}
          {[
            {
              image: aboutUsData.about_years_experience_image,
              value: aboutUsData.about_years_experience_value,
              label: aboutUsData.about_years_experience_title,
            },
            {
              image: aboutUsData.about_project_completed_image,
              value: aboutUsData.about_project_completed_value,
              label: aboutUsData.about_project_completed_title,
            },
            {
              image: aboutUsData.about_happy_families_image,
              value: aboutUsData.about_happy_families_value,
              label: aboutUsData.about_happy_families_title,
            },
            {
              image: aboutUsData.about_delivered_image,
              value: aboutUsData.about_delivered_value,
              label: aboutUsData.about_delivered_title,
            },
            {
              image: aboutUsData.about_units_image,
              value: aboutUsData.about_units_value,
              label: "Units",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`${imageBaseUrl}${stat.image}`}
                  alt={stat.label}
                  className="w-12 h-12"
                />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
