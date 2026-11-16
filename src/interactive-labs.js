// Browser-only interactive mathematical demonstrations.
// All arithmetic is deterministic and unit-tested; no external services.
export function placeValue(tens,ones){
 const t=Math.max(0,Math.min(9,Math.trunc(Number(tens)||0)));
 const o=Math.max(0,Math.min(9,Math.trunc(Number(ones)||0)));
 return {tens:t,ones:o,value:t*10+o};
}
export function fractionValue(numerator,denominator){
 const d=Math.max(1,Math.min(12,Math.trunc(Number(denominator)||1)));
 const n=Math.max(0,Math.min(d,Math.trunc(Number(numerator)||0)));
 return {numerator:n,denominator:d,ratio:n/d,percent:Number((100*n/d).toFixed(1))};
}
export function discountTotal(price,percent){
 const p=Math.max(0,Math.min(10000,Number(price)||0));
 const rate=Math.max(0,Math.min(100,Number(percent)||0));
 const savings=Number((p*rate/100).toFixed(2));
 return {original:p,rate,savings,total:Number((p-savings).toFixed(2))};
}
export function gradientStep(weight,rate){
 const w=Math.max(0,Math.min(4,Number(weight)||0));
 const r=Math.max(.01,Math.min(.5,Number(rate)||.1));
 const gradient=2*(w-2);
 const next=Number((w-r*gradient).toFixed(4));
 return {weight:w,rate:r,gradient,next,before:Number(((w-2)**2).toFixed(4)),after:Number(((next-2)**2).toFixed(4))};
}
export function labMarkup(id){
 if(id==='Numeracy:Counting and place value')return '<section class="numeric-lab" data-lab="place"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Build a number</h2><p>Move the sliders to make groups of ten and single objects.</p><div class="lab-controls"><label>Groups of ten <input data-input="tens" type="range" min="0" max="9" value="3"></label><label>Single ones <input data-input="ones" type="range" min="0" max="9" value="4"></label></div><div data-lab-visual class="place-blocks" aria-hidden="true"></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Numeracy:Fractions')return '<section class="numeric-lab" data-lab="fraction"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>See equal parts</h2><p>Choose how many equal parts make a whole, then how many parts are selected.</p><div class="lab-controls"><label>Equal parts in a whole <input data-input="denominator" type="range" min="2" max="12" value="4"></label><label>Selected parts <input data-input="numerator" type="range" min="0" max="4" value="1"></label></div><div class="fraction-track" data-lab-visual aria-hidden="true"></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Numeracy:Percentages')return '<section class="numeric-lab" data-lab="discount"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Calculate a discount</h2><p>Change the original price and discount percentage. Notice the difference between money saved and money paid.</p><div class="lab-controls"><label>Original price <input data-input="price" type="range" min="10" max="200" step="5" value="100"></label><label>Discount percent <input data-input="percent" type="range" min="0" max="50" step="5" value="25"></label></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Deep learning:Gradient descent')return '<section class="numeric-lab" data-lab="gradient"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Take a gradient step</h2><p>Our loss is L(w) = (w − 2)². The lowest point is at w = 2. Adjust the starting weight or learning rate, then take one step at a time.</p><div class="lab-controls"><label>Weight <input data-input="weight" type="range" min="0" max="4" step=".1" value="4"></label><label>Learning rate <input data-input="rate" type="range" min=".05" max=".5" step=".05" value=".1"></label></div><svg class="lab-graph" viewBox="0 0 340 190" role="img" aria-label="A U-shaped loss curve with a moving point on the curve"><path d="M 30 30 Q 170 270 310 30" fill="none" stroke="currentColor" stroke-width="3"/><path d="M 30 155 L 310 155" fill="none" stroke="currentColor" opacity=".3"/><circle data-lab-dot cx="310" cy="30" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2"/></svg><div class="lab-actions"><button type="button" data-lab-step>Take one step</button><button type="button" data-lab-reset>Reset</button></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 return '';
}
export function bindInteractiveLabs(doc){
 for(const root of doc.querySelectorAll('[data-lab]')){
  const find=name=>root.querySelector('[data-input="'+name+'"]');
  const val=name=>Number(find(name)?.value||0);
  const output=root.querySelector('[data-lab-output]');
  const visual=root.querySelector('[data-lab-visual]');
  const name=root.dataset.lab;
  const update=()=>{
   if(name==='place'){
    const {tens,ones,value}=placeValue(val('tens'),val('ones'));
    output.textContent=tens+' tens × 10 + '+ones+' ones = '+value+'.';
    visual.replaceChildren();for(let i=0;i<tens;i++){const block=doc.createElement('span');block.className='tens-block';block.textContent='10';visual.append(block)}for(let i=0;i<ones;i++){const block=doc.createElement('span');block.className='ones-block';block.textContent='1';visual.append(block)}if(value===0)visual.textContent='0';
   }else if(name==='fraction'){
    const denominator=val('denominator');
    const numerator=find('numerator');
    numerator.max=String(denominator);
    if(Number(numerator.value)>denominator)numerator.value=String(denominator);
    const f=fractionValue(val('numerator'),denominator);
    visual.style.gridTemplateColumns='repeat('+f.denominator+',minmax(0,1fr))';visual.replaceChildren(...Array.from({length:f.denominator},(_,i)=>{const cell=doc.createElement('span');cell.className='fraction-cell'+(i<f.numerator?' selected':'');return cell}));
    output.textContent=f.numerator+' out of '+f.denominator+' equal parts = '+f.percent+'% of the whole.';
   }else if(name==='discount'){
    const d=discountTotal(val('price'),val('percent'));
    output.textContent=d.rate+'% of '+d.original+' is '+d.savings+' saved. Final price: '+d.total+'.';
   }else if(name==='gradient'){
    const g=gradientStep(val('weight'),val('rate'));
    const dot=root.querySelector('[data-lab-dot]');
    dot.setAttribute('cx',String(30+g.weight*70));
    dot.setAttribute('cy',String(150-30*g.before));
    output.textContent='Weight '+g.weight.toFixed(2)+'. Loss '+g.before.toFixed(3)+'. Gradient '+g.gradient.toFixed(2)+'. Next step would reach '+g.next.toFixed(2)+' with loss '+g.after.toFixed(3)+'.';
   }
  };
  root.querySelectorAll('input').forEach(input=>input.addEventListener('input',update));
  if(name==='gradient'){
   root.querySelector('[data-lab-step]').addEventListener('click',()=>{find('weight').value=String(gradientStep(val('weight'),val('rate')).next);update()});
   root.querySelector('[data-lab-reset]').addEventListener('click',()=>{find('weight').value='4';find('rate').value='.1';update()});
  }
  update();
 }
}
