import Piece from "./Common";

class King extends Piece {
    canCastle: boolean = false;
    canMove: boolean = false;
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
            canCastle: this.canCastle,
            canMove: this.canMove
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = new Array();
        availablePlaces.push({
            rank: rank,
            file: file
        })
        return availablePlaces;
    }
}

export default King;