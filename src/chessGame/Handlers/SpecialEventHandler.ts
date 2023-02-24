import { GameStatus } from "../GameStatus";

const SpecialEventHandler = (movingPiece: any, e:any) => {
    switch(GameStatus.specialFlag) {
        case "":
            break;
        case "castling":
            console.log(movingPiece);
            if(movingPiece.file == 6 || movingPiece.file == 2) {
                movingPiece.castling();
            }
            break;
        case "promotion":
            console.log("promotion");
            movingPiece.promote();
            break;
    }
    GameStatus.specialFlag = "";
}

export default SpecialEventHandler;