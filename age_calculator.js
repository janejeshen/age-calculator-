function getAge() {
    const dobInput = document.getElementById("inputdob").value;
    const currentdateinput = document.getElementById("cdate").value;

    if (!dobInput || !currentdateinput ) {
        return alert("Please enter both date of birth and current date")
    }

    // creating date object
    const dob = new Date(dobInput);
    const currentdate = new Date(currentdateinput);

    // getting the age
    let age = currentdate.getFullYear() - dob.getFullYear();

    monthdiff = currentdate.getMonth() - dob.getMonth();

    if (monthdiff < 0 || (monthdiff===0 && currentdate.getDate() < dob.getDate())) {
        age--
    }

    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;

}