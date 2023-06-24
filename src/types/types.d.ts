export interface GameStatusIF {
    pieces: InitialPieces,
    board: any | null[][]
    // board: InitialPieces[][] | null[][]
    boardHistory: any,
    historyBackCounter: number,
    availablePlaces: any,
    isClicked: boolean,
    isWhiteTurn: boolean,
    isEdit: boolean,
    specialFlag: string
}

export interface InitialPieces {
    white: {
        pawn: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isEnpassaint: boolean,
            isPromoted: boolean
        }[],
        rook: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            canCastle: boolean
        }[],
        bishop: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean
        }[],
        knight: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean
        }[],
        queen: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            wasPawn: boolean
        }[],
        king: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            canCastle: boolean,
            canMove: boolean
        }[]
    },
    black: {
        pawn: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isEnpassaint: boolean,
            isPromoted: boolean
        }[],
        rook: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            canCastle: boolean
        }[],
        bishop: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean
        }[],
        knight: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean
        }[],
        queen: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            wasPawn: boolean
        }[],
        king: {
            name: string,
            shortName: string,
            color: string,
            imgPath: string,
            file: number,
            rank: number,
            isSelected: boolean,
            isChecked: boolean,
            isMoved: boolean,
            isTaken: boolean,
            canCastle: boolean,
            canMove: boolean
        }[]
    }
}