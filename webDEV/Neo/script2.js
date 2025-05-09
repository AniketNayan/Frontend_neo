document.getElementById("suitForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let resultDiv = document.getElementById("result");
    let suitImageContainer = document.getElementById("suitImageContainer");

    let suitRecommendation = "";
    let suitImage = "";

    if (height >= 180 && weight > 80) {
        suitRecommendation = "A classic double-breasted suit will complement personality.";
        suitImage = "double-breasted-suit";  // Replace with actual image path
    } else if (height >= 170 && weight <= 80) {
        suitRecommendation = "A slim-fit suit will enhance your proportions.";
        suitImage = "images/slim_fit_suit.jpg";
    } else if (height < 170) {
        suitRecommendation = "A structured blazer with vertical stripes will create a taller appearance.";
        suitImage = "images/structured_blazer.jpg";
    } else {
        suitRecommendation = "Please enter valid height and weight.";
        suitImage = "";
    }

    // Update the text recommendation
    resultDiv.innerHTML = `<p><strong>Recommended Suit:</strong> ${suitRecommendation}</p>`;

    // Show the image dynamically
    if (suitImage) {
        suitImageContainer.innerHTML = `<img src="${suitImage}" alt="Recommended Suit">`;
    } else {
        suitImageContainer.innerHTML = "";
    }
});
