import { IconType } from 'react-icons';

/**
 * Define a Stack having an id, name, and icon
 */
export type Stack = {
  id: StackId;
  name: StackName;
  icon: IconType;
};

/**
 * Define the values for keys and names available
 */
const StackNames = {
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

/**
 * Make StackId and StackName accessible
 */
export type StackId = keyof typeof StackNames;
export type StackName = (typeof StackNames)[StackId];
