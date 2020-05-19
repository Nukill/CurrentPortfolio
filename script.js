const TypingStrings = ['Cześć! ', 'Na wstępie chciałbym się przedstawić. Nazywam się Dominik Bernacki, w tym roku kończę 21 lat i jestem absolwentem Technikum Informatycznego w Zespole Szkół Agrobiznesu w Człuchowie. Ukończyłem tę szkołę wraz z pomyślnie zaliczonym egzaminem dojrzałości oraz ze zdanymi kwalifikacjami E.12, E.13, E.14. Jestem pozytywnie nastawionym człowiekiem i częściej uśmiechniętym niż smutnym. Lubię inwestować czas w samorozwój i motywują mnie nowe wyzwania. Po ponad półrocznej przerwie chciałbym wrócić do tworzenia stron internetowych. Z uwagi, że sytuacja w Polsce spowodowana COVID-19 się "stabilizuje", to jest to aktualnie najlepszy moment by zacząć działać w tę stronę.']
var stringLength = TypingStrings[0].length + TypingStrings[1].length;

$i = 0;
$x = 0;
var typing = setInterval(function(){
        $('.typing-text p').html($('.typing-text p').text()+TypingStrings[$x][$i])
    $i++
    if($i == TypingStrings[0].length && $x == 0){
        $i = 0;
        $x = 1;
    }
    if($i == stringLength-TypingStrings[0].length){
        clearInterval(typing);
    }
},10,1)

$(window).scroll(function () {
    $offset = document.querySelector('.wrapper').offsetTop;
    $contactOffset = document.querySelector('.contact').offsetTop;
    if($(window).scrollTop() >= $offset-400) {
      $('.attachElement').addClass("onScrollAnim");
      $('.attachElement2').addClass("onScrollAnimMc");
    }
    if($(window).scrollTop() >= $contactOffset-400) {
        $('.swipe-anim div').addClass("contact-anim");
      }
    if($(window).scrollTop() >= 50){
        $('.nav').css({"position": "fixed", "background-color": "rgba(0, 0, 0, 1)", "z-index": "99", "width": "100%"});
        $('.nav-mobile').css({"position": "fixed", "z-index": "99"});
    
    }
    else{
        $('.nav').css({"position": "relative", "background-color": "rgba(0, 0, 0, 0)", "z-index": "99"});
        $('.nav-mobile').css({"position": "relative", "z-index": "99"});
    }
});

const abilities = [
    ['SCSS', 'SCSS', '3'],
    ['CSS', 'CSS', '4'],
    ['JQ', 'jQuery', '3'],
    ['JS', 'JavaScript', '4'],
    ['PHP', 'PHP', '4'],
    ['HTML5', 'HTML5', '5'],
]

var windowAlert = document.querySelector('.ability-window');
document.querySelectorAll('.ability-element').forEach(function(el){
    el.addEventListener('mouseover',function(){
        for(var y=0; y<abilities.length; y++){
            if(abilities[y][0] == el.id){
                document.querySelector('.ability-window .rate-ab span').innerHTML = '';
                document.querySelector('.ability-window .title-ab h1').innerHTML = abilities[y][1];
                for(var c=0; c<Number(abilities[y][2]); c++){
                    document.querySelector('.ability-window .rate-ab span').innerHTML = $('.ability-window .rate-ab span').text()+'&#9733';
                }
            }
        }
        windowAlert.style.display = "flex";
        var posX = event.pageX;
        var posY = event.pageY;
        windowAlert.style.left = posX-200 + 'px';
        windowAlert.style.top = posY-300 + 'px';
    })
    el.addEventListener('mouseleave',function(){
        windowAlert.style.display = "none";
    })
})

jQuery(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target);
  
      $('html, body').stop().animate( {
        'scrollTop': $target.offset().top-40
      }, 900, 'swing', function () {
        window.location.hash = target;
      } );
    } );
  } );

$click = 0;
$('.nav-mobile').click(function(){
    if($click == 0){
        $('.swipe-menu').addClass('swipe-menu-anim');
        $click = 1;
    }
    else{
        $('.swipe-menu').removeClass('swipe-menu-anim');
        $click = 0;
    }
})