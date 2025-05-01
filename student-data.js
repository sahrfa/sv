// Student data for each batch (max 30 students per batch)
// Each student: { name, institution, grade, phone }

const studentData = {
  "batch_1": [
    { name: "Rafiq Islam", institution: "Rajshahi College", grade: "A", phone: "01712345601" },
    { name: "Yasmin", institution: "Rajshahi Girls' School", grade: "A+", phone: "01812345602" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Karim Ahmed", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345603" },
    { name: "Nasreen Akter", institution: "Govt. Girls' College", grade: "B+", phone: "01612345604" },
    { name: "Jahid Hasan", institution: "Rajshahi Model School", grade: "A", phone: "01512345605" }
  ],
  "batch_2": [
    { name: "Sharmin Sultana", institution: "Rajshahi College", grade: "A+", phone: "01712345606" },
    { name: "Masud Rana", institution: "Govt. Boys' College", grade: "A", phone: "01812345607" },
    { name: "Tania Begum", institution: "Rajshahi Girls' School", grade: "A-", phone: "01912345608" },
    { name: "Faisal Khan", institution: "Rajshahi Collegiate School", grade: "B+", phone: "01612345609" },
    { name: "Roksana Khatun", institution: "Rajshahi University School", grade: "A", phone: "01512345610" }
  ],
  "batch_3": [
    { name: "Mahfuz Rahman", institution: "Rajshahi College", grade: "A-", phone: "01712345611" },
    { name: "Shila Akter", institution: "Govt. Girls' College", grade: "A+", phone: "01812345612" },
    { name: "Rubel Hossain", institution: "Rajshahi Collegiate School", grade: "B+", phone: "01912345613" },
    { name: "Farida Yasmin", institution: "Rajshahi Girls' School", grade: "A", phone: "01612345614" },
    { name: "Jamal Uddin", institution: "Rajshahi Model School", grade: "A-", phone: "01512345615" }
  ],
  "batch_4": [
    { name: "Salma Khatun", institution: "Rajshahi College", grade: "A", phone: "01712345616" },
    { name: "Rashed Khan", institution: "Govt. Boys' College", grade: "A-", phone: "01812345617" },
    { name: "Mina Begum", institution: "Rajshahi Girls' School", grade: "A+", phone: "01912345618" },
    { name: "Sohel Rana", institution: "Rajshahi Collegiate School", grade: "B+", phone: "01612345619" },
    { name: "Farzana Akter", institution: "Rajshahi University School", grade: "A", phone: "01512345620" }
  ],
  "batch_5": [
    { name: "Habib Rahman", institution: "Rajshahi College", grade: "A+", phone: "01712345621" },
    { name: "Nargis Sultana", institution: "Govt. Girls' College", grade: "A", phone: "01812345622" },
    { name: "Milon Hossain", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345623" },
    { name: "Rehana Khatun", institution: "Rajshahi Girls' School", grade: "B+", phone: "01612345624" },
    { name: "Saiful Islam", institution: "Rajshahi Model School", grade: "A", phone: "01512345625" }
  ],
  "batch_6": [
    { name: "Ahmed Khan", institution: "Rajshahi College", grade: "A+", phone: "01712345678" },
    { name: "Fatima Rahman", institution: "Govt. Girls' College", grade: "A", phone: "01812345679" },
    { name: "Mohammad Ali", institution: "Rajshahi Collegiate School", grade: "A-", phone: "01912345680" },
    { name: "Nusrat Jahan", institution: "Rajshahi University School", grade: "A", phone: "01612345681" },
    { name: "Kamal Hossain", institution: "Rajshahi Model School", grade: "B+", phone: "01512345682" }
  ],
  "batch_7": [
    { name: "Sadia Islam", institution: "Rajshahi College", grade: "A", phone: "01712345683" },
    { name: "Rahim Uddin", institution: "Govt. Boys' College", grade: "A-", phone: "01812345684" },
    { name: "Tahmina Akter", institution: "Rajshahi Girls' School", grade: "A+", phone: "01912345685" }
  ],
  "batch_8": [
    { name: "Imran Hossain", institution: "Rajshahi College", grade: "B+", phone: "01712345686" },
    { name: "Nazia Sultana", institution: "Rajshahi Collegiate School", grade: "A", phone: "01812345687" }
  ]
};

// Export for use in script.js
if (typeof module !== 'undefined') {
  module.exports = studentData;
}
