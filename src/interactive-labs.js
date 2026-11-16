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
export function neuronOutput(input,weight,bias){
 const x=Math.max(0,Math.min(5,Number(input)||0));
 const w=Math.max(-3,Math.min(3,Number(weight)||0));
 const b=Math.max(-4,Math.min(4,Number(bias)||0));
 const score=Number((x*w+b).toFixed(2));
 return {input:x,weight:w,bias:b,score,relu:Math.max(0,score)};
}
const neighborsData=[{x:1,label:'A'},{x:2,label:'A'},{x:3,label:'A'},{x:7,label:'B'},{x:8,label:'B'},{x:9,label:'B'}];
export function predictNeighbors(position,k){
 const x=Math.max(0,Math.min(10,Number(position)||0));
 const count=[1,3,5].includes(Number(k))?Number(k):3;
 const near=neighborsData.map((point,i)=>({...point,distance:Math.abs(point.x-x),index:i})).sort((a,b)=>a.distance-b.distance||a.index-b.index).slice(0,count);
 const votes={A:near.filter(p=>p.label==='A').length,B:near.filter(p=>p.label==='B').length};
 return {position:x,k:count,label:votes.A>votes.B?'A':'B',votes,neighbors:near};
}
export function labMarkup(id){
 if(id==='Numeracy:Counting and place value')return '<section class="numeric-lab" data-lab="place"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Build a number</h2><p>Move the sliders to make groups of ten and single objects.</p><div class="lab-controls"><label>Groups of ten <input data-input="tens" type="range" min="0" max="9" value="3"></label><label>Single ones <input data-input="ones" type="range" min="0" max="9" value="4"></label></div><div data-lab-visual class="place-blocks" aria-hidden="true"></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Numeracy:Fractions')return '<section class="numeric-lab" data-lab="fraction"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>See equal parts</h2><p>Choose how many equal parts make a whole, then how many parts are selected.</p><div class="lab-controls"><label>Equal parts in a whole <input data-input="denominator" type="range" min="2" max="12" value="4"></label><label>Selected parts <input data-input="numerator" type="range" min="0" max="4" value="1"></label></div><div class="fraction-track" data-lab-visual aria-hidden="true"></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Numeracy:Percentages')return '<section class="numeric-lab" data-lab="discount"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Calculate a discount</h2><p>Change the original price and discount percentage. Notice the difference between money saved and money paid.</p><div class="lab-controls"><label>Original price <input data-input="price" type="range" min="10" max="200" step="5" value="100"></label><label>Discount percent <input data-input="percent" type="range" min="0" max="50" step="5" value="25"></label></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Deep learning:Gradient descent')return '<section class="numeric-lab" data-lab="gradient"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Take a gradient step</h2><p>Our loss is L(w) = (w − 2)². The lowest point is at w = 2. Adjust the starting weight or learning rate, then take one step at a time.</p><div class="lab-controls"><label>Weight <input data-input="weight" type="range" min="0" max="4" step=".1" value="4"></label><label>Learning rate <input data-input="rate" type="range" min=".05" max=".5" step=".05" value=".1"></label></div><svg class="lab-graph" viewBox="0 0 340 190" role="img" aria-label="A U-shaped loss curve with a moving point on the curve"><path d="M 30 30 Q 170 270 310 30" fill="none" stroke="currentColor" stroke-width="3"/><path d="M 30 155 L 310 155" fill="none" stroke="currentColor" opacity=".3"/><circle data-lab-dot cx="310" cy="30" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2"/></svg><div class="lab-actions"><button type="button" data-lab-step>Take one step</button><button type="button" data-lab-reset>Reset</button></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Deep learning:Neurons')return '<section class="numeric-lab" data-lab="neuron"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Inside one artificial neuron</h2><p>Change an input, learned weight and bias. The neuron computes z = input × weight + bias, then applies ReLU(z) = max(0,z).</p><div class="lab-controls"><label>Input <input data-input="input" type="range" min="0" max="5" step=".5" value="2"></label><label>Weight <input data-input="weight" type="range" min="-3" max="3" step=".5" value="1"></label><label>Bias <input data-input="bias" type="range" min="-4" max="4" step=".5" value="-1"></label></div><div class="neuron-pipeline" aria-hidden="true"><span>Input</span><span>× Weight + Bias</span><span>ReLU</span></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
 if(id==='Classical ML:KNN')return '<section class="numeric-lab" data-lab="knn"><div class="eyebrow">INTERACTIVE EXPLORER</div><h2>Meet the nearest neighbors</h2><p>Six labeled training points lie on a one-dimensional number line. A points are at 1, 2, 3; B points are at 7, 8, 9. Move the question mark and choose k to see a majority-vote prediction.</p><div class="lab-controls"><label>New point position <input data-input="position" type="range" min="0" max="10" step=".5" value="4"></label><label>Number of neighbors k <input data-input="k" type="range" min="1" max="5" step="2" value="3"></label></div><div class="knn-line" data-lab-visual aria-hidden="true"></div><p class="lab-output" data-lab-output role="status" aria-live="polite"></p></section>';
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
   }else if(name==='neuron'){
    const n=neuronOutput(val('input'),val('weight'),val('bias'));
    output.textContent='Input '+n.input+' × weight '+n.weight+' + bias '+n.bias+' = score '+n.score+'. ReLU output: '+n.relu+'.';
   }else if(name==='knn'){
    const n=predictNeighbors(val('position'),val('k'));
    visual.replaceChildren();
    for(const point of neighborsData){const cell=doc.createElement('span');cell.className='knn-point '+point.label.toLowerCase();cell.textContent=point.label;cell.style.left=(10*point.x)+'%';visual.append(cell)}
    const query=doc.createElement('span');query.className='knn-query';query.textContent='?';query.style.left=(10*n.position)+'%';visual.append(query);
    output.textContent='At position '+n.position+', the '+n.k+' nearest points vote A: '+n.votes.A+' and B: '+n.votes.B+'. Predicted label: '+n.label+'.';
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
