'use client';

import Section from '@/components/General/Section';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function DocumentationPage({}: Props) {
  return (
    <Section>
      <Link href='/'>return home</Link>;
    </Section>
  );
}
