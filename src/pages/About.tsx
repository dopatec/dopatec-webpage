import React from 'react';
import { Mail } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-8">Om Impact Neuro Foundation</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 font-mono">
            Impact Neuro Foundation (INF) är en stiftelse dedikerad till att förbättra livet för 
            individer med neuropsykiatriska funktionsnedsättningar genom innovation, utbildning och samhällsengagemang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
            <h3 className="heading-sm mb-4">Tidig Diagnos</h3>
            <p className="text-body font-mono">
              Vi stödjer forskning och utveckling av diagnostiska verktyg för att möjliggöra 
              tidig identifiering av NPF.
            </p>
          </div>

          <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
            <h3 className="heading-sm mb-4">Utbildning</h3>
            <p className="text-body font-mono">
              Vi erbjuder utbildningsprogram för att öka förståelsen och stödet för 
              individer med NPF i samhället.
            </p>
          </div>

          <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
            <h3 className="heading-sm mb-4">Innovation</h3>
            <p className="text-body font-mono">
              Vi investerar i tekniska lösningar som stärker självständigheten och 
              livskvaliteten för individer med NPF.
            </p>
          </div>
        </div>

        <div className="bg-dark-lighter rounded-lg p-8 text-center mb-16">
          <h2 className="heading-lg mb-6">Transparens och Ansvar</h2>
          <p className="text-body font-mono">
            INF strävar efter full transparens i vår verksamhet. Genom årliga rapporter och 
            tydliga riktlinjer säkerställer vi att alla medel används på ett ansvarsfullt sätt. 
            Vi planerar även att använda blockchain-teknologi för ökad spårbarhet och transparens 
            i vår ekonomihantering.
          </p>
        </div>

        <div className="bg-dark-lighter rounded-lg p-8 text-center">
          <h2 className="heading-lg mb-6">Kontakta Oss</h2>
          <div className="flex justify-center items-center space-x-2">
            <Mail className="h-5 w-5 text-accent" />
            <a href="mailto:info@impactneuro.org" className="text-accent hover:text-accent-light transition-colors">
              info@impactneuro.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}