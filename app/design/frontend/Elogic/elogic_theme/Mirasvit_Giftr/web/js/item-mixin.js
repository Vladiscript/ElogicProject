
define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/modal/modal',
    'mage/translate'
], function ($) {
    'use strict';

    var mixin = {
        defineBehaviour: function () {
            this.initRegistries();
            const modalSelect = $('.giftr-list')
            if (!this.isLoggedIn()) {
                window.location.href = "http://magento2.loc/customer/account/login/"
            }
            else if (this.registries().length == 1) {
                this.addProduct();
            } else if (this.registries().length > 1) {

                modalSelect.modal('openModal')
            } else {
                modalSelect.modal('openModal')
            }
        },
        isMessageVisible: function () {
            return !this.hasRegistries();
        },

        getMessage: function () {
            const message = 'You have no Gift Registries yet.' + '</br>' +
                `<a href="${this.newRegistryUrl}">` + 'Create Gift Registry' + '</a>';
            let element = document.createElement('div')
            element.innerHTML = message
            console.log(element);
            let container = $('.giftr-message')
            container.append(element)
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
