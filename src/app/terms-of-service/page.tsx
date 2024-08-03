'use client';

import Section from '@/components/General/Section';
import React from 'react';

type Props = {};

export default function TermsOfServicePage({}: Props) {
  return (
    <Section
      className='relative mx-auto flex h-fit w-screen
      flex-col overflow-x-hidden p-8 pt-20'
      animate
    >
      <h1 className='mb-4 text-2xl font-bold'>Terms of Service</h1>

      <h2 className='mt-4 text-xl font-semibold'>1. Acceptance of Terms</h2>
      <p>
        By accessing and using FollowFinder, you agree to be bound by these
        Terms of Service. If you do not agree with any part of these terms, you
        must not use our service.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>2. Use of Service</h2>
      <p>
        FollowFinder is a tool designed to help users analyze their Instagram
        follower and following data. The service is provided for personal,
        non-commercial use only. You agree not to misuse the service or use it
        in a way that violates any laws or regulations.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>3. Privacy</h2>
      <p>
        Your privacy is important to us. FollowFinder processes your Instagram
        data locally on your device and does not store or share any of your
        personal information. By using our service, you consent to the local
        processing of your data as described.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>4. Limitation of Liability</h2>
      <p>
        FollowFinder is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. We do not warrant that the service will be
        error-free or uninterrupted. We are not responsible for any damages or
        losses resulting from your use of the service.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>5. Intellectual Property</h2>
      <p>
        All content, trademarks, and other intellectual property associated with
        FollowFinder remain the property of their respective owners. You may not
        reproduce, distribute, or create derivative works based on our service
        without our express permission.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>6. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Any
        changes will be effective immediately upon posting. Your continued use
        of the service after any changes constitutes your acceptance of the new
        terms.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>7. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to FollowFinder at
        any time, without notice, for conduct that we believe violates these
        Terms of Service or is harmful to other users.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>8. Governing Law</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with
        the laws of Greece, without regard to its conflict of law principles.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>9. Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at antonis.sykoutris@protonmail.com.
      </p>
    </Section>
  );
}
