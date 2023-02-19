import "../../css/board.css";
import { GameStatus } from "../GameStatus";

const BoardColorHandler = (handle: string) => {
    switch(handle) {
        case "add":
            for(let id of GameStatus.availablePlaces) {
                const place = document.getElementById(id);
                place?.classList.add("red");
            }
            break;
        case "remove":
            if(GameStatus.availablePlaces != null) {
                for(let id of GameStatus.availablePlaces) {
                    const place = document.getElementById(id);
                    place?.classList.remove("red");
                }
            }
            break;
    }
}

export default BoardColorHandler;