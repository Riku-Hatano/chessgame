// @ts-nocheck

class Piece {
    name: string;
    shortName: string;
    color: string;
    file: number;
    rank: number;
    isSelected: boolean = false;
    isChecked: boolean = false;
    isMoved: boolean = false;
    isTaken: boolean = false;
    constructor (name: string, shortName: string, color: string, file: number, rank: number) { 
        this.name = name
        this.shortName = shortName
        this.color = color
        this.file = file
        this.rank = rank
    };
}

export default Piece