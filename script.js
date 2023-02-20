
document.getElementById("filepicker").addEventListener("change", () => {
    let output = document.getElementById("listing");

    for (const file of event.target.files) {
        let item = document.createElement("li");
        item.textContent = file.webkitRelativePath;
        output.appendChild(item);
        loadXMLDoc(file.name);
    };
    
}, false);



function loadXMLDoc(name) {
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };
     
    // employee.xml is the external xml file            
    xmlhttp.open("GET", name, true);
    xmlhttp.send();
}

function empDetails(xml) {
    let i;   
    let xmlDoc = xml.responseXML;
    let table = document.getElementById("id").innerHTML;
    
    //Se extrae los datos de la factura
    let x1 = xmlDoc.getElementsByTagName("cfdi:Comprobante");
    let x2 = xmlDoc.getElementsByTagName("cfdi:Emisor");
    let x3 = xmlDoc.getElementsByTagName("cfdi:Traslado");
    


    //Se extrae los detalles de la factura
    let x = xmlDoc.getElementsByTagName("cfdi:Concepto");  
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x1[0].getAttribute("Serie")+ " " +
            x1[0].getAttribute("Folio")+ "</td><td>" +
            x1[0].getAttribute("Fecha")+ "</td><td>" +
            x2[0].getAttribute("Nombre")+ "</td><td>" +
            x2[0].getAttribute("Rfc")+ "</td><td>" +
            x1[0].getAttribute("TipoDeComprobante")+ "</td><td>" +                                       
            x[i].getAttribute("Descripcion")+ "</td><td>" +
            x[i].getAttribute("Unidad") + "</td><td>" +
            x[i].getAttribute("ClaveUnidad") + "</td><td>" +
            x[i].getAttribute("Cantidad") + "</td><td>" +
            x[i].getAttribute("NoIdentificacion") + "</td><td>" +
            x[i].getAttribute("ClaveProdServ") + "</td><td>" +
            x[i].getAttribute("ValorUnitario") + "</td><td>" +
            x[i].getAttribute("Importe") + "</td><td>" +
            x3[0].getAttribute("Importe") + "</td></tr>";
            

    }
                        
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}

