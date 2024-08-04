'use client';

import Section from '@/components/General/Section';
import DataTable from '@/components/General/DataTable';
import { Users } from '@/lib/types';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import UserCard from '@/components/General/UserCard';

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
  }, []);

  return (
    <Section className=' 3xl:grid-cols-4 mt-20 grid h-fit grid-cols-1 items-center gap-4 2xl:grid-cols-2'>
      <UserCard
        title='Not Following Back List'
        subtitle='check it out'
        data={notFollowingBack}
      />
      <UserCard
        title='Not Followed Back List'
        subtitle='check it out'
        data={notFollowedBack}
      />
      <UserCard
        title='Following List'
        subtitle='check it out'
        data={followingData}
      />
      <UserCard
        title='Followers List'
        subtitle='check it out'
        data={followersData}
      />
    </Section>
  );
}
