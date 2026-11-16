import test from 'node:test';
import assert from 'node:assert/strict';
import {assessmentBank,checkpointScore,validatedCheckpoints} from '../src/assessment-bank.js';
import {lessons} from '../src/curriculum.js';

test('all checkpoint questions are specific and fully explained',()=>{
 for(const [id,questions] of Object.entries(assessmentBank)){
  assert.ok(lessons[id], 'Unknown lesson '+id);
  assert.equal(questions.length,3,id+' needs three questions');
  for(const item of questions){
   assert.ok(item.question.length>=25,id+' ambiguous prompt');
   assert.equal(item.choices.length,3,id+' choices');
   assert.equal(new Set(item.choices).size,3,id+' duplicated choice');
   assert.ok(Number.isInteger(item.answer)&&item.answer>=0&&item.answer<item.choices.length,id+' invalid answer');
   assert.ok(item.explanation.length>=35,id+' needs feedback');
  }
 }
});
test('checkpoint scores partial and completed attempts without claiming mastery',()=>{
 const items=assessmentBank['Numeracy:Fractions'];
 assert.deepEqual(checkpointScore(items,[]),{correct:0,total:3,answered:0,passed:false});
 const allCorrect=items.map(item=>item.answer);
 assert.deepEqual(checkpointScore(items,allCorrect),{correct:3,total:3,answered:3,passed:true});
 const wrong=[(items[0].answer+1)%3,...allCorrect.slice(1)];
 assert.deepEqual(checkpointScore(items,wrong),{correct:2,total:3,answered:3,passed:false});
});
test('untrusted checkpoint backups discard unknown topics and invalid answers',()=>{
 const result=validatedCheckpoints({
  'Numeracy:Fractions':[0,1,6],
  'Unknown:Lesson':[0,0,0],
  'Python:Variables':'not an array'
 });
 assert.deepEqual(result,{'Numeracy:Fractions':[0,1,null]});
});
