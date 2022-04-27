Webcam.set({

    width:400,
    height:300,
    image_format:'png',
    png_quality:100

})

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_url+'"/>' ;

    });
}

console.log('ml5version:',ml5.version);
classifier=ml5.imageclassifier('ps://teachablemachine.withgoogle.com/models/qlJuP5uhn/model.json',modelLoaded)