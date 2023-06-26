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


async function logout() {
	const token = localStorage.getItem("token");
	if (!token) {
			throw new Error("Token tidak ditemukan");
	}

	try {
			const response = await fetch("http://127.0.0.1:3333/api/v1/logout", {
					method: "POST",
					headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
					}
			});

			if (response.ok) {
					localStorage.removeItem("token");
					alert("Logout berhasil");
					window.location.href = "../login.html";
			} else {
					throw new Error("Terjadi kesalahan saat melakukan logout");
			}
	} catch (error) {
			console.error("Error:", error);
			alert("Terjadi kesalahan saat melakukan logout");
	}
}


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
	window.location.href = "../fileManager/fileManagement.html"
}

function dashboard(){
	window.location.href = "../dashboard.html"
}

function userManagement(){
	window.location.href = "../userManagement/userManagement.html"
}

function employmentReport(){
	window.location.href = "../employmentReport/employmentReport.html"
}

function bugReport(){
    window.location.href = "bugReport.html"
}

function setting(){
    window.location.href = "../Setting/setting.html"
}