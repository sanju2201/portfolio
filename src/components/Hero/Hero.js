import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer, having Good handson Work Experience on React.js.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;