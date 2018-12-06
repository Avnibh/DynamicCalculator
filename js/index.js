function myFunction() {
    var totalPrice = $('#price').val(),
        gst1 = $('#gst').val(),
        cgst1 = parseInt(gst1),
        sgst1 = parseInt(gst1),
        cgst1 = cgst1/2,
        sgst1 = sgst1/2,
        price1 = parseInt(totalPrice),
        cgst1 = (price1*cgst1)/100
        sgst1 = (price1*sgst1)/100
        igst =  cgst1 + sgst1,
        allTotal = price1 + igst;
  

    document.getElementById("output1").innerHTML = cgst1;
    document.getElementById("output2").innerHTML = sgst1;
    document.getElementById("output3").innerHTML = igst;
    document.getElementById("output4").innerHTML = allTotal;
}

$('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
    $('.dropdown-el').removeClass('expanded');
});