import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardBox = document.createElement("div");
  cardBox.classList.add("card");

  const anaBaslikBox = document.createElement("div");
  anaBaslikBox.classList.add("headline");
  anaBaslikBox.textContent = makale.anabaslik;
  cardBox.appendChild(anaBaslikBox);

  const authorBox = document.createElement("div");
  authorBox.classList.add("author");
  anaBaslikBox.appendChild(authorBox);

  const imgBox = document.createElement("div");
  imgBox.classList.add("img-container");
  authorBox.appendChild(imgBox);

  const image = document.createElement("img");
  image.src = makale.yazarFoto;
  imgBox.appendChild(image);

  const yazarAdıBox = document.createElement("span");
  yazarAdıBox.textContent = makale.yazarAdi + "tarafından";
  authorBox.appendChild(yazarAdıBox);

  authorBox.appendChild(yazarAdıBox);
  cardBox.appendChild(authorBox);

  cardBox.addEventListener("click", (event) => {
    console.log(makale.anabaslik);
  });

  return cardBox;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const secici3 = document.querySelector(secici);

  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    console.log(response.data.makaleler);
    for (let key in response.data.makaleler) {
      for (let i = 0; i < response.data.makaleler[key].length; i++) {
        secici3.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };
