import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>شاورما إيطاليانو </h1>
      <p> ❤ نصنعهــا بكل حب</p>
      <FeatureButton style={{ textDecoration: 'none' }} href='https://italiano-order.netlify.app/'>اطلب الان</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
