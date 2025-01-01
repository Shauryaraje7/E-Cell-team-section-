import { useState } from 'react';
import './MusicPlayer.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'President',
    description: 'Leading the team with vision and dedication to achieve our goals.',
    email: 'john.smith@example.com',
    phone: '+1 234-567-8900',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'General Secretary',
    description: 'Coordinating activities and ensuring smooth organizational operations.',
    email: 'sarah.j@example.com',
    phone: '+1 234-567-8901',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Vice President',
    description: 'Supporting leadership initiatives and driving innovation forward.',
    email: 'michael.c@example.com',
    phone: '+1 234-567-8902',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  }
];

const EmailIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

export default function TeamMemberCards() {
  const [selectedMember, setSelectedMember] = useState(1);

  return (
    <div className="container">
      {teamMembers.map((member) => (
        <input
          key={member.id}
          type="radio"
          name="slider"
          id={`item-${member.id}`}
          checked={selectedMember === member.id}
          onChange={() => setSelectedMember(member.id)}
        />
      ))}

      <div className="cards">
        {teamMembers.map((member) => (
          <label
            key={member.id}
            className="card"
            htmlFor={`item-${member.id}`}
            id={`member-${member.id}`}
          >
            <img src={member.image} alt={member.name} />
          </label>
        ))}
      </div>

      <div className="info-card">
        {teamMembers.map((member) => (
          selectedMember === member.id && (
            <div key={member.id} className="member-info">
              <div className="role">{member.role}</div>
              <div className="name">{member.name}</div>
              <div className="description">{member.description}</div>
              <div className="contact-info">
                <span>
                  <EmailIcon />
                  {member.email}
                </span>
                <span>
                  <PhoneIcon />
                  {member.phone}
                </span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}