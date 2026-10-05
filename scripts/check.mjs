import {createHash} from 'node:crypto';
import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
import {consulting,certifications} from '../src/catalog.mjs';
import {trainings} from '../src/content.mjs';
for(const page of pages){const html=await readFile('dist'+page.path+'index.html','utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,page.path+' h1');assert.match(html,/<html lang="tr">/);assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/<meta name="description" content="[^"]+">/);assert(!/rankalite|openai|chatgpt|astra|15\+|info@|TODO|lorem ipsum/i.test(html),'Forbidden or placeholder content');for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:'))continue;const [pathname,fragment]=href.split('#');const target=pathname?('dist'+pathname+(pathname.endsWith('/')?'index.html':'')):'dist'+page.path+'index.html';await access(target);if(fragment){const targetHtml=await readFile(target,'utf8');assert(targetHtml.includes(`id="${fragment}"`),`Missing fragment ${href}`);}}}
const hosting=JSON.parse((await readFile('.openai/hosting.json','utf8')).replace(/^\uFEFF/,''));assert.equal(hosting.static.directory,'dist');await access('dist/index.html');console.log(`PASS: ${pages.length} routes, headings, metadata, internal links/fragments, assets, content exclusions and Sites static manifest.`);

// Ensure the complete catalogue is rendered, including entries beyond the former seven-course limit.
const consultingHtml=await readFile('dist/danismanlik/index.html','utf8');
for(const service of consulting){assert(consultingHtml.includes(service.title),`Missing consulting service: ${service.id}`);for(const item of service.items||[])assert(consultingHtml.includes(item),`Missing scope item: ${item}`);}
const educationHtml=await readFile('dist/egitim/index.html','utf8');
for(const [title] of trainings)assert(educationHtml.includes(title),`Missing training: ${title}`);
const certificationHtml=await readFile('dist/belgelendirme/index.html','utf8');
for(const {code,title} of certifications){assert(certificationHtml.includes(code));assert(certificationHtml.includes(title));}
console.log(`PASS: ${consulting.length} additional consulting services, ${trainings.length} training programmes and ${certifications.length} certification services rendered in full.`);

// Regression guard for the reported repeated-photograph issue.
const home=await readFile('dist/index.html','utf8');
const homeImages=[...home.matchAll(/<img[^>]*src="([^"]+)"/g)].map(m=>m[1]);
assert.equal(homeImages.length,5,'Home should have five image placements');
assert.equal(new Set(homeImages).size,5,'Each home image must be distinct');
const hashes=await Promise.all(homeImages.map(async file=>createHash('sha256').update(await readFile('dist'+file)).digest('hex')));
assert.equal(new Set(hashes).size,5,'Renaming the same image does not satisfy distinct imagery');
console.log('PASS: five homepage image placements use five distinct image files and hashes.');
