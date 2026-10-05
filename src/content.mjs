import {additionalTrainings} from './catalog.mjs';
export const company = {
 name: 'BMS Kalite Yazılım A.Ş.',
 address: 'Söğütözü Mahallesi, 9 Eylül Cad. No: 4 İç Kapı No: 1, Ankara',
 center: 'Lokman Hekim Üniversitesi Sağlık İlaç Teknoloji Merkezi (LHUSTEK)',
 email: '', phone: '',
 intro: 'BMS Kalite Yazılım A.Ş., Eylül 2026 tarihinde Lokman Hekim Üniversitesi Sağlık İlaç Teknoloji Merkezi (LHUSTEK) bünyesinde kurulmuştur. Sağlık, teknoloji ve kalite odaklı hizmetler sunmak üzere faaliyet göstermektedir.',
 mission: 'Kuruluşların kalite, güvenilirlik ve izlenebilirlik hedeflerine ulaşmasını destekleyen; uygulanabilir, sürdürülebilir ve ihtiyaçlara özel çözümler geliştirmek. Danışmanlık, eğitim ve yazılım yetkinliklerini bir arada kullanarak kalite süreçlerinin etkin biçimde yönetilmesine katkı sağlamak.',
 vision: 'Sağlık ve teknoloji alanlarında kalite yönetimi, akreditasyon danışmanlığı ve kalite yazılımları konusunda güvenilir ve yenilikçi çözümler sunan; ulusal ve uluslararası standartlara uyumu destekleyen sürdürülebilir bir marka olmak.'
};
export const nav = [['/', 'Ana Sayfa'], ['/hakkimizda/', 'Hakkımızda'], ['/danismanlik/', 'Danışmanlık'], ['/egitim/', 'Eğitim'], ['/belgelendirme/', 'Belgelendirme'], ['/yazilim/', 'Kalite Yazılımları'], ['/iletisim/', 'İletişim']];
export const services = [
 {id:'yonetim-sistemi',title:'Yönetim sistemi ve dokümantasyon',short:'Laboratuvarın çalışma biçimine uygun bir kalite altyapısı.',items:['Kalite politikaları, hedefler ve görev, yetki ve sorumlulukların oluşturulması','Prosedür, talimat, form, liste ve planların kuruluşa özgü hazırlanması','Doküman ve kayıt kontrol sisteminin kurulması','Tarafsızlık, gizlilik, risk ve fırsatların değerlendirilmesi','Uygun olmayan iş, şikayet, düzeltici faaliyet ve iyileştirme süreçleri','İç tetkik ve Yönetimin Gözden Geçirmesi (YGG) çalışmalarına destek']},
 {id:'teknik-yeterlilik',title:'Teknik laboratuvar uygulamaları',short:'Yetkinlik, ölçüm ve sonuçların izlenebilirliği için uygulama desteği.',items:['Personel yeterlilik kriterleri, eğitim planları ve yetkilendirme kayıtları','Tesis ve çevre koşullarının izlenmesi','Cihaz envanteri, kalibrasyon planı, ara kontrol ve bakım kayıtları','Metrolojik izlenebilirlik ve kalibrasyon sertifikalarının değerlendirilmesi','Metot seçimi, doğrulama / validasyon plan ve kayıtları','Ölçüm belirsizliği yaklaşımı ve kayıt şablonları','Numune alma ve numune yönetimi süreçleri (kapsama göre)','Rapor ve sertifika şablonlarının gözden geçirilmesi','Kalite kontrol, yeterlilik testi ve laboratuvarlar arası karşılaştırma planları','Dış tedarikçi ve hizmet sağlayıcı değerlendirme kayıtları']},
 {id:'akreditasyon',title:'TÜRKAK akreditasyonuna hazırlık',short:'Başvuru öncesinden denetim sonrası faaliyetlere uzanan destek.',items:['Akreditasyon kapsamının belirlenmesi ve kapsam tablosu hazırlığı','Başvuru için doküman ve uygulama kayıtlarının kontrolü','Başvuru portalı dosya hazırlığı ve yükleme desteği','Denetim öncesi hazırlık ve gerektiğinde prova / masa başı kontrol','Denetim sırasında müşteri ile koordinasyon','Uygunsuzluklar için kök neden analizi, düzeltme ve düzeltici faaliyet desteği','Akreditasyon karar sürecinin takibi']}
];
export const trainings = [
 ['TS EN ISO/IEC 17025 Temel Standart Eğitimi','Standardın gereklilikleri ve laboratuvar uygulamalarına yönelik madde bazlı çalışma.'],
 ['Risk ve Fırsatların Yönetimi','Laboratuvarın faaliyetlerinde risk ve fırsatların değerlendirilmesi.'],
 ['İç Tetkikçi Eğitimi','ISO 19011 yaklaşımıyla iç tetkik uygulamalarının ele alınması.'],
 ['Metrolojik İzlenebilirlik ve Kalibrasyon Sertifikalarının Değerlendirilmesi Eğitimi','Metrolojik izlenebilirlik ve kalibrasyon sertifikalarının değerlendirilmesi.'],
 ['Metot Validasyon (Geçerli Kılma) / Verifikasyon (Doğrulama) Eğitimi','Metot doğrulama, geçerli kılma ve ilgili uygulama kayıtları.'],
 ['Ölçüm Belirsizliği','Ölçüm belirsizliği çalışmalarının planlanması ve kayıt altına alınması.'],
 ['Sonuçların Geçerliliği ve Kalite Kontrol','Sonuçların geçerliliğinin güvence altına alınması ve kalite kontrol uygulamaları.'],
 ...additionalTrainings
];
export const approach = [
 ['Kuruluşa özel yaklaşım','Faaliyet kapsamı, personel yapısı ve mevcut uygulamalara göre bir çalışma planı.'],
 ['Standart odaklı sistem kurulumu','Standart gereklilikleriyle kuruluşun fiili çalışma biçimini bir araya getiren altyapı.'],
 ['Eğitim ve uygulama birlikteliği','Standart ve teknik eğitimlerin proje uygulamalarıyla birlikte ele alınması.'],
 ['Başvuru ve denetim hazırlığı','İlgili hizmet kapsamında doküman, kayıt ve uygulama kontrolleriyle hazırlık.'],
 ['Kalite ve izlenebilirlik','Dokümantasyon, uygulama ve kalite kayıtlarına bütüncül yaklaşım.'],
 ['Dijitalleşme perspektifi','Uygun olduğunda yazılım destekli doküman, kayıt, takip ve raporlama iş akışları.']
];
export const steps = [
 ['Kapsam ve planlama','Laboratuvarın faaliyet kapsamı ve mevcut uygulamaları değerlendirilir. Kuruluşa özgü çalışma planı oluşturulur.'],
 ['Eğitim ve sistem kurulumu','Eğitimler, yönetim sistemi dokümantasyonu, teknik kayıtlar ve uygulama kanıtları birlikte ele alınır.'],
 ['Başvuru ve denetim hazırlığı','Sistem ve teknik uygulamaların olgunluğu müşteriyle birlikte değerlendirilir; başvuru dosyası ve denetim hazırlığı tamamlanır.'],
 ['Denetim sonrası takip','Uygunsuzlukların kapatılmasına yönelik çalışmalara destek verilir ve akreditasyon karar süreci takip edilir.']
];
