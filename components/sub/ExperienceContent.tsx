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
      date: '2024-01-01',
      title: 'New Year Celebration',
      content: 'Celebrated the start of a new year with friends and family.',
    },
    {
      date: '2024-02-14',
      title: 'Valentine\'s Day',
      content: 'A special day spent with loved ones.',
    },
    {
      date: '2024-03-01',
      title: 'Project Launch',
      content: 'Successfully launched a new project at work.',
    },
    // Add more events as needed
  ];

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: '#f9f9f9', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p className="vertical-timeline-element-subtitle">{event.content}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceContent;
