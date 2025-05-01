document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.course-tabs button');
  const tabContents = document.querySelectorAll('.courses-list');

  tabButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tabContents.forEach((content, cidx) => {
        content.style.display = (idx === cidx) ? 'flex' : 'none';
      });
    });
  });

  // Set initial state
  if(tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'flex';
    for(let i=1; i<tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  }

  // Dynamically update seats left for each batch card
  const seatsCountDivs = document.querySelectorAll('.seats-count');
  const maxSeats = 30;
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  function toBengaliNumber(num) {
    return String(num).split('').map(d => bnDigits[+d] || d).join('');
  }
  seatsCountDivs.forEach((div, idx) => {
    const batchNum = idx + 1;
    const batchKey = `batch_${batchNum}`;
    const students = (typeof studentData !== 'undefined' && studentData[batchKey]) ? studentData[batchKey] : [];
    const seatsLeft = maxSeats - students.length;
    div.textContent = `${toBengaliNumber(seatsLeft)} সিট বাকি`;
  });
});

// Student List Popup Logic
const studentListBtns = document.querySelectorAll('.student-list-btn');
const studentPopup = document.getElementById('student-popup');
const studentListContent = document.getElementById('student-list-content');
const closeStudentPopup = document.getElementById('close-student-popup');

// Student data is now loaded directly via script tag in HTML
// No need to fetch it dynamically

studentListBtns.forEach((btn, idx) => {
  btn.addEventListener('click', function() {
    // Determine batch number (assuming order matches batch_1, batch_2, ...)
    const batchNum = idx + 1;
    const batchKey = `batch_${batchNum}`;
    const students = studentData[batchKey] || [];
    let html = '';
    if (students.length === 0) {
      html = '<div style="text-align:center;color:#888;">No students enrolled yet.</div>';
    } else {
      html = '<table style="width:100%;border-collapse:collapse;font-size:0.97rem;border:1px solid #ddd;">';
      html += '<tr style="background-color:#f2f2f2;"><th style="padding:8px;text-align:left;border:1px solid #ddd;">Name</th><th style="padding:8px;text-align:left;border:1px solid #ddd;">Institution</th><th style="padding:8px;text-align:center;border:1px solid #ddd;">Grade</th><th style="padding:8px;text-align:center;border:1px solid #ddd;">Phone</th></tr>';
      students.forEach(s => {
        html += `<tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;border:1px solid #ddd;">${s.name}</td><td style="padding:8px;border:1px solid #ddd;">${s.institution}</td><td style="padding:8px;text-align:center;border:1px solid #ddd;">${s.grade}</td><td style="padding:8px;text-align:center;border:1px solid #ddd;">${s.phone}</td></tr>`;
      });
      html += '</table>';
    }
    studentListContent.innerHTML = html;
    studentPopup.style.display = 'flex';
  });
});

closeStudentPopup.addEventListener('click', function() {
  studentPopup.style.display = 'none';
});

studentPopup.addEventListener('click', function(e) {
  if (e.target === studentPopup) {
    studentPopup.style.display = 'none';
  }
});