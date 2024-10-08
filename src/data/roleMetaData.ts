import { TfiWrite } from 'react-icons/tfi';
import { RoleNames, Role, RoleId } from '../types/role';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FiCodepen } from 'react-icons/fi';
import { GiArchiveResearch } from 'react-icons/gi';
import { GrDocumentTest } from 'react-icons/gr';
import {
  MdDeveloperMode,
  MdOutlineArchitecture,
  MdOutlineContactPhone,
} from 'react-icons/md';
import { SiWebex, SiWikipedia } from 'react-icons/si';

/** For lack of a database to store all this lovely information
 *  we are defining the data model for the Roles available
 *
 */
export const Roles: Role[] = [
  { id: 'AUTHOR', name: RoleNames.AUTHOR, icon: TfiWrite },
  { id: 'DEV', name: RoleNames.DEV, icon: MdDeveloperMode },
  { id: 'DES', name: RoleNames.DES, icon: MdOutlineArchitecture },
  { id: 'DESDEV', name: RoleNames.DESDEV, icon: FiCodepen },
  { id: 'RAND', name: RoleNames.RAND, icon: GiArchiveResearch },
  { id: 'DOC', name: RoleNames.DOC, icon: SiWikipedia },
  { id: 'QA', name: RoleNames.QA, icon: GrDocumentTest },
  { id: 'SUP', name: RoleNames.SUP, icon: MdOutlineContactPhone },
  { id: 'PRESALES', name: RoleNames.PRESALES, icon: SiWebex },
  { id: 'CONTRIBUTOR', name: RoleNames.CONTRIBUTOR, icon: BsPersonArmsUp },
];

/**
 * Get a Role using RoleId
 * @param {RoleId} id
 * @returns {Role | null}
 */
export const getRoleDetails = (id: RoleId): Role | null => {
  //generally we'd sort this first but the amount of data here is trivial
  return Roles.find((s) => s.id === id) || null;
};
