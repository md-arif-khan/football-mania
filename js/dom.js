
function chosePlayer(elementId,btnId){

    const playerNmae= document.getElementById(elementId)
   const playerNameInnerText=playerNmae.innerText;
   const ol=document.getElementById('ol')
   const li=document.createElement('li')
   li.classList.add('common-class')
   li.innerText=playerNameInnerText;
   const commonClass=document.getElementsByClassName('common-class')
   if(commonClass.length===5){
    alert('You cannot add more than five.')
    document.getElementById(btnId).disabled =false; 
   }else{
    ol.appendChild(li)
    document.getElementById(btnId).disabled = true;
   } 
}

function inputField(elementId){
   const inputField=document.getElementById(elementId)
   const inputValue=inputField.value;
   const inputParse=parseInt(inputValue)
   inputField.value=''
   return inputParse;
   
}


document.getElementById('messibtn').addEventListener('click',function(){
    chosePlayer('messi','messibtn')
})
document.getElementById('romerobtn').addEventListener('click',function(){
    chosePlayer('romero','romerobtn')   
 })
 document.getElementById('dibalaibtn').addEventListener('click',function(){
    chosePlayer('dibala','dibalaibtn')
 })
 document.getElementById('demariabtn').addEventListener('click',function(){
    chosePlayer('demaria','demariabtn')
 })
 document.getElementById('marninezbtn').addEventListener('click',function(){
    chosePlayer('marinez','marninezbtn')
 })
 document.getElementById('gonzalobtn').addEventListener('click',function(){
    chosePlayer('gonzalo','gonzalobtn')
 })

 document.getElementById('calculateBtn').addEventListener('click',function(){
   const inputParseValue=inputField('inputFieldPerAmount')
   if(isNaN(inputParseValue)){
      alert('Please Provide a valid Number')
      return
   }
    const commonClass=document.getElementsByClassName('common-class')
    const totalPlayerAmount=commonClass.length*inputParseValue;
    const setTotalPlayerAmount=document.getElementById('totalPlayerAmount')
    setTotalPlayerAmount.innerText=totalPlayerAmount
   
 })


document.getElementById('totalBtn').addEventListener('click',function(){
   const manegar =inputField('manegar')
   const coach=inputField('coach')
   if(isNaN(manegar)){
      alert('Please Provide a valid Number')
      return
   }
   if(isNaN(coach)){
      alert('Please Provide a valid Number')
      return
   }
   const playerTotal=document.getElementById('totalPlayerAmount')
   const setTotal=document.getElementById('totalAmount')
   const playerTotalStr=playerTotal.innerText
   const playerTotalParse=parseInt(playerTotalStr)
   const allAmount=manegar+coach+playerTotalParse;
   setTotal.innerText=allAmount


})