import { NavLink } from 'react-router-dom';
import { getRoleDetails } from '../data/roleMetaData';
import { getStackDetails } from '../data/stackMetaData';
import { StyledIconListCard } from '../lib/card-styledIconList';
import { Project } from '../types/project';
import { StyledIconText } from '../types/styledIconTxt';

/**
 * Define the prop type accepted by the component
 */
type Props = {
  project: Project;
};

export const ProjectItem = (props: Props) => {
  const { name, description, href, stack, role } = props.project;
  const x = href;
  console.log(href)
  //convert the tech stacks for use in display
  let t: StyledIconText[] = [];
  stack.forEach((p) => {
    let x = getStackDetails(p);
    if (x) t.push({ text: x.name, icon: x.icon });
  });

  //convert roles for use in display
  let r: StyledIconText[] = [];
  role.forEach((rid) => {
    let y = getRoleDetails(rid);
    if (y) r.push({ text: y.name, icon: y.icon });
  });

  return (
    <div className='w-3/4 mt-6 shadow-md shadow-greenish-light'>
      <div
        className='flex flex-col items-center justify-center h-24 rounded-t-md w-full 
        text-center justify-items-center bg-[url("/images/computer_bits.png")] bg-cover shadow-lg shadow-pinkish'
        title='computer with gears'></div>
      <div
        className='border-r border-b border-l border-bluish bg-white rounded-b p-4 flex 
        flex-col '>
        <div className='mb-8'>
          <div className='text-gray-900 font-bold text-xl mb-2 drop-shadow-abc'>
            {name}
          </div>
          <p className='text-gray-700 text-base drop-shadow-abc'>
            {description}
          </p>
        </div>
        <div className='flex items-center flex-col'>
          <div
            className='text-sm rounded-md border-bluish border-2 w-full 
          h-50 text-center flex p-2 justify-between bg-gradient-to-r from-bluish to-greenish-light'>
            <div className='w-1/2 flex mr-1'>
              {t.length > 0 ? (
                <StyledIconListCard
                  data={{ headerTxt: 'Tech Stack', iconTexts: t }}
                />
              ) : (
                <></>
              )}
            </div>
            <div className='w-1/2 flex'>
              {r.length > 0 ? (
                <StyledIconListCard
                  data={{ headerTxt: 'Roles', iconTexts: r }}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='m-1 p-1'>
            <a
              target='_blank'
              href={href.toString()}
              className='font-bold pl-2 hover:shadow-md hover:shadow-greenish-light rounded-md text-bluish-dark'>
              More Information...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
