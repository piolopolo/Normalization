/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { Box, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import EmploymentHistory from '../components/EmploymentHistory';
import Biodata from '../components/Biodata';

const DATA = {
  employee: {
    name: 'Fulan bin Titan',
    position: 'Full Stack Developer',
    email: 'sample.address@supermail.sh',
    image: 'https://thispersondoesnotexist.com/',
    biodata: {
      profile: 'A biodegradable employee, since i am a human :)',
      placeOfBirth: 'Jakarta',
      dateOfBirth: 'xx May 2001',
      gender: 'Male',
      religion: 'Moslem',
      language: 'English, Indonesian',
    },
  },
  histories: {
    employment: [
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
      {
        employer: 'Sample',
        position: 'Sample',
        from: 'June 2021',
        to: 'July 2024',
      },
    ],
    certification: [
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
      {
        title: 'Sample',
        provider: 'Sample',
        date: 'December 2024',
        duration: '5 Years',
        certificate: 'Sample',
      },
    ],
    education: [
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
      {
        school: 'Sample',
        degree: 'Sample',
        subject: 'Sample',
        from: '2020',
        to: '2024',
      },
    ],
    project: [
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
      {
        projectName: 'Sample',
        role: 'Sample',
        from: 'June 2000',
        to: 'December 2024',
        customer: 'Sample',
        projectDescription: 'Sample',
        technicalInformation: 'Sample',
        jobDescription: 'Sample',
      },
    ],
  },
};

const Page: React.FC = () => (
  <div>
    <Header />
    <Box component="main" sx={{ p: 3 }}>
      <Profile employee={DATA.employee} />
      <Divider sx={{ my: 2 }} />
      <EmploymentHistory histories={DATA.histories.employment} />
      <Divider sx={{ my: 2 }} />
      <Biodata biodata={DATA.employee.biodata} />
    </Box>
    <Footer />
  </div>
);

export default Page;
