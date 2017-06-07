/*!
 * suform.js v0.1.0 bate
 * (c) 2017 writethesky（撰天）
 * Released under the MIT License.
 * https://github.com/writethesky
 * https://github.com/writethesky/application.js
 */
(function(w){
	class suformClass{
		//构造
		constructor(){
			this.init();
		}
		init(){

			this.domArr = {
				radio: [],
				checkbox: []
			}
			var _this = this;
		    $("input[suform]").each(function(){
		    	switch($(this).attr('type').toLowerCase()){
		    		case 'radio':
		    			_this.renderRadio(this);
		    			_this.domArr.radio.push(this);
		    		break;
		    		case 'checkbox':
		    			_this.renderCheckBox(this);
		    			_this.domArr.checkbox.push(this);
		    		break;
		    	}
		    });
		}
		


		 
		//Radio渲染引擎
		renderRadio(dom){
			var _this = this;
		 	
		 	var radioDom = '<svg data-type="radio" t="1496821065114" class="suform-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128c-211.744 0-384 172.256-384 384s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128z" p-id="2378"></path><path d="M512 512m-250 0a250 250 0 1 0 500 0 250 250 0 1 0-500 0Z" p-id="2379" fill="rgba(0,0,0,0)"></path><path d="M552.5 114.5A0.5 1 0 1 1 552.5 115.5Z" p-id="2380"></path></svg>';
		 	
		 	
		 	$(dom).hide();

		 	if($(dom).prop('checked')){
		 	
		 		radioDom = '<svg data-type="radio" t="1496821065114" class="suform-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2377" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path class="selected" d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128c-211.744 0-384 172.256-384 384s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128z" p-id="2378"></path><path d="M512 512m-250 0a250 250 0 1 0 500 0 250 250 0 1 0-500 0Z" p-id="2379" class="selected"></path><path d="M552.5 114.5A0.5 1 0 1 1 552.5 115.5Z" p-id="2380"></path></svg>';
		 	}

		 	if(0 ==$(dom).next("svg.suform-icon").length){
		 		$(dom).after(radioDom);
		 	}else{
		 		$(dom).next("svg.suform-icon").get(0).outerHTML = radioDom;
		 	}

		 	

		 	// radioDom.on('click', this.clickRadio);
		 	$(dom).off('change').on('change', function(){
		 		for(var i in _this.domArr.radio){
			 		_this.renderRadio(_this.domArr.radio[i]);
			 	}
		 	});
		}


		//checkbox渲染引擎
		renderCheckBox(dom){
			var _this = this;
		 	
		 	var checkboxDom = '<svg data-type="checkbox" class="suform-icon" viewBox="0 0 1024 1024" version="1.1" p-id="2377" width="200" height="200"><path d="M521.31004 705.311751a32.717146 32.717146 0 0 1-21.343098-7.892761L267.680529 498.591619c-13.779841-11.795651-15.389502-32.527834-3.593852-46.308699 11.795651-13.778818 32.528857-15.390525 46.308699-3.593851l207.430306 177.550788 349.863273-405.566945c11.846816-13.736862 32.588209-15.265682 46.323025-3.415796 13.733792 11.847839 15.263635 32.587186 3.414773 46.323025l-371.234 430.341188c-6.492878 7.52744-15.661701 11.390421-24.882713 11.390422z" fill="rgba(0,0,0,0)" p-id="3096"></path><path d="M792.726659 961.082018h-552.585347c-95.358835 0-172.938748-77.579913-172.938747-172.938747V237.290381c0-95.358835 77.579913-172.938748 172.938747-172.938747h440.029852c14.128789 0 25.582655 11.453866 25.582655 25.582655s-11.453866 25.582655-25.582655 25.582655H240.141312c-67.146283 0-121.773438 54.627155-121.773437 121.773437V788.143271c0 67.146283 54.627155 121.773438 121.773437 121.773437h552.585347c67.146283 0 121.773438-54.627155 121.773438-121.773437V499.550457c0-14.128789 11.453866-25.582655 25.582655-25.582655s25.582655 11.453866 25.582655 25.582655v288.592814c0 95.357811-77.580936 172.938748-172.938748 172.938747z" fill="" p-id="3097"></path></svg>';
		 	
		 	
		 	$(dom).hide();

		 	if($(dom).prop('checked')){
		 	
		 		checkboxDom = '<svg data-type="checkbox" class="suform-icon" viewBox="0 0 1024 1024" version="1.1" p-id="2377"  width="200" height="200"><path class="selected" d="M521.31004 705.311751a32.717146 32.717146 0 0 1-21.343098-7.892761L267.680529 498.591619c-13.779841-11.795651-15.389502-32.527834-3.593852-46.308699 11.795651-13.778818 32.528857-15.390525 46.308699-3.593851l207.430306 177.550788 349.863273-405.566945c11.846816-13.736862 32.588209-15.265682 46.323025-3.415796 13.733792 11.847839 15.263635 32.587186 3.414773 46.323025l-371.234 430.341188c-6.492878 7.52744-15.661701 11.390421-24.882713 11.390422z" fill="" p-id="3096"></path><path d="M792.726659 961.082018h-552.585347c-95.358835 0-172.938748-77.579913-172.938747-172.938747V237.290381c0-95.358835 77.579913-172.938748 172.938747-172.938747h440.029852c14.128789 0 25.582655 11.453866 25.582655 25.582655s-11.453866 25.582655-25.582655 25.582655H240.141312c-67.146283 0-121.773438 54.627155-121.773437 121.773437V788.143271c0 67.146283 54.627155 121.773438 121.773437 121.773437h552.585347c67.146283 0 121.773438-54.627155 121.773438-121.773437V499.550457c0-14.128789 11.453866-25.582655 25.582655-25.582655s25.582655 11.453866 25.582655 25.582655v288.592814c0 95.357811-77.580936 172.938748-172.938748 172.938747z" fill="" p-id="3097"></path></svg>';
		 	}

		 	if(0 ==$(dom).next("svg.suform-icon").length){
		 		$(dom).after(checkboxDom);
		 	}else{
		 		$(dom).next("svg.suform-icon").get(0).outerHTML = checkboxDom;
		 	}

		 	

		 	// radioDom.on('click', this.clickRadio);
		 	$(dom).off('change').on('change', function(){
		 		for(var i in _this.domArr.checkbox){
			 		_this.renderCheckBox(_this.domArr.checkbox[i]);
			 	}
		 	});
		}

		update(){
			this.init();
		}
		 

		 

	}

	w.suform = new suformClass();
}(window));
