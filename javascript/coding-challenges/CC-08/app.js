
const ssn = prompt("XXX-XX-XXXX")
function validateSSN(ssn) {
    var ssnRegex = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    if(validateSSN(ssn)) {
        console.log(ssn + "is a valid SSN.");
    }else {
        console.log(ssn + "not valid");
    }
  }
  