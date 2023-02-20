import { GameStatus } from "../GameStatus";

const SpecialEventHandler = (movingPiece: any) => {
    switch(GameStatus.specialFlag) {
        case "":
            return;
        case "castling":
            console.log("castling");
            movingPiece.castling();
            return;
        case "promotion":
            console.log("promotion");
            movingPiece.promote();
            return;
    }
}

export default SpecialEventHandler;