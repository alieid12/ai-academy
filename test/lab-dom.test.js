import test from 'node:test';
import assert from 'node:assert/strict';
import {bindInteractiveLabs} from '../src/interactive-labs.js';

function fixture(type,initial){
 const inputs=Object.fromEntries(Object.entries(initial).map(([name,value])=>[name,{
  value:String(value),max:'12',onInput:null,addEventListener(event,fn){if(event==='input')this.onInput=fn;}
 }]));
 const output={textContent:''};
 const visual={style:{},children:[],textContent:'',replaceChildren(...children){this.children=children;this.textContent='';},append(child){this.children.push(child)}};
 const root={dataset:{lab:type},querySelector(selector){
  if(selector==='[data-lab-output]')return output;
  if(selector==='[data-lab-visual]')return visual;
  const match=selector.match(/^\\[data-input="([^"]+)"\\]$/);
  return match?inputs[match[1]]:null;
 },querySelectorAll(selector){return selector==='input'?Object.values(inputs):[]}};
 const doc={querySelectorAll(selector){return selector==='[data-lab]'?[root]:[]},createElement(tag){return {tag,className:'',textContent:''}}};
 bindInteractiveLabs(doc);
 return {inputs,output,visual};
}

test('fraction lab displays denominator many equal cells and a correct count of selected cells',()=>{
 const {inputs,visual,output}=fixture('fraction',{denominator:4,numerator:1});
 assert.equal(visual.children.length,4);
 assert.equal(visual.children.filter(x=>x.className.includes('selected')).length,1);
 assert.match(output.textContent,/1 out of 4 equal parts = 25%/);
 inputs.denominator.value='6';inputs.numerator.value='3';inputs.denominator.onInput();
 assert.equal(visual.children.length,6);
 assert.equal(visual.children.filter(x=>x.className.includes('selected')).length,3);
 assert.match(output.textContent,/3 out of 6 equal parts = 50%/);
});

test('place value lab renders separate groups of ten and individual ones',()=>{
 const {inputs,visual,output}=fixture('place',{tens:2,ones:4});
 assert.equal(visual.children.filter(x=>x.className==='tens-block').length,2);
 assert.equal(visual.children.filter(x=>x.className==='ones-block').length,4);
 assert.match(output.textContent,/2 tens × 10 \+ 4 ones = 24/);
 inputs.tens.value='0';inputs.ones.value='0';inputs.tens.onInput();
 assert.equal(visual.children.length,0);
 assert.equal(visual.textContent,'0');
});
