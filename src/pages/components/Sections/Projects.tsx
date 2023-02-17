import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EndlessCarousel from "../Carousel";
import Heading from "../Heading";

const Projects = () => {
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
                  className="font-text mb-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="underline">View Project &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </EndlessCarousel>
      </div>
    </section>
  );
};

export default Projects;
