
var weather = prompt(`
  Select your Fav weather :
  1-rainy
  2-autumn
  3-sunny
  4-spring
  5-fog
  6-winter
  7-thunderstorm
  
  `).toLowerCase();

if (weather === "rainy") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
       <body style="background-image: url(https://thumbs.dreamstime.com/b/monsoon-hit-kerala-havy-rainy-day-there-cocunt-pam-trees-standing-paddy-field-beautiful-landscape-photography-223996649.jpg
);  background-repeat: no-repeat;
  background-size: cover">
         <h1 class="text-center text-black">rainy </h1>
  <!-- card -->
<section class="container-xxl  d-flex justify-content-center align-content-center align-items-center">
  <div class="card border-success mb-3" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/63/70/fa/6370fa9b37c266bb34771bbf91331816.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Rain</h5>
    <p class="card-text">Some quick example text to builds on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
</section>
      `)
  // end rainy
} else if (weather === "autumn") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
      <body style="background-image: url( https://hpj.com/wp-content/uploads/2024/09/iStock-1319163336.jpg
);  background-repeat: no-repeat;
  background-size: cover">
    <h1 class="text-center text-warning">Autumn</h1>
  <section class="container-xxl  d-flex justify-content-center align-content-center align-items-center">
      <div class="card" style="width: 20rem;">
  <img src="https://64.media.tumblr.com/2805b6f6d6faf8d7ef69ab88817e9874/17e2218e5b202540-d6/s400x600/1babcb704e23e6c873a6f935f0769bd92c23b128.gif"class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Autumn</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
   
  </div>
</div>
  </section>
`)
  // end autumn
} else if (weather === "sunny") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
      <body style="background-image: url(https://i.pinimg.com/originals/5e/11/ac/5e11aca261ae40746983ac7efa1770d7.gif);  background-repeat: no-repeat;
  background-size: cover"> 
    <h1 class="text-center text-warning-emphasis">Sunny</h1>
    <section class="container-xxl   d-flex justify-content-center align-content-center align-items-center">
      <div class="card" style="width: 20rem;">
  <img src="https://i0.wp.com/suxxesphoto.com/wp-content/uploads/2021/09/sunflower-sunset-woodingdean-brighton-2.jpg?fit=1400%2C933&ssl=1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick examples text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </section> `)
  // end sunny
} else if (weather === "spring") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
     <body style="background-image: url(https://thumbs.dreamstime.com/b/pink-cherry-blossom-flowers-blooming-tree-branches-framing-clear-blue-sky-spring-season-background-natural-copy-space-429870127.jpg);  background-repeat: no-repeat;
  background-size: cover">
    <h1 class="text-center text-danger-emphasis">Spring</h1>
     <section class="container-xxl d-flex justify-content-center align-content-center align-items-center">
      <div class="card" style="width: 20rem;">
  <img src="https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fHww" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Spring</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </section>
 
      `)
  // end spring
} else if (weather === "fog") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card{
  height: 750px;
  }
  </style>
       <body  style="background-image: url(https://t3.ftcdn.net/jpg/05/79/06/10/360_F_579061034_ltzlLwJpZSelgJhtY2tFMgcAkaxd4g9v.jpg);  background-repeat: no-repeat;
  background-size: cover">
    <h1 class="text-center text-light" >Fog</h1>
      <section class="container-xxl d-flex justify-content-center align-content-center align-items-center ">
      <div class="card" style="width: 20rem;">
  <img src="https://giffiles.alphacoders.com/834/8349.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Foggy</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </section>
      `)
  // end fog
} else if (weather === "winter") {
  document.writeln(`
     <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
      <body  style="background-image: url(https://www.lefayresorts.com/magazine/wp-content/uploads/2021/02/neve-terapia.jpg);  background-repeat: no-repeat;
  background-size: cover">
    <h1 class="text-center text-light" >winter</h1>
      <section class="container-xxl d-flex justify-content-center align-content-center align-items-center">
      <div class="card" style="width: 20rem;">
  <img src="https://i.pinimg.com/originals/44/97/ff/4497ff7d4f9b417624a6639008e99046.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </section>
      `)
} else if (weather === "thunderstorm") {

  document.writeln(`
      <style>
      section {
  min-height: 80vh;
  }
  card-body{
  height: 450px;
  }
  </style>
        <body  style="background-image: url(https://i.pinimg.com/736x/32/72/33/32723333b127b97a12567d68a0539ab1.jpg);  background-repeat: no-repeat;
  background-size: cover">
    <h1 class="text-center text-light" >thunderstorm</h1>
      <section class="container-xxl d-flex justify-content-center align-content-center align-items-center">
      <div class="card" style="width: 20rem;">
  <img src="https://vgif.ru/gifs/143/vgif-ru-18028.gif" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Thunderstorm</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
  </section>
      `)

}
