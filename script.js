function updateVitals() {
    const heartRate = Math.floor(Math.random() * (120 - 60 + 1)) + 60;  // 60-120 BPM
    const breathRate = Math.floor(Math.random() * (20 - 12 + 1)) + 12;  // 12-20 BPM

    const sleepStages = ['Awake', 'Light Sleep', 'Deep Sleep', 'REM'];
    const sleepPattern = sleepStages[Math.floor(Math.random() * sleepStages.length)];

    // Update the DOM
    document.getElementById('heartRate').innerText = `${heartRate} BPM`;
    document.getElementById('breathRate').innerText = `${breathRate} BPM`;
    document.getElementById('sleepPattern').innerText = sleepPattern;
}

// Update vitals every 2 seconds
setInterval(updateVitals, 2000);
updateVitals();
function addToPlan(content) {
    // Get the current saved plan or initialize an empty array
    let savedPlan = JSON.parse(localStorage.getItem("exercisePlan")) || [];

    // Add the new content to the plan
    savedPlan.push(content);

    // Save the updated plan back to localStorage
    localStorage.setItem("exercisePlan", JSON.stringify(savedPlan));

    alert("Added to Plan!");
}

// Function to navigate to the plan page
function goToPlan() {
    window.location.href = "exerciseplan.html";
}
