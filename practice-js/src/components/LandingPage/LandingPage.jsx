import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: transparent;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #7C3AED;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: #4361EE;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom, #F4F1F8, #E9E4F0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 5;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 8rem 1.5rem 2rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 540px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &.primary {
    background: #4361EE;
    color: white;
    border: none;
    
    &:hover {
      background: #3A56D4;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
    }
  }
  
  &.secondary {
    background: white;
    color: #333;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    
    &:hover {
      background: #f5f5f5;
      transform: translateY(-2px);
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img.person-image {
    width: 100%;
    max-width: 450px;
    border-radius: 16px;
    z-index: 2;
  }
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
`;

const StatsIndicator = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  color: #333;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
  
  span {
    color: #34D399;
  }
  
  img {
    width: 60px;
    height: 30px;
  }
`;

const FloatingIcons = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  
  .icon {
    position: absolute;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    animation: float 6s infinite ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
    &:nth-child(1) { top: 15%; right: 15%; animation-delay: 0s; }
    &:nth-child(2) { top: 60%; right: 25%; animation-delay: 1s; }
    &:nth-child(3) { bottom: 25%; right: 40%; animation-delay: 2s; }
    &:nth-child(4) { top: 30%; left: 15%; animation-delay: 1.5s; }
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(0, 15px) rotate(5deg); }
  }
  
  img {
    width: 24px;
    height: 24px;
  }
`;

const SheetTemplateCard = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 48px;
    height: 48px;
  }
`;

const LandingPage = () => {
  return (
    <HeroSection>
      <Header>
        <Logo>
          <LogoIcon>S</LogoIcon>
          SheetShare
        </Logo>
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Template</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Admin</NavLink>
          <Button className="primary">Login</Button>
        </Nav>
      </Header>
      
      <Container>
        <ContentSection>
          <Title>Professional Google Sheets Templates for Every Need</Title>
          <Subtitle>
            Save time and simplify your work with beautifully designed,
            ready-to-use Google Sheets templates for productivity,
            finance and business
          </Subtitle>
          <ButtonGroup>
            <Button className="primary">Browse Template</Button>
            <Button className="secondary">Learn More</Button>
          </ButtonGroup>
        </ContentSection>
        <ImageSection>
          <img className="person-image" src="/person-image.svg" alt="Person with curly hair" />
          <ProfileCard>
            <img src="/avatar.svg" alt="Lisa" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <div>
              <h4 style={{ color: '#333', margin: 0 }}>Lisa Peterson</h4>
              <div style={{ color: '#FCD34D' }}>★★★★★</div>
            </div>
          </ProfileCard>
          <StatsIndicator>
            <span>74%</span>
            <img src="/percentage-chart.svg" alt="Statistics chart" />
          </StatsIndicator>
          <SheetTemplateCard>
            <img src="/sheet-template-icon.svg" alt="Spreadsheet template" />
          </SheetTemplateCard>
        </ImageSection>
      </Container>
      <FloatingIcons>
        <div className="icon">
          <img src="/app-icon-1.svg" alt="App icon" />
        </div>
        <div className="icon">
          <img src="/app-icon-2.svg" alt="App icon" />
        </div>
        <div className="icon">
          <img src="/app-icon-3.svg" alt="App icon" />
        </div>
        <div className="icon">
          <img src="/app-icon-4.svg" alt="App icon" />
        </div>
      </FloatingIcons>
    </HeroSection>
  );
};

export default LandingPage;