// Function to check if the page is being loaded from the cache
function isPageLoadedFromCache(event) {
    return event.persisted;
}

// Wait for 2.7 seconds and then hide the loading GIF and show the main content
window.addEventListener('pageshow', function(event) {
    if (!isPageLoadedFromCache(event)) {
        setTimeout(function() {
            hideLoading();
        }, 2700); // Adjusted delay to match the loading GIF duration
    }
});

// Function to show loading GIF for 3 seconds before redirecting
function showLoadingAndRedirect(loadingGifPath, redirectUrl) {
    changeLoadingGif(loadingGifPath); // Change loading GIF source
    showLoading(); // Show loading GIF
    // Wait for the loading GIF to be shown and then redirect after 3 seconds
    setTimeout(function() {
        window.location.href = redirectUrl; // Redirect to the linked page after 3 seconds
    }, 3000); // Adjusted delay to match the loading GIF duration
}

// Function to change loading GIF source
function changeLoadingGif(gifSrc) {
    var loadingGif = document.querySelector('.loading-gif img');
    loadingGif.src = gifSrc;
}

// Function to show loading GIF and hide main content
function showLoading() {
    document.querySelector('.loading-gif').style.display = 'flex';
    document.querySelector('main').classList.add('hide');
}

// Function to hide loading GIF and show main content after a delay
function hideLoading() {
    document.querySelector('.loading-gif').style.display = 'none';
    document.querySelector('main').classList.remove('hide');
}

// Pause the video when the window loses focus
window.addEventListener('blur', function() {
    var video = document.querySelector('video');
    if(video) {
        video.pause();
    }
});

// Resume video playback when the window regains focus
window.addEventListener('focus', function() {
    var video = document.querySelector('video');
    if(video) {
        video.play();
    }
});

// Add touch event listeners to the buttons
document.querySelectorAll('.buttons a').forEach(button => {
    button.addEventListener('click', () => {
        // Your click event handling code here
    });

    // Add touchstart event listener for touch-based devices
    button.addEventListener('touchstart', () => {
        // Your touch event handling code here
    });
});
