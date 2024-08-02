'use client';

import Section from '@/components/General/Section';
import TableDemo from '@/components/General/TableDemo';
import { Users } from '@/lib/types';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function ResultsPage({}: Props) {
  const [followingData, setFollowingData] = useState<Users[]>([]);
  const [followersData, setFollowersData] = useState<Users[]>([]);

  useEffect(() => {
    // Retrieve and parse the data from localStorage
    const responseStrings = localStorage.getItem('responseStrings');

    if (responseStrings) {
      try {
        const parsedData = JSON.parse(responseStrings);

        // Extract and store the arrays separately
        setFollowingData(parsedData.following || []);
        setFollowersData(parsedData.followers || []);
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []); // Empty dependency array means this useEffect runs once on component mount

  return (
    <Section className=' mt-20 grid h-fit grid-cols-1  items-center gap-4 2xl:grid-cols-2'>
      {/* <Link href='/'>return home</Link>; */}
      {/* <section>
        <h2>Following</h2>
        <TableDemo users={followingData} />
      </section> */}
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Followers List</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <TableDemo users={followersData} />
        </CardBody>
      </Card>
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Following List</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <TableDemo users={followingData} />
        </CardBody>
      </Card>
    </Section>
  );
}
