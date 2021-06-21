function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide(); 
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function draw() {
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}

function gotResult(error,result){
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    document.getElementById('obj').innerHTML = result[0].label;
    document.getElementById('accuracy').innerHTML = result[0].confidence.toFixed(5);
  }
}

function modelLoaded() {
  console.log('model loaded!');
}