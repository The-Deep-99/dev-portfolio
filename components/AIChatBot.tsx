import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, CardBody, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const greetings = [
        "Hey there! 👋 I'm MaxBot, Maaz's AI assistant. It's great to meet you! What brings you to his portfolio today?",
        "Hi! Welcome to Maaz's portfolio! I'm here to help you learn about his work. What would you like to explore?",
        "Hello! 👋 So glad you stopped by! I can tell you all about Maaz's skills, projects, and journey. What interests you most?",
        "Hey! Thanks for visiting! I'm MaxBot, your guide to Maaz's professional world. What can I help you discover today?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // How are you questions
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how you doing') || lowerMessage.includes('what\'s up')) {
      return "I'm doing great, thanks for asking! 😊 I'm excited to help you learn about Maaz's amazing work. What would you like to know about him?";
    }
    
    // Who are you questions
    if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you') || lowerMessage.includes('what\'s your name')) {
      return "I'm MaxBot! 🤖 Maaz's friendly AI assistant. I'm here to help you navigate his portfolio and answer any questions about his skills, projects, and experience. Think of me as your personal guide!";
    }
    
    // Skills responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('what can you do')) {
      const skillResponses = [
        "Maaz is quite the tech wizard! 🧙‍♂️ He's skilled in React.js, Next.js, TypeScript, Django, Python, JavaScript, HTML5, CSS3, Redux, Git, C++, AWS, Java, and GitHub. He's a full-stack developer who loves both frontend and backend challenges!",
        "Great question! Maaz has a diverse skill set that includes modern web technologies like React.js and Next.js, backend with Django and Python, and cloud skills with AWS. He's always learning and expanding his knowledge!",
        "Maaz's tech stack is impressive! He works with React.js, Next.js, TypeScript for frontend, Django and Python for backend, plus Git, AWS, Java, and more. He's passionate about full-stack development!"
      ];
      return skillResponses[Math.floor(Math.random() * skillResponses.length)];
    }
    
    // Experience responses
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('internship')) {
      const experienceResponses = [
        "Maaz has some cool experience! 🚀 He worked as a Flutter Mobile Development Intern at Nastech, participated in state-level IT competitions, and earned certifications in Java Fundamentals and Linux Essentials. He's always been proactive about learning!",
        "His journey includes a Flutter internship at Nastech where he built mobile apps, plus he's competed in state-level technical competitions. He also has professional certifications from Oracle and Cisco NetAcad!",
        "Maaz has hands-on experience in mobile development with his Flutter internship, and he's been recognized in technical competitions. His certifications in Java and Linux show his commitment to continuous learning!"
      ];
      return experienceResponses[Math.floor(Math.random() * experienceResponses.length)];
    }
    
    // Project responses
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('built')) {
      const projectResponses = [
        "Maaz has built some awesome projects! 🎯 His Developer Portfolio (this site!) showcases his React.js and Next.js skills. He also created AdQuench, a platform combining water access with advertising, and various academic projects. Each project tells a story of growth and innovation!",
        "You're looking at one of his projects right now! This portfolio demonstrates his frontend skills. He also built AdQuench, which solves real-world problems, and several academic projects that show his versatility. Each project reflects his passion for creating meaningful solutions!",
        "Maaz's projects are pretty impressive! His portfolio site showcases modern web development, AdQuench demonstrates business thinking, and his academic projects show his technical foundation. He loves building things that make a difference!"
      ];
      return projectResponses[Math.floor(Math.random() * projectResponses.length)];
    }
    
    // Education responses
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college') || lowerMessage.includes('school') || lowerMessage.includes('learning')) {
      const educationResponses = [
        "Maaz is on an exciting educational journey! 🎓 He's currently pursuing BE in Information Technology at A.P. Shah Institute of Technology. He completed his Diploma in IT with an impressive 92.56% from Muchhala Polytechnic College. He's always been a dedicated student!",
        "His academic path shows consistent excellence! He's now studying BE in IT, previously completed a Diploma in IT with 92.56%, and did his schooling at Symbiosis Convent High School with 86.20%. Education has always been important to him!",
        "Maaz takes his education seriously! He's currently in BE IT program, excelled in his Diploma studies (92.56%!), and has a strong foundation from his schooling. He believes in continuous learning and growth!"
      ];
      return educationResponses[Math.floor(Math.random() * educationResponses.length)];
    }
    
    // Contact responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('connect') || lowerMessage.includes('get in touch')) {
      const contactResponses = [
        "I'd love to help you connect with Maaz! 📧 You can reach him at maazmukadam35673@gmail.com, connect on LinkedIn, or use the contact form right here in the portfolio. He's always open to interesting conversations and opportunities!",
        "Great! Maaz would love to hear from you! 🤝 Email him at maazmukadam35673@gmail.com, connect on LinkedIn, or fill out the contact form. He's based in Thane, Maharashtra, and enjoys networking with fellow developers and potential collaborators!",
        "Let's connect you with Maaz! 💼 You can email him at maazmukadam35673@gmail.com, find him on LinkedIn, or use the contact form. He's always excited to discuss projects, opportunities, or just chat about tech!"
      ];
      return contactResponses[Math.floor(Math.random() * contactResponses.length)];
    }
    
    // Location responses
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('thane') || lowerMessage.includes('based')) {
      return "Maaz is based in beautiful Thane, Maharashtra, India! 🌍 He's proud of his roots and is always open to both remote collaborations and in-person opportunities. Thane's vibrant tech scene keeps him inspired!";
    }
    
    // Availability responses
    if (lowerMessage.includes('available') || lowerMessage.includes('hire') || lowerMessage.includes('opportunity') || lowerMessage.includes('looking for')) {
      const availabilityResponses = [
        "Great timing! Maaz is definitely available for new opportunities! 🌟 He's passionate about full-stack development, cloud technologies, and loves tackling challenging projects. He's excited about contributing to innovative teams and learning from experienced developers!",
        "Yes, Maaz is actively looking for opportunities! 💪 He brings enthusiasm, technical skills, and a growth mindset to every project. Whether it's full-stack development, cloud solutions, or interesting tech challenges, he's ready to make an impact!",
        "Absolutely! Maaz is open to exciting opportunities! 🚀 He's particularly interested in roles that involve React.js, Next.js, Django, or cloud technologies. He's a quick learner and loves working in collaborative environments where he can contribute and grow!"
      ];
      return availabilityResponses[Math.floor(Math.random() * availabilityResponses.length)];
    }
    
    // Personal questions
    if (lowerMessage.includes('tell me about maaz') || lowerMessage.includes('who is maaz') || lowerMessage.includes('about maaz')) {
      return "Maaz is an incredibly passionate full-stack developer! 🌟 He's driven by curiosity and loves exploring new technologies. Based in Thane, he combines technical expertise with creative problem-solving. Whether it's building web applications, mobile apps, or cloud solutions, he approaches every project with enthusiasm and dedication. He's also a great team player who believes in continuous learning!";
    }
    
    // Future plans
    if (lowerMessage.includes('future') || lowerMessage.includes('goals') || lowerMessage.includes('plans') || lowerMessage.includes('next')) {
      return "Maaz has exciting plans! 🎯 He's focused on mastering Devops, exploring Cybersecurity, and contributing to open-source projects. He dreams of building innovative solutions that make a real difference in people's lives. Continuous learning and staying updated with tech trends are his priorities!";
    }
    
    // Hobbies/Interests
    if (lowerMessage.includes('hobby') || lowerMessage.includes('interest') || lowerMessage.includes('free time') || lowerMessage.includes('what do you do')) {
      return "When Maaz isn't coding, he enjoys exploring new technologies, participating in hackathons, and contributing to tech communities. 🎮 He's also interested in competitive programming and loves staying updated with the latest tech trends. Learning is both his profession and passion!";
    }
    
    // Strengths
    if (lowerMessage.includes('strength') || lowerMessage.includes('best at') || lowerMessage.includes('good at') || lowerMessage.includes('specialty')) {
      return "Maaz's strengths shine in several areas! 💪 He excels in problem-solving, quick learning, and adapting to new technologies. His full-stack expertise means he can handle both frontend and backend challenges. He's also great at teamwork and communication, making him a valuable team member!";
    }
    
    // Why programming
    if (lowerMessage.includes('why programming') || lowerMessage.includes('why coding') || lowerMessage.includes('love coding')) {
      return "Maaz fell in love with programming because it combines creativity with logic! 💖 He loves turning ideas into reality through code. The ability to solve real problems and create things that help people drives his passion. Every line of code is an opportunity to make something amazing happen!";
    }
    
    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
      const thankResponses = [
        "You're very welcome! 😊 I'm glad I could help! Is there anything else you'd like to know about Maaz?",
        "My pleasure! 🙏 I'm here to help you discover more about Maaz's work. What else would you like to explore?",
        "Happy to help! 😊 It's great that you're interested in Maaz's portfolio. Feel free to ask anything else!"
      ];
      return thankResponses[Math.floor(Math.random() * thankResponses.length)];
    }
    
    // Goodbye responses
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you') || lowerMessage.includes('take care')) {
      const goodbyeResponses = [
        "It was great chatting with you! 👋 Don't hesitate to reach out if you have more questions about Maaz. Have an amazing day!",
        "Goodbye! 🌟 Thanks for visiting Maaz's portfolio. Feel free to come back anytime. Wishing you all the best!",
        "Take care! 😊 It was wonderful helping you learn about Maaz. Remember, you can always contact him directly through the portfolio. Have a great day!"
      ];
      return goodbyeResponses[Math.floor(Math.random() * goodbyeResponses.length)];
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! 🤔 You can ask me about Maaz's skills, projects, experience, education, or how to connect with him. What would you like to explore?",
      "I'm here to help you discover Maaz's amazing journey! 🌟 Try asking about his technical skills, the projects he's built, his experience, or his educational background. What interests you most?",
      "Great question! Let me help you learn more about Maaz. 💡 You can ask about his skills in React.js/Next.js, his projects like AdQuench, his internship experience, or how to get in touch with him. What would you like to know?",
      "I'd love to help! 🤖 Feel free to ask me about Maaz's full-stack development skills, his academic journey, his professional experience, or how you can collaborate with him. What's on your mind?",
      "That's cool! 😊 I can tell you about Maaz's technical expertise, his passion projects, his educational background, or how he can contribute to your team. What would you like to discover?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="ai-chatbot">
      {/* Chat Toggle Button */}
      <Button
        color="default"
        className="chatbot-toggle-btn"
        onClick={toggleChat}
      >
        <span className="chat-icon">🤖</span>
        {isOpen ? 'Close' : 'MaxBot'}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="chatbot-window">
          <CardBody className="chatbot-body">
            {/* Header */}
            <div className="chat-header">
              <div className="chat-avatar">🤖</div>
              <div className="chat-info">
                <h5 className="mb-0">MaxBot</h5>
                <small className="text-muted">Always here to help</small>
              </div>
              <Button
                color="link"
                className="close-btn"
                onClick={toggleChat}
              >
                ×
              </Button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="welcome-message">
                  <div className="bot-message">
                    <span className="message-text">
                      👋 Hey there! I'm MaxBot, Maaz's friendly AI assistant! I'm so excited to help you explore his amazing portfolio. Feel free to ask me anything about his skills, projects, experience, or just chat about tech! What would you like to discover today? 😊
                    </span>
                    <small className="message-time">Just now</small>
                  </div>
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <span className="message-text">{message.text}</span>
                  <small className="message-time">{formatTime(message.timestamp)}</small>
                </div>
              ))}
              
              {isTyping && (
                <div className="bot-message typing-indicator">
                  <span className="message-text">
                    <span className="typing-dots">
                      <span>.</span><span>.</span><span>.</span>
                    </span>
                  </span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="chat-input-field"
                />
                <InputGroupAddon addonType="append">
                  <Button
                    color="primary"
                    onClick={sendMessage}
                    disabled={inputMessage.trim() === '' || isTyping}
                  >
                    Send
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <small className="text-muted d-block mb-2">💡 Try asking me:</small>
              <div className="quick-buttons">
                <Button
                  size="sm"
                  outline
                  color="primary"
                  onClick={() => {
                    setInputMessage('What are Maaz\'s main skills?');
                    setTimeout(sendMessage, 100);
                  }}
                >
                  🚀 Skills
                </Button>
                <Button
                  size="sm"
                  outline
                  color="primary"
                  onClick={() => {
                    setInputMessage('Tell me about his projects');
                    setTimeout(sendMessage, 100);
                  }}
                >
                  💻 Projects
                </Button>
                <Button
                  size="sm"
                  outline
                  color="primary"
                  onClick={() => {
                    setInputMessage('How can I contact Maaz?');
                    setTimeout(sendMessage, 100);
                  }}
                >
                  📧 Contact
                </Button>
                <Button
                  size="sm"
                  outline
                  color="primary"
                  onClick={() => {
                    setInputMessage('Tell me about Maaz');
                    setTimeout(sendMessage, 100);
                  }}
                >
                  👤 About
                </Button>
                <Button
                  size="sm"
                  outline
                  color="primary"
                  onClick={() => {
                    setInputMessage('Is Maaz available for opportunities?');
                    setTimeout(sendMessage, 100);
                  }}
                >
                  💼 Opportunities
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default AIChatBot;
