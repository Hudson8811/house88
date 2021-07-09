
moreFiles();
var counterFiles = 2;
function moreFiles(){
  $('.js-new-file').off('change');
  $('.js-new-file').on('change',function () {

  var inputer = $(this);

  if ($(this)[0].files && $(this)[0].files[0]) {
    counterFiles++;
    inputer.closest('.file-button').addClass('file-button--selected');
    
   

    var html = '<div class="brief__form-file file-button custom-file">\n' +
      '<input type="file" name="file[]" id="customFileBrief' + counterFiles + '" class="visually-hidden inputfile js-new-file" />\n' +
      '<label for="customFileBrief' + counterFiles + '" class="btn">\n' +
      '<span class="file-button__icon">\n' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-96 0 512 512"><path d="M160 512C71.766 512 0 440.234 0 352V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v224c0 64.684 52.629 117.332 117.332 117.332S277.332 416.684 277.332 352V117.332c0-41.172-33.492-74.664-74.664-74.664-41.176 0-74.668 33.492-74.668 74.664v213.336c0 17.64 14.355 32 32 32s32-14.36 32-32V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v202.668c0 41.172-33.496 74.664-74.668 74.664s-74.668-33.492-74.668-74.664V117.332C85.332 52.652 137.961 0 202.668 0 267.371 0 320 52.652 320 117.332V352c0 88.234-71.766 160-160 160zm0 0"/></svg>\n' +
      '</span>\n' +
      '<span class="file-button__text">Прикрепить файлы</span>\n' +
      '</label>\n' +
      '<button class="file-button__remove js-remove-file" type="button">\n' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M35.4 32l19.9-19.9c1-1 1-2.4 0-3.4s-2.4-1-3.4 0L32 28.6 12 8.8c-.9-1-2.4-1-3.3 0s-1 2.4 0 3.4L28.6 32 8.7 51.9c-1 1-1 2.4 0 3.4.5.4 1 .7 1.7.7s1.2-.2 1.7-.7l20-19.9 20 19.8c.5.4 1.2.7 1.7.7s1.2-.2 1.7-.7c1-1 1-2.4 0-3.4L35.4 32z"/></svg>\n' +
      '</button>\n' +
      '</div>';

      
      
    inputer.closest('.brief__form-custom').prepend(html);
    initFiles()

    $('.js-remove-file').on('click', function (event) {
      event.preventDefault();
      $(this).closest('.file-button').remove();
    });

    moreFiles();

    $('.file-button--selected label').on('click', function (event) {
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
                label.querySelector( 'span.file-button__text' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}