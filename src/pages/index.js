import * as React from 'react';
import Layout from '../components/layout/layout';
import AboutMe from '../components/about/aboutme';
import Landing from '../components/landing/landing';
import Resume from '../components/resume/resume';
const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Resume />
    </Layout>
  );
};

export default IndexPage;
