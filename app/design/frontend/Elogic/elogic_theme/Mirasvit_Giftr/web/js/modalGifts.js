
define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'domReady!'
], function ($, modal) {
    'use strict';


    $.widget('my.modalGifts', {

        options: {
            modalOptions: {
                type: 'popup',
                responsive: true,
                modalClass: 'modal-giftr',
                buttons: [],
            }
        },
        _create: function () {
            $(this.element).modal(this.options.modalOptions)
        }

    })

    return $.my.modalGifts
})