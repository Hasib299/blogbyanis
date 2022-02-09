let bar = document.getElementById('bar');
bar.addEventListener('click',()=>{
  let toggle = document.getElementById('NavUL')
  if (toggle.style.display == "none") {
     toggle.style.display = "block";
  }else{
     toggle.style.display = "none";
  }
})
