'use client';

import Section from '@/components/General/Section';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function ResultsPage({}: Props) {
  const [followingData, setFollowingData] = useState<
    { value: string; timestamp: number }[]
  >([]);
  const [followersData, setFollowersData] = useState<
    { value: string; timestamp: number }[]
  >([]);

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
    <Section>
      <Link href='/'>return home</Link>;
      <section>
        <h2>Following</h2>
        <ul>
          {followingData.map((item, index) => (
            <li key={index}>
              <a
                href={`https://www.instagram.com/${item.value}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.value}
              </a>{' '}
              - {new Date(item.timestamp * 1000).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Followers</h2>
        <ul>
          {followersData.map((item, index) => (
            <li key={index}>
              <a
                href={`https://www.instagram.com/${item.value}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.value}
              </a>{' '}
              - {new Date(item.timestamp * 1000).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
}
