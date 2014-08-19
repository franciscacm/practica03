//JavaScript
	
$(document).ready(function(e){	// esperar que el documento este listo
  $('#principal').height($('#page').height()); //calcula la altura del dispositivo con relacion a page
	document.addEventListener("deviceready",function(){ // espera que el disposivo este listo
	audio=windows.plugins,LowLatencyAudio; // se manda a traer el contructuror de audio y se le asigna a la variable audio
	audio.preloadFX('do','audio/DO.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('re','audio/RE.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('mi','audio/MI.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('fa','audio/FA.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('sol','audio/SOL.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('la','audio/LA.mp3', function(){},
	                function(e){alert('Error '+e);});
	audio.preloadFX('si','audio/SI.mp3', function(){},
	                function(e){alert('Error '+e);});
	$('.nota').bind('touchstart', function(){
	   $(this).addClass('tocada');
	   audio.play($(this).attr('id'));	// toca la nota invocada por this 
		
	}).bind('touchend', function(){
		$(this).removeClass('tocada'); 
            
        });
					
	},false); //deviceready
});//ready