import Piece from "./Common";

class Queen extends Piece {
    wasPawn: boolean = false;
    constructor(name: string, shortName: string, color: string, file: number, rank: number) {
        super(name, shortName, color, file, rank);
    }
    toObj() {
        return {
            name: this.name,
            shortName: this.shortName,
            color: this.color,
            file: this.file,
            rank: this.rank,
            isSelected: this.isSelected,
            isChecked: this.isChecked,
            isMoved: this.isMoved,
            isTaken: this.isTaken,
            wasPawan: this.wasPawn
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if (this.color === "black") {
            for (let i = 0 ; i < 8 ; i++) {
                let run = 0
                switch(i) {
                    case 0:
                        for (let i = 1 ; i <= file ; i++) {
                            if (document.getElementById(String(file - i) + String(rank))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file - i) + String(rank))
                            if (document.getElementById(String(file - i) + String(rank))?.innerHTML[0] === "w") { break; }
                        }
                        break;
                    case 1: 
                        //下
                        for (let i = 1 ; i <= 7 - file ; i++) {
                            if (document.getElementById(String(file + i) + String(rank))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file + i) + String(rank))
                            if (document.getElementById(String(file + i) + String(rank))?.innerHTML[0] === "w") { break; }
                        }
                        break;
                    case 2:
                        for (let i = 1 ; i <= 7 - rank ; i++) {
                            if (document.getElementById(String(file) + String(rank + i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file) + String(rank + i))
                            if (document.getElementById(String(file) + String(rank + i))?.innerHTML[0] === "w") { break; }
                        }
                        //右
                        break;
                    case 3:
                        for (let i = 1 ; i <= rank ; i++) {
                            if (document.getElementById(String(file) + String(rank - i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file) + String(rank - i))
                            if (document.getElementById(String(file) + String(rank - i))?.innerHTML[0] === "w") { break; }
                        }
                        //左
                        break;
                    case 4:
                        //左上
                        (file < rank) ? run = file : run = rank
                        // console.log(`左上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                            availablePlaces.push(String(file - i) + String(rank - i))
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                        }
                        break;
                    case 5: 
                        //右上
                        (file < 7 - rank) ? run = file : run = (7 - rank)
                        // console.log(`右上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                            availablePlaces.push(String(file - i) + String(rank + i))
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                        }
                        break;
                    case 6:
                        //左下
                        (7 - file < rank) ? run = (7 - file) : run = rank
                        // console.log(`左下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                            availablePlaces.push(String(file + i) + String(rank - i))
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                        }
                        break;
                    case 7:
                        //右下
                        (7 - file < 7 - rank) ? run = (7 - file) : run = (7 - rank)
                        // console.log(`右下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                            availablePlaces.push(String(file + i) + String(rank + i))
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                        }
                    break;
                    default:
                        console.log("error. you run this function more than correct times.");
                }
            }
        } else {
            for (let i = 0 ; i < 8 ; i++) {
                let run = 0;
                switch(i) {
                    case 0:
                        for (let i = 1 ; i <= file ; i++) {
                            if (document.getElementById(String(file - i) + String(rank))?.innerHTML[0] === "w") { break; }
                            availablePlaces.push(String(file - i) + String(rank))
                            if (document.getElementById(String(file - i) + String(rank))?.innerHTML[0] === "b") { break; }
                        }
                        break;
                    case 1: 
                        //下
                        for (let i = 1 ; i <= 7 - file ; i++) {
                            if (document.getElementById(String(file + i) + String(rank))?.innerHTML[0] === "w") { break; }
                            availablePlaces.push(String(file + i) + String(rank))
                            if (document.getElementById(String(file + i) + String(rank))?.innerHTML[0] === "b") { break; }
                        }
                        break;
                    case 2:
                        for (let i = 1 ; i <= 7 - rank ; i++) {
                            if (document.getElementById(String(file) + String(rank + i))?.innerHTML[0] === "w") { break; }
                            availablePlaces.push(String(file) + String(rank + i))
                            if (document.getElementById(String(file) + String(rank + i))?.innerHTML[0] === "b") { break; }
                        }
                        //右
                        break;
                    case 3:
                        for (let i = 1 ; i <= rank ; i++) {
                            if (document.getElementById(String(file) + String(rank - i))?.innerHTML[0] === "w") { break; }
                            availablePlaces.push(String(file) + String(rank - i))
                            if (document.getElementById(String(file) + String(rank - i))?.innerHTML[0] === "b") { break; }
                        }
                        //左
                        break;
                        case 4:
                            //左上
                            (file < rank) ? run = file : run = rank
                            // console.log(`左上: ${run}`)
                            for (let i = 1 ; i <= run ; i++) {
                                if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                                availablePlaces.push(String(file - i) + String(rank - i))
                                if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                            }
                            break;
                        case 5: 
                            //右上
                            (file < 7 - rank) ? run = file : run = (7 - rank)
                            // console.log(`右上: ${run}`)
                            for (let i = 1 ; i <= run ; i++) {
                                if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                                availablePlaces.push(String(file - i) + String(rank + i))
                                if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                            }
                            break;
                        case 6:
                            //左下
                            (7 - file < rank) ? run = (7 - file) : run = rank
                            // console.log(`左下: ${run}`)
                            for (let i = 1 ; i <= run ; i++) {
                                if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                                availablePlaces.push(String(file + i) + String(rank - i))
                                if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                            }
                            break;
                        case 7:
                            //右下
                            (7 - file < 7 - rank) ? run = (7 - file) : run = (7 - rank)
                            // console.log(`右下: ${run}`)
                            for (let i = 1 ; i <= run ; i++) {
                                if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                                availablePlaces.push(String(file + i) + String(rank + i))
                                if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                            }
                        break;
                    default:
                        console.log("error. you run this function more than correct times.");
                }
            }
        }
        return availablePlaces;
    }
}

export default Queen;