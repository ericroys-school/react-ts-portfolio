import { To } from 'react-router-dom';
import { RoleId } from '../types/role';
import { StackId } from '../types/stack';

export type Project = {
  href: To;
  name: String;
  description: String;
  role: RoleId[];
  stack: StackId[];
  order: number;
};
