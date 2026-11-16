import test from 'node:test';
import assert from 'node:assert/strict';
import {neuronOutput,predictNeighbors,labMarkup} from '../src/interactive-labs.js';

test('single-neuron weighted sum and ReLU are numerically correct',()=>{
 const a=neuronOutput(2,1,-1);
 assert.deepEqual(a,{input:2,weight:1,bias:-1,score:1,relu:1});
 const b=neuronOutput(2,-1,-1);
 assert.equal(b.score,-3);
 assert.equal(b.relu,0);
 assert.equal(neuronOutput(0,3,4).relu,4);
});

test('KNN uses deterministic nearest distances and majority voting',()=>{
 const a=predictNeighbors(1,1);
 assert.equal(a.label,'A');
 assert.equal(a.votes.A,1);
 assert.equal(a.neighbors[0].x,1);
 const b=predictNeighbors(9,3);
 assert.equal(b.label,'B');
 assert.equal(b.votes.B,3);
 const c=predictNeighbors(4.5,5);
 assert.equal(c.label,'A');
 assert.equal(c.votes.A,3);
 assert.equal(c.votes.B,2);
 assert.equal(predictNeighbors(-100,0).k,3);
});

test('new model exploration labs advertise interactive inputs and spoken-readable output',()=>{
 for(const id of ['Deep learning:Neurons','Classical ML:KNN']){
  const markup=labMarkup(id);
  assert.match(markup,/data-lab-output/);
  assert.match(markup,/aria-live="polite"/);
  assert.match(markup,/type="range"/);
 }
});
