import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="px-5">
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex  flex-col md:even:flex-row-reverse  md:flex-row items-center w-full gap-3 my-5"
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
          <div className="md:w-[40%] px-2">
            <h3 className="text-3xl">{project.name}</h3>
            <p
              className="font-text"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></p>
            <p className="my-2 font-text text-yellow-700">
              Technologies: {project.tools}
            </p>
            <Link href={project.url} target="_blank" rel="noreferrer noopener">
              <span className="underline">View Project &rarr;</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
