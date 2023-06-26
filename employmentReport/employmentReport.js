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
	window.location.href = "../fileManager/fileManagement.html"
}

function dashboard(){
	window.location.href = "../index.html"
}

function userManagement(){
	window.location.href = "../userManagement/userManagement.html"
}

function employmentReport(){
	window.location.href = "employmentReport.html"
}

function bugReport(){
    window.location.href = "../bugReport/bugReport.html"
}

function setting(){
    window.location.href = "../Setting/setting.html"
}

function generatePDF() {
    const doc = new jsPDF();

    // Mendapatkan data dari tabel
    const table = document.getElementById('employee-table');
    const rows = table.querySelectorAll('tbody tr');

    // Mengatur header tabel
    const headers = ['User', 'Employees Entry', 'Position'];
    const data = rows.map(row => {
        const rowData = Array.from(row.querySelectorAll('td'), cell => cell.textContent);
        return rowData;
    });

    // Membuat tabel dalam dokumen PDF
    doc.autoTable({
        head: [headers],
        body: data,
        theme: 'grid',
        styles: {
            overflow: 'linebreak',
            fontSize: 10,
            cellPadding: 5,
        },
    });

    // Menyimpan dokumen PDF
    doc.save('employees.pdf');
}