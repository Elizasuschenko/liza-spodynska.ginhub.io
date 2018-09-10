function check() {
	var name = $('#name').val();
    var email = $('#email').val();
    var pasword = $('#pasword').val();

    if(name.length != 0 && email.length != 0 && pasword.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

$('.pink button').click(function() {
	$('.pink').css('display','none').next().slideToggle(300).css('display','flex')
})
$('.orange label').click(function() {
	$('.orange button').fadeIn();
	$('.orange-answer').fadeOut().slideToggle(300).css('display','flex')
})
$('.orange button').click(function() {
	$('.orange').fadeOut().css('display','none').next().slideToggle(300).css('display','flex')
	$('.orange-answer').fadeOut();
})
$('.yellow .first-label').click(function() {
	$('.yellow button').fadeIn();
	$('.yellow-answer').fadeOut(300);
	$('.yellow-answer-one').slideToggle(400).css('display','flex')
})
$('.yellow .two-label').click(function() {
	$('.yellow-answer').fadeOut(300);
	$('.yellow button').fadeIn();
	$('.yellow-answer-two').slideToggle(400).css('display','flex')
})
$('.yellow button').click(function() {
	$('.yellow-answer').fadeOut();
	$('.yellow').css('display','none').next().slideToggle(300).css('display','flex');
})

