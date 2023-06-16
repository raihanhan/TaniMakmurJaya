const Service = {
    async render() {
      return `
      <h2>Pakar Pertanian</h2>
        <div class="card" style="width: 18rem;">
        <img class="card-img-top1" src="https://th.bing.com/th/id/OIP.taLjAqDkKjgMpudjFyU_sQHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap">
    <div class="card-body">
       <p class="card-text">Nama : Nova Yudha</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Team Satgas Ketahanan Pangan PKS</li>
    <li class="list-group-item">Riau</li>
  </ul>
  <img class="card-img-top1" src="https://th.bing.com/th/id/OIP.eCINzcTG8SB-OS1jejBpJQHaEl?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Card image cap">
    <div class="card-body">
       <p class="card-text">Nama : Ir. Zeth Malelak, MS</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Universitas Kristen Artha Wacana (UKAW)</li>
    <li class="list-group-item">Kupang</li>
  </ul>
    </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Service;