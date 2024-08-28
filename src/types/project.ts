import { RoleId } from '../types/role';
import { StackId } from '../types/stack';

export type Project = {
  href: URL;
  name: String;
  description: String;
  role: RoleId[];
  stack: StackId[];
  order: number;
};
