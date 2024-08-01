import { timeStamp } from 'console';
import { DropdownItem, FooterNavLink } from './types';
import { LuCastle } from 'react-icons/lu';

export const MOTION_SLIDE_DEFAULT_DELAY = 0.5;

export const COLORS_TOP = ['#bc1888', '#CE84CF', '#e6683c'];

export const navItems = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Documentation',
    link: '/documentation'
  }
];

export const dropdownItems: DropdownItem[] = [
  {
    title: 'About Us',
    href: '/about',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Terms of Services',
    href: '/terms-of-services',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Services',
    href: '/services',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'FAQ',
    href: '/faq',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
];

export const Features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: LuCastle
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LuCastle
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: LuCastle
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: LuCastle
  }
];

export const FooterCompanyLinks: FooterNavLink[] = [
  {
    name: 'About Us',
    link: '#'
  },
  {
    name: 'Services',
    link: '#'
  },
  {
    name: 'FAQ',
    link: '/faq'
  }
];

export const FooterImportantLinks: FooterNavLink[] = [
  {
    name: 'Terms of Services',
    link: '/terms-of-service'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy-policy'
  },
  {
    name: 'Documentation',
    link: '/documentation'
  }
];

export const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'DATE', uid: 'date' }
];

export const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    date: '22/05/2024'
  },
  {
    id: 2,
    name: 'Zoey Lang',
    date: '24/05/2024'
  }
];
