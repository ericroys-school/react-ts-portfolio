import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa6';

export type Stack = {
  name: StackName;
  icon: IconType;
};

export const OStackName = {
  JAVA: 'Java',
  TYPESCRIPT: 'Typescript',
  PHP: 'PHP',
  GO: 'Go',
  JAVASCRIPT: 'JavaScript',
  SPRING: 'spring',
  DOCKER: 'Docker',
  NET: '.Net',
  PYTHON: 'Python',
  SOAP: 'SOAP API',
  REST: 'RESTful API',
  THIRDPARTY: 'Third Party API',
  POSTGRESQL: 'PostgreSql',
  MONGODB: 'MongoDB',
  MONGOOSE: 'Mongoose',
  HANDLEBARS: 'Handlebars',
  SEQUELIZE: 'Sequelize',
  INQUIRER: 'Inquirer',
  HTML: 'Html',
  CSS: 'Css',
  AJAX: 'Ajax',
  VRO: 'VMware Aria Orchestrator',
  NOW: 'ServiceNow',
  NODEJS: 'NodeJS',
  EXPRESS: 'Express',
} as const;

export type StackName = keyof typeof OStackName;
