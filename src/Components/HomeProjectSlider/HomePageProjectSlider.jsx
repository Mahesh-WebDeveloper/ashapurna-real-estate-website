import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const ProjectSlider = () => {
  const ApiBaseUrl = process.env.REACT_APP_ApiBaseUrl;

  const [projectData, setProjectData] = useState([]);
  const baseurl =
    "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/";
  const amenityBaseurl =
    "https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/";

  // Fetch project data
  const fetchProjects = async () => {
    try {
      const response = await axios.get(ApiBaseUrl);
      const data = response?.data?._data?.getFeaturedProjects || [];
      const formattedData = data.map((project) => ({
        title: project.name,
        titleImg: project.project_logo_2,
        homepageImage: project.homepage_image,
        description: project.short_description,
        badge: project.badge,
        subBadge: project.sub_badge,
        amenities: project.amenities.map((amenity) => ({
          icon: amenity.image,
          title: amenity.title,
          subtitle: amenity.sub_title,
        })),
      }));
      setProjectData(formattedData);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 mx-1 rounded-full bg-orange-300 hover:bg-orange-400" />
    ),
  };

  return (
    <div className="bg-[#f4efeb] py-6 mt-8">
      <div className="max-w-[1200px] mx-auto ">
        {/* Section Heading */}
        <div className="text-start mb-2">
          <p className="text-orange-400 text-lg font-semibold">OUR WORK</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings} className="relative">
          {projectData.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 items-center shadow-md rounded-lg">
                {/* Image Section */}
                <div className="">
                  <img
                    src={`${baseurl}${project.homepageImage}`}
                    alt={project.title || "Project Image"}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col space-y-4">
                  {/* Title and Logo */}
                  <div className="flex items-center space-x-4">
                    {project.titleImg && (
                      <img
                        src={`${baseurl}${project.titleImg}`}
                        alt={project.title || "Project Logo"}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600">{project.description}</p>

                  {/* Amenities */}
                  {/* Amenities */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <img
                          src={`${amenityBaseurl}${amenity.icon}`}
                          alt={amenity.title}
                          className="w-8 h-8 object-contain"
                        />
                        <div>
                          <div className="text-sm font-semibold text-[#be8553]">
                            {amenity.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {amenity.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
             

                  {/* Button */}
                  <button className="self-start bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500 transition-colors">
                    See All
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;
