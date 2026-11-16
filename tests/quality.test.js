import test from 'node:test';
import assert from 'node:assert/strict';
import {phases,lessons,inventory} from '../src/curriculum.js';
import {getGuide} from '../src/learning-guides.js';
import {masteryUnits} from '../src/mastery-units.js';
import {universityResources} from '../src/university-resources.js';

test('all mapped topics resolve to a usable lesson',()=>{
 const ids=phases.flatMap(p=>p.levels.flatMap(l=>l.slice(1).map(t=>l[0]+':'+t)));
 assert.equal(new Set(ids).size,ids.length,'duplicate lesson identifiers');
 assert.equal(ids.length,inventory().modules);
 for(const id of ids){
  const l=lessons[id];
  assert.ok(l,'missing lesson: '+id);
  assert.ok(l.intro && Array.isArray(l.steps) && l.steps.length>=3,id);
  assert.ok(Array.isArray(l.choices) && l.choices.length>=2,id);
  assert.ok(Number.isInteger(l.answer)&&l.answer>=0&&l.answer<l.choices.length,id);
  assert.ok(l.task && l.question,id);
 }
});
test('every learning level has a project, outcomes and checkpoint',()=>{
 for(const phase of phases)for(const level of phase.levels){
  const g=getGuide(level[0]);
  assert.ok(g,'missing level guide: '+level[0]);
  assert.ok(g.goal && g.project && g.check && g.prerequisites);
  assert.ok(g.outcomes.length>=3 && g.deliverables.length>=3);
 }
});
test('university references use secure official links',()=>{
 for(const item of universityResources){
  assert.match(item.url,/^https:\/\//);
  assert.ok(item.school && item.focus && item.prerequisite);
 }
});

test('expanded lessons contain complete teaching scaffolds',()=>{
 for(const [id,unit] of Object.entries(masteryUnits)){
  assert.ok(lessons[id], 'unmapped expanded lesson '+id);
  assert.equal(lessons[id].scope,'expanded-lesson');
  assert.ok(unit.objective && unit.misconception && unit.transfer,id);
  assert.ok(unit.examples.length>=2 && unit.practice.length>=2,id);
  for(const example of unit.examples)assert.ok(example.prompt&&example.work&&example.result,id);
  for(const exercise of unit.practice)assert.ok(exercise.prompt&&exercise.hint&&exercise.solution,id);
 }
});
