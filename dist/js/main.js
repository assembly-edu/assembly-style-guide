$(document).ready(function() {
  $('#tabs').assemblyTabs();

  $('#modal').assemblyModal();
  $('#modal2').assemblyModal();

  $('#modalButton').click(function(){
    $('#modal').assemblyModal('show');
  });
  $('#modalButton2').click(function(){
    $('#modal2').assemblyModal('show');
  });

  $('#modal .assembly-modal-close').click(function(){
    $('#modal').assemblyModal('hide');
  });
  $('#modal2 .assembly-modal-close').click(function(){
    $('#modal2').assemblyModal('hide');
  });
});