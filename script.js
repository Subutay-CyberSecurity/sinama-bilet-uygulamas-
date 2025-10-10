let tekcift= 0;

// Add event listener to all seat containers
document.querySelectorAll(".koltuk").forEach(container => {
  container.addEventListener("click", function(e){
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
});

document.querySelector("#butonlar").addEventListener("click", function(e){
  if (!(e.target.localName=="span"))return;
  if (e.target.className == "satinal"){
    const seatAreas = document.querySelectorAll('.koltuk');
    for (let area of seatAreas) {
      if (window.getComputedStyle(area).display !== 'none') {
        area.querySelectorAll(".secili").forEach(seat => {
          seat.className = "secilmis";
        });
        break;
      }
    }
    document.querySelector("#secili").classList = "secili";
    istatislik();
  } else if (e.target.className == "iadeet"){
    tekcift += 1;
    if (tekcift%2 == 1){
      e.target.style.background="red";
      e.target.style.border="2px solid transparent";
    } else {
      e.target.style.background="";
      e.target.style.border="";
    };
  };
});

function istatislik(){
  let currentSeatArea = null;
  
  const seatAreas = document.querySelectorAll('.koltuk');
  for (let area of seatAreas) {
    if (window.getComputedStyle(area).display !== 'none') {
      currentSeatArea = area;
      break;
    }
  }
  
  let serbestSayisi = 0;
  let seciliSayisi = 0;
  let secilmisSayisi = 0;
  
  if (currentSeatArea) {
    serbestSayisi = currentSeatArea.querySelectorAll(".serbest").length;
    seciliSayisi = currentSeatArea.querySelectorAll(".secili").length;
    secilmisSayisi = currentSeatArea.querySelectorAll(".secilmis").length;
  }
  
  let totalSecilmisSayisi = document.querySelectorAll(".secilmis").length;

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


  if (totalSecilmisSayisi === 0){
    document.querySelector("#toplamadet").innerHTML="";
    document.querySelector("#toplamyazı").innerHTML="Henüz hiç koltuk satmandınız";
    document.querySelector("#toplamücret").innerHTML="";
    document.querySelector("#tldir").style.display="none";
  }else{
    document.querySelector("#toplamadet").innerHTML=totalSecilmisSayisi;
    document.querySelector("#toplamyazı").innerHTML="adet koltuk satıldı toplam kazanç";
    document.querySelector("#toplamücret").innerHTML=totalSecilmisSayisi* 50;
    document.querySelector("#tldir").style.display="block";
  }; 
 };

function hangifilm(){
  let activeId = document.querySelector(".active").id;
  
  document.querySelectorAll('.koltuk').forEach(area => {
    area.style.display = "none";
  });
  
  if (activeId == "film1"){
    document.getElementById("koltuk1").style.display = "flex";
    document.getElementById("perde").innerHTML = "Film 1";
  } else if (activeId == "film2"){
    document.getElementById("koltuk2").style.display = "flex";
    document.getElementById("perde").innerHTML = "Film 2";
  } else if (activeId == "film3"){
    document.getElementById("koltuk3").style.display = "flex";
    document.getElementById("perde").innerHTML = "Film 3";
  };
  
  istatislik();
};

hangifilm();
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
      hangifilm(); // Call hangifilm function to show the correct seats
    });
  })
});
