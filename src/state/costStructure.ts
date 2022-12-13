/*
        t1    t2    t3
2       200   300   400
3       300   400   500
4       400   500   600
5       500   600   700
6-10    600   700   800
11-20   700   800   900
21-30   800   900  1000
31-40   900  1000  1100
41+    1000  1100  1200

Max payout = 10x share price
2nd payout = roundDown((10x share price) / 2)

NOTE: If 2 or more players tie for first, they get (primary + secondary) / numPlayers
Note: If 2 or more players tie for secondary, they get secondary / numPlayers (rounded down to nearest 100)

*/

export const getSizeFactor = (size : number) => {
    if(size < 2) return 0;
    else if(size < 6) return size;
    else if(size < 11) return 6;
    else if(size < 21) return 7;
    else if(size < 31) return 8;
    else if(size < 41) return 9;
    else return 10;
}

const costTable = [
    [0, 0, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    [0, 0, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
    [0, 0, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]
]

export const calcSharePrice = (tier : number, size : number) => {
    if(!costTable[tier]) return 0;

    return costTable[tier][getSizeFactor(size)];
}

export const getPrimaryPayout = (tier: number, size: number, numTied= 1) => {
    const payout = 10 * calcSharePrice(tier, size);
    if(numTied > 1) {
        // Payout is primary plus secondary.
        return (payout * 1.5) / numTied
    } else {
        return payout;
    }
}

export const getSecondaryPayout = (tier: number, size: number, numTied= 1) => {
    return (getPrimaryPayout(tier, size) / 2) / numTied;
}