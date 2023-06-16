const About = {
    async render() {
      return `
        <h2>Kelompok C23-M4093</h2>
        <div class="card" style="width: 18rem;">
       <p class="card-text">Nama : Habib Aulia Raihan</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Id : F102XB280</li>
    <li class="list-group-item">Kampus : STMIK El Rahma Yogyakarta</li>
    </ul>
    </div>
    <div class="card" style="width: 18rem;">
       <p class="card-text">Nama : Alamsyah Nur Muslimin</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Id : F021XB233</li>
    <li class="list-group-item">Kampus : -</li>
    </ul>
    </div>
    <div class="card" style="width: 18rem;">
       <p class="card-text">Nama : Dody Sahendra Wijaya</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Id : F052XB256</li>
    <li class="list-group-item">Kampus : -</li>
    </ul>
    </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default About;