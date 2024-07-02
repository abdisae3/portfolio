project=()=>{
	const showProject = async()=> {
	const endpoint = 'http://abdisae.great-site.net/message/api.php'
	let result = await fetch(endpoint);
	let data = await result.json()
	// let project = '';
	// for(let x in data.result){
	// 	project += `<div style="border-bottom:1px solid black;padding:5px">
	// 				<h3>${data.result[x].title} </h3>
	// 				<div><img src="img/${data.result[x].images[0]}" alt="" width="100px"></div>
	// 				<div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">${data.result[x].description}</div>
	// 				<span>
	// 					<button type="submit" onclick="detileProject(${data.result[x].id})">Buka</button>
	// 				</span>
	// 				<span>
	// 					<button type="submit" onclick="delProject(${data.result[x].id})">Hapus</button>
	// 				</span>
	// 			</div>` ;
	// }
	// document.querySelector('#body').innerHTML=project
	// document.querySelector('#searchMessage').style.display="none"
	// document.querySelector('#searchProject').style.display="block"
	console.log("ini response : "+ data)
}
showProject()
	document.getElementById('app').innerHTML= `<section class="pbs-80">
<div class="row-md justify-content-center " style="gap: 2px;">
	<div class="card border"><a href="#" class="text-decor-none black">
		<img src="./image/home1.png" alt="" width="100%">
		<div class="bg-white" style="border-top: 1px solid;padding: 5px;">
		<h1>My Portfolio</h1>
		<span>HTML,CSS,Javasript</span>
		<p>Sebuah web SPA yang berisi portfolio yang saya buat untuk pribadi saya. <br>
		Dibuat dengan menggunakan basic HTML,CSS dan javascript, tanpa menggunakan library dan framework.</p>
		</div></a>
	</div>
	<div class="card border" ><a href="#" class="text-decor-none black">
		<img src="./image/Consume Api (1).png" alt="" width="100%">
		<div class="bg-white" style="border-top: 1px solid;padding: 5px;">
		<h1>Pengelola pesan</h1>
		<p>Sebuah aplikasi web sederhana untuk mengelola pesan yang masuk, misalkan untuk menelola pesanan toko online.<br> 
		aplikasi ini dibuat menggunakan HTML CSS dan javascript tanpa framework dan library.</p></div></a>
	</div>
	<div class="card border"><a href="#" class="text-decor-none black">
		<img src="./image/home1.png" alt="" width="100%">
		<div class="bg-white" style="border-top: 1px solid;padding: 5px;">
		<h1>Title</h1>
		<p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Dolore modi distinctio exercitationem, expedita mollitia vero.</p></div></a>
	</div>
</div>
</section>`;
		document.querySelector('title').innerHTML='Project';
}
