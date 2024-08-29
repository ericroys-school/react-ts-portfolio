import {
  DiDocker,
  DiGo,
  DiJava,
  DiJavascript,
  DiPhp,
  DiPython,
} from 'react-icons/di';
import { Stack, StackId, StackNames } from '../types/stack';
import {
  TbApi,
  TbBrandMongodb,
  TbBrandTypescript,
  TbFileTypeXml,
} from 'react-icons/tb';
import {
  SiExpress,
  SiGnubash,
  SiHandlebarsdotjs,
  SiMongoose,
  SiPostgresql,
  SiSequelize,
  SiSpring,
} from 'react-icons/si';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { BsFiletypeJson } from 'react-icons/bs';
import { FaCss3Alt, FaHtml5, FaTools } from 'react-icons/fa';
import { TiWeatherSnow } from 'react-icons/ti';
import { RiNodejsLine } from 'react-icons/ri';

export const Stacks: Stack[] = [
  { id: 'JAVA', name: StackNames.JAVA, icon: DiJava },
  { id: 'TYPESCRIPT', name: StackNames.TYPESCRIPT, icon: TbBrandTypescript },
  { id: 'PHP', name: StackNames.PHP, icon: DiPhp },
  { id: 'GO', name: StackNames.GO, icon: DiGo },
  { id: 'JAVASCRIPT', name: StackNames.JAVASCRIPT, icon: DiJavascript },
  { id: 'SPRING', name: StackNames.SPRING, icon: SiSpring },
  { id: 'DOCKER', name: StackNames.DOCKER, icon: DiDocker },
  { id: 'NET', name: StackNames.NET, icon: TfiMicrosoftAlt },
  { id: 'PYTHON', name: StackNames.PYTHON, icon: DiPython },
  { id: 'SOAP', name: StackNames.SOAP, icon: TbFileTypeXml },
  { id: 'REST', name: StackNames.REST, icon: BsFiletypeJson },
  { id: 'THIRDPARTY', name: StackNames.THIRDPARTY, icon: TbApi },
  { id: 'POSTGRESQL', name: StackNames.POSTGRESQL, icon: SiPostgresql },
  { id: 'MONGODB', name: StackNames.MONGODB, icon: TbBrandMongodb },
  { id: 'MONGOOSE', name: StackNames.MONGOOSE, icon: SiMongoose },
  { id: 'HANDLEBARS', name: StackNames.HANDLEBARS, icon: SiHandlebarsdotjs },
  { id: 'SEQUELIZE', name: StackNames.SEQUELIZE, icon: SiSequelize },
  { id: 'INQUIRER', name: StackNames.INQUIRER, icon: SiGnubash },
  { id: 'HTML', name: StackNames.HTML, icon: FaHtml5 },
  { id: 'CSS', name: StackNames.CSS, icon: FaCss3Alt },
  { id: 'VRO', name: StackNames.VRO, icon: FaTools },
  { id: 'NOW', name: StackNames.NOW, icon: TiWeatherSnow },
  { id: 'NODEJS', name: StackNames.NODEJS, icon: RiNodejsLine },
  { id: 'EXPRESS', name: StackNames.EXPRESS, icon: SiExpress },
];

/**
 * @param {StackId} id the id of the stack
 * @returns {Stack | null} if not found in the data array
 */
export const getStackDetails = (id: StackId): Stack | null => {
  //generally we'd sort this first but the amount of data here is trivial
  return Stacks.find((s) => s.id === id) || null;
};
