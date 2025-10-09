let tekcift= 0;

document.querySelector("#koltuk").addEventListener("click" , function(e){
  if(!(e.target.localName == "button")) return;
  if((e.target.className == "serbest") && (!(tekcift%2 == 1))){
    e.target.classList = "secili";
    istatislik();
  } else if ((e.target.className == "secili") && (!(tekcift%2 == 1))){
    e.target.classList = "serbest";
    istatislik();
  } else if((e.target.className == "secilmis") && (tekcift%2 == 1)){
    e.target.className = "serbest";
    istatislik();
  };
});

document.querySelector("#butonlar").addEventListener("click", function(e){
  if (!(e.target.localName=="span"))return;
  if (e.target.className == "satinal"){
    document.querySelectorAll(".secili").forEach(e => {
      e.className = "secilmis";
    });
    document.querySelector("#secili").classList = "secili";
    istatislik();
  } else if (e.target.className == "iadeet"){
    tekcift += 1;
    if (tekcift%2 == 1){
      e.target.style.background="red";
    } else {
      e.target.style.background="#2E2E2E";
    };
  };
});

function istatislik(){
  
  let serbestSayisi = (document.querySelectorAll(".serbest").length - 1);
  let seciliSayisi = (document.querySelectorAll(".secili").length - 1);
  let secilmisSayisi = (document.querySelectorAll(".secilmis").length - 1);



  let serbestYuzde = (serbestSayisi / 40) * 100;
  let seciliYuzde = (seciliSayisi / 40) * 100;
  let secilmisYuzde = (secilmisSayisi / 40) * 100;
  
  document.querySelector("#serbest").innerHTML = `%${serbestYuzde.toFixed()}`;
  document.querySelector("#secili").innerHTML = `%${seciliYuzde.toFixed()}`;
  document.querySelector("#secilmis").innerHTML = `%${secilmisYuzde.toFixed()}`;

  if (seciliSayisi === 0){
    document.querySelector("#adet").innerHTML=1;
    document.querySelector("#yazı").innerHTML="adet bilet fiyatı";
    document.querySelector("#ücret").innerHTML=50;
  }else{
    document.querySelector("#adet").innerHTML=seciliSayisi;
    document.querySelector("#yazı").innerHTML="adet koltuk için hesaplanan ücret";
    document.querySelector("#ücret").innerHTML=seciliSayisi* 50;
  } 

};


istatislik();

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
