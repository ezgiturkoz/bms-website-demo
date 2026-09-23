import {createHash} from 'node:crypto';
import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
for(const page of pages){const html=await readFile('dist'+page.path+'index.html','utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,page.path+' h1');assert.match(html,/<html lang="tr">/);assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/<meta name="description" content="[^"]+">/);assert(!/rankalite|openai|chatgpt|astra|15\+|info@|TODO|lorem ipsum/i.test(html),'Forbidden or placeholder content');for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:'))continue;const [pathname,fragment]=href.split('#');const target=pathname?('dist'+pathname+(pathname.endsWith('/')?'index.html':'')):'dist'+page.path+'index.html';await access(target);if(fragment){const targetHtml=await readFile(target,'utf8');assert(targetHtml.includes(`id="${fragment}"`),`Missing fragment ${href}`);}}}
const hosting=JSON.parse((await readFile('.openai/hosting.json','utf8')).replace(/^\uFEFF/,''));assert.equal(hosting.static.directory,'dist');await access('dist/index.html');console.log('PASS: six routes, headings, metadata, internal links/fragments, assets, content exclusions and Sites static manifest.');

// Regression guard for the reported repeated-photograph issue.
const home=await readFile('dist/index.html','utf8');
const homeImages=[...home.matchAll(/<img[^>]*src="([^"]+)"/g)].map(m=>m[1]);
assert.equal(homeImages.length,5,'Home should have five image placements');
assert.equal(new Set(homeImages).size,5,'Each home image must be distinct');
const hashes=await Promise.all(homeImages.map(async file=>createHash('sha256').update(await readFile('dist'+file)).digest('hex')));
assert.equal(new Set(hashes).size,5,'Renaming the same image does not satisfy distinct imagery');
console.log('PASS: five homepage image placements use five distinct image files and hashes.');
