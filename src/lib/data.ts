import { timeStamp } from 'console';
import { DropdownItem, FooterNavLink } from './types';
import { LuCastle } from 'react-icons/lu';
import { Table, UploadCloud, UserCheck, UserX } from 'lucide-react';

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
    title: 'Privacy Policy',
    href: '/privacy-policy',
    description: 'Visually or semantically separates content.'
  }
];

export const Features = [
  {
    name: 'Identify Non-Mutual Followers',
    description:
      'The app quickly identifies users you follow who do not follow you back. This helps you easily manage your following list by highlighting one-sided connections.',
    icon: UserX
  },
  {
    name: 'Detect Unreciprocated Followers',
    description:
      "The app also identifies users who follow you, but you don't follow them back. This feature allows you to engage with followers you may have missed or consider following them back.",
    icon: UserCheck
  },
  {
    name: 'Detailed Summary Tables',
    description:
      'The app generates clear and organized tables displaying the lists of unreciprocated follows and followers. This makes it easy to visualize and manage your Instagram connections efficiently.',
    icon: Table
  },
  {
    name: 'User-Friendly JSON Uploads',
    description:
      'The app allows users to upload JSON files containing their follower and following data. With a simple upload process, users can quickly get actionable insights without any manual data entry.',
    icon: UploadCloud
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
  }
];

export const FooterImportantLinks: FooterNavLink[] = [
  {
    name: 'Terms of Service',
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
  { name: 'DATE', uid: 'date', sortable: true }
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
