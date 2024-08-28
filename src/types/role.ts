import { IconType } from 'react-icons';

/**
 * Define a Role having an id, name, and an icon
 */
export type Role = {
  id: RoleId;
  name: RoleName;
  icon: IconType;
};

/**
 * Define the values for keys and names
 */
export const RoleNames = {
  DEV: 'Developer',
  DES: 'Designer',
  DESDEV: 'Designer/Developer',
  AUTHOR: 'Author',
  RAND: 'Research & Development',
  DOC: 'Documentation',
  QA: 'Tester',
  SUP: 'Customer Service',
  PRESALES: 'Pre-Sales Engineer',
  CONTRIBUTOR: 'Contributor',
} as const;

/**
 * make RoleId and RoleName accessible
 */
export type RoleId = keyof typeof RoleNames;
export type RoleName = (typeof RoleNames)[RoleId];
