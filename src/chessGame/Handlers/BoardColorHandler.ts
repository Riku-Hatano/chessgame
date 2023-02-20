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
           $("td").removeClass("red");
            break;
    }
}

export default BoardColorHandler;