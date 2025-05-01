// Course data with descriptions
const courseData = {
  "HSC 2025 ICT Revision": {
    title: "HSC 2025 ICT Revision",
    description: "Comprehensive revision course for HSC 2025 ICT syllabus. Covers all chapters with practice questions and model tests.",
    duration: "3 months",
    classes: "3 classes per week",
    fee: "৳3500"
  },
  "HSC ICT Crash Course": {
    title: "HSC ICT Crash Course",
    description: "Intensive short-term course for quick revision of HSC ICT syllabus. Ideal for students who need last-minute preparation.",
    duration: "1 month",
    classes: "5 classes per week",
    fee: "৳2000"
  },
  "SSC ICT Foundation": {
    title: "SSC ICT Foundation",
    description: "Foundation course for SSC students to build strong ICT concepts. Includes practical sessions and regular assessments.",
    duration: "6 months",
    classes: "2 classes per week",
    fee: "৳4000"
  },
  "ICT Olympiad Preparation": {
    title: "ICT Olympiad Preparation",
    description: "Specialized training for ICT Olympiad competitions. Focuses on problem-solving and advanced concepts.",
    duration: "4 months",
    classes: "2 classes per week",
    fee: "৳5000"
  },
  "Programming Basics (Python, C)": {
    title: "Programming Basics (Python, C)",
    description: "Introduction to programming using Python and C. Learn fundamental programming concepts and develop simple applications.",
    duration: "3 months",
    classes: "2 classes per week",
    fee: "৳4500"
  },
  "ICT Model Test Series": {
    title: "ICT Model Test Series",
    description: "Regular model tests to assess your ICT knowledge and improve exam performance. Includes detailed feedback and solutions.",
    duration: "2 months",
    classes: "1 class per week",
    fee: "৳1500"
  },
  "Advanced Programming Workshop": {
    title: "Advanced Programming Workshop",
    description: "Advanced programming techniques and project development. Suitable for students with basic programming knowledge.",
    duration: "2 months",
    classes: "2 classes per week",
    fee: "৳6000"
  },
  "Competitive Programming": {
    title: "Competitive Programming",
    description: "Learn algorithms and data structures for competitive programming contests. Practice with real contest problems.",
    duration: "3 months",
    classes: "2 classes per week",
    fee: "৳5500"
  }
};

// Create course popup HTML structure
document.addEventListener('DOMContentLoaded', function() {
  // Create the popup element
  const coursePopup = document.createElement('div');
  coursePopup.id = 'course-popup';
  coursePopup.style.display = 'none';
  coursePopup.style.position = 'fixed';
  coursePopup.style.top = '0';
  coursePopup.style.left = '0';
  coursePopup.style.width = '100vw';
  coursePopup.style.height = '100vh';
  coursePopup.style.background = 'rgba(0,0,0,0.4)';
  coursePopup.style.zIndex = '9999';
  coursePopup.style.alignItems = 'center';
  coursePopup.style.justifyContent = 'center';
  
  // Create the popup content
  coursePopup.innerHTML = `
    <div style="background:#fff;padding:2rem 1.5rem;border-radius:12px;max-width:500px;width:90vw;box-shadow:0 8px 32px rgba(0,0,0,0.18);position:relative;">
      <button id="close-course-popup" style="position:absolute;top:10px;right:10px;background:none;border:none;font-size:1.5rem;cursor:pointer;">&times;</button>
      <h2 id="course-title" style="margin-top:0;margin-bottom:1rem;color:#0066cc;font-size:1.5rem;text-align:center;"></h2>
      <div id="course-content" style="max-height:400px;overflow-y:auto;">
        <p id="course-description" style="margin-bottom:1rem;color:#333;line-height:1.5;"></p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;">
          <div style="background:#f5f9ff;padding:0.8rem;border-radius:8px;">
            <h3 style="margin-top:0;margin-bottom:0.5rem;color:#0066cc;font-size:1rem;">Duration</h3>
            <p id="course-duration" style="margin:0;color:#333;"></p>
          </div>
          <div style="background:#f5f9ff;padding:0.8rem;border-radius:8px;">
            <h3 style="margin-top:0;margin-bottom:0.5rem;color:#0066cc;font-size:1rem;">Classes</h3>
            <p id="course-classes" style="margin:0;color:#333;"></p>
          </div>
        </div>
        <div style="background:#f5f9ff;padding:0.8rem;border-radius:8px;margin-top:1rem;">
          <h3 style="margin-top:0;margin-bottom:0.5rem;color:#0066cc;font-size:1rem;">Course Fee</h3>
          <p id="course-fee" style="margin:0;color:#333;font-weight:bold;"></p>
        </div>
        <div style="margin-top:1.5rem;text-align:center;">
          <a href="https://forms.gle/your-google-form-link" class="admission-btn" style="display:inline-block;background:linear-gradient(90deg, #ffb347, #ffe066 70%, #ffb347);color:#004a99;font-weight:700;font-size:1.1rem;padding:0.7rem 1.8rem;border:none;border-radius:32px;box-shadow:0 4px 16px rgba(255, 224, 102, 0.18);text-decoration:none;letter-spacing:0.5px;cursor:pointer;animation:flashGlow 1.2s ease-in-out infinite alternate;" target="_blank" rel="noopener">Enroll Now</a>
        </div>
      </div>
    </div>
  `;
  
  // Add the popup to the document body
  document.body.appendChild(coursePopup);
  
  // Add click event listeners to all course items
  const courseItems = document.querySelectorAll('.courses-list li');
  courseItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const courseName = this.textContent.trim();
      const course = courseData[courseName];
      
      if (course) {
        // Populate the popup with course data
        document.getElementById('course-title').textContent = course.title;
        document.getElementById('course-description').textContent = course.description;
        document.getElementById('course-duration').textContent = course.duration;
        document.getElementById('course-classes').textContent = course.classes;
        document.getElementById('course-fee').textContent = course.fee;
        
        // Show the popup
        coursePopup.style.display = 'flex';
      }
    });
  });
  
  // Close popup when clicking the close button
  document.getElementById('close-course-popup').addEventListener('click', function() {
    coursePopup.style.display = 'none';
  });
  
  // Close popup when clicking outside the popup content
  coursePopup.addEventListener('click', function(e) {
    if (e.target === coursePopup) {
      coursePopup.style.display = 'none';
    }
  });
});