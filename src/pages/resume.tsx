import React from 'react';
import { BackStacks, FrontStacks } from '../data/stackMetaData';
import StyledIconText from '../lib/styledIconText';
import { NavLink } from 'react-router-dom';
import { FaCloudDownloadAlt } from 'react-icons/fa';

export const Resume = () => {
  return (
    <section
      id='Resume'
      className='flex flex-col mt-10 w-full items-center '>
      <h1 className='text-4xl font-bold text-center drop-shadow-abc mb-2'>
        Resume
      </h1>
      <NavLink to={'https://docs.google.com/document/d/15wPouCifooEEIeipAl56ctg03Yi5Oxv8fDptMXf7GPI/edit?usp=sharing'}>
        <StyledIconText icon={FaCloudDownloadAlt } text='Download'/>
      </NavLink>
      <h1 className={txtClass + ' mt-2'}>Front-End Proficiencies</h1>
      <div className={dClass}>
        {FrontStacks.map((s, idx) => (
          <StyledIconText key={idx} iconClass={iClass} icon={s.icon} text={s.name} txtClass={itClass} />
        ))}
      </div>
      <h1 className={txtClass + ' mt-3'}>Back-End Proficiencies</h1>
      <div className={dClass}>
        {BackStacks.map((s, idx) => (
          <StyledIconText key={idx} icon={s.icon} iconClass={iClass} text={s.name} txtClass={itClass} />
        ))}
      </div>
    </section>
  );
};

const txtClass = `text-2xl font-bold text-center drop-shadow-abc mb-5`;
const itClass = ` text-bluish-dark font-extrabold drop-shadow-abc`
const iClass = `size-6 color-redish fill-redish mb-2`
const dClass = `flex flex-col items-center content-center`