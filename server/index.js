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
    haber_url: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png'
  },
  {
    id: 2,
    haber_adi: "Svelte'in Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_url: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png'
  },
  {
    id: 3,
    haber_adi: "Vue'nün Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_url: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png'
  },
  {
    id: 4,
    haber_adi: "Express'in Filmi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_url: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png'
  },
  {
    id: 5,
    haber_adi: "JavaScript'in Fişi Çekiliyor",
    haber_icerik:
      'askjasjkasjşjkaşsşjkaskjşasjkaskjşajşsjşasşjasşjjşasşjlahjlşahjashjahsjahsjlahjlashjahsajshjşlsajhashjashajhjahsal',
    haber_url: 'https://miro.medium.com/max/700/0*Wf5PCtkJpTL9nJwS.png'
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
