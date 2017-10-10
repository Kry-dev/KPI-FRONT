var cognosMenu = function() {
    // Congos menu start
    function swapMenuItems(item) {
        var outAnimation = item.css('transform');
        var outAnamation_webkit = item.css('-webkit-transform');
        var centeredItem = $('.item-cented');

        centeredItem.css('transform', outAnimation);
        centeredItem.css('-webkit-transform', outAnamation_webkit);
        centeredItem.removeClass('item-cented');
        item.css('transform', 'translate(0) scale(1)');
        item.css('-webkit-transform', 'translate(0) scale(1)');
        item.addClass(' item-cented');

        $('a[data-link], a[data-link]').unbind('click');
        $('.congos-menu-item > a, .header-bottom-r ul li > a').unbind('click');


        setTimeout(function() {
            console.log('animation end');
            $('a[data-link], a[data-link]').bind('click', cognosItemClick);
            $('.congos-menu-item > a, .header-bottom-r ul li > a').bind('click', cognosItemSpanClick);
        }, 1000);
    }

    $('a[data-link], a[data-link]').bind('click', cognosItemClick);
    $('.congos-menu-item > a, .header-bottom-r ul li > a').bind('click', cognosItemSpanClick);

    function cognosItemClick() {
        var itemToSwap = $('.congos-menu-item a[data-link="' + $(this).attr('data-link') + '"]');
        swapMenuItems(itemToSwap.parent());
    }

    function cognosItemSpanClick() {
        var sidebar = $('.sidebar');
        var menu = $('.congos-menu-main');
        var tabTarget = $(this).attr('data-link');

        if (tabTarget == '#Sidebar') {
            menu.css('margin-right', 0);
            sidebar.removeClass('sidebar-open');
        } else {
            menu.css('margin-right', sidebar.css('width'));
            sidebar.addClass(' sidebar-open');

            // Congos custom tabs start

            var tabcontents = $('.tabcontent');
            tabcontents.each(function() {
                $(this).css('display', 'none');
                $(this).css('opacity', '0');
            });

            tablinks = $('.tablink');
            tablinks.each(function() {
                $(this).removeClass('active');
            });

            $(this).addClass(' active');

            $('.tabcontent').each(function() {
                var targetName = tabTarget.replace('#', '');
                if ($(this).attr('id') === tabTarget.replace('#', '')) {
                    $(this).css('display', 'block');
                    $(this).css('opacity', '1');
                }
            });
            // Congos custom tabs end
        }
    }

    // trigger click
    var url = $(location).attr('href');
    var hash = '#' + url.substring(url.indexOf('#') + 1);
    var itemToClick;
    $('.congos-menu-item > a').each(function() {

        if ($(this).attr('href') == hash) {
            itemToClick = $(this);
            console.log(itemToClick);
            itemToClick.trigger('click');
        }
    });

// Congos menu end
};
export {cognosMenu};