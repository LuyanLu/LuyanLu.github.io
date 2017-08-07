document_width = window.screen.availWidth;  //��Ļ����
grid_container_width = 0.92 * document_width;   //���̿���
cell_side_length = 0.18 * document_width;   //���ӵĴ�С
cell_space = 0.04 * document_width; //����֮���ļ���
 
//������Ӧ���Ӿ������̶����ľ���
function get_pos_top(i, j) {
	return cell_space + i * (cell_space + cell_side_length);
}
 
//������Ӧ���Ӿ����������ߵľ���
function get_pos_left(i, j) {
	return cell_space + j * (cell_space + cell_side_length);
}
 
//������Ӧ���ֵı���ɫ
function get_number_background_color(number) {
	switch (number) {
		case 2: return '#eee4da'; break;
		case 4: return '#ede0c8'; break;
		case 8: return '#f2b179'; break;
		case 16: return '#f59563'; break;
		case 32: return '#f67c5f'; break;
		case 64: return '#f65e3b'; break;
		case 128: return '#edcf72'; break;
		case 256: return '#edcc61'; break;
		case 512: return '#9c0'; break;
		case 1024: return '#33b5e5'; break;
		case 2048: return '#09c'; break;
		case 4096: return '#a6c'; break;
		case 8192: return '#93c'; break;
	}
	return 'black';
}
 
//������Ӧ���ֵ���ɫ
function get_number_color(number) {
	if (number <= 0="" 4)="" return="" '#776e65';="" 'white';="" }="" �ж��������ƿ����пո���="" function="" nospace(board)="" {="" for="" (var="" i="0;" <="" 4;="" i++)="" j="0;" j++)="" if="" (board[i][j]="=" 0)="" false;="" true;="" ��support.js�м���="" �ж��ƿ��������ƶ�="" can_move_left(board)="" !="0)" (board[i][j="" -="" 1]="=" ||="" board[i][j]="=" board[i][j="" 1])="" can_move_right(board)="">= 0; j--) {
			if (board[i][j] != 0) {
				if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
					return true;
				}
			}
		}
	}
	return false;
}
 
//�ж��Ƿ��������ƶ�
function can_move_up(board) {
	for (var j = 0; j < 4; j++) {
		for (var i = 1; i < 4; i++) {
			if (board[i][j] != 0) {
				if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
 
//�ж��Ƿ��������ƶ�
function can_move_down(board) {
	for (var j = 0; j < 4; j++) {
		for (var i = 2; i >= 0; i--) {
			if (board[i][j] != 0) {
				if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}
 
//�ж�ˮƽ������ʱ���Ƿ��пո���
function no_block_horizontal(row, col1, col2, board) {
	for (var i = col1 + 1; i < col2; i++) {
		if (board[row][i] != 0) {
			return false;
		}
	}
	return true;
}
 
//�жϴ�ֱ������ʱ���Ƿ��пո���
function no_block_vertical(col, row1, row2, board) {
	for (var i = row1 + 1; i < row2; i++) {
		if (board[i][col] != 0) {
			return false;
		}
	}
	return true;
}
 
//�ж��Ƿ������ƶ�
function nomove(board) {
	if (can_move_down(board) || can_move_up(board) || can_move_right(board) || can_move_left(board)) {
		return false;
	}
	return true;
}</=>