// got a function that helped focus in first in https://stackoverflow.com/questions/267615/focusing-first-control-in-the-form-using-jquery

$(function() {
    $("form:not(.filter) :input:visible:enabled:first").focus();
  });

$('#jobtitle').hide()

// function that worked was from https://stackoverflow.com/questions/23450695/jquery-hide-show-input-when-selected-option-is-equal-to

$("#title").change(function () {
    var selected_option = $('#title').val();
  
    if (selected_option === 'other') {
        $('#jobtitle').show()
    }
    
}

)

$("#design").change(function () {
    var selected_option2 = $('#design').val();
    var tshirt1 = $('#colors-js-puns').val("tomato")
    var tshirt2 = $('#colors-js-puns').val("steelblue")
    var tshirt3 = $('#colors-js-puns').val("dimgrey")
  
    if (selected_option2 === 'js puns') {
        $('.hidden4').hide()
        $('.hidden5').hide()
        $('.hidden6').hide()
        $('.hidden1').show()
        $('.hidden2').show()
        $('.hidden3').show()
    }
    else if (selected_option2 === 'heart js'){
        $('.hidden1').hide()
        $('.hidden2').hide()
        $('.hidden3').hide()
        $('.hidden4').show()
        $('.hidden5').show()
        $('.hidden6').show()

    }
    
}

)
//function from https://stackoverflow.com/questions/8423217/jquery-checkbox-checked-state-changed-event

// This set of functions do the same over the different subjects that the student can take.

$('.daytime1').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.daytime2").attr("disabled", true)
      $("input.daytime3").attr("disabled", true)
    }
    else{
        $("input.daytime2").removeAttr("disabled");
        $("input.daytime3").removeAttr("disabled");

    }

  });

  $('.daytime2').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.daytime1").attr("disabled", true)
      $("input.daytime3").attr("disabled", true)
    }
    else{
        $("input.daytime1").removeAttr("disabled");
        $("input.daytime3").removeAttr("disabled");

    }

  });

  $('.daytime3').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.daytime2").attr("disabled", true)
      $("input.daytime1").attr("disabled", true)
    }
    else{
        $("input.daytime2").removeAttr("disabled");
        $("input.daytime1").removeAttr("disabled");

    }

  });

  $('.evening1').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.evening2").attr("disabled", true)
      $("input.evening3").attr("disabled", true)
    }
    else{
        $("input.evening2").removeAttr("disabled");
        $("input.evening3").removeAttr("disabled");

    }

  });


  $('.evening2').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.evening1").attr("disabled", true)
      $("input.evening3").attr("disabled", true)
    }
    else{
        $("input.evening1").removeAttr("disabled");
        $("input.evening3").removeAttr("disabled");

    }

  });


  $('.evening3').click(function() {
    if ($(this).is(':checked')) {
     // $('.daytime2').hide()
      $("input.evening2").attr("disabled", true)
      $("input.evening1").attr("disabled", true)
    }
    else{
        $("input.evening2").removeAttr("disabled");
        $("input.evening1").removeAttr("disabled");

    }

  });


  