import test from 'node:test';
import assert from 'node:assert/strict';
import {deliverContact} from '../public/contact-delivery.js';

const endpoint='https://formsubmit.co/ajax/test@example.com';
const payload={email:'visitor@example.com',subject:'ISO/IEC 17020',message:'İletişim formu test iletisi.'};
const response=(body,ok=true)=>async()=>({ok,json:async()=>body});

test('sends the visitor email and service subject, accepts both documented success formats',async()=>{
 for(const success of [true,'true']) {
  const result=await deliverContact(endpoint,payload,{fetchImpl:async(url,options)=>{
   assert.equal(url,endpoint);assert.equal(options.method,'POST');
   assert.deepEqual(JSON.parse(options.body),payload);
   assert.equal(options.headers.Accept,'application/json');
   return {ok:true,json:async()=>({success})};
  }});
  assert.equal(result,'accepted');
 }
});
test('activation is not reported as delivered, including a false success response',async()=>{
 for(const success of [true,false]) assert.equal(await deliverContact(endpoint,payload,{fetchImpl:response({success,message:'Please activate this form by email'})}),'activation-required');
});
test('provider rejections, HTTP failures, malformed replies and network errors are not success',async()=>{
 for(const fetchImpl of [response({success:false}),response({success:'false'}),response({success:true},false),response({}),async()=>{throw new TypeError('Network unavailable');},async()=>({ok:true,json:async()=>{throw new SyntaxError('Invalid JSON');}})]) {
  await assert.rejects(deliverContact(endpoint,payload,{fetchImpl}));
 }
});
test('slow requests abort instead of leaving the form permanently disabled',async()=>{
 await assert.rejects(deliverContact(endpoint,payload,{timeoutMs:10,fetchImpl:(_url,{signal})=>new Promise((_resolve,reject)=>signal.addEventListener('abort',()=>reject(new DOMException('Timed out','AbortError'))))}),{name:'AbortError'});
});
