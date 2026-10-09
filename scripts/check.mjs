import {createHash} from 'node:crypto';
import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
import {consulting,certifications} from '../src/catalog.mjs';
import {trainings} from '../src/content.mjs';
for(const page of pages){const html=await readFile('dist'+page.path+'index.html','utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,page.path+' h1');assert.match(html,/<html lang="tr">/);assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/<meta name="description" content="[^"]+">/);assert(!/rankalite|openai|chatgpt|astra|15\+|TODO|lorem ipsum/i.test(html),'Forbidden or placeholder content');for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:'))continue;const url=new URL(href,'https://bms.invalid'+page.path);const pathname=url.pathname;const fragment=decodeURIComponent(url.hash.slice(1));const target='dist'+pathname+(pathname.endsWith('/')?'index.html':'');await access(target);if(fragment){const targetHtml=await readFile(target,'utf8');assert(targetHtml.includes(`id="${fragment}"`),`Missing fragment ${href}`);}}}
const hosting=JSON.parse((await readFile('.openai/hosting.json','utf8')).replace(/^\uFEFF/,''));assert.equal(hosting.static.directory,'dist');await access('dist/index.html');console.log(`PASS: ${pages.length} routes, headings, metadata, internal links/fragments, assets, content exclusions and Sites static manifest.`);

// Ensure the complete catalogue is rendered, including entries beyond the former seven-course limit.
const consultingHtml=await readFile('dist/danismanlik/index.html','utf8');
for(const service of consulting){assert(consultingHtml.includes(service.title),`Missing consulting service: ${service.id}`);for(const item of service.items||[])assert(consultingHtml.includes(item),`Missing scope item: ${item}`);}
const educationHtml=await readFile('dist/egitim/index.html','utf8');
for(const [title] of trainings)assert(educationHtml.includes(title),`Missing training: ${title}`);
const certificationHtml=await readFile('dist/belgelendirme/index.html','utf8');
for(const {code,title} of certifications){assert(certificationHtml.includes(code));assert(certificationHtml.includes(title));}
console.log(`PASS: ${consulting.length} consulting services, ${trainings.length} training programmes and ${certifications.length} certification services rendered in full.`);

// Regression guard for the reported repeated-photograph issue.
const home=await readFile('dist/index.html','utf8');
const homeImages=[...home.matchAll(/<img\b[^>]*>/g)]
 .filter(([tag])=>!/\bclass="[^"]*\bbrand-logo\b/.test(tag))
 .map(([tag])=>tag.match(/\bsrc="([^"]+)"/)[1]);
assert(new Set(homeImages).size>=5,'Home must retain at least five distinct photographs including its carousel');
const hashes=await Promise.all(homeImages.map(async file=>createHash('sha256').update(await readFile('dist'+file)).digest('hex')));
assert(new Set(hashes).size>=5,'Renaming the same image does not satisfy distinct imagery');
console.log('PASS: homepage retains five distinct photographs; carousel reuse is intentional.');

// Every service can open the shared form; its no-JavaScript URL keeps the subject.
for(const [html,count] of [[consultingHtml,consulting.length],[educationHtml,trainings.length],[certificationHtml,certifications.length]]) {
 assert.equal([...html.matchAll(/data-contact-subject="/g)].length,count);
 for(const [,href] of html.matchAll(/href="(\/iletisim\/\?konu=[^"]+)"/g)) {
  const url=new URL(href,'https://bms.invalid');
  assert(url.searchParams.get('konu').length>3);
 }
}
const contact=await readFile('dist/iletisim/index.html','utf8');
assert(contact.includes('id="contact-page-form"'));assert(contact.includes('id="contact-dialog-form"'));
const ids=[...contact.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Form IDs must not collide');
assert(!home.includes('class="topbar"'));assert(!home.includes('odaklanın.'));
assert(consultingHtml.indexOf('id="iso-17020"')<consultingHtml.indexOf('id="iso-17025"'));
assert(!educationHtml.includes('ISO 9001:2015'));assert(!certificationHtml.includes('ISO 9001:2015'));
assert.equal([...home.matchAll(/class="hero-slide /g)].length,3);
console.log('PASS: 55 service contact links, shared forms, 17020 priority, edition updates and hero slides.');
