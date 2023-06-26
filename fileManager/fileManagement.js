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
    window.location.href = "../LoginPage/login.html";
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
	window.location.href = "fileManagement.html"
}

function dashboard(){
	window.location.href = "../index.html"
}

function userManagement(){
	window.location.href = "../userManagement/userManagement.html"
}

function employmentReport(){
	window.location.href = "../employmentReport/employmentReport.html"
}

function bugReport(){
    window.location.href = "../bugReport/bugReport.html"
}

function setting(){
    window.location.href = "../Setting/setting.html"
}

// Ambil elemen yang diperlukan
const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');
const fileCount = document.getElementById('file-count');

// Inisialisasi jumlah file
let totalFiles = 0;

// Ketika formulir di-submit
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    const files = fileInput.files; // Ambil file yang diunggah

    // Periksa apakah ada file yang dipilih
    if (files.length > 0) {
        // Iterasi melalui setiap file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const li = document.createElement('li');
            li.textContent = file.name;
            fileList.appendChild(li);
            totalFiles++; // Tambahkan jumlah file
        }
        
        // Perbarui jumlah file pada elemen HTML
        fileCount.textContent = totalFiles;
    }
    
    // Bersihkan input file setelah unggah
    fileInput.value = '';
});