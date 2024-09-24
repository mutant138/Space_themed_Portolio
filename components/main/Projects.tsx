import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ecomAdmin.png"
          title="Reactjs Ecomm Admin Panel"
          description="The Reactjs Ecomm Admin Panel allows administrators to manage e-commerce products through seamless CRUD operations, including adding and editing item details. Built with React.js and Redux, it offers a responsive design for easy use across devices."
        />
        <ProjectCard
          src="/pharm.png"
          title="Pharmacy Inventory"
          description="The Pharmacy Inventory system is a comprehensive tool designed for managing pharmaceutical products efficiently.It allows users to track stock levels, manage orders, and handle product information seamlessly."
        />
        <ProjectCard
         src="/reactRest.png"
         title="Reacto Restaurant"
         description="Reacto Restaurant is a dynamic web application that enables users to explore menus, place orders, and view their selections in real-time, all through client-side rendering.Built with React, it showcases modern front-end development practices."
        />
      </div>
    </div>
  );
};

export default Projects;
