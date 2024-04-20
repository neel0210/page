// Wait for 2.7 seconds and then hide the loading GIF and show the main content
setTimeout(function() {
    hideLoading();
}, 2500);

// Function to show loading GIF for 3 seconds before redirecting
function showLoadingAndRedirect(loadingGifPath, redirectUrl) {
    changeLoadingGif(loadingGifPath); // Change loading GIF source
    showLoading(); // Show loading GIF
    // Wait for the loading GIF to be shown and then redirect after 3 seconds
    setTimeout(function() {
        window.location.href = redirectUrl; // Redirect to the linked page after 3 seconds
    }, 2500);
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
