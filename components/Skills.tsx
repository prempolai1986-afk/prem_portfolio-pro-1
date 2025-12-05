import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  // Split skills for display
  const designSkills = SKILLS_DATA.filter(s => s.category === 'Design');
  const devSkills = SKILLS_DATA.filter(s => s.category === 'Development');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-white/10 p-3 rounded-lg shadow-xl">
          <p className="text-white font-bold">{label}</p>
          <p className="text-accent">{`Proficiency: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Technical Proficiency</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A balanced mix of creative design and robust engineering skills.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Charts Visualization */}
          <div className="bg-surface/30 p-6 rounded-2xl border border-white/5 h-[400px]">
             <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-4 border-primary">Skill Distribution</h3>
             <ResponsiveContainer width="100%" height="85%">
                <BarChart data={SKILLS_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    width={100}
                  />
                  <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {SKILLS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.category === 'Design' ? '#8b5cf6' : '#06b6d4'} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>

          {/* Grid Layout */}
          <div className="space-y-8">
             <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span> Design & Creative
                </h3>
                <div className="flex flex-wrap gap-3">
                  {designSkills.map((skill) => (
                    <div key={skill.name} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-secondary transition-colors cursor-default">
                      {skill.name}
                    </div>
                  ))}
                </div>
             </div>

             <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span> Development & Engineering
                </h3>
                <div className="flex flex-wrap gap-3">
                  {devSkills.map((skill) => (
                    <div key={skill.name} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-accent transition-colors cursor-default">
                      {skill.name}
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-white/10">
                <p className="text-sm text-gray-400 italic">
                  "I believe in continuous learning. Currently exploring Advanced AI integration and 3D Web Graphics."
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;