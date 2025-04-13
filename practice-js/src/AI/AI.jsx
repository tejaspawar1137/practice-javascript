import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { analyzeStartupIdea, getFollowUpAnalysis } from './openai';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  background: linear-gradient(45deg, #000000, #1a1a1a, #2d2d2d);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  min-height: 100vh;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  width: 90%;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4facfe;
    }
  }
`;

const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 5rem 5%;
  animation: ${fadeIn} 1s ease;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    color: #4facfe;
    margin-bottom: 1rem;
  }
`;

const ChatContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease;
`;

const ChatBox = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  padding: 2rem;
  margin-top: 2rem;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4facfe;
    border-radius: 4px;
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-radius: 10px;
  max-width: 80%;
  animation: ${fadeIn} 0.3s ease;
  
  ${props => props.isUser ? `
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    align-self: flex-end;
    color: white;
  ` : `
    background: rgba(255, 255, 255, 0.1);
    align-self: flex-start;
  `}
`;

const ChatInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4facfe;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SendButton = styled(Button)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingDots = keyframes`
  0%, 100% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
`;

const TypingIndicator = styled.div`
  color: #4facfe;
  font-size: 1.2rem;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  
  &::after {
    content: '.';
    animation: ${LoadingDots} 1.5s infinite;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 0, 0, 0.1);
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.3s ease;
`;

const AI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');

  const generateAIResponse = async (userInput) => {
    setIsTyping(true);
    setError('');
    
    try {
      let response;
      if (messages.length === 0) {
        // Initial analysis
        response = await analyzeStartupIdea(userInput);
      } else {
        // Follow-up analysis
        response = await getFollowUpAnalysis([...messages, { text: userInput, isUser: true }]);
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setError('Sorry, there was an error analyzing your idea. Please try again or check your API key configuration.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    await generateAIResponse(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <Nav>
        <Logo>AI Vision</Logo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#validation">Validation</a>
          <a href="#investor">Investor</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>

      <Hero>
        <Title>Transform Your Ideas into Reality</Title>
        <Subtitle>AI-Powered Idea Validation and Investor Matching Platform</Subtitle>
        <Button onClick={() => document.getElementById('chat').scrollIntoView({ behavior: 'smooth' })}>
          Start Analysis
        </Button>
      </Hero>

      <FeaturesGrid>
        <FeatureCard>
          <h3>Idea Submission</h3>
          <p>Submit your innovative ideas and let our AI analyze their potential for success.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Validation Dashboard</h3>
          <p>Get comprehensive market analysis, competitor insights, and revenue predictions.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Investor Magnet</h3>
          <p>Connect with potential investors who match your business profile and vision.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>AI Chat Assistant</h3>
          <p>Get real-time guidance and answers to all your business-related questions.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Market Analysis</h3>
          <p>Deep dive into market trends, opportunities, and potential challenges.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Success Metrics</h3>
          <p>Track your progress and measure success with our advanced analytics.</p>
        </FeatureCard>
      </FeaturesGrid>

      <ChatContainer id="chat">
        <Title>AI Startup Analyzer</Title>
        <Subtitle>Share your startup idea and get instant analysis</Subtitle>
        
        <ChatBox>
          <ChatMessages>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {messages.map((message, index) => (
              <Message key={index} isUser={message.isUser}>
                {message.text}
              </Message>
            ))}
            {isTyping && <TypingIndicator>AI is thinking</TypingIndicator>}
          </ChatMessages>
          
          <ChatInput>
            <Input
              type="text"
              placeholder="Describe your startup idea..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SendButton onClick={handleSend} disabled={isTyping}>
              {isTyping ? 'Analyzing...' : 'Send'}
            </SendButton>
          </ChatInput>
        </ChatBox>
      </ChatContainer>
    </Container>
  );
};

export default AI;
