import React from 'react';
import { projectData } from '../data/projectData';
import { ProjectItem } from './projectItem';
export const ProjectList = () => {
    projectData.sort((a, b)=> a.order - b.order)
  return (
    <>
    <div className='flex flex-wrap flex-col content-center '>
      {projectData.map((p, i) => {
        return <ProjectItem key={i} project={p} />;
      })}

    </div>
    </>
  );
};
