import Image from "next/image";
import React from "react";
import EndlessCarousel from "../Carousel";
import Heading from "../Heading";

const Projects = () => {
  const projects = [
    {
      image: "setlinn.png",
      name: "Setlinn",
      description:
        "In this project, I led the development of a social network. I was in charge of the work of three other developers and I also led in making architectural and technical decisions ",
    },
    {
      image: "cfl.png",
      name: "Cofounderslab",
      description:
        "I worked as a fullstack developer at cofounderslab.com, one of the features I implemented was the polling feature. I was also in charge of reviewing code and managing production deployments ",
    },
    {
      image: "food.png",
      name: "Dishplug",
      description:
        "Dishplug is my side project, I built it together with <a class='underline' href='https://oware.me'>Derek Oware </a>, Dishplug is primarily a food marketplace that has orders delivered to buyers in the shortest possible time. We have processed 260 orders so far.",
    },
    {
      image: "mschristmas.png",
      name: "MS Christmas",
      description:
        "I built this project as a contractor a while back, the aim of this project was for M&S to showcase their Christmas Food catalog in a modern and beautiful way. The website was built to tell a story",
    },
  ];
  return (
    <section className="px-5 pt-12">
      <Heading name="projects" />
      <div className="py-4">
        <EndlessCarousel>
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row items-center w-full max-h-[400px] gap-3"
            >
              <Image
                priority
                src={`/${project.image}`}
                alt="Setlinn"
                width={300}
                height={300}
                unoptimized
                className="md:w-[60%] h-full"
              />
              <div className="md:w-[40%]">
                <h3 className="text-3xl">{project.name}</h3>
                <p
                  className="font-text"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
              </div>
            </div>
          ))}
        </EndlessCarousel>
      </div>
    </section>
  );
};

export default Projects;
