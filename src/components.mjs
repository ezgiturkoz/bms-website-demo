import {company,nav} from './content.mjs';
import {contactEndpoint,contactAjaxEndpoint} from './contact-config.mjs';
export const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const button = (label,url,secondary=false) => `<a class="button ${secondary?'secondary':''}" href="${url}">${label}</a>`;
export const brand = () => '<img class="brand-logo" src="/assets/bms-logo.svg" alt="BMS Kalite ve Yazılım" width="1060" height="366">';
export function header(path){return `<a class="skip" href="#main">İçeriğe geç</a><header class="header"><div class="container nav-wrap"><a class="brand" href="/" aria-label="BMS Kalite Yazılım — Ana Sayfa">${brand()}</a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menü <span aria-hidden="true">☰</span></button><nav id="navigation" aria-label="Ana menü">${nav.map(([href,label])=>`<a href="${href}" class="${href==='/iletisim/'?'nav-contact':''}" ${path===href?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;}
export function footer(){return `<footer><div class="container footer-grid"><div><p>Kalite, güvenilirlik ve izlenebilirlik için danışmanlık, eğitim, belgelendirme danışmanlığı ve yazılım.</p></div><div><h2>Site Haritası</h2>${nav.slice(1).map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div><div><h2>Merkezimiz</h2><p>${company.center}</p><address>${company.address}</address><a class="footer-contact" href="/iletisim/">Konum bilgileri </a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${company.name}</span><span>Kaliteyi birlikte geliştirelim.</span></div></footer>`;}
export const heading=(label,title,desc='')=>`<div class="section-heading"><p class="eyebrow">${label}</p><h2>${title}</h2>${desc?`<p>${desc}</p>`:''}</div>`;
const pageImages = {
 'Danışmanlık': ['quality-consulting.webp','Danışmanlık çalışmalarında ekip iş birliğini temsil eden görsel'],
 'Eğitim': ['technical-training.webp','Mesleki eğitim ve uygulama çalışmalarını temsil eden görsel'],
 'Belgelendirme Danışmanlığı': ['certification-review.webp','Yönetim sistemi belgelerinin inceleme ve değerlendirme sürecini temsil eden görsel'],
 'Kalite Yazılımları': ['digital-workflow.webp','Dijital süreçler için bir yazılım çalışma ortamını temsil eden görsel']
};
export const pageHero=(label,title,desc)=>{
 const visual=pageImages[label];
 return `<section class="page-hero ${visual?'page-hero--visual':''}"><div class="container"><div class="breadcrumb"><a href="/">Ana Sayfa</a><span aria-hidden="true">/</span><span>${label}</span></div><div class="page-hero-grid"><div class="page-hero-copy"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="lead">${desc}</p></div>${visual?`<div class="page-hero-image"><img src="/assets/${visual[0]}" alt="${visual[1]}" width="1536" height="1024" fetchpriority="high"></div>`:''}</div></div></section>`;
};
export const cta=()=>`<section class="cta"><div class="container cta-inner"><div><p class="eyebrow">BMS KALİTE YAZILIM</p><h2>Kuruluşunuzun kalite<br>yolculuğuna birlikte yön verelim.</h2></div>${button('Merkezimiz ve iletişim','/iletisim/')}</div></section>`;
export const disclaimer=()=>'<aside class="note"><strong>Akreditasyon süreci hakkında</strong><p>Akreditasyon kararı ve belge düzenleme yetkisi TÜRKAK’a aittir. Danışmanlık hizmeti tek başına akreditasyon garantisi olarak değerlendirilemez.</p></aside>';

export const contactButton = subject => `<a class="button contact-trigger" data-contact-subject="${escape(subject)}" href="/iletisim/?konu=${encodeURIComponent(subject)}#iletisim-formu">İletişime geçin</a>`;

export const contactForm = (id='contact-page-form') => `<form class="contact-form" id="${id}" action="${contactEndpoint}" method="POST" data-endpoint="${contactAjaxEndpoint}" aria-describedby="${id}-privacy">
 <fieldset><legend class="visually-hidden">İletişim bilgileriniz ve talebiniz</legend>
  <div class="form-field"><label for="${id}-email">E-posta adresiniz</label><input id="${id}-email" name="email" type="email" autocomplete="email" maxlength="254" required placeholder="ornek@kurumunuz.com"></div>
  <div class="form-field"><label for="${id}-subject">Konu</label><input id="${id}-subject" name="subject" type="text" minlength="3" maxlength="200" required placeholder="Hangi konuda görüşmek istersiniz?"></div>
  <div class="form-field"><label for="${id}-message">İletiniz</label><textarea id="${id}-message" name="message" rows="5" minlength="10" maxlength="5000" required placeholder="İhtiyacınızı ve talebinizi bizimle paylaşın."></textarea></div>
  <div class="form-honey" aria-hidden="true"><label for="${id}-website">Bu alanı boş bırakın</label><input id="${id}-website" type="text" name="_honey" tabindex="-1" autocomplete="off"></div>
  <input type="hidden" name="_subject" value="BMS web sitesi iletişim talebi"><input type="hidden" name="_template" value="table">
  <p class="form-privacy" id="${id}-privacy">Bilgileriniz talebinizi yanıtlamak için kullanılır. E-posta iletimi FormSubmit üzerinden sağlanır.</p>
  <button class="button" type="submit">İletiyi gönder</button>
 </fieldset>
 <p class="form-status" role="status" aria-live="polite" aria-atomic="true"></p>
</form>`;

export const contactDialog = () => `<dialog class="contact-dialog" id="contact-dialog" aria-labelledby="contact-dialog-title"><button class="dialog-close" type="button" aria-label="İletişim formunu kapat"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button><p class="eyebrow">BİRLİKTE PLANLAYALIM</p><h2 id="contact-dialog-title">Size nasıl yardımcı olabiliriz?</h2><p class="dialog-intro">Talebinizi paylaşın, ihtiyaçlarınıza uygun kapsamı birlikte belirleyelim.</p>${contactForm('contact-dialog-form')}</dialog>`;
