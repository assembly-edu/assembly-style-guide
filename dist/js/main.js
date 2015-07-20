function onScroll(event){
  var scrollPos = $(window).scrollTop();
  $('#sidebar a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.outerHeight() > scrollPos) {
      $('#sidebar li').removeClass("active");
      currLink.closest('li').addClass("active");
    }
  });
}

$(document).ready(function() {
  $('#assembly-tabs').assemblyTabs();

  $('#modal').assemblyModal();
  $('#modal2').assemblyModal();
  $('#modal3').assemblyModal();

  $('#modalButton').click(function(){
    $('#modal').assemblyModal('show');
  });
  $('#modalButton2').click(function(){
    $('#modal2').assemblyModal('show');
  });
  $('#modalButton3').click(function(){
    $('#modal3').assemblyModal('show');
  });

  $('#sidebar a').click(function(){
    $('#sidebar li').removeClass('active')
    $(this).closest('li').addClass('active');
  });

  $("#sidebar").stick_in_parent({
    bottoming: false,
    offset_top: 20
  });

  $(document).on("scroll", onScroll);
});