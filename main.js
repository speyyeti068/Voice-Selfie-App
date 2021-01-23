var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var transcript = event.results[0][0].transcript;
    console.log(transcript);

    document.getElementById("textbox").innerHTML = transcript;

    if(transcript == "take my selfie"){
        console.log("Taking Selfie");
        speak();
    }
}

//This Speaks Out The Text From The Area

function speak(){
    var synth = window.speechSynthesis; //API To Convert Text To Speach
    // var data = document.getElementById("textbox").innerHTML;

    var data = "Taking Your Selfie In 5 Seconds";
    
    var readibleFormatData = new SpeechSynthesisUtterance(data);
    
    synth.speak(readibleFormatData);

    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

var camera = document.getElementById("camera");

