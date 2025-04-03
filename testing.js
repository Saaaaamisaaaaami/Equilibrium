// Load remaining time from localStorage when the page loads
window.onload = function() {
    for (let i = 1; i <= 3; i++) {
        let remainingTime = localStorage.getItem(`remainingTime${i}`);
        let duration = parseInt(document.querySelector(`.video-box:nth-child(${i})`).getAttribute('data-duration'));

        if (remainingTime && remainingTime > 0) {
            document.getElementById(`time${i}`).textContent = `Time Left: ${remainingTime} min`;
            document.querySelector(`.video-box:nth-child(${i}) .video-btn`).textContent = "Resume";
        } else {
            document.getElementById(`time${i}`).textContent = `Duration: ${duration} minutes`;
        }
    }
};

// Function to start the video and track the remaining time
function startVideo(index, videoUrl) {
    let duration = parseInt(document.querySelector(`.video-box:nth-child(${index})`).getAttribute('data-duration'));
    let remainingTime = localStorage.getItem(`remainingTime${index}`);

    // If no previous progress, start with full duration
    if (!remainingTime) {
        remainingTime = duration;
    }

    // Simulate watching the video
    let interval = setInterval(() => {
        remainingTime--;

        if (remainingTime <= 0) {
            clearInterval(interval);
            localStorage.removeItem(`remainingTime${index}`);
            document.getElementById(`time${index}`).textContent = `Duration: ${duration} minutes`;
            document.querySelector(`.video-box:nth-child(${index}) .video-btn`).textContent = "Start";
        } else {
            localStorage.setItem(`remainingTime${index}`, remainingTime);
            document.getElementById(`time${index}`).textContent = `Time Left: ${remainingTime} min`;
            document.querySelector(`.video-box:nth-child(${index}) .video-btn`).textContent = "Resume";
        }
    }, 1000);  // Decrease time every second

    // Open video in new tab
    window.open(videoUrl, '_blank');
}
