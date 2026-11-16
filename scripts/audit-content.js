// Zero-dependency curriculum audit for reviewers and release checks.
import {phases,lessons,inventory} from '../src/curriculum.js';
import {learningStudios} from '../src/learning-studios.js';
import {assessmentBank} from '../src/assessment-bank.js';
import {projectRubrics} from '../src/project-rubrics.js';
import {getGuide} from '../src/learning-guides.js';

const rows=[];
const mapped=new Set();
const issues=[];
for(const phase of phases){
 for(const [level,...topics] of phase.levels){
  let detailed=0,questions=0;
  if(!getGuide(level))issues.push('Missing level guide: '+level);
  if(!projectRubrics[level])issues.push('Missing portfolio rubric: '+level);
  for(const topic of topics){
   const id=level+':'+topic;
   if(mapped.has(id))issues.push('Duplicate curriculum identifier: '+id);
   mapped.add(id);
   if(!lessons[id])issues.push('Missing lesson: '+id);
   if(learningStudios[id])detailed++;
   if(assessmentBank[id])questions+=assessmentBank[id].length;
  }
  rows.push({phase:phase.name,level,topics:topics.length,detailed,checkpointQuestions:questions});
 }
}
for(const id of Object.keys(learningStudios))if(!mapped.has(id))issues.push('Unmapped deep-dive studio: '+id);
for(const id of Object.keys(assessmentBank))if(!mapped.has(id))issues.push('Unmapped checkpoint bank: '+id);
const total=inventory();
const authored=Object.keys(learningStudios).length;
console.log('AI Academy content audit — self-reported depth, not professional certification');
console.log('Levels: '+total.levels+' | mapped topics: '+total.modules+' | detailed studios: '+authored+' | introduction-only: '+(total.modules-authored));
for(const row of rows)console.log(row.level.padEnd(27)+' '+String(row.detailed).padStart(2)+' / '+String(row.topics).padEnd(2)+' deep studies | '+row.checkpointQuestions+' checkpoint questions');
console.log('Formative question total: '+Object.values(assessmentBank).reduce((n,items)=>n+items.length,0));
console.log('Portfolio rubrics: '+Object.keys(projectRubrics).length);
if(issues.length){console.error('CONTENT INTEGRITY FAILURES:');for(const issue of issues)console.error(' - '+issue);process.exitCode=1;}
else console.log('Curriculum relationships are consistent. Introductory depth gaps are reported, not hidden.');
