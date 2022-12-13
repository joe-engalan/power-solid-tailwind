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

export const calcSharePrice = (tier : number, size : number) => {
    const tierBonus = (tier - 1) * 100;
    let factor;
    if (size < 6) factor = size;
    else if(size < 11) factor = 6;
    else if(size < 21) factor = 7;
    else if(size < 31) factor = 8;
    else factor = 9;

    return (100 * factor) + tierBonus
}

export const getPrimaryPayout = (tier: number, size: number) => {
    return 10 * calcSharePrice(tier, size);
}

export const getSecondaryPayout = (tier: number, size: number) => {
    return getPrimaryPayout(tier, size) / 2;
}