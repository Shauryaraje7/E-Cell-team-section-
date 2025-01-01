import React from 'react';
import './TeamMemberSection.css';


const TeamMemberSection = () => {
  const members = [
    {
      name: 'John Doe',
      position: 'President',
      image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Vice President',
      image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    },
    {
      name: 'Alice Johnson',
      position: 'Secretary',
      image: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    },
  ];

  return (
    <div className="team-member-section">
      <div className="team-row">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberSection;
