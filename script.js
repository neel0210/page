// Wait for 2.7 seconds and then hide the loading GIF and show the main content
setTimeout(function() {
    document.querySelector('.loading-gif').classList.add('hide');
    document.querySelector('main').classList.remove('hide');
}, 2700);

// Function to show loading GIF for 3 seconds before redirecting
function showLoadingAndRedirect(videoSrc, nextPage) {
    changeLoadingVideo(videoSrc); // Change loading video source
    showLoading(); // Show loading GIF
    setTimeout(function() {
        window.location.href = nextPage; // Redirect to the linked page after 3 seconds
    }, 3000);
}

// Function to change loading video source
function changeLoadingVideo(videoSrc) {
    var loadingVideo = document.querySelector('.loading-gif video');
    loadingVideo.pause(); // Pause the current video
    loadingVideo.src = videoSrc;
    loadingVideo.load(); // Load the new video source
    loadingVideo.play(); // Start playing the new video
}

// Function to show loading GIF and hide main content
function showLoading() {
    document.querySelector('.loading-gif').classList.remove('hide');
    document.querySelector('main').classList.add('hide');
}

// Function to hide loading GIF and show main content after a delay
function hideLoading() {
    setTimeout(function() {
        document.querySelector('.loading-gif').classList.add('hide');
        document.querySelector('main').classList.remove('hide');
    }, 2700);
}
