'use client';

import { Users } from '@/lib/types';
import React from 'react';
import DataTable from './DataTable';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

type Props = {
  title: string;
  subtitle: string;
  data: Users[];
};

export default function UserCard({ title, subtitle, data }: Props) {
  return (
    <Card className='h-[70vh] lg:h-[66vh]'>
      <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
        <h4 className='text-large font-bold'>{title}</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <DataTable users={data} />
      </CardBody>
    </Card>
  );
}
