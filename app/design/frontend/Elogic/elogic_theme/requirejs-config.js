let config = {

    map: {
        '*': {
            footerCollapse: 'js/footer-collapse',
            slick: 'js/plugins/slick',
            mySlider: 'js/slider',
            select2: 'js/plugins/select2.full',
            mySelect: 'js/select'
        }
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        selectize: {
            deps: ['jquery']
        }
    }
}