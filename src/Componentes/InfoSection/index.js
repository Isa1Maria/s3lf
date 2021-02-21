import React from 'react';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle } from './InfoElements';

const InfoSection = () => {
    return (
        <>
          <InfoContainer>
              <InfoWrapper>
                  <InfoRow>
                      <Column1>
                      <TextWrapper>
                          <TopLine>Topline</TopLine>
                          <Heading>Heading</Heading>
                          <Subtitle>Subtitle</Subtitle> 
                      </TextWrapper>
                      </Column1>
                      <Column2>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection;
