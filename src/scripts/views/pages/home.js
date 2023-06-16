const Home = {
    async render() {
      return `
        <div class="card-columns">
  <div class="card">
    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.WXiTCvCPfJEuDB4rKzY5lwHaEZ?w=317&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Alat - alat modern pertanian</h5>
      <p class="card-text">Faktor kesuksesan pertanian tak luput dari penunjang-penunjangnya, salah satunya yaitu alat pertanian. Dari mulai alat yang kecil hingga yang besar. Kali ini saya pengen sekali berbagi mengenai artikel alat pertanian yang sekiranya bisa di gunakan untuk petani indonesia. Di akhir artikel ini saya akan membagikan vidio petani Indonesia yang super super keren, karena bisa bisa membuat traktor yang biasanya di kendalikan langsung oleh manusia, kini hanya dengan panel remote control, traktor tersebut bisa berjalan dan berfungsi sesuai tuganya. Baca poin poinnya aja. Yang gak pentig bisa di skip.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.BjqWwYibYRHavAegwm8rLgHaFc?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Tanda tanda cuaca yang wajib diketahui petani</h5>
      <p class="card-text">Penasihat Himpunan Kerukunan Tani Indonesia (HKTI) Siswono Yudhohusodo mengatakan, saat ini petani kebingungan karena terjadi perubahan iklim. Oleh sebab itu, ke depan Badan Meteorologi Klimatologi dan Geofisika (BMKG) harus mampu memprediksi cuaca dengan baik.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.VhNdMvn9RpBQ9B6JMxZE4gHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image">
    <div class="card-body">
      <h5 class="card-title">Lahan yang baik untuk menanam cabai</h5>
      <p class="card-text">Dikutip dari kaltim.litbang.pertanian.go.id, cabai merupakan salah satu dari sekian tumbuhan yang tergolong ke dalam anggota genus capsicum. Tumbuhan satu ini dapat digolongkan sebagai sayuran atau bumbu, tergantung pada penggunaannya. Namun, penggunaannya sebagai penguat rasa makanan jauh lebih populer di Asia Tenggara sehingga budidaya cabai kian ditingkatkan.</p>
    </div>
  </div>
</div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Home;