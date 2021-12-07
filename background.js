// background.js

// let color = '#3aa757';
let maxVol = 5;
var currentVolume = 1;
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if (request.type == 'newVolume'){
      currentVolume = request.volume;
    }
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
      chrome.tabs.sendMessage(tabs[0].id,{filter:"newVolume",volume:currentVolume})
    });


})


// chrome.runtime.onInstalled.addListener(() => {
//   // chrome.storage.sync.set({ color });
//   // console.log('Default background color set to %cgreen', `color: ${color}`);

//   chrome.storage.sync.set({ maxVol });
//   console.log('Default Max Volume set to ' + maxVol);
// });

// window.perfWatch = {};

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     window.perfWatch[sender.tab.id] = message.essential || null;
// });