import {company,nav} from './content.mjs';
export const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const button = (label,url,secondary=false) => `<a class="button ${secondary?'secondary':''}" href="${url}">${label}</a>`;
export const brand = () => '<img class="brand-logo" src="/assets/bms-logo.svg" alt="BMS Kalite ve Yazılım" width="1142" height="462">';
export function header(path){return `<a class="skip" href="#main">İçeriğe geç</a><div class="topbar"><div class="container"><span>Lokman Hekim Üniversitesi · LHUSTEK</span><span>Söğütözü, Ankara</span></div></div><header class="header"><div class="container nav-wrap"><a class="brand" href="/" aria-label="BMS Kalite Yazılım — Ana Sayfa">${brand()}</a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menü <span aria-hidden="true">☰</span></button><nav id="navigation" aria-label="Ana menü">${nav.map(([href,label])=>`<a href="${href}" class="${href==='/iletisim/'?'nav-contact':''}" ${path===href?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;}
export function footer(){return `<footer><div class="container footer-grid"><div><p>Kalite, güvenilirlik ve izlenebilirlik için danışmanlık, eğitim, belgelendirme ve yazılım.</p></div><div><h2>Site Haritası</h2>${nav.slice(1).map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div><div><h2>Merkezimiz</h2><p>${company.center}</p><address>${company.address}</address><a class="footer-contact" href="/iletisim/">Konum bilgileri </a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${company.name}</span><span>Kaliteyi birlikte geliştirelim.</span></div></footer>`;}
export const heading=(label,title,desc='')=>`<div class="section-heading"><p class="eyebrow">${label}</p><h2>${title}</h2>${desc?`<p>${desc}</p>`:''}</div>`;
const pageImages = {
 'Danışmanlık': ['quality-consulting.webp','Danışmanlık çalışmalarında ekip iş birliğini temsil eden görsel'],
 'Eğitim': ['technical-training.webp','Mesleki eğitim ve uygulama çalışmalarını temsil eden görsel'],
 'Belgelendirme': ['certification-review.webp','Yönetim sistemi belgelerinin inceleme ve değerlendirme sürecini temsil eden görsel'],
 'Kalite Yazılımları': ['digital-workflow.webp','Dijital süreçler için bir yazılım çalışma ortamını temsil eden görsel']
};
export const pageHero=(label,title,desc)=>{
 const visual=pageImages[label];
 return `<section class="page-hero ${visual?'page-hero--visual':''}"><div class="container"><div class="breadcrumb"><a href="/">Ana Sayfa</a><span aria-hidden="true">/</span><span>${label}</span></div><div class="page-hero-grid"><div class="page-hero-copy"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="lead">${desc}</p></div>${visual?`<div class="page-hero-image"><img src="/assets/${visual[0]}" alt="${visual[1]}" width="1536" height="1024" fetchpriority="high"></div>`:''}</div></div></section>`;
};
export const cta=()=>`<section class="cta"><div class="container cta-inner"><div><p class="eyebrow">BMS KALİTE YAZILIM</p><h2>Kuruluşunuzun kalite<br>yolculuğuna birlikte yön verelim.</h2></div>${button('Merkezimiz ve iletişim','/iletisim/')}</div></section>`;
export const disclaimer=()=>'<aside class="note"><strong>Akreditasyon süreci hakkında</strong><p>Akreditasyon kararı ve belge düzenleme yetkisi TÜRKAK’a aittir. Danışmanlık hizmeti tek başına akreditasyon garantisi olarak değerlendirilemez.</p></aside>';
