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
      description: 'Celebrated the start of a new year with friends and family.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2024-02-14',
      title: 'Software Engineer Intern',
      description: 'A special day spent with loved ones.',
      location: 'San Francisco, CA'
    },
    {
      date: '2024-03-01',
      title: 'Project Launch',
      description: 'Successfully launched a new project at work.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2024-03-01',
      title: 'Project Launch',
      description: 'Successfully launched a new project at work.',
      location: 'Santa Cruz, CA'
    },
    {
      date: '2024-03-01',
      title: 'Project Launch',
      description: 'Successfully launched a new project at work.',
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
