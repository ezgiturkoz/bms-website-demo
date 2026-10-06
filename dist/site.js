const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
matchMedia('(min-width:1051px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.querySelector('.copy-address')?.addEventListener('click',async e=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(e.currentTarget.dataset.address);status.textContent='Adres panoya kopyalandı.';}catch{status.textContent='Otomatik kopyalama kullanılamıyor. Yukarıdaki adresi seçerek kopyalayabilirsiniz.';}});

// Preserve direct links to service scopes when their disclosure is closed.
function revealFragment(){
  let id;
  try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);
  if(!target)return;
  let opened=false;
  for(let element=target;element;element=element.parentElement){
    if(element instanceof HTMLDetailsElement&&!element.open){element.open=true;opened=true;}
  }
  if(opened)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
}
window.addEventListener('hashchange',revealFragment);
revealFragment();
