import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  font-size: 17px;
  padding: 20px 0;
  margin-top: 850px; 
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AboutUs = styled.div`
  flex: 1;
`;

const Contact = styled.div`
  flex: 1;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <AboutUs>
            <h3>Sobre Nós</h3>
            <p>Explore a rica história do Sport Club Corinthians Paulista em nosso site dedicado. Desde suas origens humildes até as conquistas memoráveis, mergulhe na trajetória lendária deste clube icônico. Descubra os heróis, os marcos e a paixão que moldaram o Corinthians ao longo dos anos.</p>
          </AboutUs>
          <Contact>
            <h3>Contato</h3>
            <p>Telefone: (11 99425-4333)</p>
            <p>Email: (bryan.willian.messias@gmail.com)</p>
          </Contact>
        </FooterContent>
        <Copyright>
          <p>&copy; 2023 Nome da Sua Empresa. Todos os direitos reservados.</p>
        </Copyright>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
