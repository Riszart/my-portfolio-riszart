document.querySelector(".about").addEventListener("click", ()=>changeUrl("/html/about.html", '_self'))
document.querySelector(".my-skill").addEventListener("click", ()=>changeUrl("/html/skill.html", '_self'))
document.querySelector(".work").addEventListener("click", ()=>changeUrl("/html/portafolio.html", '_self'))
document.querySelector(".contact").addEventListener("click", ()=>changeUrl("/html/contact.html", '_self'))
document.querySelector(".CV").addEventListener("click", ()=>changeUrl("/html/summary.html", '_self'))
document.querySelector(".logo").addEventListener("click", ()=>changeUrl("/index.html", '_self'))
document.querySelector(".facebook").addEventListener("click", ()=>changeUrl("https://www.facebook.com/", "_blank"))
document.querySelector(".twitter").addEventListener("click", ()=>changeUrl("https://twitter.com/?lang=en", "_blank"))
document.querySelector(".linkeding").addEventListener("click", ()=>changeUrl("https://www.linkedin.com/", "_blank"))
document.querySelector(".github").addEventListener("click", ()=>changeUrl("https://github.com/", "_blank"))

document.body.style.overflow = "hidden"
setTimeout(()=>{document.body.style.overflow = "auto"},2000)


const changeUrl = (url, target)=>{
	if(window.location.pathname !== url) {
		document.body.style.overflow = "hidden"
		end()
		setTimeout(()=>{
			window.open(url, target)

		},1000)
	}

}

if(window.location.pathname == "/html/contact.html"){
	document.querySelector(".contact-send").addEventListener("click", ()=>{
		document.querySelector('.content-formulario').classList.add("change-property")
		document.body.style.overflow = "hidden"

	})
	document.querySelector(".formulario-close").addEventListener("click", ()=>{
		document.querySelector('.content-formulario').classList.remove("change-property")
		setTimeout(()=>{document.body.style.overflow = "auto"}, 1000)})
}
start()
function start(){
	setTimeout(()=>{
		let a = document.querySelector(".inicio-back__start")
		a.style.width = "0px"
		a.style.transition = "width 1s ease"
	},1000)
}
function end(){
		let b = document.querySelector(".inicio-back__end")
		b.style.width = "100vw"
		b.style.transition = "width 1s ease"
}

