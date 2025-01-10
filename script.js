let currentPage = 1;
const totalForms = 60; // จำนวนฟอร์มทั้งหมด
const formsPerPage = 5; // จำนวนฟอร์มในแต่ละหน้า
const totalPages = Math.ceil(totalForms / formsPerPage); // คำนวณจำนวนหน้าทั้งหมด


// ข้อมูลฟอร์มตัวอย่าง
const forms = [
    { title: "ฟอร์มตรวจเช็คประจำวัน 1", link: "1" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 2", link: "1" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 3", link: "1" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 4", link: "1" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 5", link: "1" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 6", link: "2" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 7", link: "2" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 8", link: "2" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 9", link: "2" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 10", link: "2" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 11", link: "3" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 12", link: "3" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 13", link: "3" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 14", link: "3" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 15", link: "3" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 16", link: "4" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 17", link: "4" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 18", link: "4" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 19", link: "4" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 20", link: "4" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 21", link: "5" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 22", link: "5" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 23", link: "5" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 24", link: "5" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 25", link: "5" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 26", link: "6" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 27", link: "6" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 28", link: "6" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 29", link: "6" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 30", link: "6" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 31", link: "7" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 32", link: "7" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 33", link: "7" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 34", link: "7" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 35", link: "7" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 36", link: "8" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 37", link: "8" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 38", link: "8" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 39", link: "8" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 40", link: "8" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 41", link: "9" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 42", link: "9" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 43", link: "9" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 44", link: "9" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 45", link: "9" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 46", link: "10" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 47", link: "10" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 48", link: "10" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 49", link: "10" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 50", link: "10" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 51", link: "11" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 52", link: "11" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 53", link: "11" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 54", link: "11" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 55", link: "11" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 56", link: "12" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 57", link: "12" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 58", link: "12" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 59", link: "12" },
    { title: "ฟอร์มตรวจเช็คประจำวัน 60", link: "12" }
];


// แสดงข้อมูลที่หน้าเฉพาะ
function updatePageContent() {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentForms = forms.slice(startIdx, endIdx);

    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = ""; // เคลียร์เนื้อหาเดิม

    currentForms.forEach(form => {
        const formItem = document.createElement("div");
        formItem.classList.add("form-item");
        formItem.innerHTML = `
            <h2>${form.title}</h2>
            <p>กรุณากรอกข้อมูลในฟอร์มด้านล่าง:</p>
            <a href="${form.link}" class="form-link">คลิกที่นี่เพื่อกรอกฟอร์ม</a>
        `;
        formContainer.appendChild(formItem);
    });

    updatePagination();
}

// อัพเดตข้อมูลหน้า
function updatePagination() {
    document.getElementById('page-info').innerText = `หน้า ${currentPage} จาก ${totalPages}`;
    
    document.getElementById('prev').classList.toggle('disabled', currentPage === 1);
    document.getElementById('next').classList.toggle('disabled', currentPage === totalPages);
}

// ฟังก์ชันการเปลี่ยนหน้า
function changePage(direction) {
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    updatePageContent();
}

// เรียกใช้ฟังก์ชันเมื่อหน้าโหลด
document.addEventListener('DOMContentLoaded', function () {
    updatePageContent();
});
