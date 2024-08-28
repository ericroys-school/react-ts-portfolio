import { Project } from '../types/project';

/** For lack of a database to store all this lovely information
 *  we are defining the data model for the Project available
 *  in the portfolio. Certainly we could have shovelled it into
 *  plain json, but that would have added the nuance of validating
 *  the data (Zod) and dealing with the nuances of the iconography. So,
 *  let's just leave that for another day.
 */
export const projectData: Project[] = [
  {
    href: new URL('https://ericroys-school.github.io/horiseon_web'),
    name: 'Horiseon Web',
    description:
      'A learning opportunity to enhance an existing code base to make it more accessible using best practice standards for accessibility in web design. This practice will ensure inclusivity is baked into the design in future greenfield projects, as well as, supporting similar changes to other code base(s) that require inclusion, but were not originally designed for it.',
    stack: ['HTML', 'CSS'],
    role: ['AUTHOR', 'DESDEV', 'DOC'],
    order: 75,
  },
  {
    href: new URL(
      'https://github.com/ericroys/odin_marketplace_helion_openstack'
    ),
    name: 'Odin OpenStack',
    description:
      'A deployable proto-type package for the Ingram Micro Odin Service Automation platform to deliver consumable services for HP Helion Openstack.',
    stack: ['HTML', 'JAVASCRIPT', 'AJAX', 'PHP', 'PYTHON'],
    role: ['DESDEV', 'RAND', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 1,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/keyva-jira-plug-in-for-vmware-aria-automation-orchestrator-4?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - Jira Plug-in',
    description:
      'The Jira Plug-in for VMware® Aria Automation™ Orchestrator™ provides workflows and actions to communicate with a Jira system via RESTful API.',
    stack: ['JAVA', 'JAVASCRIPT', 'REST', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 2,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/bmc-helix-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - BMC Helix Plug-in',
    description:
      'The BMC Helix® Plug-in for VMware® vRealize™ Orchestrator™ simplifies integration and provides an interface between Orchestrator and BMC Remedy ITSM and Atrium servers, leaving you with accelerated provisioning and configuration.',
    stack: ['JAVA', 'JAVASCRIPT', 'REST', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 4,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/servicenow-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - ServiceNow Plug-in',
    description:
      'The ServiceNow® Plug-in for VMware® vRealize™ Orchestrator™ simplifies integration and reduces the time to manage your physical and virtual servers in a data center throughout their lifecycles, accelerating provisioning and configuration.',
    stack: ['JAVA', 'JAVASCRIPT', 'REST', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 3,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/micro-focus-server-automation-sa-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - MicroFocus Server Automation',
    description:
      'Leverage products that enable and accelerate server provisioning and configuration, simplifies the integration and reduces the time needed to manage the physical and virtual servers in a data center throughout their lifecycle.',
    stack: ['JAVA', 'JAVASCRIPT', 'SOAP', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 4,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/bmc-bladelogic-server-automation-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - BMC BladeLogic Server Automation Plug-in',
    description:
      'Leverage products that enable and accelerate server provisioning and configuration, it simplifies the integration and reduces the time needed to manage the physical and virtual servers in a data center throughout their lifecycle',
    stack: ['JAVA', 'JAVASCRIPT', 'REST', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 5,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/hpe-service-manager-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - MicroFocus Service Manager Plug-in',
    description:
      'Bridges the gap between VMware based virtualization layer and MicroFocus IT Service Management. Integrates with MicroFocus Service Manager Help Desk / Change Management.',
    stack: ['JAVA', 'JAVASCRIPT', 'SOAP', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 6,
  },
  {
    href: new URL(
      'https://marketplace.cloud.vmware.com/services/details/hpe-ucmdb-plug-in-for-vmware-vrealize-orchestrator?slug=true'
    ),
    name: 'VMware Aria Automation Orchestrator - MicroFocus uCMDB Plug-in',
    description:
      'The MicroFocus Service Manager and MicroFocus uCMDB Plug-ins automate the management of ITSM and CMDB applications respectively by providing interaction between vCO and MicroFocus environments.',
    stack: ['JAVA', 'JAVASCRIPT', 'SOAP', 'VRO'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 7,
  },
  {
    href: new URL('https://marketplace.connectwise.com/eaton'),
    name: 'ConnectWise Automate plugin for Eaton Power Management',
    description:
      'The Eaton plug-in for ConnectWise allows MSPs to see the events (on the Automate dashboard) of an automation as it progresses once it has been initiated.',
    stack: ['NET', 'THIRDPARTY'],
    role: ['AUTHOR', 'DESDEV', 'DOC', 'QA', 'SUP', 'PRESALES'],
    order: 8,
  },
  {
    href: new URL(
      'https://store.servicenow.com/sn_appstore_store.do#!/store/application/659f0e251b3eb30071e463d07e4bcbd9'
    ),
    name: 'CloudGuard CNAPP',
    description: `This application enable an integration between CloudGuard CNAPP.

    Users can enable ingesting CSPM findings into ServiceNow ITSM and convert them to incidents.
    
    It also enables user to recieve CWP Container vulnerabilities (CVEs) into ServiceNow Container vulnerability response module.
    
    The application automates incident workflow and steamlines vulnerability menagement life cycle of security and posture findings generated by CloudGuard Compliance and vulnerability scanning engines.`,
    stack: ['JAVASCRIPT', 'REST', 'NOW'],
    role: ['DEV', 'CONTRIBUTOR'],
    order: 9,
  },
  {
    href: new URL('https://github.com/ericroys-school/social-network-api'),
    name: 'Social Network API',
    description:
      'Demonstration of using Node/Express to serve a Restful API using Mongoose ODM for Mongo DB.',
    stack: ['JAVASCRIPT', 'EXPRESS', 'NODEJS', 'MONGOOSE', 'MONGODB'],
    role: ['AUTHOR', 'DESDEV', 'DOC'],
    order: 9,
  },
  {
    href: new URL('https://github.com/ericroys-school/mvc-tech-blog'),
    name: 'An MVC Blog App',
    description:
      'A blog application allowing to CRUD blog articles and add commentary',
    stack: ['JAVASCRIPT', 'NODEJS', 'EXPRESS', 'SEQUELIZE', 'POSTGRESQL'],
    role: ['AUTHOR', 'DESDEV', 'DOC'],
    order: 10,
  },
  {
    href: new URL('https://github.com/ericroys-school/employee-tracker-sql'),
    name: 'Employee Management',
    description:
      'Simplified command line interface for an employee tracker system with sql backend',
    stack: ['JAVASCRIPT', 'INQUIRER', 'NODEJS', 'POSTGRESQL'],
    role: ['AUTHOR', 'DESDEV', 'DOC'],
    order: 11,
  },
];
