$(document).ready(function() {
  $('#tabs').assemblyTabs();
  $('#modal').assemblyModal();

  $('#modalButton').click(function(){
    $('#modal').assemblyModal('show');
  });
  $('#modalButton2').click(function(){
    $('#modal2').assemblyModal('show');
  });

  $('#modal').click(function(){
    $('#modal').assemblyModal('hide');
  });
  $('#modal2').click(function(){
    $('#modal2').assemblyModal('hide');
  });
});