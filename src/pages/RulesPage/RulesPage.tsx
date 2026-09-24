import PayoutTable from "../../components/payoutTable/PayoutTable";

// Viser korte spilleregler og utbetalinger.
export default function RulesPage() {
    return (
        <main className="rules-page">
            <h1>Rules and payouts</h1>

            <p>
                Each new player starts with 100 coins.
                Build the best five-card poker hand.
            </p>

            <ol>
                <li>Choose Bet 2 or Bet 5, then press Deal.</li>
                <li>Your bet is set, and you receive five cards.</li>
                <li>
                    Select Keep for any cards you want to keep.
                    Select again to undo. You may keep all five.
                </li>
                <li>
                    Press Draw to replace the remaining cards once.
                </li>
                <li>
                    Your final hand determines the payout.
                    Press New round to play again.
                </li>
            </ol>


            <PayoutTable />

            <p>
                You cannot change your bet or switch players during
                a round.
            </p>
        </main>
    );
}
