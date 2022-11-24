var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    setTimeout(function(){
        img_id="selfie1";
        takeSnapshot();
        speak_data="Taking your selfie in five seconds.";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function(){
        img_id="selfie2";
        takeSnapshot();
        speak_data="Taking your next selfie in ten seconds.";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function(){
        img_id="selfie3";
        takeSnapshot();
        speak_data="Taking your last selfie in fifteen seconds.";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);



    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function takeSnapshot(){
    console.log(img_id);
    Webcam.snap(function(data.uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML="<img src="+data_uri+" id='selfie1'>";
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img src="+data_uri+" id='selfie2'>";
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML="<img src="+data_uri+" id='selfie3'>";
        }
    });
}
