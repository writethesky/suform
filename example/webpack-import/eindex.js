import suform from '../../src/suform.js';

$("#data-add").on('click', function(){
	$("#love").append(
		'<label><input name="love" type="checkbox" suform value="4" /><span>乐</span></label>'
	);

	$("#sex").append(
		'<label><input name="sex" type="radio" suform value="3" /><span>未知</span></label>'
	);

	$('#job select').append(
		'<option value="1">猎人</option>'
	);
})

$("#data-re").on('click', function(){
	suform.update();
})