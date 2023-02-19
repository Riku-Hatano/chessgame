import Pawn from "./classes/PawnClass"
import Rook from "./classes/RookClass"
import Knight from "./classes/KnightClass"
import Bishop from "./classes/BishopClass"
import Queen from "./classes/QueenClass"
import King from "./classes/KingClass"

export const initialPieces = {
    white: {
        pawn: [
            new Pawn("pawn1", "wp1", "white", 0, 6),
            new Pawn("pawn2", "wp2", "white", 1, 6),
            new Pawn("pawn3", "wp3", "white", 2, 6),
            new Pawn("pawn4", "wp4", "white", 3, 6),
            new Pawn("pawn5", "wp5", "white", 4, 6),
            new Pawn("pawn6", "wp6", "white", 5, 6),
            new Pawn("pawn7", "wp7", "white", 6, 6),
            new Pawn("pawn8", "wp8", "white", 7, 6),
        ],
        rook: [
            new Rook("rook1", "wr1", "white", 0, 7),
            new Rook("rook2", "wr2", "white", 7, 7),
        ],
        bishop: [
            new Bishop("bishop1", "wb1", "white", 2, 7),
            new Bishop("bishop2", "wb2", "white", 5, 7),
        ],
        knight: [
            new Knight("knight1", "wn1", "white", 1, 7),
            new Knight("knight2", "wn2", "white", 6, 7),
        ],
        queen: [
            new Queen("queen1", "wq1", "white", 3, 7),
        ],
        king: [
            new King("king1", "wk1", "white", 4, 7),
        ]
    },
    black: {
        pawn: [
            new Pawn("pawn1", "bp1", "black", 0, 1),
            new Pawn("pawn2", "bp2", "black", 1, 1),
            new Pawn("pawn3", "bp3", "black", 2, 1),
            new Pawn("pawn4", "bp4", "black", 3, 1),
            new Pawn("pawn5", "bp5", "black", 4, 1),
            new Pawn("pawn6", "bp6", "black", 5, 1),
            new Pawn("pawn7", "bp7", "black", 6, 1),
            new Pawn("pawn8", "bp8", "black", 7, 1),
        ],
        rook: [
            new Rook("rook1", "br1", "black", 0, 0),
            new Rook("rook2", "br2", "black", 7, 0),
        ],
        bishop: [
            new Bishop("bishop1", "bb1", "black", 2, 0),
            new Bishop("bishop2", "bb2", "black", 5, 0),
        ],
        knight: [
            new Knight("knight1", "bn1", "black", 1, 0),
            new Knight("knight2", "bn2", "black", 6, 0),
        ],
        queen: [
            new Queen("queen1", "bq1", "black", 3, 0),
        ],
        king: [
            new King("king1", "bk1", "black", 4, 0),
        ]
    },
}

export const initialBoard = [
    [
        initialPieces.black.rook[0],
        initialPieces.black.knight[0],
        initialPieces.black.bishop[0],
        initialPieces.black.queen[0],
        initialPieces.black.king[0],
        initialPieces.black.bishop[1],
        initialPieces.black.knight[1],
        initialPieces.black.rook[1]
    ],
    [
        initialPieces.black.pawn[0],
        initialPieces.black.pawn[1],
        initialPieces.black.pawn[2],
        initialPieces.black.pawn[3],
        initialPieces.black.pawn[4],
        initialPieces.black.pawn[5],
        initialPieces.black.pawn[6],
        initialPieces.black.pawn[7],
    ],
    [
        null,null,null,null,null,null,null,null
    ],
    [
        null,null,null,null,null,null,null,null
    ],
    [
        null,null,null,null,null,null,null,null
    ],
    [
        null,null,null,null,null,null,null,null
    ],
    [
        initialPieces.white.pawn[0],
        initialPieces.white.pawn[1],
        initialPieces.white.pawn[2],
        initialPieces.white.pawn[3],
        initialPieces.white.pawn[4],
        initialPieces.white.pawn[5],
        initialPieces.white.pawn[6],
        initialPieces.white.pawn[7],
    ],
    [
        initialPieces.white.rook[0],
        initialPieces.white.knight[0],
        initialPieces.white.bishop[0],
        initialPieces.white.queen[0],
        initialPieces.white.king[0],
        initialPieces.white.bishop[1],
        initialPieces.white.knight[1],
        initialPieces.white.rook[1]
    ],
    
]