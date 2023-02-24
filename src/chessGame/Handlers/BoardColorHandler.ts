import "../../css/board.css";
import { GameStatus } from "../GameStatus";

const BoardColorHandler = (handle: string) => {
    switch(handle) {
        case "add":
            if(GameStatus.availablePlaces.length != 0) {
                for(let id of GameStatus.availablePlaces) {
                    const place = document.getElementById(id);
                    place?.classList.add("red");
                }
            }
            break;
        case "remove":
            if($("td") != null && $("td") != undefined) {
                $("td").removeClass("red");
            }
            break;
    }
}

export default BoardColorHandler;