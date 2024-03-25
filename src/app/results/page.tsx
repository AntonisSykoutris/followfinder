'use client';

import Section from '@/components/General/Section';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function ResultsPage({}: Props) {
  return (
    <Section>
      <Link href='/'>return home</Link>;
    </Section>
  );
}
