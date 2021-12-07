function injectScript(file_path,tag){
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('inject-script.js'),'body')


// window.addEventListener("message", function (event) {
//     // only accept messages from the current tab
//     if (event.source != window)
//         return;

//     if (event.data.type && (event.data.type == "FROM_PAGE") && typeof chrome.app.isInstalled !== 'undefined') {
//         chrome.runtime.sendMessage({ essential: event.data.essential });
//     }
// }, false);


chrome.runtime.onMessage.addListener(function(msg,sender){
    if (msg.filter == "newVolume"){

    }
    // if (msg.filter == "author"){

    //     for (var i=0;i<msg.blocked.length;i++){
            
    //         startFiltering(msg.blocked[i]);     
    //     }   
    // }
}); 

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//         "from a content script:" + sender.tab.url :
//         "from the extension");
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );
  
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//       console.log(response.farewell);
//     });
//   });