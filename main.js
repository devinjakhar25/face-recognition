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

console.log('ml5version:',ml5version);
classifier=ml5.imageclassifier('ps://teachablemachine.withgoogle.com/models/qlJuP5uhn/model.json',modelLoaded)

  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }



function gotResult(error, results) {

  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
