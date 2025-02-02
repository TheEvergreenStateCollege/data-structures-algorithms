
pub mod ranker {
    use crate::moves::enumerator::list_moves;
    use crate::types::{Board, Move, Player};
    use crate::validators::win_validator;
    use std::process;

    fn find_winning_moves(b: &Board, p: Player) -> Vec<Move> {
        let mut res = Vec::new();
        for m in list_moves(b) {
            let mut test_board = b.clone();
            test_board.make_move(&m, p);
            if win_validator(&test_board, p) {
                res.push(m);
            }
        }
        res
    }

    fn find_threatening_moves(b: &Board, p: Player) -> Vec<Move> {
        let mut res = Vec::new();
        for m in list_moves(b) {
            let mut test_board = b.clone();
            test_board.make_move(&m, p);
            let winning_moves = find_winning_moves(&test_board, p);
            if winning_moves.len() > 0 {
                res.push(m);
            }
        }
        res
    }

    pub fn find_best_move(b: &Board) -> (Move, &str) {

        //If we can win this turn, we do so.
        let winning_moves = find_winning_moves(b, Player::X);
        if winning_moves.len() > 0 {return (winning_moves[0],"win the game")};

        //Then if the opponent can win on their next turn, we block them. If they have two winning plays, we have lost. But we hopefully won't get there
        let op_winning_moves = find_winning_moves(b, Player::O);
        if op_winning_moves.len() > 0 {return (op_winning_moves[0],"block opponent's win")};
        
        //Then if we can make a move that threatens a win on a subsequent move, we make it.
        let threatening_moves = find_threatening_moves(b, Player::X);
        for threat in &threatening_moves { 
            if (threat.coords.0 == 0 || threat.coords.0 == 2) && (threat.coords.1 == 0 || threat.coords.1 == 2) { //corner checker
                return (*threat, "Threaten a win");
            }
        }
        if threatening_moves.len() > 0 {return (threatening_moves[0], "threaten to win on the next turn")};
        
        //Then if the center is free, we take it. This blocks 4 win routes
        if b.cells[1][1] == None {return (Move{coords: (1,1)}, "take the center position")}
        
        //If we can block an opponent from threatening a win, we do so. We prioritize corners because they block more wins
        let op_threatening_moves = find_threatening_moves(b, Player::O);
        for op_threat in &op_threatening_moves { 
            if (op_threat.coords.0 == 0 || op_threat.coords.0 == 2) && (op_threat.coords.1 == 0 || op_threat.coords.1 == 2) { //corner checker
                return (*op_threat, "block an opponent's path");
            }
        }
        if op_threatening_moves.len() > 0 {
            return (op_threatening_moves[0], "block an opponent's path");
        }

        //Then if there's any valid move, do it.
        let valid_moves = list_moves(&b);
        if valid_moves.len() > 0 {return (valid_moves[0], "make arbitrary move"); 
        } else 
            { //If no moves are valid, the game ends in a tie
            println!("The game is a tie.");
            process::exit(0x0);
        }
    }
}