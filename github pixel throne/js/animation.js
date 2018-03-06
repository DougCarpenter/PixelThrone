if('serviceworker' in navigator) {
    try {
        navigator.serviceWorker.register('service-worker.js');
    }
    catch (error) {
        console.log('Error while registering the service worker.');
        console.log(error);
    }
}

$("#lancier").animate({right:"200vw"}, 10000, "linear");
 
