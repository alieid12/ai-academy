import test from 'node:test';
import assert from 'node:assert/strict';
import {placeValue,fractionValue,discountTotal,gradientStep,labMarkup} from '../src/interactive-labs.js';

test('place value groups tens and ones without confusing their positions',()=>{
 assert.deepEqual(placeValue(3,4),{tens:3,ones:4,value:34});
 assert.equal(placeValue(4,3).value,43);
});
test('fractions represent selected equal parts',()=>{
 assert.equal(fractionValue(1,4).percent,25);
 assert.equal(fractionValue(2,4).ratio,0.5);
 assert.equal(fractionValue(99,4).numerator,4);
});
test('percentage discount distinguishes savings from final price',()=>{
 assert.deepEqual(discountTotal(80,25),{original:80,rate:25,savings:20,total:60});
 assert.equal(discountTotal(25,0).total,25);
});
test('gradient step lowers quadratic loss at supported learning rates',()=>{
 const result=gradientStep(4,.1);
 assert.equal(result.gradient,4);
 assert.equal(result.next,3.6);
 assert.ok(result.after<result.before);
 assert.equal(gradientStep(2,.1).next,2);
});
test('every supported lab exposes controls and a live result',()=>{
 for(const id of ['Numeracy:Counting and place value','Numeracy:Fractions','Numeracy:Percentages','Deep learning:Gradient descent']){
  const html=labMarkup(id);
  assert.match(html,/data-lab-output/);
  assert.match(html,/aria-live="polite"/);
  assert.match(html,/type="range"/);
 }
 assert.equal(labMarkup('Missing:Topic'),'');
});
