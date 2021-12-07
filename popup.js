



// Initialize button with user's preferred color
// let setVol_btn = document.getElementById("setVol_btn");

// // chrome.storage.sync.get("color", ({ color }) => {
// //   changeColor.style.backgroundColor = color;
// // });

// // When the button is clicked, inject setPageBackgroundColor into current page
// flag = true;
// custVol1_btn.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: setVolume,
//       args: [2]
//     });
//   });

// setVol_btn.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: setVolume,
//       args: [document.getElementById('volume_txtbox').value]
//     });
//   });

// // The body of this function will be executed as a content script inside the
// // current page
// function setVolume(volume) {
//   // if (volume == -1){
//   //   alert('this also ran')
//   //   chrome.storage.sync.get("maxVol", ({ maxVol }) => {
//   //   maximumVolume = maxVol;
//   //   volume = parseInt(input.value);
    
//   //   if (volume > maximumVolume){
//   //     alert("The volume is higher than the current volume limit: " + maximumVolume);
//   //   }
//   //   else if(volume < 0){
//   //     alert("You cannot have negative volume");
//   //   }
//   //   else if(volume == NaN){
//   //     alert("Invalid Input");
//   //   }
//   //   else{
//   //     if (!flag) {
//   //       gainNode.gain.value = volume;
//   //     }
//   //     else{
//   //       var videoElement = document.querySelector("video");
//   //       var audioCtx = new AudioContext();
//   //       var source = audioCtx.createMediaElementSource(videoElement);
//   //       var gainNode = audioCtx.createGain();
//   //       gainNode.gain.value = volume;
//   //       source.connect(gainNode);
//   //       gainNode.connect(audioCtx.destination);
//   //       flag = true
//   //     }
//   //   }
    
//   //   });

//   // }
//   // else{
//   if (!flag) {
//     // alert('this ran again' + gainNode.gain.value);
//     alert('this ran');
//     gainNode.gain.value = volume;
//     alert('this ran');
//     // alert('this ran again' + gainNode.gain.value);
//   }
//   else{
//     // alert('this ran');
//     // alert(volume)
//     alert(typeof gainNode);
//     // alert(gainNode.gain.value)
//     var videoElement = document.querySelector("video");
//     var audioCtx = new AudioContext();
//     var source = audioCtx.createMediaElementSource(videoElement);
//     var gainNode = audioCtx.createGain();
//     new AudioContext.createMediaElementSource(document.querySelector("video")).createGain()
//     gainNode.gain.value = volume;
//     source.connect(gainNode);
//     gainNode.connect(audioCtx.destination);
//     alert(gainNode.gain.value);
//     flag = false;
//   }
//   // }

  
  
//   // chrome.storage.sync.get("color", ({ color }) => {
//   //   document.body.style.backgroundColor = color;
//   // });
// }

//LEGACY METHODS

// document.addEventListener('DOMContentLoaded', documentEvents  , false);

// let setVol_btn = document.getElementById("setVol_btn");

// function validateVolume(input) { 
//   chrome.storage.sync.get("maxVol", ({ maxVol }) => {
//     maximumVolume = maxVol
//     console.log("input value is : " + input.value);
//     volume = parseInt(input.value);
//     alert("The entered data is : " + input.value);
//     if (volume > maximumVolume){
//       alert("The volume is higher than your current volume limit: " + maximumVolume)
//     }
//     else if(volume < 0){
//       alert("You cannot have negative volume")
//     }
//     else if(volume == NaN){
//       alert("Invalid Input")
//     }
//     else{
//       setVolume(volume)
//     }
    
//   });
  


//   // do processing with data
//   // you need to right click the extension icon and choose "inspect popup"
//   // to view the messages appearing on the console.
// }

// function documentEvents() {    
//   setVol_btn.addEventListener('click',    
//     function() { validateVolume(document.getElementById('volume_txtbox'));
//     });
  
//   // you can add listeners for other objects ( like other buttons ) here   

// }
// function injectedFunction() {
//   alert('test')
//   document.body.style.backgroundColor = 'orange';
// }

// function setVolume(volume){
//   if (typeof gainNode !== 'undefined') {
//     var videoElement = document.querySelector("video");
//     var audioCtx = new AudioContext();
//     var source = audioCtx.createMediaElementSource(videoElement);
//     var gainNode = audioCtx.createGain();
//     gainNode.gain.value = volume;
//     source.connect(gainNode);
//     gainNode.connect(audioCtx.destination);
//   }
//   else{
//     gainNode.gain.value = volume;
//   }
  
// }

// document.getElementById("setVol_btn").addEventListener('click', async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: injectedFunction
//   });
// });