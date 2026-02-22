import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual form handling)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAlertMessage('Thank you for your message! I will get back to you soon.');
      setAlertColor('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      setAlertMessage('Sorry, there was an error sending your message. Please try again.');
      setAlertColor('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="contact" className="section section-lg">
      <Fade bottom duration={2000}>
        <Row>
          <Col lg="8" className="mx-auto">
            <h1 className="h1 text-center mb-4">Get In Touch</h1>
            <p className="text-center mb-5">
              Feel free to reach out to me for any questions, opportunities, or just to say hello!
            </p>
            
            {showAlert && (
              <Alert color={alertColor} className="mb-4" toggle={() => setShowAlert(false)}>
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <div className="text-center">
                <Button 
                  color="success" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-5"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default ContactForm;
