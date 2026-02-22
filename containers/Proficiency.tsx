import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";
import AnimatedSkillBar from "../components/AnimatedSkillBar";

const Proficiency = () => {
  const colors = ["info", "success", "warning", "danger", "primary", "secondary"];
  
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiency</h1>
              {SkillBars.map((skill, index) => {
                return (
                  <AnimatedSkillBar
                    key={skill.Stack}
                    skill={skill.Stack}
                    percentage={skill.progressPercentage}
                    color={colors[index % colors.length]}
                  />
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
