function myFunction() {
    var totalPrice = $('#price').val(),
        gst1 = $('#gst').val(),
        cgst1 = parseInt(gst1),
        sgst1 = parseInt(gst1),
        cgst1 = cgst1/2,
        sgst1 = sgst1/2,
        price1 = parseInt(totalPrice),
    
        calculation = (price1*cgst1)/100 +(price1*sgst1)/100;
  
    document.getElementById("output").innerHTML = calculation;
}