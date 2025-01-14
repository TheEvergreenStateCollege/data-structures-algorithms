use crate::types::{Board,Cell};

fn row_win_validator(board: &Board, row:u32) ->bool{
    let mut all_equal = true;
    for i in 0..2{
        all_equal = all_equal && board.cells[row as usize] [i] == board.cells[row as usize][i+1];
    } 
    all_equal && (board.cells[row as usize][0] != Option:None)
}
fn col_win_validator(board: &Board, row:u32) ->bool{
    let mut all_equal = true;
    for i in 0..2{
        all_equal = all_equal && board.cells[col as usize] [i] == board.cells[i+1][col as usize];
    } 
    all_equal && (board.cells[0][col as usize] != Option:None)
}

// Down, right diagonal win validator
// *
//  *
//   *

fn diag1_win_validator(board: &Board) -> bool {
    let mut all_equal = true;
    for i in 0..2 {
        all_equal = all_equal && board.cells[i][i] == board.cells [i+1][1+i];
    }
    all_equal && (board.cells[0][2] != Option::None)
}
fn diag2_win_validator(board: &Board) -> bool {
    let mut all_equal = true;
    for i in 0..2 {
        all_equal = all_equal && board.cells[i][2-i] == board.cells [i+1][1-i];
    }
    all_equal && (board.cells[0][2] != Option::None)
}
pub fn col_win_validator(board: &board) -> bool {
    for row in 0..3 {
        if row_win_validator(board, row){
            return true
        }
    }
}
