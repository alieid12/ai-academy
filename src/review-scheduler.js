// Deterministic, device-local spaced-retrieval scheduling.
// This is a learning aid, not a claim of measured mastery.
const DAY = 24*60*60*1000;
export const REVIEW_INTERVAL_DAYS = [0,1,3,7,14,30,60];
export function scheduleReview(previous, remembered, now=Date.now()){
 const oldStage=Number.isInteger(previous?.stage)?Math.max(0,Math.min(previous.stage,6)):0;
 const stage=remembered?Math.min(6,oldStage+1):0;
 const delay=remembered?REVIEW_INTERVAL_DAYS[stage]*DAY:10*60*1000;
 return {stage,dueAt:now+delay,lastReviewedAt:now};
}
export function dueLessonIds(completed, reviews, now=Date.now()){
 if(!Array.isArray(completed))return [];
 const records=reviews&&typeof reviews==='object'?reviews:{};
 return [...new Set(completed)].filter(id=>{
  const due=records[id]?.dueAt;
  return typeof id==='string'&&(!Number.isFinite(due)||due<=now);
 });
}
export function safeReviewRecords(raw, validIds){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return {};
 const records={};
 for(const [id,entry] of Object.entries(raw)){
  if(!validIds.has(id)||!entry||typeof entry!=='object')continue;
  if(!Number.isInteger(entry.stage)||entry.stage<0||entry.stage>6)continue;
  if(!Number.isFinite(entry.dueAt)||entry.dueAt<0)continue;
  records[id]={stage:entry.stage,dueAt:entry.dueAt,lastReviewedAt:Number.isFinite(entry.lastReviewedAt)?entry.lastReviewedAt:0};
 }
 return records;
}
