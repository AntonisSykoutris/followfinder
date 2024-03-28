'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { DropdownItem } from '@/lib/types';

type Props = {
  dropdownList: DropdownItem[];
};

export function Dropdown({ dropdownList }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Help</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[90dvw] gap-3 p-4 md:w-[60dvw] md:grid-cols-2 lg:w-[40dvw] xl:w-[35dvw] 2xl:w-[25dvw] '>
              {dropdownList.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<{
  title: string;
  href: string;
  children: React.ReactNode;
}> = ({ title, href, children }) => {
  return (
    <li>
      <Link href={href}>
        <div
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          )}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
};
