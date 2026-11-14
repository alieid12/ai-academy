import test from 'node:test';
import assert from 'node:assert/strict';
import {phases,lessons,inventory} from '../src/curriculum.js';
test('curriculum has five ordered phases and fourteen levels',()=>{
 const x=inventory();assert.equal(x.phases,5);assert.equal(x.levels,14);assert.ok(x.modules>=150);
});
test('all lesson questions have a valid answer and learning content',()=>{
 for(const [id,lesson] of Object.entries(lessons)){
  assert.ok(id.includes(':'));
  assert.ok(lesson.title && lesson.intro && lesson.task);
  assert.ok(Array.isArray(lesson.steps) && lesson.steps.length>0);
  assert.ok(lesson.answer>=0 && lesson.answer<lesson.choices.length);
 }
});
test('every authored lesson maps to a curriculum module',()=>{
 const ids=new Set(phases.flatMap(p=>p.levels.flatMap(level=>level.slice(1).map(m=>level[0]+':'+m))));
 for(const id of Object.keys(lessons))assert.ok(ids.has(id),'Unknown module: '+id);
});
