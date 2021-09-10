define([
    'jquery',
    'domReady!',
    'select2'
], function ($) {

    $.widget('my.selector', {

        options: {
            template: ''
        },

        _create: function () {
            const selector = $(this.options.template)

            selector.select2();
            console.log(selector);

        }
    })

    return $.my.selector
});