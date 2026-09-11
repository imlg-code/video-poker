# Refleksjonsnotat

I main.tsx er inngangspunktet til appen, der starter nettleseren og kobler React til Root i index.html.
I app.tsx organiseres appen og bestemmer hvilke routes som skal vises, i denne appen blir det da GamePage, PlayersPage og RulesPage.
Jeg laget først tre sider, jeg lærte at main.tsx starter React-appen og at BrowserRouter ligger rundt App så hele appen kan bruke navigasjon. I app.tsx bruker jeg Routes og Route for å bestemme hva som skal vises på hvem adresse. Jeg laget også en navigasjons komponent med NavLink. Jeg bruker NavLink for da kan jeg navigere mellom sider uten å refreshe hele appen. Navigasjonen ligger utenfor Routes så det kan brukes på alle sidene. 
Jeg definerte typer for Playingcard, Player, PokerHand, Suit og Rank. Suit bestemmer hvilke bilde som er lov og Rank bestemmer hvilke verdi som er lov. PlayingCard beskriver ett kort med Rank og Suit. Player definerer spillerens id, navn og antall coins. Mens PokerHand definerer hvilke pokerhender man kan få. 

Jeg har laget en funksjon som lager en kortstokk med 52 kort. Jeg brukte to arrays og to for-of løkker for å kombinere hver suit med hver rank. Jeg satte først løkkene på feil sted og lærte at return må stå etter løkkene for å få med alle kortene. Neste trinn blir å stokke kortstokken.