import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 196, text: 'Açık Kaynak Kod Proje'},
  { number: 20000, text: 'Udemy Öğrenci', },
  { number: 220, text: 'Github Takipçi', },
  { number: 170, text: 'Github Yıldızı', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Kişisel Başarılar</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
