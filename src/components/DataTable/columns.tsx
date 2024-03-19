'use client';

import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { LuChevronsUpDown } from 'react-icons/lu';
import { Button } from '../ui/button';

export type Follower = {
  id: string;
  nickname: string;
};

export const columns: ColumnDef<Follower>[] = [
  {
    accessorKey: 'nickname',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nicknames
          <LuChevronsUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    }
  }
];
