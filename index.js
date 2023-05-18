//a --> ai
//e --> enter
//i --> imes
//o --> ober 
//u --> ufat 

function encrypt() {
  var text = document.getElementById("inputText").value.toLowerCase();

  var encryptedText = text.replace(/a/igm, "ai");
  var encryptedText = encryptedText.replace(/e/igm, "enter");
  var encryptedText = encryptedText.replace(/i/igm, "imes");
  var encryptedText = encryptedText.replace(/o/igm, "ober");
  var encryptedText = encryptedText.replace(/u/igm, "ufat");

  document.getElementById("rightImg").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("text2").innerHTML = encryptedText;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";

}

function decrypt() {
  var text = document.getElementById("inputText").value.toLowerCase();

  var encryptedText = text.replace(/ai/igm, "a");
  var encryptedText = encryptedText.replace(/enter/igm, "e");
  var encryptedText = encryptedText.replace(/imes/igm, "i");
  var encryptedText = encryptedText.replace(/ober/igm, "o");
  var encryptedText = encryptedText.replace(/ufat/igm, "u");

  document.getElementById("rightImg").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("text2").innerHTML = encryptedText;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";

}

function copy() {
  var content = document.querySelector("#text2");
  
  content.select();

  document.execCommand("cut");

  alert("Copiado");
}