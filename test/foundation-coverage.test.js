import test from 'node:test';
import assert from 'node:assert/strict';
import {phases,lessons} from '../src/curriculum.js';
import {learningStudios} from '../src/learning-studios.js';

const essential=['English literacy','Numeracy','Computer literacy','Python'];

test('every foundational literacy, numeracy, computer and Python topic has a detailed studio',()=>{
 let inspected=0;
 for(const phase of phases){
  for(const [level,...topics] of phase.levels){
   if(!essential.includes(level))continue;
   for(const topic of topics){
    const id=level+':'+topic;
    const studio=learningStudios[id];
    assert.ok(lessons[id],'No canonical lesson for '+id);
    assert.ok(studio,'No detailed teaching studio for '+id);
    assert.ok(studio.objective&&studio.explanation&&studio.explanation.length>100,id);
    assert.ok(studio.vocabulary.length>=2&&studio.worked.length>=2&&studio.exercises.length>=3,id);
    inspected++;
   }
  }
 }
 assert.equal(inspected,45,'Foundation curriculum structure changed; review coverage');
});

test('all enriched lessons remain linked to canonical curriculum topics',()=>{
 const ids=new Set(phases.flatMap(phase=>phase.levels.flatMap(([level,...topics])=>topics.map(topic=>level+':'+topic))));
 for(const id of Object.keys(learningStudios))assert.ok(ids.has(id),'Unmapped studio: '+id);
});
