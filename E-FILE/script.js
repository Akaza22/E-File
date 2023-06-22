const allSideMenu = document.querySelectorAll('#sidebar .side-menu  li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

function logout() {
    window.location.href = "LoginPage/login.html";
}



if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

function filemanagement(){
	document.getElementById("file-management").style.display = "block";
	document.getElementById("home").style.display = "none";
	document.getElementById("user-management").style.display = "none";
	document.getElementById("Employment-report").style.display = "none";
	document.getElementById("bug-report").style.display = "none";
}

function dashboard(){
	document.getElementById("home").style.display = "block";
	document.getElementById("file-management").style.display = "none";
	document.getElementById("user-management").style.display = "none";
	document.getElementById("Employment-report").style.display = "none";
	document.getElementById("bug-report").style.display = "none";
}

function userManagement(){
	document.getElementById("user-management").style.display = "block";
	document.getElementById("file-management").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("Employment-report").style.display = "none";
	document.getElementById("bug-report").style.display = "none";
}

function employmentReport(){
	document.getElementById("Employment-report").style.display = "block";
	document.getElementById("file-management").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("user-management").style.display = "none";
	document.getElementById("bug-report").style.display = "none";
}

function bugReport(){
	document.getElementById("bug-report").style.display = "block";
	document.getElementById("file-management").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("user-management").style.display = "none";
	document.getElementById("Employment-report").style.display = "none";

}