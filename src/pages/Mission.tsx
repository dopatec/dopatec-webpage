import React from 'react';
import { Youtube, Podcast, Users, BookOpen, Shield } from 'lucide-react';

export function Mission() {
  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gemenskap och Forum Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="heading-xl mb-6">Gemenskap och Forum</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto font-mono">
              På Impact Neuro Foundation tror vi att gemenskap är en viktig del av att skapa en 
              inkluderande framtid. Genom olika plattformar och evenemang planerar vi att 
              engagera individer och intressenter på alla nivåer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h2 className="heading-md">Events och Hackathons</h2>
              </div>
              <p className="text-gray-200 font-mono">
                Vi kommer att organisera hackathons och evenemang där utvecklare, psykologer, 
                föräldrar och eldsjälar kan samarbeta. Målet är att utveckla nya tekniska lösningar, 
                utbyta erfarenheter och stärka gemenskapen kring NPF-frågor.
              </p>
            </div>

            <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <Youtube className="h-8 w-8 text-primary mr-3" />
                <h2 className="heading-md">Media och Kommunikation</h2>
              </div>
              <p className="text-gray-200 font-mono">
                För att sprida kunskap och engagera allmänheten planerar vi att driva en podcast 
                och en YouTube-kanal. Här kommer vi att lyfta fram berättelser från individer med 
                NPF, dela expertråd och diskutera nya rön inom neuropsykologi och teknik.
              </p>
            </div>
          </div>
        </section>

        {/* Publikationer och Forskning Section */}
        <section className="mb-16">
          <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="heading-lg">Publikationer och Forskning</h2>
            </div>
            <p className="text-gray-200 font-mono mb-4">
              En viktig del av vårt framtida arbete är att skapa och sprida information om 
              forskning, framsteg och innovationer inom NPF-området. Vi kommer att publicera 
              rapporter, tidskrifter och digitala artiklar för att dela forskningsresultat och öka 
              förståelsen bland allmänheten och beslutsfattare.
            </p>
          </div>
        </section>

        {/* Policys och Riktlinjer Section */}
        <section>
          <div className="bg-dark-lighter p-8 rounded-lg shadow-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h2 className="heading-lg">Policys och Riktlinjer</h2>
            </div>
            <p className="text-gray-200 font-mono mb-4">
              Transparens är en grundläggande princip för oss. Genom tydliga policyer och 
              riktlinjer kommer vi att säkerställa att alla medel används effektivt och i enlighet 
              med stiftelsens syfte. Vi planerar att publicera årliga rapporter och erbjuda 
              detaljerade uppdateringar till våra donatorer och intressenter.
            </p>
            <p className="text-gray-200 font-mono">
              Dessutom avser vi att använda blockchain-teknologi för att skapa spårbarhet och 
              ytterligare transparens i vår ekonomihantering.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}