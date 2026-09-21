
type TotalCoinsProps = {
    coins: number;
}

export default function TotalCoins ({coins}: TotalCoinsProps){
    return(
        <p>Total Coins: {coins}</p>
    );

    
}