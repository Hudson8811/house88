const openBriefBtn = $('.__js_open-brief');
const areas = $('area');
const helpChoiceChexbox = $('#checkboxHelpChoice');
const membersCheckboxes = $('.brief__member-grid input[type="checkbox"]');
const membersButtons = $('.booking__card-button');
const memberModClass = 'hero__member--hover';
const closeBriefBtn = $('.breif__close');


areas.on('click', function (evt) {
  evt.preventDefault();
  const member = $(this).attr('href');
  openBrief(member);
});

areas.on('mouseover', function() {
  const member = $(this).attr('href').toLowerCase();

  $('.hero__member--' + member).addClass(memberModClass).siblings().removeClass(memberModClass);
});

areas.on('mouseout', function() {
  const member = $(this).attr('href').toLowerCase();
  $('.hero__member--' + member).removeClass(memberModClass)
})

openBriefBtn.on('click', function() {
  openBrief()
});

membersButtons.on('click', function() {
  const member = $(this).attr('data-member');
  openBrief(member);
});

function openBrief(member) {
  $.fancybox.open({
    src: '#brief',
    type: 'inline',
    touch: false,
    //modal: true,
    smallBtn: false,
    toolbar: false,
    beforeShow: function () {
      $("body>*:not(.fancybox-container):not(#brief)").addClass("blur");
            
      $('.brief__close').on('click', function() {
        $.fancybox.close();
      })
    },
    afterClose: function () {
      $("body>*:not(.fancybox-container):not(#brief)").removeClass("blur");
    }
  });
  clearMembers();
  if (member) {
    //$('#brief').find('#checkboxHelpChoice').attr('disabled', true);
    $('#brief').find('#checkbox' + member).prop('checked', true);
  }
}

function clearMembers() {
  membersCheckboxes.prop('checked', false);
}
/*
membersCheckboxes.on('change', function() {
  
  helpChoiceChexbox.attr({'checked': false, 'disabled': true});
});

helpChoiceChexbox.on('change', function() {
  membersCheckboxes.attr({'checked': false, 'disabled': true});
});*/
