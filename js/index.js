// blog button
const blogButton =document.getElementById('blog-btn');
blogButton.addEventListener('click',function(){
    window.location.href = "blog.html"
})


let serial=0;
// first-card
document.getElementById("triangle-button").addEventListener('click',function(){
    serial +=1;
    const geometryName =document.getElementById('triangle-card').innerText;
    const baseInput =document.getElementById('triangle-first-input').value ;
    const heightInput = document.getElementById('triangle-second-input').value ;
    if(
        baseInput == "" ||
        heightInput == "" ||
        baseInput <= 0 ||
        heightInput <= 0
    ){
        return alert("please enter any valid number");
    }
    document.getElementById('triangle-first-input').value = '';
    document.getElementById('triangle-second-input').value ='';
    const triangleFormula = 0.5*baseInput*heightInput; 
    displayDataGeo(geometryName,triangleFormula);
      
})
// second-card
document.getElementById("rectangle-button").addEventListener('click',function(){
    serial +=1;
    const geometryNameTwo =document.getElementById('rectangle-card').innerText;
    const widthInput =document.getElementById('rectangle-first-input').value ;
    const lengthInput = document.getElementById('rectangle-second-input').value ;
    if(
        widthInput == "" ||
        lengthInput == "" ||
        widthInput <= 0 ||
        lengthInput <= 0
    ){
        return alert("please enter any valid number");
    }
    document.getElementById('rectangle-first-input').value ='';
    document.getElementById('rectangle-second-input').value = '';
    const rectangleFormula = widthInput*lengthInput; 
    displayDataGeo(geometryNameTwo,rectangleFormula);
    
    
})
// third-card
document.getElementById("parallelogram-button").addEventListener('click',function(){
    serial +=1;
    // const geometryNameThree =document.getElementById('parallelogram-card').innerText;
    // const baseInput =document.getElementById('parallelogram-value-one').innerText;
    // const heightInput = document.getElementById('parallelogram-value-two').innerText ;
    const gd =geometryGetData("parallelogram-card","parallelogram-value-one","parallelogram-value-two")
    const parallelogramFormula =parseFloat(gd.geometryFirstInput)*parseFloat(gd.geometrySecondInput); 
    displayDataGeo(gd.geometryName,parallelogramFormula);
    
    
})
// fourth-card
document.getElementById("rhombus-button").addEventListener('click',function(){
    serial +=1;
    // const geometryNameFour =document.getElementById('rhombus-card').innerText;
    // const diagonalFirstInput =document.getElementById('rhombus-value-one').innerText;
    // const diagonalSecondInput = document.getElementById('rhombus-value-two').innerText ;
    const gd =geometryGetData("rhombus-card","rhombus-value-one","rhombus-value-two");
    const rhombusFormula = 0.5*parseFloat(gd.geometryFirstInput)*parseFloat(gd.geometrySecondInput);
    displayDataGeo(gd.geometryName,rhombusFormula);
    
    
})
// fifth-card
document.getElementById("pentagon-button").addEventListener('click',function(){
    serial +=1;
    // const geometryNameFive =document.getElementById('pentagon-card').innerText;
    // const pentagonFirstInput =document.getElementById('pentagon-first-value').innerText;
    // const pentagonSecondInput = document.getElementById('pentagon-second-value').innerText ;
    const gd =geometryGetData("pentagon-card","pentagon-first-value","pentagon-second-value");
    const pentagonFormula = 0.5*parseFloat(gd.geometryFirstInput)*parseFloat(gd.geometrySecondInput);
    displayDataGeo(gd.geometryName,pentagonFormula);
    
    
})
// sixth-card
document.getElementById("ellipse-button").addEventListener('click',function(){
    serial +=1;
    // const geometryNameSix =document.getElementById('ellipse-card').innerText;
    // const ellipseFirstInput =document.getElementById('ellipse-first-value').innerText;
    // const ellipseSecondInput = document.getElementById('ellipse-second-value').innerText ;
    const gd =geometryGetData("ellipse-card","ellipse-first-value","ellipse-second-value");
    const ellipseFormula = 3.14*parseFloat(gd.geometryFirstInput)*parseFloat(gd.geometrySecondInput); 
    
    displayDataGeo(gd.geometryName,ellipseFormula.toFixed(2));
    
    
})
