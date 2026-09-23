import { payouts } from "../../Game/payouts";
//Viser utbetaling  for hver pokerhånd  fra felles tabell
export default function PayoutTable(){
    return(
        <table className="payout-table">
            <caption>Payouts - includes your bet</caption>
            <thead>
                <tr>
                    <th scope="col">Hand</th>
                    <th scope="col">Payout</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(payouts).map(([hand, multiplier]) =>(
                   <tr key={hand}>
                    <th scope="row">{hand}</th>
                    <td>{multiplier} * bet</td>
                   </tr>
                ))}
            </tbody>
        </table>

    );
}