// Supplied service catalogue, extended at the user's request on 6 October 2026.
// Source mapping and edition decisions are recorded in docs/SERVICE-COMPARISON.md.
export const consulting = [
  {
    id: 'iso-17025', code: 'ISO/IEC 17025',
    title: 'Deney ve Kalibrasyon Laboratuvarları Danışmanlığı',
    description: 'Yönetim sistemi ve teknik yeterlilik altyapısının kurulması, geliştirilmesi ve TÜRKAK akreditasyonuna hazırlık.'
  },
  {
    id: 'iso-17020', code: 'ISO/IEC 17020:2026',
    title: 'Muayene Kuruluşları Yönetim Sistemi Danışmanlığı',
    description: 'Muayene kuruluşları için ISO/IEC 17020:2026 kapsamında yönetim sistemi danışmanlığı.'
  },
  {
    id: 'iso-17020-gecis', code: 'ISO/IEC 17020',
    title: 'ISO/IEC 17020:2012’den ISO/IEC 17020:2026’ya Geçiş Danışmanlığı',
    description: 'Muayene kuruluşlarının 2012 sürümünden 2026 sürümüne geçişine yönelik danışmanlık.'
  },
  {
    id: 'iso-17024', code: 'ISO/IEC 17024:2026',
    title: 'Personel Belgelendirme Kuruluşları Danışmanlığı',
    description: 'Personel belgelendirme kuruluşları için ISO/IEC 17024:2026 kapsamında danışmanlık.'
  },
  {
    id: 'iso-17024-gecis', code: 'ISO/IEC 17024',
    title: 'ISO/IEC 17024:2012’den ISO/IEC 17024:2026’ya Geçiş Danışmanlığı',
    description: 'Personel belgelendirme kuruluşlarının 2012 sürümünden 2026 sürümüne geçişine yönelik danışmanlık.'
  },
  {
    id: 'iso-15189', code: 'ISO 15189:2022',
    title: 'Tıbbi Laboratuvarlar İçin Kalite ve Yeterlilik Danışmanlığı',
    description: 'Tıbbi laboratuvarların kalite ve yeterlilik süreçleri için ISO 15189:2022 danışmanlığı.'
  },
  {
    id: 'ivdr', code: 'IVDR',
    title: 'İn-Vitro Tıbbi Tanı Cihazları (IVDR) Teknik Dosya ve CE Belgelendirme Danışmanlığı',
    description: 'İn-vitro tıbbi tanı cihazları için teknik dosya ve CE belgelendirme sürecine hazırlık.',
    items: ['IVDR uygunluk değerlendirmesi', 'Teknik dosya hazırlama', 'Performans değerlendirme', 'Risk yönetimi', 'ISO 13485 Kalite Yönetim Sistemi kurulumu', 'CE belgelendirme sürecine hazırlık']
  },
  {
    id: 'mdr', code: 'MDR',
    title: 'Tıbbi Cihaz (MDR) Teknik Dosya ve CE Belgelendirme Danışmanlığı',
    description: 'Tıbbi cihazlar için teknik dosya ve CE belgelendirme sürecine hazırlık.',
    items: ['MDR uygunluk değerlendirmesi', 'Teknik dosya hazırlama', 'Risk yönetimi', 'Klinik değerlendirme', 'ISO 13485 Kalite Yönetim Sistemi', 'CE belgelendirme sürecine hazırlık']
  },
  {
    id: 'gmp', code: 'GMP', title: 'İyi İmalat Uygulamaları (GMP) Danışmanlığı',
    description: 'Mevcut durum analizinden üretim yeri izin başvurusu ve denetim hazırlığına kadar GMP danışmanlığı.',
    items: ['GMP mevcut durum / GAP analizi', 'GMP kalite sisteminin kurulması', 'Üretim tesisi ve alanlarının GMP gerekliliklerine göre değerlendirilmesi', 'Üretim, ambalaj, depo ve laboratuvar alanlarının değerlendirilmesi', 'GMP dokümantasyonunun hazırlanması', 'Validasyon ve kalifikasyon süreçlerine destek', 'TİTCK üretim yeri izin başvurusuna hazırlık', 'GMP denetimine hazırlık', 'Denetim sonrası uygunsuzlukların giderilmesine destek']
  },
  {
    id: 'glp', code: 'GLP / İLU', title: 'İyi Laboratuvar Uygulamaları (GLP/İLU) Danışmanlığı',
    description: 'OECD GLP gereklilikleri kapsamında kalite sistemi ve İLU uygunluk izleme sürecine hazırlık.',
    items: ['OECD GLP gereklilikleri kapsamında GAP analizi', 'GLP kalite sisteminin kurulması', 'Kalite Güvence Programının oluşturulması', 'GLP dokümantasyonunun hazırlanması', 'SOP ve kayıt sisteminin oluşturulması', 'Validasyon / verifikasyon çalışmalarına destek', 'GLP iç denetimleri', 'TÜRKAK İLU uygunluk izleme sürecine hazırlık']
  },
  {
    id: 'tse', code: 'TSE / TSEK / HYB', title: 'TSE Belgelendirme ve Hizmet Yeterlilik Danışmanlığı',
    description: 'TSE, TSEK ve Hizmet Yeterlilik Belgesi süreçlerine yönelik danışmanlık.',
    items: ['TSE Uygunluk Belgesi süreçlerine hazırlık', 'TSEK Belgesi süreçlerine hazırlık', 'TSE Hizmet Yeterlilik Belgesi (HYB) süreçlerine hazırlık', 'Başvuru dokümantasyonunun hazırlanması', 'Belgelendirme denetimine hazırlık', 'Denetim sonrası uygunsuzlukların giderilmesine destek']
  },
  {
    id: 'iso-13485', code: 'ISO 13485:2016', title: 'Tıbbi Cihazlar Kalite Yönetim Sistemi Danışmanlığı',
    description: 'Tıbbi cihaz alanında faaliyet gösteren kuruluşlar için kalite yönetim sistemi kurulumu ve geliştirilmesine yönelik danışmanlık.'
  },
  {
    id: 'iso-20387', code: 'ISO 20387:2018', title: 'Biyobankacılık ve Akreditasyona Hazırlık Danışmanlığı',
    description: 'Biyobankaların kalite, yeterlilik ve tutarlı işleyişine yönelik sistem çalışmaları ile akreditasyon hazırlığına destek.'
  },
  {
    id: 'iso-27001', code: 'ISO/IEC 27001:2022', title: 'Bilgi Güvenliği Yönetim Sistemi Danışmanlığı',
    description: 'Kuruluşun bilgi güvenliği ihtiyaçlarına uygun yönetim sisteminin kurulması ve geliştirilmesine yönelik danışmanlık.'
  },
  {
    id: 'iso-22000', code: 'ISO 22000:2018', title: 'Gıda Güvenliği Yönetim Sistemi Danışmanlığı',
    description: 'Gıda zincirinde faaliyet gösteren kuruluşlar için gıda güvenliği yönetim sistemi çalışmalarına destek.'
  },
  {
    id: 'iso-50001', code: 'ISO 50001:2018', title: 'Enerji Yönetim Sistemi Danışmanlığı',
    description: 'Enerji kullanımını ve enerji performansını ele alan yönetim sisteminin kurulması ve geliştirilmesine yönelik danışmanlık.'
  }
];

export const additionalTrainings = [
  ['ISO 9001:2015 – Kalite Yönetim Sistemi Temel Eğitimi', 'Kalite yönetim sisteminin temel gereklilikleri.'],
  ['ISO 14001:2015 – Çevre Yönetim Sistemi Temel Eğitimi', 'Çevre yönetim sisteminin temel gereklilikleri.'],
  ['ISO 13485:2016 – Tıbbi Cihazlar Kalite Yönetim Sistemi Eğitimi', 'Tıbbi cihazlar alanında kalite yönetim sistemi.'],
  ['ISO/IEC 17020:2026 – Muayene Kuruluşları İçin Gereklilikler Eğitimi', 'Muayene kuruluşları için ISO/IEC 17020:2026 gereklilikleri.'],
  ['ISO/IEC 17020:2026 – Muayene Kuruluşları İçin Gereklilikler Geçiş Eğitimi', 'Muayene kuruluşları için 2026 sürümüne geçiş eğitimi.'],
  ['ISO/IEC 17024:2012 – Personel Belgelendirme Kuruluşları İçin Gereklilikler Eğitimi', 'Personel belgelendirme kuruluşları için ISO/IEC 17024:2012 gereklilikleri.'],
  ['ISO 15189:2022 – Tıbbi Laboratuvarlar Kalite ve Yeterlilik İçin Gereklilikler Eğitimi', 'Tıbbi laboratuvarlar için kalite ve yeterlilik gereklilikleri.'],
  ['GMP – İyi Üretim Uygulamaları (Good Manufacturing Practices) Eğitimi', 'İyi üretim uygulamalarına yönelik eğitim.'],
  ['GLP – İyi Laboratuvar Uygulamaları (Good Laboratory Practices) Eğitimi', 'İyi laboratuvar uygulamalarına yönelik eğitim.'],
  ['Risk Yönetimi ve FMEA – Hata Türleri ve Etkileri Analizi Eğitimi', 'Risk yönetimi, hata türleri ve etkileri analizi.'],
  ['PPAP – Üretim Parçası Onay Prosesi (Production Part Approval Process) Eğitimi', 'Üretim parçası onay prosesi eğitimi.'],
  ['Kök Neden Analizi ve Düzeltici Faaliyet Yönetimi Eğitimi', 'Kök neden analizi ve düzeltici faaliyetlerin yönetimi.'],
  ['ISO 10002 – Müşteri Memnuniyeti ve Şikâyetlerin Ele Alınması Eğitimi', 'Müşteri memnuniyeti ve şikâyetlerin ele alınması.'],
  ['KVKK – 6698 Sayılı Kişisel Verilerin Korunması Kanunu Uygulamaları Eğitimi', 'Kişisel verilerin korunmasına ilişkin uygulamalar.'],
  ['ISO/IEC 17025:2017 – Kuruma Özel Uyum ve Geçiş Programı', '2017 sürümünün gereklilikleri, dokümantasyon ve laboratuvar uygulamalarının birlikte ele alındığı eğitim programı.'],
  ['ISO 15189:2022 – Revizyon ve Geçiş Eğitimi', 'Tıbbi laboratuvarlarda 2022 sürümünün gereklilikleri ve sistemin bu sürüme uyarlanması.'],
  ['ISO 31000:2018 – Risk Yönetimi Eğitimi', 'Kuruluş genelinde risklerin tanımlanması, değerlendirilmesi, ele alınması ve izlenmesine yönelik ilkeler.'],
  ['Temizlik Validasyonu Eğitimi', 'Temizlik süreçlerinin geçerli kılınmasına ilişkin yaklaşım, planlama ve kayıtların ele alınması.'],
  ['AS 9100 Rev D – Havacılık, Uzay ve Savunma Kalite Yönetim Sistemi Eğitimi', 'Havacılık, uzay ve savunma kuruluşları için kalite yönetim sistemi gereklilikleri.'],
  ['ISO 14971:2019 – Tıbbi Cihazlarda Risk Yönetimi Eğitimi', 'Tıbbi cihazların yaşam döngüsü boyunca risklerin değerlendirilmesi ve kontrolüne yönelik yaklaşım.'],
  ['ISO/IEC 27001:2022 – Bilgi Güvenliği Yönetim Sistemi Eğitimi', 'Bilgi güvenliği yönetim sistemi gereklilikleri ve kuruluş içindeki uygulamaları.'],
  ['ISO 45001:2018 – İş Sağlığı ve Güvenliği Yönetim Sistemi Eğitimi', 'İş sağlığı ve güvenliği yönetim sisteminin temel gereklilikleri.'],
  ['ISO 28000:2022 – Güvenlik ve Tedarik Zinciri Güvenliği Yönetimi Eğitimi', 'Tedarik zinciri dahil kuruluşun faaliyetlerinde güvenlik yönetimi gereklilikleri.'],
  ['ISO 50001:2018 – Enerji Yönetim Sistemi Eğitimi', 'Enerji yönetim sistemi gereklilikleri, enerji kullanımı ve performansının değerlendirilmesi.'],
  ['8D Problem Çözme Teknikleri Eğitimi', 'Problemlerin tanımlanması, kök nedenlerin incelenmesi ve kalıcı düzeltici faaliyetlerin planlanması.'],
  ['MDR (AB 2017/745) – Tıbbi Cihaz Tüzüğü Eğitimi', 'Tıbbi cihazlar için MDR kapsamında uygunluk değerlendirmesi ve teknik dokümantasyonun ele alınması.'],
  ['ISO/IEC 27701:2025 – Kişisel Veri ve Gizlilik Yönetim Sistemi Eğitimi', 'Kişisel verilerin işlenmesine ilişkin gizlilik yönetim sistemi gereklilikleri ve uygulama yaklaşımı.']
];

export const certifications = [
  {id: 'iso-9001', code: 'ISO 9001:2015', title: 'Kalite Yönetim Sistemi Belgelendirme'},
  {id: 'iso-14001', code: 'ISO 14001:2015', title: 'Çevre Yönetim Sistemi Belgelendirme'},
  {id: 'iso-45001', code: 'ISO 45001:2018', title: 'İş Sağlığı ve Güvenliği Yönetim Sistemi Belgelendirme'},
  {id: 'iso-27001', code: 'ISO 27001:2022', title: 'Bilgi Güvenliği Yönetim Sistemi Belgelendirme'},
  {id: 'iso-22000', code: 'ISO 22000:2018', title: 'Gıda Güvenliği Yönetim Sistemi Belgelendirme'}
];
