import React from 'react';
import AnimatedSection from './AnimatedSection';
import { teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <AnimatedSection id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            Our talented and passionate stylists are dedicated to their craft and to you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-serif text-brand-dark">{member.name}</h3>
                <p className="text-brand-primary">{member.role}</p>
                <p className="text-brand-secondary mt-3 max-w-xs mx-auto text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Team;