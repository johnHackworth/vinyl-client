install:
	rm -rf vendors
	mkdir vendors
	git clone git://github.com/components/jquery.git ./vendors/jquery
	git clone https://github.com/documentcloud/backbone.git ./vendors/backbone
	git clone https://github.com/documentcloud/underscore.git ./vendors/underscore
	git clone git@github.com:johnHackworth/SeedJs.git ./vendors/seedjs
	git clone https://github.com/headjs/headjs.git ./vendors/headjs
	git clone https://github.com/wycats/handlebars.js.git ./vendors/handlebars

minimize:
	./manage.py runserver 0.0.0.0:8000
