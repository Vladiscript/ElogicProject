
define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function ($) {
    'use strict';


    $.widget('my.selectGifts', {

        options: {
            giftList: '',
            giftOption: '',
            select: ''
        },

        _create: function () {
            const option = this.options.giftOption
            const select = this.options.select
            const list = this.options.giftList

            $(document).on('click', select, () => {
                $(list).toggleClass('active')
                $(select).toggleClass('active')

            })
            $(document).on('click', option, (e) => {
                const selectedOption = e.currentTarget
                const giftTitle = selectedOption.lastElementChild.textContent

                $(select)[0].innerHTML = giftTitle;

                $(list).removeClass('active')
                $(select).removeClass('active')
            });
        }

    })

    return $.my.selectGifts
})