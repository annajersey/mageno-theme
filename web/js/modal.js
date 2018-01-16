
require(['jquery', 'Magento_Ui/js/modal/modal', '!domReady'], function($, modal) {
    var modalTest = {
        // Elements
        button: $('.popup-modal'),
        popup: $('#debit-notification-modal'),

        init: function() {
            this.testModal();
            this.bindUIActions();
        },

        testModal: function() {
            this.popup.modal({
                buttons: [{
                    text: 'Ok',
                    class: '',
                    click: function() {
                        this.closeModal();
                    }
                }]
            })
        },

        bindUIActions: function() {
            var self = this;

            this.button.on('click', function(e) {
                e.preventDefault();
                self.modalOpen();
            });
        },

        modalOpen: function() {
            this.popup.modal("openModal");
        }
    };

    modalTest.init();
});