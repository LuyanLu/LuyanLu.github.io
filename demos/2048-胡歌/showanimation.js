<script src="/assets/js/APlayer.min.js"> </script>function show_number_with_animation(i, j, rand_number) {
	var number_cell = $('#number_cell_' + i + '_' + j);
	number_cell.css('background-image', `url(img/${rand_number}.png`);
	// number_cell.css('color', get_number_color(rand_number));
	// number_cell.text(rand_number);
	number_cell.animate({
		width: cell_side_length,
		height: cell_side_length,
		top: get_pos_top(i, j),
		left: get_pos_left(i, j)
	}, 50);
}
 
//���·���
function update_score(score) {
	$('#score').text(score);
}
//��showanimation.js�м���
//�����ƶ�ʱ�ж���Ч��
function show_move_animation(fromx, fromy, tox, toy) {
	var number_cell = $('#number_cell_' + fromx + '_' + fromy);
	number_cell.animate({
		top: get_pos_top(tox, toy),
		left: get_pos_left(tox, toy)
	}, 200);
}