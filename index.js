const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
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
      'React, interaktif kullanıcı arayüzü geliştirmeyi zahmetsiz hale getirir. Siz uygulamanızdaki her durum için basit sayfalar tasarlayın. React, veriniz değiştiğinde sadece doğru bileşenleri verimli bir şekilde güncellesin ve oluştursun.Bildirimsel sayfalar, kodunuzu daha öngörülebilir ve hata ayıklaması daha kolay hale getirir.',
    haber_img: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png',
    haber_tarih: '22/10/2025'
  },
  {
    id: 2,
    haber_adi: "Svelte'in Filmi Çekiliyor",
    haber_icerik:
      'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.',
    haber_img:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--be3eR7Dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nunomalex.me/svelte-logo.png',
    haber_tarih: '22/10/2030'
  },
  {
    id: 3,
    haber_adi: "Vue'nün Filmi Çekiliyor",
    haber_icerik:
      'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
    haber_img: 'https://images.dnomia.com/ceaksan/vue-js.jpeg',
    haber_tarih: '22/10/2024'
  },
  {
    id: 4,
    haber_adi: "Express'in Filmi Çekiliyor",
    haber_icerik:
      'This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.',
    haber_img: 'https://expressjs.com/images/express-facebook-share.png',
    haber_tarih: '22/10/2040'
  },
  {
    id: 5,
    haber_adi: "JavaScript'in Fişi Çekiliyor",
    haber_icerik:
      'JavaScript® (genellikle js olarak kısaltılır) basit şekilde yorumlanmış ve birinci sınıf fonksiyonlar ile harmanlanmış nesne tabanlı bir programlama dilidir. Daha çok web sayfaları için kullanılan bir betik dili olarak bilinir, ancak node.js veya Apache CouchDB gibi tarayıcı olmayan ortamlarda da sıkça kullanılır. Prototip tabanlı olması ve çoklu paradigma içeren bir dil olması dinamik ve fonksiyonel bir yapı sağlar. JavaScript hakkında detaylı bilgi edinin.',
    haber_img:
      'https://miro.medium.com/max/900/1*O8VS6yXEVDYnbb4bOVKs8A.jpeg',
    haber_tarih: '22/10/2080'
  }
];

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
    salon_aciklama: '4DX ile Filmi Yaşamaya Hazırsın',
    salon_img: 'https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/4DX.jpg',
    ozellikler: ['4D', 'SU Efekti', 'Işık Efekti', 'Titreşim', 'Koku']
  },
  {
    id: 4,
    salon_adi: 'IMAX',
    salon_aciklama: 'IMAX Sinema Sistemi Kullanıma Sunuldu',
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
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
