import Pawn from "./classes/PawnClass"
import Rook from "./classes/RookClass"
import Knight from "./classes/KnightClass"
import Bishop from "./classes/BishopClass"
import Queen from "./classes/QueenClass"
import King from "./classes/KingClass"
import "../imgs/pieces/black/rook.png";

export const initialPieces = {
    white: {
        pawn: [
            new Pawn("pawn1", "wp1", "white", "../imgs/pieces/white/pawn.png", 0, 6),
            new Pawn("pawn2", "wp2", "white", "../imgs/pieces/white/pawn.png", 1, 6),
            new Pawn("pawn3", "wp3", "white", "../imgs/pieces/white/pawn.png", 2, 6),
            new Pawn("pawn4", "wp4", "white", "../imgs/pieces/white/pawn.png", 3, 6),
            new Pawn("pawn5", "wp5", "white", "../imgs/pieces/white/pawn.png", 4, 6),
            new Pawn("pawn6", "wp6", "white", "../imgs/pieces/white/pawn.png", 5, 6),
            new Pawn("pawn7", "wp7", "white", "../imgs/pieces/white/pawn.png", 6, 6),
            new Pawn("pawn8", "wp8", "white", "../imgs/pieces/white/pawn.png", 7, 6),
        ],
        rook: [
            new Rook("rook1", "wr1", "white", "../imgs/pieces/white/rook.png", 0, 7),
            new Rook("rook2", "wr2", "white", "../imgs/pieces/white/rook.png", 7, 7),
        ],
        bishop: [
            new Bishop("bishop1", "wb1", "white", "../imgs/pieces/white/bishop.png", 2, 7),
            new Bishop("bishop2", "wb2", "white", "../imgs/pieces/white/bishop.png", 5, 7),
        ],
        knight: [
            new Knight("knight1", "wn1", "white", "../imgs/pieces/white/knight.png", 1, 7),
            new Knight("knight2", "wn2", "white", "../imgs/pieces/white/knight.png", 6, 7),
        ],
        queen: [
            new Queen("queen1", "wq1", "white", "../imgs/pieces/white/queen.png", 3, 7),
        ],
        king: [
            new King("king1", "wk1", "white", "../imgs/pieces/white/king.png", 4, 7),
        ]
    },
    black: {
        pawn: [
            new Pawn("pawn1", "bp1", "black", "../imgs/pieces/black/pawn.png", 0, 1),
            new Pawn("pawn2", "bp2", "black", "../imgs/pieces/black/pawn.png", 1, 1),
            new Pawn("pawn3", "bp3", "black", "../imgs/pieces/black/pawn.png", 2, 1),
            new Pawn("pawn4", "bp4", "black", "../imgs/pieces/black/pawn.png", 3, 1),
            new Pawn("pawn5", "bp5", "black", "../imgs/pieces/black/pawn.png", 4, 1),
            new Pawn("pawn6", "bp6", "black", "../imgs/pieces/black/pawn.png", 5, 1),
            new Pawn("pawn7", "bp7", "black", "../imgs/pieces/black/pawn.png", 6, 1),
            new Pawn("pawn8", "bp8", "black", "../imgs/pieces/black/pawn.png", 7, 1),
        ],
        rook: [
            new Rook("rook1", "br1", "black", "../imgs/pieces/black/rook.png", 0, 0),
            new Rook("rook2", "br2", "black", "../imgs/pieces/black/rook.png", 7, 0),
        ],
        bishop: [
            new Bishop("bishop1", "bb1", "black", "../imgs/pieces/black/bishop.png", 2, 0),
            new Bishop("bishop2", "bb2", "black", "../imgs/pieces/black/bishop.png", 5, 0),
        ],
        knight: [
            new Knight("knight1", "bn1", "black", "../imgs/pieces/black/knight.png", 1, 0),
            new Knight("knight2", "bn2", "black", "../imgs/pieces/black/knight.png", 6, 0),
        ],
        queen: [
            new Queen("queen1", "bq1", "black", "../imgs/pieces/black/queen.png", 3, 0),
        ],
        king: [
            new King("king1", "bk1", "black", "../imgs/pieces/black/king.png", 4, 0),
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