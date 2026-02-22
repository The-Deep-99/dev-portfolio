import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Navigation = dynamic(() => import("../components/Navigation"), {
  loading: () => <div className="loading-nav">Loading navigation...</div>
});

const Greetings = dynamic(() => import("../containers/Greetings"), {
  loading: () => <div className="loading-section">Loading greetings...</div>
});

const Skills = dynamic(() => import("../containers/Skills"), {
  loading: () => <div className="loading-section">Loading skills...</div>
});

const Proficiency = dynamic(() => import("../containers/Proficiency"), {
  loading: () => <div className="loading-section">Loading proficiency...</div>
});

const Education = dynamic(() => import("../containers/Education"), {
  loading: () => <div className="loading-section">Loading education...</div>
});

const Experience = dynamic(() => import("../containers/Experience"), {
  loading: () => <div className="loading-section">Loading experience...</div>
});

const Feedbacks = dynamic(() => import("../containers/Feedbacks"), {
  loading: () => <div className="loading-section">Loading feedbacks...</div>
});

const Projects = dynamic(() => import("../containers/Projects"), {
  loading: () => <div className="loading-section">Loading projects...</div>
});

const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"), {
  loading: () => <div className="loading-section">Loading GitHub profile...</div>
});

import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";
import ThemeToggle from "../components/ThemeToggle";
import BackToTop from "../components/BackToTop";
import Analytics from "../components/Analytics";
import ContactForm from "../components/ContactForm";
import AIChatBot from "../components/AIChatBot";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <ThemeToggle />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard {...githubProfileData} />
      <ContactForm />
      <AIChatBot />
      <BackToTop />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
