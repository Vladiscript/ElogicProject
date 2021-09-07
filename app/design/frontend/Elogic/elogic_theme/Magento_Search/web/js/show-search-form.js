

define([
    'jquery',
    'jquery/ui',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('my.showSearchForm', {

        options: {
            searchForm: '',
        },

        _create: function () {

            const el = $(this.element)
            const form = $(this.options.searchForm)[0]

            this._on({
                click: function () {
                    form.classList.toggle('active')
                }
            })

        }

    })

    return $.my.showSearchForm
})