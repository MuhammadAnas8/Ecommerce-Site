const AllProducts = [
    {
    id: 1,
    image: 'https://images.unsplash.com/photo-1632200004922-bc18602c79fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Earbuds Max with Case',
    price: 29.99,
    rating: 4,
    category: 'headphones',
    bestSelling: true,
    onSale: true,
    newArrival: true
},
{
    id: 2,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'NIKI Headphones with noise cancellation',
    price: 39.99,
    rating: 5,
    category: 'headphones'
},
{
    id: 3,
    image: 'https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?t=st=1719610758~exp=1719614358~hmac=115fea3af478ec60263af4d44cf0523c5c074f5bb387414ec54b607133741f03&w=740',
    title: 'HeadPhones S1 ultra',
    price: 19.99,
    rating: 4,
    category: 'headphones',
    newArrival: true
},
{
    id: 4,
    image: 'https://img.freepik.com/free-psd/technological-airpods-isolated_23-2151196887.jpg?t=st=1719610789~exp=1719614389~hmac=3ce8ec371bd4e2b617eed07452114cc4940a04c1ca5b1d587fa8ccdfb7d7087c&w=360',
    title: 'HeadPhones S1s ultra',
    price: 276.99,
    rating: 4,
    category: 'headphones'
}
,
{
    id: 5,
    image: 'https://img.freepik.com/free-photo/modern-wireless-earphones-with-case-displayed-round-podium-with-soft-shadows_23-2150808015.jpg?t=st=1719610863~exp=1719614463~hmac=7a05e86051633e0fb5702060bd0d2c4df3078cc621d1cb6a02a4a5fe7fcaeb3d&w=360',
    title: 'HeadPhones Max Cube',
    price: 199.99,
    rating: 3,
    category: 'headphones'
},
{
    id: 6,
    image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072209.jpg?t=st=1719610943~exp=1719614543~hmac=0c75167a7784fc12dc0d2a9678b53c04af61ddee0265e87884f8b48e2f8f7ba2&w=360',
    title: 'NCx Players',
    price: 149.99,
    rating: 3,
    category: 'headphones'
},
{
    id: 7,
    image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072238.jpg?t=st=1719610983~exp=1719614583~hmac=860edb782e0b62f880713ba442a3c1f708b79b1d8ce6c98b2fc4a1a0000afd56&w=360',
    title: 'Ogg StanX',
    price: 499.99,
    rating: 5,
    category: 'headphones',
    bestSelling: true,
    newArrival: true
},
{
    id: 8,
    image: 'https://img.freepik.com/premium-psd/luxury-airports-mockup-design_495865-7.jpg?w=900',
    title: 'HeadyX Max',
    price: 349.99,
    rating: 4,
    category: 'headphones',
    onSale: true
},
{
    id: 9,
    image: 'https://img.freepik.com/premium-vector/vector-illustration-black-headphones-with-black-case-white-background_964597-50.jpg?w=740',
    title: 'Proactive Solx',
    price: 199.99,
    rating: 4,
    category: 'headphones',
    newArrival: true
},
{
    id: 10,
    image: 'https://img.freepik.com/free-psd/headphones-isolated-transparent-background_191095-23985.jpg?t=st=1719611141~exp=1719614741~hmac=8859c44edac81ff7ab03f593dd28d638c4d011bfa837365c14def9b0feb4d1f7&w=740',
    title: 'Jemizzy SGx',
    price: 135.00,
    rating: 4,
    category: 'headphones'
},
{
    id: 11,
    image: 'https://img.freepik.com/premium-photo/black-headphones-white_94046-1932.jpg?w=900',
    title: 'HyFi Pro 3',
    price: 290.00,
    rating: 5,
    category: 'headphones'
},
{
    id: 12,
    image: 'https://img.freepik.com/premium-photo/headphones-white-background_167862-2384.jpg?w=360',
    title: 'HyFi Pro 2',
    price: 255.00,
    rating: 4,
    category: 'headphones'
},
// Laptops
{
    id: 13,
    image: 'https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'TechMaster Pro 15, i5 4th gen',
    price: 2999.99,
    rating: 4,
    category: 'laptop'
},
{
    id: 14,
    image: 'https://img.freepik.com/free-photo/laptop-with-colorful-screen-white-background-3d-rendering_1142-50640.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'QuantumBook X, i7 7th gen',
    price: 1500.00,
    rating: 5,
    category: 'laptop'
},
{
    id: 15,
    image: 'https://img.freepik.com/free-photo/laptop-with-colorful-screen-isolated-white-background-3d-illustration_1142-43290.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'AeroWave Slim,i5 8th gen',
    price: 1999.99,
    rating: 4,
    category: 'laptop',
    trending: true,
    bestSelling: true,
    onSale: true
},
{
    id: 16,
    image: 'https://img.freepik.com/free-photo/laptop-isolated-white-background-3d-rendering-computer-generated-image_1142-57605.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'InfinityCore Z, i9 11th gen',
    price: 1344.99,
    rating: 3,
    category: 'laptop',
    trending:true
}
,
{
    id: 17,
    image: 'https://img.freepik.com/premium-vector/laptop-with-blank-screen-black-color-isolated-white-background-high-detailed-vector-illustration_498048-202.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'SpectraDrive Elite,i7 8th gen',
    price: 1369.99,
    rating: 4,
    category: 'laptop'
},
{
    id: 18,
    image: 'https://img.freepik.com/free-photo/laptop-with-colorful-screen-gray-background-vector-illustration-eps-10_1142-41594.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'PulseTech Fusion, i3 8th gen',
    price: 1459.99,
    rating: 3,
    category: 'laptop'
},
{
    id: 19,
    image: 'https://img.freepik.com/free-photo/open-laptop_144627-12148.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'VertexLite Pro,i7 9th gen',
    price: 4999.99,
    rating: 5,
    category: 'laptop'
},
{
    id: 20,
    image: 'https://img.freepik.com/premium-photo/open-laptop-standing-table-display-shows-abstract-colorful-waves-made-with-generative-ai_878954-6.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'ApexNova 13,i7 11th gen',
    price: 3449.99,
    rating: 4,
    category: 'laptop',
    bestSelling: true
},
// Phones
{
    id: 21,
    image: 'https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?t=st=1719178845~exp=1719182445~hmac=aec11b5d61fb504265f6fd42e4d9ad6091c109de7099d1c7d38107cdda2b4255&w=740',
    title: 'IPad Pro 2023',
    price: 799.99,
    rating: 5,
    category: 'phones',
    newArrival: true,
  },
  {
    id: 22,
    image: 'https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'NovaPulse X',
    price: 1199.99,
    rating: 3,
    category: 'phones',
    bestSelling: true
  },
  {
    id: 23,
    image: 'https://img.freepik.com/free-psd/golden-mobile-phone-mock-up_1135-11.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'Samsung Ultra Edge',
    price: 999.99,
    rating: 4,
    category: 'phones',
    onSale: true
  },
  {
    id: 24,
    image: 'https://img.freepik.com/free-photo/still-life-tech-device_23-2150722663.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'QuantumEdge 12',
    price: 499.99,
    rating: 2,
    category: 'phones',
    trending: true
  },
  {
    id: 25,
    image: 'https://img.freepik.com/premium-photo/illustration-photograph-smart-phone-standing-vertically_756405-72420.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'TitanWave Pro',
    price: 699.99,
    rating: 4,
    category: 'phones',
    bestSelling: true
  },
  {
    id: 26,
    image: 'https://img.freepik.com/premium-vector/smartphone-front-back-view-illustration-vector_174496-1033.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'AeroMax 5G',
    price: 899.99,
    rating: 4,
    category: 'phones',
    newArrival: true
  },
  {
    id: 27,
    image: 'https://img.freepik.com/free-vector/realistic-black-smartphone-front-back_52683-30239.jpg?ga=GA1.1.2060335998.1719168460&semt=ais_user',
    title: 'ZenithX Lite',
    price: 799.99,
    rating: 3,
    category: 'phones',
    trending: true
  },
  {
    id: 28,
    image: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437105.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'NexusDrive Elite',
    price: 789.99,
    rating: 5,
    category: 'phones',
    trending: true
  },
  {
    id: 29,
    image: 'https://img.freepik.com/premium-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'VertexPro 11',
    price: 999.99,
    rating: 5,
    category: 'phones'
  },
  {
    id: 30,
    image: 'https://img.freepik.com/premium-psd/iphone-mockup_373676-430.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'InfinityTouch 9',
    price: 799.99,
    rating: 4,
    category: 'phones'
  },
  {
    id: 31,
    image: 'https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147849866.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'PulseTech Prime',
    price: 999.99,
    rating: 2,
    category: 'phones',
    trending: true
  },
  // Watches
  {
    id: 32,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sample Product 3',
    price: 39.99,
    rating: 3,
    category: 'watches'
  },
  {
    id: 33,
    image: 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1719179203~exp=1719182803~hmac=420c7c21dd491b76e3cc3e70bc3f38f86028090e6f0fabf2c514cc3eb49e97af&w=740',
    title: 'Smart Watch Black',
    price: 30.00,
    rating: 5,
    category: 'watches',
    onSale: true
  },
  {
    id: 34,
    image: 'https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039303.jpg?t=st=1719179493~exp=1719183093~hmac=f35cc283a15d8f586a90d7b111ef3705ef21d3e302c2a85ba16bdbe488ffaeb4&w=360',
    title: 'TEO ultra with free Case',
    price: 69.99,
    rating: 3,
    category: 'watches'
  },
  {
    id: 35,
    image: 'https://img.freepik.com/free-vector/hand-watch-man-watch-isolated-white-background-wrist-watch-accessory_1284-51538.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'ChronoMaster Elite',
    price: 134.99,
    rating: 3,
    category: 'watches'
  },
  {
    id: 36,
    image: 'https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'ApexTime Classic',
    price: 1369.99,
    rating: 4,
    category: 'watches',
    bestSelling: true
  },
  {
    id: 37,
    image: 'https://img.freepik.com/free-psd/smartwatch-realistic-isolated-transparent-background_84443-1817.jpg?ga=GA1.1.2060335998.1719168460&semt=sph',
    title: 'StellarWatch Luxe',
    price: 145.99,
    rating: 5,
    category: 'watches'
  }
]

export default AllProducts