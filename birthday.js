    function getAge() {
    const date = new Date()

    // Minus 2007 (ph3b3's birth year) from the current year to get phebe's theoretical current age
    const age = date.getUTCFullYear() - 2007

    // If September 26th (phebe's birthday) has not passed, minus phebe's age by one and return that value (date.getUTCMonth() starts at 0)
    if (date.getUTCMonth() + 1 < 9 && date.getDate() < 26) return age - 1;
    else return age;
}

window.onload = () => {
    document.getElementById("age").innerHTML = "Age: " + getAge();
    console.log(getAge())
}