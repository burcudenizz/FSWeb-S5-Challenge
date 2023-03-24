import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topicBox = document.createElement("div");
  topicBox.classList.add("topics");

  konu.forEach((item) => {
    const tabs = document.createElement("div");
    tabs.classList.add("tab");
    tabs.textContent = item;
    topicBox.appendChild(tabs);
  });
  return topicBox;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const secici2 = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      // const konuDinamik = response;
      // console.log(konuDinamik);
      secici2.appendChild(Tablar(response.data.konular));
      console.log(response);
    })
    .catch((error) => {
      console.log("Error" + error);
    });
};

export { Tablar, tabEkleyici };
