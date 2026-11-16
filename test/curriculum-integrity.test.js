import test from 'node:test';
import assert from 'node:assert/strict';
import {phases,lessons,inventory} from '../src/curriculum.js';
import {levelGuides} from '../src/learning-guides.js';
import {resourceForLevel} from '../src/university-resources.js';

test('every mapped topic has a usable, correctly keyed lesson',()=>{
 const ids=[];
 for(const phase of phases)for(const [level,...topics] of phase.levels){
  assert.ok(levelGuides[level], 'Missing guide: '+level);
  for(const topic of topics)ids.push(level+':'+topic);
 }
 assert.equal(new Set(ids).size,ids.length,'Duplicate curriculum topics');
 for(const id of ids){
  const lesson=lessons[id];
  assert.ok(lesson,'Missing lesson: '+id);
  for(const field of ['title','intro','task','question'])assert.ok(typeof lesson[field]==='string'&&lesson[field].trim(),id+' missing '+field);
  assert.ok(Array.isArray(lesson.steps)&&lesson.steps.length>=2,id+' missing teaching steps');
  assert.ok(lesson.steps.every(x=>typeof x==='string'&&x.trim()),id+' has empty teaching step');
  assert.ok(Array.isArray(lesson.choices)&&lesson.choices.length>=2,id+' missing quiz choices');
  assert.ok(Number.isInteger(lesson.answer)&&lesson.answer>=0&&lesson.answer<lesson.choices.length,id+' has invalid quiz answer');
 }
 assert.equal(inventory().modules,ids.length);
 assert.equal(inventory().authored,Object.keys(lessons).length);
});
test('external study resources use secure HTTPS URLs',()=>{
 for(const phase of phases)for(const [level] of phase.levels){
  for(const resource of resourceForLevel(level)){
   assert.equal(new URL(resource.url).protocol,'https:');
   assert.ok(resource.school&&resource.name&&resource.prerequisite);
  }
 }
});
