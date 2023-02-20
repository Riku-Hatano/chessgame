import { GameStatus } from "../GameStatus";

const PieceMoveHandler = (e: any): void => {
    const movingPiece: any = GameStatus.board[parseInt(GameStatus.availablePlaces[0][1])][parseInt(GameStatus.availablePlaces[0][0])]!; //define the moving piece on the Gamestate.board
    if(e.target.id == GameStatus.availablePlaces[0]) { return; } //to avoid clicking same piece
    for(let place of GameStatus.availablePlaces) {
        if(e.target.id == place) {
            if(GameStatus.isWhiteTurn && movingPiece.color == "white" || !GameStatus.isWhiteTurn && movingPiece.color == "black") { //handling turn
                GameStatus.board[parseInt(place[1])][parseInt(place[0])] = movingPiece; //move piece
                GameStatus.board[parseInt(GameStatus.availablePlaces[0][1])][parseInt(GameStatus.availablePlaces[0][0])] = null; //delete piece on the board
                movingPiece.isMoved = true; //change the state of moved piece
                movingPiece.file = parseInt(place[0]);
                movingPiece.rank = parseInt(place[1]);
                const currentBoardHistory: string = JSON.parse(JSON.stringify(GameStatus.board));
                GameStatus.boardHistory.push(currentBoardHistory); //add the log of board
                if(movingPiece.name[0] == "p") {
                    if(movingPiece.rank == 0 || movingPiece.rank == 7) {
                        movingPiece.promote(movingPiece.color);
                    } 
                }
                GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn; //change turn
                console.log(GameStatus.board)
                return;
            } else {
                console.log("not your turn")
            }
        }
    }
    
    console.log("clicked nothing area");
}

export default PieceMoveHandler;