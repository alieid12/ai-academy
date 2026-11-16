import test from 'node:test';
import assert from 'node:assert/strict';
import {scheduleReview,dueLessonIds,safeReviewRecords,REVIEW_INTERVAL_DAYS} from '../src/review-scheduler.js';
test('remembered cards receive increasingly spaced review dates',()=>{
 const now=1_800_000_000_000;
 const first=scheduleReview(undefined,true,now);
 const second=scheduleReview(first,true,now);
 assert.equal(first.stage,1);
 assert.equal(first.dueAt-now,24*60*60*1000);
 assert.equal(second.stage,2);
 assert.equal(second.dueAt-now,3*24*60*60*1000);
 let review=second;
 for(let i=0;i<20;i++)review=scheduleReview(review,true,now);
 assert.equal(review.stage,REVIEW_INTERVAL_DAYS.length-1);
});
test('forgetting a card resets it and schedules a short retry',()=>{
 const now=1_800_000_000_000;
 const review=scheduleReview({stage:4,dueAt:now},false,now);
 assert.equal(review.stage,0);
 assert.equal(review.dueAt-now,10*60*1000);
});
test('due lessons include unscheduled completions and avoid duplicates',()=>{
 const now=1_800_000_000_000;
 const due=dueLessonIds(['a','b','c','a'],{b:{dueAt:now+1000},c:{dueAt:now-1000}},now);
 assert.deepEqual(due,['a','c']);
});
test('invalid imported reviews are discarded',()=>{
 const valid=new Set(['a','b']);
 const records=safeReviewRecords({a:{stage:2,dueAt:100,lastReviewedAt:70},b:{stage:-1,dueAt:2},unknown:{stage:2,dueAt:3}},valid);
 assert.deepEqual(Object.keys(records),['a']);
 assert.deepEqual(records.a,{stage:2,dueAt:100,lastReviewedAt:70});
});
