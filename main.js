const navLinks = document.querySelectorAll('#navLink ul li a');
	navLinks.forEach(link=>{
		link.addEventListener("click",function(){
			navLinks.forEach(link=>link.classList.remove("active"));
			this.classList.add("active");
		})
	})
document.addEventListener('DOMContentLoaded',navLinks.forEach(link=>{
	link.classList.remove("active");
	if (link.href === document.URL) {link.classList.add('active')}
	}));
const btnToggler = document.getElementById('btn-toggler');
btnToggler.addEventListener('click',()=>{
	document.getElementById('navLink').classList.toggle('toggled')
})
const title= location.hash;
if (title === "#contact") {
document.addEventListener('DOMContentLoaded',contact())
} else if (title === "#about"){
document.addEventListener('DOMContentLoaded',about())
}else if (title === "#project"){
document.addEventListener('DOMContentLoaded',project())
}else {
document.addEventListener('DOMContentLoaded',home())
}