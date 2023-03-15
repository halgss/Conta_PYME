
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
    let x3 = xmlDoc.getElementsByTagName("cfdi:Impuestos");
    


    //Se extrae los detalles de la factura
    
    for (i = 0; i < x1.length; i++) {
        table += "<tr><td>" +
            x1[0].getAttribute("Serie")+ " " + //factura
            x1[0].getAttribute("Folio")+ "</td><td>" + //factura
            x1[0].getAttribute("Fecha")+ "</td><td>" + //fecha
            x2[0].getAttribute("Rfc")+ "</td><td>" + //RFC del emisor
            x2[0].getAttribute("Nombre")+ "</td><td>" + //Nombre del emisor
            x1[0].getAttribute("TipoDeComprobante")+ "</td><td>" + //Tipo de comprobante                                      
            x1[0].getAttribute("SubTotal")+ "</td><td>" + //SubTotal
            x1[0].getAttribute("Descuento") + "</td><td>" + //Descuento
            x3[0].getAttribute("TotalImpuestosTrasladados") + "</td><td>" + //Impuestos Trasladados
            x1[0].getAttribute("Total") + "</td><td>" +  //Total
            x1[0].getAttribute("FormaPago") + "</td><td>" + //Forma de pago
            x1[0].getAttribute("MetodoPago") + "</td></tr>"; //Método de pago
            
            
            
            //<th>Factura</th>
            //<th>Fecha</th>
            //<th>RFC Emisor</th>
            //<th>Nombre Emisor</th>
            //<th>Tipo De Comprobante</th>
            //<th>Subtotal</th>
            //<th>Descuento</th>
            //<th>Impuestos Trasladados</th>
            //<th>Total</th>
            //<th>Forma de pago</th>
            //<th>Método de pago</th>
            

    }
                        
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}

