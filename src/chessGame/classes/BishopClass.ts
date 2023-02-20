import Piece from "./Common";

class Bishop extends Piece {
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
            isTaken: this.isTaken
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if(this.color == "black") {
            for(let i = 0 ; i < 4 ; i++) {
                let run = 0;
                switch(i) {
                    case 0:
                        //左上
                        (file < rank) ? run = file : run = rank
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file - i) + String(rank - i))
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] === "w") { break; }
                        }
                        break;
                    case 1: 
                        //右上
                        (file < 7 - rank) ? run = file : run = (7 - rank)
                        // console.log(`右上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file - i) + String(rank + i))
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] === "w") { break; }
    
                        }
                        break;
                    case 2:
                        //左下
                        (7 - file < rank) ? run = (7 - file) : run = rank
                        // console.log(`左下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file + i) + String(rank - i))
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] === "w") { break; }
                        }
                        break;
                    case 3:
                        //右下
                        (7 - file < 7 - rank) ? run = (7 - file) : run = (7 - rank)
                        // console.log(`右下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] === "b") { break; }
                            availablePlaces.push(String(file + i) + String(rank + i))
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] === "w") { break; }
                        }
                        break;
                    }
            }
        } else {
            for (let i = 0 ; i < 4 ; i++) {
                let run = 0
                switch(i) {
                    case 0:
                        //左上
                        (file < rank) ? run = file : run = rank
                        // console.log(`左上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                            availablePlaces.push(String(file - i) + String(rank - i))
                            if (document.getElementById(String(file - i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                        }
                        break;
                    case 1: 
                        //右上
                        (file < 7 - rank) ? run = file : run = (7 - rank)
                        // console.log(`右上: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                            availablePlaces.push(String(file - i) + String(rank + i))
                            if (document.getElementById(String(file - i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                        }
                        break;
                    case 2:
                        //左下
                        (7 - file < rank) ? run = (7 - file) : run = rank
                        // console.log(`左下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "w") { break; }
                            availablePlaces.push(String(file + i) + String(rank - i))
                            if (document.getElementById(String(file + i) + String(rank - i))?.innerHTML[0] == "b") { break; }
                        }
                        break;
                    case 3:
                        //右下
                        (7 - file < 7 - rank) ? run = (7 - file) : run = (7 - rank)
                        // console.log(`右下: ${run}`)
                        for (let i = 1 ; i <= run ; i++) {
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "w") { break; }
                            availablePlaces.push(String(file + i) + String(rank + i))
                            if (document.getElementById(String(file + i) + String(rank + i))?.innerHTML[0] == "b") { break; }
                        }
                        break;
                }
            }
        }
        return availablePlaces;
    }
}

export default Bishop;
