$(window).on('load', () => {
  const items = document.querySelectorAll('.__js_create-bg');

  //items.attr('data-content', item.text())  
  items.forEach(it => {
    const content = it.innerHTML;
    it.dataset.content = content;
    magic(it);
  });

  $(window).on('resize', () => {
    if ($(window).width() <= 768) {
      items.forEach(it => {
        magic(it);
      });
    } else {
      /*items.forEach(it => {
        it.innerHTML = it.dataset.content;
      });*/
    }
  });

  
		function magic(el) {
			let tmp = document.createElement('p');
			tmp = el.cloneNode(true);
			tmp.style.width = el.offsetWidth + 'px';
			tmp.style.position = 'absolute';
			tmp.style.left = '-2000px';
			tmp.innerHTML = 'foo';
			document.body.appendChild(tmp);

			let content = el.textContent.split(''),
					oneLineHeight = tmp.scrollHeight,
					lines = [],
					i = 0;

			while (i < content.length) {
				let line = tmp.innerHTML = '';

				while (i < content.length && tmp.scrollHeight <= oneLineHeight) {
					tmp.innerHTML = line += content[i++];
				}

				let lineEndIndex = i === content.length ? i : line.lastIndexOf(' ') + 1;
				lines.push( content.splice(0, lineEndIndex).join('') );
				i = 0;
			}
			tmp.remove();
			el.innerHTML = lines.map(function(line) {
		
				return el.hasAttribute('data-wrapper-class') ? '<span class="' + el.dataset.wrapperClass + '">' + line + '</span>' : '<span>' + line + '</span>';

			}).join('');
		}



})