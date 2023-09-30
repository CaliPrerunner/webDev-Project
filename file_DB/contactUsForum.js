

function sendEmail() {
//grabs info from form and assigns it to a varibale
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var num = document.getElementById("num").value;
  var email = document.getElementById("email").value;
  var box = document.getElementById("box").value;

  //sends admin a notication email
  Email.send({
    Host: "smtp.gmail.com",
    Username: "barkt140@gmail.com",
    Password: "SFSU2021",
    To: 'adelaro2@mail.sfsu.edu',
    From: "barkt140@gmail.com",
    Subject: "Customer Assistance",
    Body: "A customer has contated us!! \n" + "\n First Name: "+ fname + "\n Last Name: "+ lname + "\n Phone Number: "+ num + "\nEmail: "+ email + "\n Comment Box: "+ box,
  })
  //sends customer a confirmation email
  Email.send({
    Host: "smtp.gmail.com",
    Username: "barkt140@gmail.com",
    Password: "SFSU2021",
    To: email,
    From: "barkt140@gmail.com",
    Subject: "TBD Contact Us Form",
    Body: "Thank you for reaaching out to us. We will contact you in 2-3 business days. if your need is urgent please call us. " ,
  }).then(function (message) {
      alert("Check your Email for confirmation!")
    });
}
