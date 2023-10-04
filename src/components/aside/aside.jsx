import React from 'react';
import styled from 'styled-components';
import profileImage from '../imagens/img1.png';

const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  text-align: justify;
  position: absolute;
  width: 30vw;
  max-width: 300px;
  max-height:800px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  right: 20px;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%; 
`;


const StyledParagraph = styled.p`
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;

  &:hover {
    color: blue; 
  }
`;

function Aside() {
  return (
    <div>
      <StyledAside>
        <StyledParagraph>
        O Sport Club Corinthians Paulista, ou simplesmente Corinthians, é um dos clubes de futebol mais populares e vitoriosos do Brasil. Fundado em 1910, o clube tem sua sede na cidade de São Paulo. O Corinthians é amplamente reconhecido por sua rica história e paixão de seus torcedores, conhecidos como "corintianos".
        </StyledParagraph>
        <ProfileImage src={profileImage} alt="Perfil" />
        <StyledParagraph>
        O título mais emblemático da equipe é a conquista da Copa Libertadores da América em 2012, que culminou com a vitória na FIFA Club World Cup. Além disso, o clube possui 7 títulos do Campeonato Brasileiro Série A e uma notável rivalidade com o Palmeiras, conhecido como "Dérbi Paulista".
        </StyledParagraph>
        <StyledParagraph>
        O estádio do Corinthians é a Arena Corinthians, popularmente conhecida como "Itaquerão", e foi palco da abertura da Copa do Mundo FIFA 2014. O clube tem uma história rica e é famoso por sua torcida apaixonada, que canta fervorosamente o hino do clube antes de cada partida. O Corinthians é mais do que um time; é uma instituição que representa a força e a devoção do futebol brasileiro.
        </StyledParagraph>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/corinthians/" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
          <SocialLink href="https://twitter.com/Corinthians" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="https://br.linkedin.com/company/sccorinthians" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://www.instagram.com/corinthians/" target="_blank" rel="noopener noreferrer">
            Instagram
            </SocialLink>
        </SocialLinks>
        
      </StyledAside>
    </div>
  );
}

export default Aside;
