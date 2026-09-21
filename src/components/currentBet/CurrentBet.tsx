type CurrentBetProps ={
    bet: number;
}
//Viser spillerens innsats
export default function CurrentBet({bet}: CurrentBetProps){
    return(
        <p>
            Current Bet: {bet}
        </p>
    )
}