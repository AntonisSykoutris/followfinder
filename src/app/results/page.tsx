'use client';

import Section from '@/components/General/Section';
import Link from 'next/link';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <Section>
      <Link href='/'>return home</Link>;
    </Section>
  );
}

export default page;
