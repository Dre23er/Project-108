function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fWEKA6uuH/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
};

var roar = 0;
var meow = 0;
var bark = 0 ;
var backgroundNoise = 0;
function gotResults(error,results){
    if (error){
        console.error(error)
    }
    else {
console.log(results)
random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

   img = document.getElementById("sound_id")

    if (results[0].label == "Bark") {
        img.src = "bark.gif";
        bark = bark + 1
      } else if (results[0].label == "Meow ") {
        img.src = "meow.gif";
        meow = meow + 1
      } else if (results[0].label == "Roar") {
        img.src = "roar.gif";
        roar = roar + 1
      }else{ 
        img.src ="listen.gif";
        
      }
    }
};
