function getStreamValues() {
    const streamName = document.getElementById('streamInput').value;
    const className = document.getElementById('classInput').value;
    const year = document.getElementById('yearInput').value;
    const teacher = document.getElementById('teacherInput').value;
    let streamValues='';
    streamValues={
      stream: streamName,
      className: className,
      year: year,
      teacher: teacher
    };



    fetch('http://localhost:3000/insertStream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(streamValues)
    })
    .then(response => {
      // handle the response
      if (response.ok) {
        document.getElementById("insertMessage").innerHTML="Stream values successfully posted";
        console.log('Stream values successfully posted');
      } else {
        console.log('Failed to post Stream values');
      }
    })
    .catch(error => {
      // handle the error
      console.log(error);
    });
    return console.log(streamValues);
  }


  function getStudentValues() {
    const admission = document.getElementById('admissionInput').value;
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const dob = document.getElementById('dobInput').value;
    const phone = document.getElementById('phoneInput').value;
    const classVal = document.getElementById('ClassInput').value;
    const stream = document.getElementById('streamInput').value;
  
    const studentValues = {
      AdmissionNumber: admission,
      Name: name,
      Email: email,
      PhoneNumber: phone,
      Class: classVal,
      Stream: stream,
      Dob: dob
    };
  

    fetch('http://localhost:3000/insertStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentValues)
      })
      .then(response => {
        if (response.ok) {
          document.getElementById("insertMessage").innerHTML="Student values successfully posted";
          console.log('Student values successfully posted');
        } else {
          console.log('Failed to post student values');
        }
      })
      .catch(error => console.error(error));
    
  }



  function getClassValues() {
    const numberOfStudentInput = document.getElementById("numberOfStudentInput");
    const classSelect = document.getElementById("classSelect");
    const subjectInput = document.getElementById("subjectInput");
    const teacherNameInput = document.getElementById("teacherNameInput");
  
    const classValues = {
      numberOfStudents: numberOfStudentInput.value,
      className: classSelect.value,
      subject: subjectInput.value,
      teacherName: teacherNameInput.value
    };
    
    fetch('http://localhost:3000/insertClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(classValues)
    })
    .then(response => {
      // handle the response
      if (response.ok) {
        document.getElementById("insertMessage").innerHTML="class values successfully posted";
        console.log('class values successfully posted');
      } else {
        console.log('Failed to post class values');
      }
    })
    .catch(error => {
      // handle the error
      console.log(error)
    });

    console.log(classValues);
  }
  
  
  function selectStudents(){
    let studentDataHtml = ''; // Initialize an empty string
    fetch('http://localhost:3000/selectStudents')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    let studentDataArray=data;

studentDataArray.forEach(studentData => {
  // Build the HTML for this student's row of data
studentDataHtml += `
    <tr>
      <td>${studentData.AdmissionNumber}</td>
      <td>${studentData.Class}</td>
      <td>${studentData.Dob}</td>
      <td>${studentData.Email}</td>
      <td>${studentData.Name}</td>
      <td>${studentData.PhoneNumber}</td>
      <td>${studentData.Stream}</td>
    </tr>
  `;
  
});
document.getElementById("studentDetails").innerHTML=studentDataHtml;
  })
  .catch(error => console.error(error));


  }
  selectStudents();



  function selectStreams(){
    let streamDataHtml = ''; // Initialize an empty string
    fetch('http://localhost:3000/selectStream')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the retrieved data
    let streamDataArray=data;

streamDataArray.forEach(streamData => {
  // Build the HTML for this stream's row of data
streamDataHtml += `
    <tr>
     <td>${streamData.StreamName}</td>
     <td>${streamData.ClassName}</td>
     <td>${streamData.AcademicYear}</td>
      <td>${streamData.Teacher}</td>
    </tr>
  `;
  
});
document.getElementById("streamDetails").innerHTML=streamDataHtml;
  })
  .catch(error => console.error(error));


  }
  selectStreams();



  function selectClasses(){
    let classDataHtml = ''; // Initialize an empty string
    fetch('http://localhost:3000/selectClasses')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the retrieved data
    let classDataArray=data;

classDataArray.forEach(classData => {
  // Build the HTML for this class's row of data  
classDataHtml += `
    <tr>
     <td>${classData.ClassName}</td>
     <td>${classData.ClassTeacher}</td>
     <td>${classData.NoStudents}</td>
      <td>${classData.NoStudents}</td>
    </tr>
  `;
  
});
document.getElementById("classDetails").innerHTML=classDataHtml;
  })
  .catch(error => console.error(error));


  }
  selectClasses();



  