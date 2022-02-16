import React from "react";
import { NextPage } from "next";

import Layout from "@components/Layout";
import SectionContainer from "@components/SectionContainer";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <SectionContainer className='my-32'>AboutPage</SectionContainer>
    </Layout>
  );
};

export default AboutPage;
