// const routes = {
// 	home: '<h1>Home Page</h1> <p>Welcome to home</p>',
// 	about: '<h1>About Page</h1> <p>Welcome to About</p>',
// 	contact: '<h1>Contact Page</h1> <p>Welcome to Contact</p>'
// }
async function navigateTo(page) {
	let link = `/${page}.html`
	let x = await fetch(link);
	let y = await x.text();
	document.getElementById('app').innerHTML=y;
	document.querySelector('title').innerHTML=page;

}
document.addEventListener('DOMContentLoaded',()=>{
	fetch('/home.html').then((x)=>x.text()).then(y=>document.getElementById('app').innerHTML=y)
	const navLinks = document.querySelectorAll('#navLink ul li a');
	navLinks.forEach(link=>{
		link.addEventListener("click",function(){
			navLinks.forEach(link=>link.classList.remove("active"));
			this.classList.add("active");
		})
	})
})

const btnToggler = document.getElementById('btn-toggler');
btnToggler.addEventListener('click',()=>{
	document.getElementById('navLink').classList.toggle('toggled')
})
