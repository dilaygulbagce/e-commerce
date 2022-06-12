export const categories = [
  { id: 1, name: "Computer" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Smart Watch" },
];

export const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Monster" },
  { id: 3, name: "Samsung" },
  { id: 4, name: "Xiaomi" },
];

export const products = [
  {
    id: 1,
    name: "Mac Book Pro M1 Chip",
    detail:
      'Apple MacBook Pro M1 Çip 16GB 512GB SSD macOS 13" QHD Taşınabilir Bilgisayar Uzay Grisi MYD82TU/A',
    image:
      "https://productimages.hepsiburada.net/s/49/550/10983951073330.jpg/format:webp",
    spesifications: [
      { name: "Ram", description: "16 GB" },
      { name: "İşlemci", description: "M1" },
      { name: "Ekran Kartı", description: "Intel HD Graphics 4GB" },
      { name: "Depolama", description: "512 GB" },
      { name: "İşletim Sistemi", description: "macOS 13" },
      { name: "Ekran Çözünürlüğü", description: "2560 x 1600" },
    ],
    price: 25999,
    productCode: "ASD324FDS",
    brand: brands[0],
    category: categories[0],
  },
  {
    id: 2,
    name: "Monster Abra A5 V17.1.1",
    detail:
      "Monster Abra A5 V17.1.1 Intel Core i5 11400H 16GB 500GB SSD RTX 3050 Windows 11 Home 15.6'' FHD 144 Hz Taşınabilir Bilgisayar",
    image:
      "https://productimages.hepsiburada.net/s/98/550/110000040847618.jpg/format:webp",
    spesifications: [
      { name: "Ram", description: "16 GB" },
      { name: "İşlemci", description: "i5 11400H" },
      { name: "Ekran Kartı", description: "RTX 3050" },
      { name: "Depolama", description: "500 GB" },
      { name: "İşletim Sistemi", description: "Win11 Home" },
      { name: "Ekran Boyutu", description: '15.6"' },
      { name: "Ekran Çözünürlüğü", description: "1920x1080" },
    ],
    price: 15900,
    productCode: "ASD134FGH",
    brand: brands[1],
    category: categories[0],
  },
  {
    id: 3,
    name: "Mac Book Air M1 Chip",
    detail:
      'Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13" QHD Taşınabilir Bilgisayar Altın MGND3TU/A',
    image:
      "https://productimages.hepsiburada.net/s/49/550/10983950057522.jpg/format:webp",
    spesifications: [
      { name: "Ram", description: "8 GB" },
      { name: "İşlemci", description: "M1" },
      { name: "Depolama", description: "256 GB" },
      { name: "İşletim Sistemi", description: "macOS" },
      { name: "Ekran Çözünürlüğü", description: "2560 x 1600" },
    ],
    price: 19999,
    productCode: "FF234GHER2",
    brand: brands[0],
    category: categories[0],
  },
  {
    id: 4,
    name: "Samsung Galaxy S22 Ultra",
    detail:
      "Akıllı telefon sektörünün lider markası Samsung’un sunduğu Samsung Galaxy S22 Ultra 5G 256 GB (Samsung Türkiye Garantili), premium akıllı telefon kategorisinde şimdiye kadar geliştirilen en güçlü cihaz olma özelliğine sahiptir. Galaxy Note serisinin yüksek performansını ve Galaxy S serisinin profesyonel kamera özelliklerini bünyesinde toplayan Samsung Galaxy S22 Ultra 5G modeli, Samsung’un yeni amiral gemisi olarak üst segmentte yer alır. Türkiye garantili olarak satışa sunulan cihaz, devasa boyuttaki ekranından yüksek çözünürlüklü çoklu kamera sistemine, yerleşik S Pen kaleminden iki güne kadar dayanan batarya teknolojisine kadar pek çok ileri düzey teknik özelliği bir araya getirir. Samsung Galaxy S22 Ultra 5G, yalnızca bir iletişim aracı değil aynı zamanda hayatınıza heyecan katan renkli bir eğlence merkezidir.",
    image:
      "https://productimages.hepsiburada.net/s/178/550/110000142706445.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "108 MP + 10 MP + 12 MP + 10 MP" },
      { name: "Pil", description: "5000 mAh" },
      { name: "Ram", description: "12 GB" },
      { name: "Depolama", description: "256 GB" },
      { name: "İşletim Sistemi", description: "Android" },
      { name: "Ekran Boyutu", description: '6.8"' },
    ],
    price: 24347,
    productCode: "ARH34FHT3R2",
    brand: brands[2],
    category: categories[1],
  },
  {
    id: 5,
    name: "Samsung Galaxy M23",
    detail:
      "Akıllı telefon sektörünün lider markası Samsung’un sunduğu Samsung Galaxy S22 Ultra 5G 256 GB (Samsung Türkiye Garantili), premium akıllı telefon kategorisinde şimdiye kadar geliştirilen en güçlü cihaz olma özelliğine sahiptir. Galaxy Note serisinin yüksek performansını ve Galaxy S serisinin profesyonel kamera özelliklerini bünyesinde toplayan Samsung Galaxy S22 Ultra 5G modeli, Samsung’un yeni amiral gemisi olarak üst segmentte yer alır. Türkiye garantili olarak satışa sunulan cihaz, devasa boyuttaki ekranından yüksek çözünürlüklü çoklu kamera sistemine, yerleşik S Pen kaleminden iki güne kadar dayanan batarya teknolojisine kadar pek çok ileri düzey teknik özelliği bir araya getirir. Samsung Galaxy S22 Ultra 5G, yalnızca bir iletişim aracı değil aynı zamanda hayatınıza heyecan katan renkli bir eğlence merkezidir.",
    image:
      "https://productimages.hepsiburada.net/s/188/550/110000153952402.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "50 MP + 8 MP + 2 MP + 2 MP" },
      { name: "Pil", description: "4700 mAh" },
      { name: "Ram", description: "8 GB" },
      { name: "Depolama", description: "128 GB" },
      { name: "İşletim Sistemi", description: "Android" },
      { name: "Ekran Boyutu", description: '6.6"' },
      { name: "Ekran Çözünürlüğü", description: "2560 x 1600" },
    ],
    price: 4499,
    productCode: "ARH3QW3T3R2",
    brand: brands[2],
    category: categories[1],
  },
  {
    id: 6,
    name: "iPhone SE",
    detail: "iPhone SE 64 GB Red Edition 3GB Ram 5G 1821mAh Battery",
    image:
      "https://productimages.hepsiburada.net/s/66/550/110000007422613.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "12 MP" },
      { name: "Pil", description: "1821 mAh" },
      { name: "Ram", description: "3 GB" },
      { name: "Depolama", description: "64 GB" },
      { name: "İşletim Sistemi", description: "IOS" },
      { name: "Ekran Boyutu", description: '4.7"' },
      { name: "Ekran Çözünürlüğü", description: "2560 x 1600" },
    ],
    price: 8800,
    productCode: "ARH3454Y3R2",
    brand: brands[0],
    category: categories[1],
  },
  {
    id: 7,
    name: "iPhone 12",
    detail: "iPhone 12 64 GB Purple Edition 2815mAh Battery 4GB Ram",
    image:
      "https://productimages.hepsiburada.net/s/74/550/110000016334984.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "12 MP + 12 MP" },
      { name: "Pil", description: "2815 mAh" },
      { name: "Ram", description: "4 GB" },
      { name: "Depolama", description: "64 GB" },
      { name: "İşletim Sistemi", description: "IOS" },
      { name: "Ekran Boyutu", description: '4.7"' },
      { name: "Ekran Çözünürlüğü", description: "2560 x 1600" },
    ],
    price: 17499,
    productCode: "ARH332HT3R2",
    brand: brands[0],
    category: categories[1],
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 11",
    detail: "Xiaomi Redmi Note 11 128 GB (Xiaomi Türkiye Garantili)",
    image:
      "https://productimages.hepsiburada.net/s/203/550/110000177593705.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "50 MP + 8 MP + 2 MP + 2 MP" },
      { name: "Pil", description: "2815 mAh" },
      { name: "Ram", description: "6 GB" },
      { name: "Depolama", description: "128 GB" },
      { name: "İşletim Sistemi", description: "Android" },
      { name: "Ekran Boyutu", description: '6,43"' },
    ],
    price: 5199,
    productCode: "BUH33TI808R2",
    brand: brands[3],
    category: categories[1],
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab A7 Lite",
    detail: "Samsung Galaxy Tab A7 Lite 32 GB (Samsung Türkiye Garantili)",
    image:
      "https://productimages.hepsiburada.net/s/91/550/110000033554396.jpg/format:webp",
    spesifications: [
      { name: "Kamera", description: "8 MP" },
      { name: "Pil", description: "5100 mAh" },
      { name: "Ram", description: "3 GB" },
      { name: "Depolama", description: "32 GB" },
      { name: "İşletim Sistemi", description: "Android" },
      { name: "Ekran Boyutu", description: '8.9"' },
      { name: "Ekran Çözünürlüğü", description: "1920x1080" },
    ],
    price: 2399,
    productCode: "BUH453808R2",
    brand: brands[2],
    category: categories[2],
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch Active2",
    detail:
      "Samsung Galaxy Watch Active2 44mm Alüminyum Mat Gümüş-SM-R820NZSATUR",
    image:
      "https://productimages.hepsiburada.net/s/31/550/10335481298994.jpg/format:webp",
    spesifications: [
      { name: "Sesli Görüşme", description: "Var" },
      { name: "Uyku Takibi", description: "Var" },
      { name: "Adımsayar", description: "Var" },
      { name: "GPS", description: "Var" },
      { name: "Kalp Ritmi Ölçme", description: "Var" },
      { name: "Su Geçirmezlik", description: "Var" },
    ],
    price: 1889,
    productCode: "GWH33T43508R2",
    brand: brands[2],
    category: categories[3],
  },
  {
    id: 11,
    name: "Xiaomi Mi Band 5",
    detail:
      "Samsung Galaxy Watch Active2 44mm Alüminyum Mat Gümüş-SM-R820NZSATUR",
    image:
      "https://productimages.hepsiburada.net/s/41/550/10685527785522.jpg/format:webp",
    spesifications: [
      { name: "Sesli Görüşme", description: "Yok" },
      { name: "Uyku Takibi", description: "Var" },
      { name: "Adımsayar", description: "Var" },
      { name: "GPS", description: "Var" },
      { name: "Kalp Ritmi Ölçme", description: "Var" },
      { name: "Su Geçirmezlik", description: "Var" },
    ],
    price: 369,
    productCode: "BUH64GWR808R2",
    brand: brands[3],
    category: categories[3],
  },
];
