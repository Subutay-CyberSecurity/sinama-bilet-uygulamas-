let tekcift= 0;

document.querySelector("#koltuk").addEventListener("click" , function(e){
  if(!(e.target.localName == "button")) return;
  if(e.target.className == "serbest"){
    e.target.classList = "secili";
  } else if (e.target.className == "secili"){
    e.target.classList = "serbest";
  } else if((e.target.className == "secilmis") && (tekcift%2 == 1)){
    e.target.className = "serbest"
  };
});

document.querySelector("#butonlar").addEventListener("click", function(e){
  if (!(e.target.localName=="span"))return;
  if (e.target.className == "satinal"){
    document.querySelectorAll(".secili").forEach(e => {
      e.className = "secilmis";
    });
    document.querySelector("#bunudeil").classList = "secili";
  } else if (e.target.className == "iadeet"){
    tekcift += 1;
    if (tekcift%2 == 1){
      e.target.style.background="red";
    } else {
      e.target.style.background="#2E2E2E";
    };
  };
});










////////////// dropdown menu //////////////////////

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options =dropdown.querySelectorAll(".menu li");
  const selected =dropdown.querySelector(".selected");

  select.addEventListener("click",() => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");  
    menu.classList.toggle("menu-open");
  });
  options.forEach(option => {
    option.addEventListener("click",() =>{
      selected.innerHTML = option.innerHTML;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate"); 
      menu.classList.remove("menu-open");
      options.forEach(option => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  })
});
