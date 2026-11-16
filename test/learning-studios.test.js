import test from 'node:test';
import assert from 'node:assert/strict';
import {learningStudios} from '../src/learning-studios.js';
import {lessons} from '../src/curriculum.js';

test('learning studios are tied to existing curriculum lessons',()=>{
 for(const [id,studio] of Object.entries(learningStudios)){
  assert.ok(lessons[id],id+' has no parent lesson');
  assert.ok(studio.objective.length>20,id+' objective too short');
  assert.ok(studio.explanation.length>100,id+' explanation too short');
  assert.ok(studio.vocabulary.length>=2,id+' needs vocabulary');
  assert.ok(studio.worked.length>=2,id+' needs two worked examples');
  assert.ok(studio.exercises.length>=3,id+' needs three practice questions');
  for(const [prompt,solution] of [...studio.worked,...studio.exercises]){
   assert.ok(prompt.trim()&&solution.trim(),id+' has an empty example or solution');
  }
  assert.ok(studio.misconception&&studio.challenge,id+' needs a misconception and challenge');
 }
});
