import React, { useEffect, useState } from "react";
import { MapPin, House } from "lucide-react";
import axios from "axios";

const PropertyShowcase = () => {
  const [Apidata, setApidata] = useState({ getProjects: [], getHomePage: {} });
  const [Projectdata, setProjectdata] = useState([]);

  const baseusrl = "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/";

        const ApiBaseUrl = process.env.REACT_APP_ApiBaseUrl;

  const dataget = () => {
    axios
      .get(ApiBaseUrl)
      .then((response) => response.data)
      .then((data) => data._data)
      .then((data) => setApidata(data));
  };

  useEffect(() => {
    dataget();
  }, []);

  useEffect(() => {
    if (Apidata.getProjects) {
      const finaldata = Apidata.getProjects.map((v, i) => ({
        id: i,
        name: v.name,
        titleimage: v.project_logo_1,
        location: v.address,
        image: v.project_logo_2,
        tag: v.current_status,
        tagColor: "bg-blue-500", // Adjust as needed
      }));
      setProjectdata(finaldata);
    }
  }, [Apidata]);

  return (
    <div
      style={{ backgroundImage: "url('images/whyashapurna-bg.webp')" }}
      className="mt-8"
    >
      <div className="min-h-screen p-8 max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <p className="text-orange-400 uppercase tracking-wide mb-2">
            {Apidata.getHomePage?.project_overview_title}
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {Apidata.getHomePage?.project_overview_tagline}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {Apidata.getHomePage?.project_overview_description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projectdata.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={baseusrl+project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-4 right-4 ${project.tagColor} text-white text-sm px-3 py-1 rounded-full`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white transform translate-y-0 group-hover:translate-y-[-50%] transition-transform duration-300 ease-in-out pb-2">
                {/* Title and Image Section */}
                <div className="flex justify-start items-center mb-2 space-x-2">
                  <img
                    src={baseusrl+project.titleimage}
                    alt="Title Logo"
                    className="w-[20px] h-[20px]"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.name}
                  </h3>
                </div>

                {/* Location Section */}
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 flex justify-between pt-5 pb-1">
                <div className="flex items-center text-gray-600">
                  <House className="w-4 h-4 mr-2" />
                  <p className="text-sm">{project.location}</p>
                </div>
                <button className="w-full bg-blue-900 text-white py-1 rounded hover:bg-blue-800 transition-colors duration w-[100px]">
                  See All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
