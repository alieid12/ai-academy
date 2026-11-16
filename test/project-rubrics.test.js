import test from 'node:test';
import assert from 'node:assert/strict';
import {phases} from '../src/curriculum.js';
import {projectRubrics} from '../src/project-rubrics.js';
import {getGuide} from '../src/learning-guides.js';

test('all fourteen study levels have practical project review criteria',()=>{
 const levels=phases.flatMap(phase=>phase.levels.map(level=>level[0]));
 assert.equal(levels.length,14);
 assert.deepEqual(Object.keys(projectRubrics).sort(),[...levels].sort());
 for(const level of levels){
  assert.ok(getGuide(level)?.project,'Project brief missing: '+level);
  const rubric=projectRubrics[level];
  assert.ok(rubric.intro.length>30,level);
  assert.equal(rubric.criteria.length,3,'Rubric for '+level+' needs three criteria');
  for(const criterion of rubric.criteria){
   assert.ok(criterion.name.length>8,'Unclear criterion name in '+level);
   assert.ok(criterion.evidence.length>75,'Insufficient measurable evidence in '+level);
  }
 }
});
