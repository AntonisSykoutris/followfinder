'use client';

import Section from '@/components/General/Section';
import DataTable from '@/components/General/DataTable';
import { Users } from '@/lib/types';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function ResultsPage({}: Props) {
  const [followingData, setFollowingData] = useState<Users[]>([]);
  const [followersData, setFollowersData] = useState<Users[]>([]);
  const [notFollowingBack, setNotFollowingBack] = useState<Users[]>([]);
  const [notFollowedBack, setNotFollowedBack] = useState<Users[]>([]);

  useEffect(() => {
    // Retrieve and parse the data from localStorage
    const responseStrings = localStorage.getItem('responseStrings');

    if (responseStrings) {
      try {
        const parsedData = JSON.parse(responseStrings);

        // Extract and store the arrays separately
        const following = parsedData.following || [];
        const followers = parsedData.followers || [];

        setFollowingData(following);
        setFollowersData(followers);

        // Determine users who don't follow you back
        const notFollowingYouBack = following.filter(
          (user: Users) =>
            !followers.some((follower: Users) => follower.name === user.name)
        );
        console.log(notFollowingYouBack);
        setNotFollowingBack(notFollowingYouBack);

        // Determine users who you don't follow back
        const notFollowedYouBack = followers.filter(
          (user: Users) =>
            !following.some((followed: Users) => followed.name === user.name)
        );
        setNotFollowedBack(notFollowedYouBack);
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []); // Empty dependency array means this useEffect runs once on component mount

  return (
    <Section className=' 3xl:grid-cols-4 mt-20 grid h-fit grid-cols-1 items-center gap-4 2xl:grid-cols-2'>
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Followers List</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <DataTable users={followersData} />
        </CardBody>
      </Card>
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Following List</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <DataTable users={followingData} />
        </CardBody>
      </Card>
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Not Following Back</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <DataTable users={notFollowingBack} />
        </CardBody>
      </Card>
      <Card className='h-[70vh] lg:h-[66vh]'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Not Followed Back</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <DataTable users={notFollowedBack} />
        </CardBody>
      </Card>
    </Section>
  );
}
