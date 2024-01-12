// components/SectionHeading.tsx

import React from 'react';
import { useTranslation } from 'next-i18next';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  const { t } = useTranslation('about');

  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {typeof children === 'string' ? t(children as string) : children}
    </h2>
  );
};

export default SectionHeading;
