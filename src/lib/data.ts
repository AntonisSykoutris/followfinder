import { FooterNavLink } from './types';
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
    link: '#'
  },
  {
    name: 'Privacy Policy',
    link: '#'
  },
  {
    name: 'Documentation',
    link: '#'
  }
];
