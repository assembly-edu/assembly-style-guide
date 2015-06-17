$(document).ready(function() {
  $('#tabs').assemblyTabs();

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
});