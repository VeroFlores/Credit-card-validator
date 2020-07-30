import validator from './validator.js';
//se hace las validaciones de la pagina 1
const btn1=document.getElementById("btn1");
btn1.addEventListener("click",(e)=>{
      e.preventDefault();
      const inputUserName=document.getElementById("userName").value;
      const inputEmail=document.getElementById("mail").value ;
      const inputPassword=document.getElementById('password').value;
      if (inputUserName== null || inputUserName.length == 0 ||inputUserName==0) {
            document.getElementById("error1").innerHTML="Completa lo solicitado";
            return false;
      }else{document.getElementById("error1").innerHTML="Datos correctos"; 
            }
      if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputEmail)) {
            document.getElementById("error2").innerHTML="Datos correctos";
      }else{document.getElementById("error2").innerHTML="Completa lo solicitado"; 
      return false;
      }
      if (inputPassword== null|| inputPassword.length == 0 ||inputPassword==0) {
            document.getElementById("error3").innerHTML="Completa lo solicitado";
            return false;
      }else{document.getElementById("error3").innerHTML="Datos correctos"; 
      }
      document.getElementById("h1").style.display="none"
      document.getElementById("grupo2").style.display="block";
})

//Se hace las validaciones de la información ingresada en la pagina 2
const btn2=document.getElementById("btn2")
btn2.addEventListener('click',(e)=>{
      e.preventDefault();
      const inputOwner=document.getElementById('ownerCard').value
      const inputCardN=document.getElementById("cardNumber").value
      const inputMonth=document.getElementById('month').value
      const inputCcv=document.getElementById("code").value
      if (inputOwner== null || inputOwner.length == 0 ||inputOwner==0) {
            document.getElementById("error4").innerHTML="Completa lo solicitado";
            return false;
      }else{document.getElementById("error4").innerHTML="Datos correctos"; 
            }
      if (inputCardN== null || inputCardN.length == 0 ||inputCardN==0) {
            return false ;
            }else {  
            const result=validator.isValid(inputCardN);
            const messageValid=document.getElementById("validCc")
            messageValid.innerHTML=result;
            validator.isValid(inputCardN)   
       }
       if (inputMonth== null || inputMonth.length == 0 ||inputMonth==0) {
            document.getElementById("error6").innerHTML="Completa lo solicitado";
            return false;
      }else{document.getElementById("error6").innerHTML="Datos correctos"; 
            }
      if (inputCcv== null || inputCcv.length == 0 ||inputCcv==0) {
            document.getElementById("error5").innerHTML="Completa lo solicitado";
            return false;
      }else{document.getElementById("error5").innerHTML="Datos correctos"; 
                  }
//Se llama a la pag 3 la funcion maskify
      const maskGrupo3=document.getElementById('masknumber')
      const maskNumbers=validator.maskify(inputCardN);
      maskGrupo3.innerHTML=maskNumbers;
                  validator.maskify(inputCardN);
//Ocultar pantallas para mostrar el cuadro 3
      document.getElementById("h1").style.display="none"
      document.getElementById("grupo1").style.display="none"
      document.getElementById("grupo2").style.display="none";
      document.getElementById("grupo3").style.display="block";
      

})





      


      
/*
 */
