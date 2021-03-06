
define([
    'jquery',
    'jquery-ui-modules/widget',
    'matchMedia',
    'collapsible',
    'domReady!'
], function ($) {
    'use strict';


    $.widget('my.footerCollapse', {

        _create: function () {

            const el = $(this.element)

            mediaCheck({
                media: '(min-width: 768px)',
                entry: function () {
                    if (el.collapsible()) {
                        el.collapsible('activate')
                        el.collapsible('destroy');
                    }
                },
                exit: function () {
                    el.collapsible({ openedState: "opened" })
                }
            });

        }

    })

    return $.my.footerCollapse
})