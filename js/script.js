function calculateGPA() {

    var c1 = parseFloat(document.getElementById("c1").value) || 0;
    var g1 = parseFloat(document.getElementById("g1").value) || 0;

    var c2 = parseFloat(document.getElementById("c2").value) || 0;
    var g2 = parseFloat(document.getElementById("g2").value) || 0;

    var c3 = parseFloat(document.getElementById("c3").value) || 0;
    var g3 = parseFloat(document.getElementById("g3").value) || 0;

    var totalCredits = c1 + c2 + c3;

    if (totalCredits === 0) {
        document.getElementById("result").innerHTML = "Please enter valid data";
        return;
    }

    var totalPoints = (c1*g1) + (c2*g2) + (c3*g3);

    var gpa = totalPoints / totalCredits;

    document.getElementById("result").innerHTML = 
        "Your Semester GPA is: " + gpa.toFixed(2);
}

function addReview() {

    let teacher = document.getElementById("teacher").value;
    let rating = document.getElementById("rating").value;
    let review = document.getElementById("review").value;

    if(teacher === "" || rating === "" || review === ""){
        alert("Please fill all fields");
        return;
    }

    let reviewObj = {
        teacher: teacher,
        rating: rating,
        review: review
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(reviewObj);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    showReviews();

}

function showReviews(){

    let container = document.getElementById("reviewContainer");

    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(function(r){

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${r.teacher}</h3>
            <p>⭐ Rating: ${r.rating}/5</p>
            <p>${r.review}</p>
        `;

        container.appendChild(card);

    });

}