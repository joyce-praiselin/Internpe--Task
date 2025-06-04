let header = document.querySelector('header');

window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow',window.scrollY > 0);
}


)


  function goToPayment(name, price, img) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImage", img);
    window.location.href = "payment.html";
  }

