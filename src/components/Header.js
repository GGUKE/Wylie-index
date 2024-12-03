import { useEffect } from "react";
import gsap from "gsap";
import data from "../data"
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Header() {

	useEffect(() => {
		let menu = document.querySelectorAll('#header nav > ul li a');
		let tab = document.querySelector('#header .inner .icon-menu');
		let tabmenu = document.querySelector('#header .mobile-menu');
		let tabmenus = document.querySelectorAll('#header .mobile-menu .text ul li a');
		let iconx= document.querySelector('#header .mobile-menu > a')
	
		menu.forEach(function(menus) {
			menus.addEventListener('mouseenter', function() {
				this.style.color = '#9254a1';
			});
	
			menus.addEventListener('mouseleave', function() {
				this.style.color = '';
			});
		});
	
		tabmenus.forEach(function(li){
			li.addEventListener('mouseenter', function(){
				this.classList.add("on");
			});
			li.addEventListener('mouseleave', function() {
				this.classList.remove("on");
			});
		});
		
		tab.addEventListener("click", function(e){
			e.preventDefault();
			if (tabmenu.style.display === 'none' || tabmenu.style.display === '') {
				tabmenu.style.display = 'flex';
			} 
			else {
				tabmenu.style.display = 'none';
			}
		});
	
		iconx.addEventListener("click", function(e){
			e.preventDefault();
	
			tabmenu.style.display = "none";
		});

		let header = document.querySelector("#header");
		let menuList = document.querySelectorAll("#gnb ul li a");
		let pageList = document.querySelectorAll("section > div");
		let mobileList = document.querySelectorAll("#header .mobile-menu .text ul li a");
	
		window.addEventListener("scroll", function(){
			if(window.scrollY > 150){
				if(header.classList.contains("fixed") == false){
					header.classList.add("fixed");
				}
			}
			else{
				if(header.classList.contains("fixed") == true){
					header.classList.remove("fixed");
				}
			}
		});
	
		menuList.forEach(function(item, i){
			item.addEventListener("click", function(e){
				e.preventDefault();
				if(i == 0){
					gsap.to(window, {scrollTo: 0, duration: 0.5});
				}
				else{
					gsap.to(window, {scrollTo: pageList[i-1].offsetTop, duration: 0.5});
				}
	
			})
		});

		mobileList.forEach(function(item, i){
			item.addEventListener("click", function(e){
				e.preventDefault();
				if(i == 0){
					gsap.to(window, {scrollTo: 0, duration: 0.5});
					tabmenu.style.display = "none";
				}
				else{
					gsap.to(window, {scrollTo: pageList[i-1].offsetTop, duration: 0.5});
					tabmenu.style.display = "none";
				}
	
			})
		});
	});

	
	let {header}=data;

  	return (
		<>
			<header id="header">
				<div className="inner">
					<h1><a href=""><img src="/images/logo.png" alt="logo" /></a></h1>
					<nav id="gnb">
						<Navigation propsValue={header}/>
						<div className="icon-menu">
							<a href=""><i className="fa-solid fa-bars"></i></a>
						</div>
					</nav>
					<div className="mobile-menu">
						<a href=""><i className="fa-regular fa-x"></i></a>
						<div className="text">
							<Navigation propsValue={header}/>
						</div>			
					</div>
				</div>
			</header>
		</>
  	)
}

function Navigation(props){

	let {propsValue}=props;

	return(
		<ul>
			{
				propsValue.map((d, i) =>
					<li key={i}><a href={d.link}>{d.name}</a></li>
				)
			}
		</ul>
	);
}
export default Header
