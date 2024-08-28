import { RoleId } from '../types/role';
import { StackName } from '../types/stack';

export type Project = {
  href: URL;
  name: String;
  description: String;
  role: RoleId[];
  stack: StackName[];
  order: number;
};
