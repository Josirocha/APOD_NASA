$('#botao').click(function(){
  const escolhaSeuDia = $('#dia').val()
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=BeNcFoNlBPvcye3I9TkAaIfRQEZrbJMcqu4THS90&date=${escolhaSeuDia}`,
    type: 'GET',
    success: function(resposta) {
      $('#titulo').text(resposta.title); 
      $('#texto').text(resposta.explanation);
      if (resposta.media_type == 'image') {
        $('#imagem').attr('src', resposta.url);
        $('#video').hide();
        $('#imagem').show();
      } else {
        $('#video').attr('src', resposta.url);
        $('#video').show()
        $('#imagem').hide();
      }
    }
  })
})