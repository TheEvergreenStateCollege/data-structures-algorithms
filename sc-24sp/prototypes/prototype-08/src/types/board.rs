use super::{Board, Cell, Player, Move};
use crate::Moves::MoveError;

const Empty_Board:[[Cell:3];3] = [
    [Cell::None, Cell::None, Cell::None],
    [Cell::None, Cell::None, Cell::None],
    [Cell::None, Cell::None, Cell::None],
];

impl Board<'_>{
    pub fn new() -> Self {
        Board{next_to_move:&Player::0, Cells:Empty_Board,}
    }    

    pub fn clone(&self) -> Self {
        let mut cells [[Cell:3]; 3] = Empty_Board.clone();
        for i in 0..2 {
            for j in 0..2 {
                cells[i][j] = self.cells[i][j];
            }
        }

        Board{next_to_move:self.next_to_move, cells}
    } 

    pub fn make_move<'a>(&'a mut self, new_move:&'a Move, player:&Player) -> (Option<MoveError>) {
        let new_row = new_move.coords.0;
        let new_col = new_move.coords.1;

        if new_row < 3 && new_col < 3 {
            if self.cells[new_row as usize][new_col as usize] != None {
                Some(MoveError::CellTaken)
            } else if player!= self.next_to_move {
                Some(MoveError::WrongPlayer)
            } else {
                self.cells[new_row as usize][new_col as usize] = Some(self.next_to_move);
                self.next_to_move = self.next_to_move.other();
                Option::None
            }
        } else {
            Some(MoveError::OutOfBounds)
        }
    }
}


