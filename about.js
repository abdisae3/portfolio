about=()=> {
document.getElementById('app').innerHTML= `
<div class="pbs-80 bg-main">
	<div class=" clear-fix m-3">
			<img src="./image/fauzi.jpg" class="image skew float-left m-3" alt="fauzi">
			<h1 class="upcase f-md-28">fauzi anwar</h1>
			<h6 class="caps f-md-20 wrap m-3">web depelover| fullstack| freelance</h6><hr>
			<p>Seorang lulusan SMA yang memiliki kemampuan di bidang pemrograman, terutama dalam web depelovment.</p>
	</div>
	<article class="mt-25 p-b-5"><hr><hr>
		<div class="row rule-y">
			<div m-5>
				<p>Kemampuan</p><hr><br><br>
			
				
						Bahasa Pemrograman :
					
							<p>HTML</p>
							<p>CSS</p>
							<p>Javasript</p>
							<p>PHP</p>
							<p>JAVA</p>
							<p>Python</p>
							<p>Mysql</p>
						
					<br>
				
						Kemampuan Kasar :
					
							<p>Pembuatan web</p>
							<p>Mengelola database</p>
						
					<br>
					
						Kemampuan halus :
					
							<p>Mampu bekerja secara individu ataupun berkelompok</p>
							<p>Memberikan solusi dari tiap prmasalahan</p>
						
				
			</div>
			<div class="col-8">
				<p>Pendidikan</p><hr>
				<p>SMA Martaussibyan</p>
				<u>Campakamulya kab.Cianjur</u><br><br>
				<p>YP2K Handayani</p>
				<p>W3School</p><br><br>
				<p>Pengalaman</p><hr>
				<p>Membuat tempalate website</p>
			</div>
		</div>
	</article>
</div>`
document.querySelector('title').innerHTML='About';
}