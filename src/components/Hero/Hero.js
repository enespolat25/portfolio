import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Enes POLAT <br />
          Kişisel Sayfasına Hoşgeldiniz
        </SectionTitle>
        <SectionText>
        Türk Telekom Erzurum Bölge Müdürlüğü'nde Enerji ve Soğutma Sistemleri Müdürü olarak görev yapmaktayım. Türk Telekom Akademi'de Eğitimler vermekteyim. Artırılmış Gerçeklik ve Blokzincir hakkında iki kitabım yayınlanmıştır. Ayrıca Yapay Zeka, Artırılmış Gerçeklik, Blokzincir, Web Tasarımı, Mobil Programlama gibi konularda çalışmalarım bulunmaktadır.
        </SectionText>
        <Button onClick={props.handleClick}>Daha Fazlası..</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;