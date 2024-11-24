import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import carl from '../assets/team/Calle.png';
import robertPlaceholder from '../assets/team/Robert.png';

export function About() {
  const team = [
    {
      name: "Carl Pohl",
      role: "CEO",
      image: carl,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Robert Hansson",
      role: "CEO",
      image: robertPlaceholder,
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-8 heading-xl">Om Impact Neuro Foundation</h1>
          <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-gray-200">
            Impact Neuro Foundation (INF) är en stiftelse dedikerad till att förbättra livet för 
            individer med neuropsykiatriska funktionsnedsättningar genom innovation, utbildning och samhällsengagemang.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          <div className="p-8 rounded-lg shadow-xl bg-dark-lighter">
            <h3 className="mb-4 heading-sm">Tidig Diagnos</h3>
            <p className="font-mono text-body">
              Vi stödjer forskning och utveckling av diagnostiska verktyg för att möjliggöra 
              tidig identifiering av NPF.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-xl bg-dark-lighter">
            <h3 className="mb-4 heading-sm">Utbildning</h3>
            <p className="font-mono text-body">
              Vi erbjuder utbildningsprogram för att öka förståelsen och stödet för 
              individer med NPF i samhället.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-xl bg-dark-lighter">
            <h3 className="mb-4 heading-sm">Innovation</h3>
            <p className="font-mono text-body">
              Vi investerar i tekniska lösningar som stärker självständigheten och 
              livskvaliteten för individer med NPF.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="mb-16 text-center heading-lg">Our Team</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {team.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="relative">
                  <div className="team-member-image-container">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                    <div className="team-member-circuit-overlay" />
                    <div className="team-member-glow" />
                  </div>
                  <div className="team-member-content">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{member.name}</h3>
                    <p className="mb-4 font-mono text-xl text-gray-300">{member.role}</p>
                    <div className="flex gap-4 justify-center">
                      <a href={member.linkedin} className="text-gray-400 transition-colors hover:text-primary">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href={member.twitter} className="text-gray-400 transition-colors hover:text-primary">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 mb-16 text-center rounded-lg bg-dark-lighter">
          <h2 className="mb-6 heading-lg">Transparens och Ansvar</h2>
          <p className="font-mono text-body">
            INF strävar efter full transparens i vår verksamhet. Genom årliga rapporter och 
            tydliga riktlinjer säkerställer vi att alla medel används på ett ansvarsfullt sätt. 
            Vi planerar även att använda blockchain-teknologi för ökad spårbarhet och transparens 
            i vår ekonomihantering.
          </p>
        </div>

        <div className="text-center">
          <h2 className="mb-6 heading-lg">Kontakta Oss</h2>
          <div className="inline-flex gap-2 items-center text-primary">
            <Mail className="w-6 h-6" />
            <a href="mailto:info@impactneuro.org" className="text-xl hover:underline">
              info@impactneuro.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}