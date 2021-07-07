

var counterFiles = 2;
function moreFiles(){
  $('.js-new-file').off('change');
  $('.js-new-file').on('change',function () {

  var inputer = $(this);

  if ($(this)[0].files && $(this)[0].files[0]) {
    counterFiles++;
    inputer.closest('.custom-file').addClass('selected');
    
    var white = '#fff';
    if (inputer.parents('.brief__form').length > 0) white = '#000';

    var html = '<div class="custom-file">\n' +
      '<input type="file" name="file[]" id="file'+counterFiles+'" class="inputfile js-new-file" />\n' +
      '<label for="file'+counterFiles+'" class="btn">\n' +
      '<svg version="1.1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 512 512"  xml:space="preserve">\n' +
      '<g>\n' +
      '<g>\n' +
      '<path fill="'+white+'" d="M446.661,37.298c-49.731-49.731-130.641-49.731-180.372,0L76.378,227.208c-5.861,5.861-5.861,15.356,0,21.217\n' +
      'c5.861,5.861,15.356,5.861,21.217,0l189.91-189.91c36.865-36.836,101.073-36.836,137.938,0c38.023,38.023,38.023,99.901,0,137.924\n' +
      'l-265.184,268.17c-22.682,22.682-62.2,22.682-84.881,0c-23.4-23.4-23.4-61.467,0-84.867l254.576-257.577\n' +
      'c8.498-8.498,23.326-8.498,31.825,0c8.776,8.776,8.776,23.063,0,31.84L117.826,400.958c-5.06,5.06-5.06,16.156,0,21.217\n' +
      'c5.861,5.861,15.356,5.861,21.217,0l243.952-246.954c20.485-20.485,20.485-53.789,0-74.273c-19.839-19.839-54.449-19.81-74.258,0\n' +
      'L54.161,358.524c-34.826,34.826-34.826,92.474,0,127.301C71.173,502.837,93.781,512,117.825,512s46.654-9.163,63.651-26.174\n' +
      'L446.66,217.655C496.391,167.924,496.391,87.028,446.661,37.298z"/>\n' +
      '</g>\n' +
      '</g>\n' +
      '</svg>\n' +
      '<span>Прикрепить файл</span>\n' +
      '</label>\n' +
      '<div class="js-remove-file"></div>\n' +
      '</div>';
      
    inputer.closest('.custom-files').prepend(html);
    initFiles()

    $('.js-remove-file').on('click', function (event) {
      event.preventDefault();
      $(this).closest('.custom-file').remove();
    });

    moreFiles();

    $('.custom-file.selected label').on('click', function (event) {
      event.preventDefault();
    });
  }


  });
  initFiles();
}

function initFiles() {
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}