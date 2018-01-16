

var config = {
    map: {
    "*": {
      'lbi.bootstrap': 'js/bootstrap.min',
	  'lbi.owl':'js/owl.carousel.min',
	  catalogAddToCart:'Abovebits_TopBanner/js/add-to-cart'
    },

	shim: {
        'lbi.bootstrap': {
            'deps': ['jquery']
        },
		'lbi.owl': {
            'deps': ['jquery']
        }

    }

  }
};
