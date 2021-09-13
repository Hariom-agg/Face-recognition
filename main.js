

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
    });
    
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');

function take_picture()
{
  Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="snaped_image" src="'+data_uri+'"/>';
  });
}





 console.log('ml5.version:', ml5.version);


 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dVOpM1l4b/model.json',modelLoaded);

 function modelLoaded ()
 {
   console.log("ModelLoaded");
 }

 function check()
 {
  img = document.getElementById("snaped_image");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) 
{if (error)
   {
    console.log(error);
  }
  else {
    console.log(results);
    label= results[0].label;
    confidence= results[0].confidence.toFixed(3)
    document.getElementById("result_family_member_name").innerHTML = label;
    document.getElementById("result_family_member_accuracy").innerHTML = confidence;
  }
}
 

  
