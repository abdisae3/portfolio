
home=()=>{
	document.getElementById('app').innerHTML=`<div class="home">
	<section class="main bg-main">
		<div class="d-flex justify-content-around align-items-end">
			<div class="hallo">
				<p>Hallo.... <br> saya </p>
				<h1>Fauzi</h1>
				<p>saya seorang freelncer, <br> web depelover, <br> dan editor foto </p>
			</div>
				<img class="profil p-e-5" src="./image/profil.jpg" alt="fauzi">
		</div>
			<div class="svg">
		<svg width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
			<path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="rgba(212, 211 , 225, 1)" />
		</svg>
	</div>
	</section>
	<section class="sh-2 align-content-center">
		<div class="row ">
			<img class="image skew relative" src="./image/fauzi.jpg" alt="fauzi">
			<div class="col-md-9 box-shadow-rb bg-white border ms-3 ps-6">
				<div class=" ms-3">
					<p>
						Ketertarikan saya kepada pemrograman menjadikan saya bekerja keras untuk mempelajri banyak bahasa pemrograman, khususnya di bidang web programing.
					</p> <br>
					<p>
						Sekarang saya mampu menbuat proyek mulai dari yang kecil, menengah hingga komplek.
					</p> <br>
					<p>
						Saya bisa bekerja secara individu ataupun bekerja sebagai tim, dan siap beradaptasi dengan tim baru.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="sh-3">
		<div class="col height-100">
		<div class="row-md">
			<div class="d-flex col-2 box-shadow-lb border bg-white width-40 center" >
				<div class="ps-6 ">
					<h4>Pendidikan</h4>
					<ul class="list-group">
						<li>
							- SMA Martaussibyan<br>
							<p>Campaka mulya ,Cianjur</p>
						</li>
						<li>
							- SLTP PGRI 24 Pagelaran <br>
							Kec. Pagelaran, Cianjur
						</li>
						<li>
							- MI Ibrohimiyah <br>
							Selajambe Ciranjang Cianjur
						</li>
					</ul>
				</div>
			</div>
				
			<div class="col-2 box-shadow-rb border bg-white width-40 center">
				<div class="ps-6">
					<h4>Pengalaman</h4>
					<ul>
						<li>
							- KPM (Kader Pembangunan Manusia) <br>
							Periode tahun 2019 sd sekarang
						</li>
						<li>
							- TPK (Tim Pendamping Keluarga) <br>
							Periode tahun 2022 sd sekarang
						</li>
						<li>
							- Pemilik rumah jahit 34 Tailor
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</section>
</div>`
	document.querySelector('title').innerHTML='Home';
}
// document.addEventListener('DOMContentLoaded',home())