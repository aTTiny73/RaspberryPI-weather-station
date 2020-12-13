function loadAllData() {
    var table = document.getElementById("dataTable");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data)
        loadTable(data);
      }
    };
    xhttp.open("GET", "http://localhost:8090/getReadings", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }
setInterval(loadAllData,5000);  

  function loadTable(data){
    var table = document.getElementById("dataTable");
    for(var i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }
        for(var i = 0;i < data.length;i++){
            
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            
           cell1.innerHTML = data[i].id;
           cell2.innerHTML = data[i].temperature;
           cell3.innerHTML = data[i].pressure;
           cell4.innerHTML = data[i].altitude;
           cell5.innerHTML = data[i].time; 
         }
    
}

function postData(){
    var temp = document.getElementById("tempInput").value;
    var pressure = document.getElementById("pressureInput").value;
    var Altitude = document.getElementById("AltitudeInput").value;
    if(temp.length == 0 || pressure.length == 0 || Altitude.length == 0){
      alert("Please enter all required data.")
    }
    else{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       loadAllData()
      }
    };
    xhttp.open("POST", "http://localhost:8090/postReading", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    let data = 
        {
        temperature:temp,
        pressure:pressure,
        altitude:Altitude
        }
    var str = JSON.stringify(data)
    console.log(str)
    xhttp.send(str);
 }
}

function updateData(){
    var id = document.getElementById("idInput").value;
    var temp = document.getElementById("tempInput").value;
    var pressure = document.getElementById("pressureInput").value;
    var Altitude = document.getElementById("AltitudeInput").value;
    if(id.length == 0 || temp.length == 0 || pressure.length == 0 || Altitude.length == 0){
      alert("Please enter all required data.")
    }
    else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       loadAllData()
      }
    };
    let data = 
        {
        id: id,
        temperature: temp,
        pressure: pressure,
        altitude: Altitude
        }
        var str = JSON.stringify(data)
    console.log(str)
    xhttp.open("PUT", "http://localhost:8090/updateReading/"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(str);
 }
}
function deleteData() {
    var id = document.getElementById("input1").value;
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       loadAllData()
      }
    };
    console.log(id)
    xhttp.open("DELETE", "http://localhost:8090/deleteReading/"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }

  function turnOnLed() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        alert("Raspberry pi LED state: " + data.state);
      }
    };
    xhttp.open("GET", "http://192.168.0.18:8090/toggleLed", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }