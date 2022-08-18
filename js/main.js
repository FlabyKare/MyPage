
// close
const fade_before = $('.popup_fade_before');
function before_remove() {
    fade_before.removeClass('active_popup');
}
const fade_before_add = $('.popup_fade_before');
function before_add() {
    fade_before_add.addClass('active_popup');
}

function active_remove() {
    $('.popup-fade').removeClass('active_popup');
}


function active_add() {
    $('.popup-fade').addClass('active_popup');
}

$(document).ready(function($){

    $('.popup-open').click(function() {
        active_add();
        before_add();
    });	

    $('.close_popup').click(function() {
        active_remove();
        before_remove();
    });	

    $('.popup_fade_before').click(function() {
        active_remove();
        before_remove();
    });	
});


/*
$(document).ready(function($) {
    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });	
    
	
 
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();					
        }
    });
});
*/
//btn1

function active_add1() {
    $('.popup-btn1').addClass('active_popup');
}
function active_remove1() {
    $('.popup-btn1').removeClass('active_popup');
}


$(document).ready(function($) {
    $('.card_btn1').click(function() {
        active_add1();
        before_add();
    });	

    $('.close_popup').click(function() {
        active_remove1();
        before_remove();
    });	

    $('.popup_fade_before').click(function() {
        active_remove1();
        before_remove();
    });	
});





//btn2


function active_remove2() {
    $('.popup-btn2').removeClass('active_popup');
}
function active_add2() {
    $('.popup-btn2').addClass('active_popup');
}
$(document).ready(function($) {
    $('.card_btn2').click(function() {
        active_add2();
        before_add();
    });	

    $('.close_popup').click(function() {
        active_remove2();
        before_remove();
    });	

    $('.popup_fade_before').click(function() {
        active_remove2();
        before_remove();
    });	
});





//btn3

function active_remove3() {
    $('.popup-btn3').removeClass('active_popup');
}
function active_add3() {
    $('.popup-btn3').addClass('active_popup');
}


$(document).ready(function($) {
    $('.card_btn3').click(function() {
        active_add3();
        before_add();
    });	

    $('.close_popup').click(function() {
        active_remove3();
        before_remove();
    });	

    $('.popup_fade_before').click(function() {
        active_remove3();
        before_remove();
    });	
});






//portfolio_links


$(document).ready(function($){
    $('.my_work_1').click(function(){
        window.open('https://flabykare.github.io/Flaby/', '_blank');
    });
    $('.my_work_2').click(function(){
        window.open('https://flabykare.github.io/ItalainFood/', '_blank');
    });
    $('.my_work_3').click(function(){
        window.open('https://flabykare.github.io/Mogo/', '_blank');
    });
    $('.my_work_4').click(function(){
        window.open('https://flabykare.github.io/SmartHome/', '_blank');
    });
    $('.my_work_5').click(function(){
        window.open('https://flabykare.github.io/WayUp/', '_blank');
    });
        $('.my_work_6').click(function(){
        window.open('https://flabykare.github.io/Airplane/', '_blank');
    });
        $('.my_work_7').click(function(){
        window.open('https://flabykare.github.io/Hotel/', '_blank');
    });
    $('.my_work_8').click(function(){
        window.open('https://flabykare.github.io/Metastorm/', '_blank');
    });
    
});



// Плавная прогрузка Элементов


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  //elemen1

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show1');
      }
    });
  }
  
  let options1 = {
    threshold: [0.5] };
  let observer1 = new IntersectionObserver(onEntry, options1);
  let elements1 = document.querySelectorAll('.element-animation1');
  
  for (let elm of elements1) {
    observer1.observe(elm);
  }


  //elemen2

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show2');
      }
    });
  }
  
  let options2 = {
    threshold: [0.5] };
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.element-animation2');
  
  for (let elm of elements2) {
    observer2.observe(elm);
  }

  

  //elemen3

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show3');
      }
    });
  }
  
  let options3 = {
    threshold: [0.5] };
  let observer3 = new IntersectionObserver(onEntry, options3);
  let elements3 = document.querySelectorAll('.element-animation3');
  
  for (let elm of elements3) {
    observer3.observe(elm);
  }












// Scrollbar speed








 // маска ввода телефона
  
 window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 17)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
  });
  
  });
  
  
  
  
  // Отправка сообщений на почту
  
  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
      window.location.href = 'pages/thanks.html';

        setTimeout(function() {
            // Done Functions
            th.window.location.href = '../index.html';
        }, 9000);
    });
    return false;
});

