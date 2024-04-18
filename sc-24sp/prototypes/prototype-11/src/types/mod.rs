pub mod board;

#[derive(Debug, Clone, PartialEq, Eq)]

pub enum Player {
    X,
    O,
}
impl Player {
    pub fn other(&self) -> &Player {
        if self == &Player::X {
            &Player::O
        } else {
            &Player::X
        }
    }
}

#[derive(Debug)]
pub struct Move {
    pub coords: (u8, u8),
}
pub type Cell = Option<Player>;

#[derive(Debug)]
pub struct Board {
    pub cells: [[Cell; 3]; 3],
    pub next_to_move: Player,
}
