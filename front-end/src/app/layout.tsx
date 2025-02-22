import { PropsWithChildren } from 'react';

import { Paper } from '@mui/material';

import './global.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <Paper component="body" elevation={5} square>
        {children}
      </Paper>
    </html>
  );
}
