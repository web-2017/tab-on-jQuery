$('.link').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.link__list'),
        text = $('.text'),
        index = item.index();

        text.eq(index)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
});