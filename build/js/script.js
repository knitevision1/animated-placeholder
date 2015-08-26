$(document).ready(function() {
    function placeholderAnimation() {
    	var $placeholder = $('input[placeholder]');

        $placeholder.each(function () {
    	    $(this).wrap('<label class="placeholder" data-placeholder="' + this.placeholder + '">').attr('placeholder', '');
    	}).on('keyup', function () {
    	    $(this).parent().toggleClass('hidden', this.value !== '');
    	});
    }

    placeholderAnimation();
});
