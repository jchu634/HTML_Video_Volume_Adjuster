// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     window.perfWatch[sender.tab.id] = message.essential || null;
// });

// function AdjustVolume(){
    
//     let main = {};
//     main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
    
//     return main;

//     var videoElement = document.querySelector("video");
//     var audioCtx = new AudioContext();
//     var source = audioCtx.createMediaElementSource(videoElement);
//     var gainNode = audioCtx.createGain();
//     new AudioContext.createMediaElementSource(document.querySelector("video")).createGain()
//     gainNode.gain.value = volume;
//     source.connect(gainNode);
//     gainNode.connect(audioCtx.destination);
//     alert(gainNode.gain.value);

// }
// setInterval(() => {
//     let essential = AdjustVolume();
//     window.postMessage({ type: "FROM_PAGE", essential });
// }, 500);
function AdjustVolume(){
    const videoElement = document.querySelector("video");
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(videoElement);
    const gainNode = audioCtx.createGain();
    new AudioContext.createMediaElementSource(document.querySelector("video")).createGain()
    gainNode.gain.value = currentVolume;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
}
AdjustVolume();