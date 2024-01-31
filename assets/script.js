// ! Tarih ve Saat
function showTimeDate() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var day = date.getDate();
    var monthBegin = date.getMonth();
    var year = date.getFullYear();
    var month = monthBegin + 1;

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minute + " ";
    var mineDate = day + "." + month + "." + year;


    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = mineDate;

    setTimeout(showTimeDate, 1000);
}

// ! Kullanıcı Girişi
function login() {
    var password = document.getElementById("inputPass").value;
    if (password === "admin") {
        window.location.href = "../pages/desktop.html";
    } else {
        document.getElementById("loginError").innerText = "Şifre Hatalı! Tekrar Deneyiniz.";
        loginError.style.display = "block";
    }
}

//! Windows Başlatma 

function startWindows() {
    document.getElementById("powerButton").style.display = "none";
    document.getElementById("barprogress").style.display = "block";
    document.getElementById("barprog").style.display = "block";

    var progressBar = document.getElementById("progressBar");
    var progressValue = 0;

    function progressBarUpdate() {
        if (progressValue < 100) {
            progressValue += 25;
            progressBar.style.width = progressValue + "%";
            progressBar.innerHTML = progressValue + " %";
            progressBar.setAttribute("aria-valuenow", progressValue);
        } else {
            clearInterval(progressInterval);
            window.location.href = "./pages/login.html";
        }
    }

    progressBar.style.display = "block";
    var progressInterval = setInterval(progressBarUpdate, 500);
}

//! Windows Kapatma


function shutDown() {
    document.getElementById('shutD').style.display = 'block';
    setTimeout(function () {
        window.location.href = "../index.html";
    }, 2000);
};
