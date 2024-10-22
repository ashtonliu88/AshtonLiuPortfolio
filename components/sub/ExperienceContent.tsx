"use client"
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceContent: React.FC = () => {
  const events = [
    {
      id: 1,
      date: '2024-09-01',
      title: 'Artificial Intelligence Explainability Accountability (AIEA) Auditor',
      description: 'Conduct testing and optimization of autonomous vehicle paths using Python, Nautilus and AV simulators, ensuring safe and efficient navigation while identifying and analyzing potential errors and failures in driving algorithms.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2024-06-01',
      title: 'Software Engineer Intern',
      description: 'Utilized AWS EC2 instances to deploy a Slackbot/Discordbot developed in Python/Django, integrating with Slack/Discord APIs and Clavata moderation applications to automate content moderation and enhance user engagement with Clavata’s products.',
      location: 'San Francisco, CA'
    },
    {
      date: '2024-01-01',
      title: 'Project Launch',
      description: 'Proficiently identifying and labeling critical visual elements in photos using AnyLabeling, such as riptide patterns and current color nuances to enhance machine learning models with essential visual cues for effective riptide detection.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2023-07-01',
      title: 'Frontend Engineer',
      description: 'Proficiently harness PHP and WordPress to design and engineer captivating user interfaces, translating intricate design concepts into responsive, performance-optimized websites while facilitating over 1000 UCSC websites.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2022-11-01',
      title: 'Resume Peer Coach',
      description: 'Developed a proficiency in creating impactful resumes and cover letters for 200+ students by meticulously reviewing and enhancing application materials to effectively showcase strengths, accomplishments, and career aspirations',
      location: 'Santa Cruz, CA'
    },
  ];

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          dateClassName='date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: '#f9f9f9', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <h5 className="vertical-timeline-element-title">{event.location}</h5>
          <p className="vertical-timeline-element-subtitle">{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceContent;
