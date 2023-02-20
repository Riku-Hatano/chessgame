import Piece from "./Common";

class Rook extends Piece {
    canCastle: boolean = false;
    constructor(name: string, shortName: string, color: string, imgPath: string, file: number, rank: number) {
        super(name, shortName, color, imgPath, file, rank);
    }
    toObj() {
        return {
            name: this.name,
            shortName: this.shortName,
            color: this.color,
            imgPath: this.imgPath,
            file: this.file,
            rank: this.rank,
            isSelected: this.isSelected,
            isChecked: this.isChecked,
            isMoved: this.isMoved,
            isTaken: this.isTaken,
            canCastle: this.canCastle
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if (this.color == "black") {
            for (let i = 0 ; i < 4 ; i++) {
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
                }
            }
        } else {
            for (let i = 0 ; i < 4 ; i++) {
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
                }
            }
        }
        return availablePlaces;
    }
}

export default Rook;