const endpoint = "http://192.168.133.172";

/* SET LAMPU DAPUR */
function getDapurLed() {
    fetch(endpoint + "/Dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDapur.style.backgroundColor = "red";
            dapurLedImage.src = "./assets/lamp-on.png";
        } else {
            ledDapur.style.backgroundColor = "blue";
            dapurLedImage.src = "./assets/lamp-of.png";
        }
    });
}

function setDapurLed() {
    fetch(endpoint + "/Dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}


/* SET LAMPU TERAS */
function getTerasLed() {
    fetch(endpoint + "/Teras", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledTeras.style.backgroundColor = "red";
            terasLedImage.src = "./assets/lamp-on.png";
        } else {
            ledTeras.style.backgroundColor = "blue";
            terasLedImage.src = "./assets/lamp-of.png";
        }
    });
}

function setTerasLed() {
    fetch(endpoint + "/Teras", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}


/* SET LAMPU KAMAR */
function getKamarLed() {
    fetch(endpoint + "/Kamar", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledKamar.style.backgroundColor = "red";
            kamarLedImage.src = "./assets/lamp-on.png";
        } else {
            ledKamar.style.backgroundColor = "blue";
            kamarLedImage.src = "./assets/lamp-of.png";
        }
    });
}

function setKamarLed() {
    fetch(endpoint + "/Kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setTamuLed() {
    ledTamu.style.backgroundColor = "red";
    tamuLedImage.src = "./assets/lamp-on.png";
}

function setToiletLed() {
    ledToilet.style.backgroundColor = "red";
    toiletLedImage.src = "./assets/lamp-on.png";
}

function setKamartidurLed() {
    kamarTidur.style.backgroundColor = "red";
    kamartidurLedImage.src = "./assets/lamp-on.png";
}


/*function setFanone() {
    fanone.style.backgroundColor = "red";
    FanImageone.src = "./assets/fan-on.png";
}

function setFantwo() {
    fantwo.style.backgroundColor = "red";
    FanImagetwo.src = "./assets/fan-on.png";
}*/



function setValveOne() {
    valveOne.style.backgroundColor = "red";
    valveoneImage.src = "./assets/valve-on.png";
}

function setValveTwo() {
    valveTwo.style.backgroundColor = "red";
    valvetwoImage.src = "./assets/valve-on.png";
}

function setValveThree() {
    valveThree.style.backgroundColor = "red";
    valvethreeImage.src = "./assets/valve-on.png";
}

function setValveFour() {
    valveFour.style.backgroundColor = "red";
    valvefourImage.src = "./assets/valve-on.png";
}


function setMesinCuciOne() {
    window.location.href = "wachingmachineone.html";
}

function setMesinCuciTwo() {
    window.location.href = "wachingmachinetwo.html";
}


function setWashingmachineon() {
    mesincucioneControl.style.backgroundColor = "red";
    washingMachineImage.src = "./assets/mesincuci-on.png";
}

function setWashingmachintwo() {
    mesincucitwoControl.style.backgroundColor = "red";
    washingMachineImage.src = "./assets/mesincuci-on.png";
}

function setFanone() {
    window.location.href = "fanone.html";
}

// Fungsi untuk mengarahkan ke halaman fantwo.html
function setFantwo() {
    window.location.href = "fantwo.html";
}

function setFanOne() {
    fanControl.style.backgroundColor = "red";
    fanOneImage.src = "./assets/fan-on.png";
}

function setFanTwo() {
    fanControl.style.backgroundColor = "red";
    fanTwoImage.src = "./assets/fan-on.png";
}

function speedSatu() {
    Speedsatu.style.backgroundColor = "red";
    SpeedSatu.src = "./assets/satu-on.png";
}

function speedDua() {
    Speeddua.style.backgroundColor = "red";
    SpeedDua.src = "./assets/dua-on.png";
}

function speedTiga() {
    Speedtiga.style.backgroundColor = "red";
    SpeedTiga.src = "./assets/dua-on.png";
}

getDapurLed();
getTerasLed();
getKamarLed();