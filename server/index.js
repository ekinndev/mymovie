const express = require('express');
const app = express();
const port = 4000;
const FILM_ARRAY = [
  'tt0299117',
  'tt0234853',
  'tt0783515',
  'tt1190634',
  'tt0468569',
  'tt1375666',
  'tt0903747',
  'tt7221388',
  'tt11393148',
  'tt11464826'
];
const haberler = [
  {
    id: 1,
    haber_adi: "React'in Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_img: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png',
    haber_tarih: '22/10/2025'
  },
  {
    id: 2,
    haber_adi: "Svelte'in Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--be3eR7Dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nunomalex.me/svelte-logo.png',
    haber_tarih: '22/10/2030'
  },
  {
    id: 3,
    haber_adi: "Vue'nün Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_img: 'https://images.dnomia.com/ceaksan/vue-js.jpeg',
    haber_tarih: '22/10/2024'
  },
  {
    id: 4,
    haber_adi: "Express'in Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_img: 'https://expressjs.com/images/express-facebook-share.png',
    haber_tarih: '22/10/2040'
  },
  {
    id: 5,
    haber_adi: "JavaScript'in Fişi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_img: 'https://lh3.googleusercontent.com/proxy/s17dz1mmRrtV8M6oMtsINBJPdnuSjaWuPTjzqFkk1-2B34vCY4Xlejicjwqr5AcRlnw5oVj7PH1F8qgpMDgniWJwOOLN-kxDhPY7mJjamowtanI',
    haber_tarih:'22/10/2080'
const salonlar = [
  {
    id: 1,
    salon_adi: 'GOLD CLASS',
    salon_aciklama: 'Ev rahatlığında sinema keyfi!',
    salon_img: 'https://media.cinemaximum.com.tr/1110//Files/goldclass/1920x420px_goldclass_new.jpg',
    ozellikler: ['Geniş Koltuk', 'Yatabilen koltuk', 'Fuaye alanı', 'Telefon Şarj Ünitesi', 'Üst Düzey Konfor']
  },
  {
    id: 2,
    salon_adi: 'Skybox',
    salon_aciklama: 'Ev rahatlığında sinema keyfi!',
    salon_img: 'https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/1920x420px_skybox.jpg',
    ozellikler: ['Geniş Koltuk', 'Yatabilen koltuk', 'Deri Koltuk', 'Loca']
  },
  {
    id: 3,
    salon_adi: '4DX',
    salon_aciklama: '4DX ile Filmi Yaşamaya Hazır Mısın?',
    salon_img: 'https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/4DX.jpg',
    ozellikler: ['4D', 'SU Efekti', 'Işık Efekti', 'Titreşim', 'Koku']
  },
  {
    id: 4,
    salon_adi: 'IMAX',
    salon_aciklama: 'IMAX Sinema Sistemi',
    salon_img: 'https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/_MAX.jpg',
    ozellikler: ['Geniş Görüş Açısı', 'SURROUND Ses Sistemi', '145 Derece Perde']
  }
];

app.get('/api', (req, res) => {
  res.json(FILM_ARRAY);
});
app.get('/api/haberler', (req, res) => {
  res.json(haberler);
});
app.get('/api/haberler/:id', (req, res) => {
  // eslint-disable-next-line eqeqeq
  const haber = haberler.find(haber => haber.id == req.params.id);
  res.json(haber);
});
app.get('/api/salonlar', (req, res) => {
  res.json(salonlar);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
