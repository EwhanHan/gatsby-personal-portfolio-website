import * as React from 'react';
import Layout from '../components/Layout/Layout';
import AboutMe from '../components/about/aboutme';
import Landing from '../components/landing/landing';
import Resume from '../components/resume/resume';
import Contact from '../components/contact/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Resume />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
