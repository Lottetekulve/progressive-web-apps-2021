// if ('serviceWorker' in navigator) {
//     window.addEventListener("load", function() {
//         navigator.serviceWorker.register("/sw.js")
//             .then(function(registration) {
//                 return registration.update();
//             })
//     });
// }

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', { scope: '.' })
// }

'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js', { scope: '.' })
