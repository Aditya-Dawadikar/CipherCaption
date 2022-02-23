function clearCipher(){
    document.getElementById("cipher").value=""
}

function clearDecipher(){
    
    document.getElementById("decipher").value=""
}

function cipherRot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
      
    }
  }

function encrypt(){
    let text=document.getElementById('cipher').value
    document.getElementById("decipher").value=cipherRot13(text)
}

function decrypt(){
    let text=document.getElementById('decipher').value
    document.getElementById("cipher").value=cipherRot13(text)
}