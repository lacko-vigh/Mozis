var feliratkozas = function () {
    var xhr = new XMLHttpRequest();
    var emailInput = document.getElementById('email');
    var adat = document.getElementById('adatkezelesiInput');

    if (emailInput.value == "") {
        alert('Kérlek add meg az e-mail címed!');
        return;
    }
    if (adat.checked == false) {
        alert("Kérlek, fogadd el az adatvédelmi szabályzatot.")
        return;
    }
    ///// onreadystatechange - állapotváltozás
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) { /// 0 = nincs 1 = kérés beírva 2 = kérés elküldve 3 = kérés feldolgozva 4 = kérés befejezve
        emailInput.value = "";    
        alert("Köszönjük a feliratkozást!");
        }
      };
      xhr.open("POST", "http://localhost:8080/api/hirlevel");
      
      xhr.send(JSON.stringify(
        {
            email: emailInput.value,
        })        
        );
};

gomb = document.getElementById("back-to-top");
gomb.style.display = "none";

window.onscroll = function() {
    gorgetes()
};
function gorgetes() {
    if (document.documentElement.scrollTop >= 300) {
        gomb.style.display = "block";
    }
    else {
        gomb.style.display = "none";
    }
}
