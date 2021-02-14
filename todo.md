Acceptance criteria / business ruling:

- Een challenge heeft 30 dagen
- Als ik hem vandaag aanmaak is de einddatum over 30 dagen
- Een challenge kan : ‘ACTIVE’ of ‘COMPLETE’ zijn
- Elke dag heb ik de optie om die dag als complete aan te merken
- Ik kan met terugwerkende kracht ook nog als complete aanmerken

Stel ik start op 23-03-2021

dan is eidatum 23-03-2021 + 30 dagen

je hebt een completed count welke elke dag aanpasbaar is.

voor elke completed dag word er een unike timestamp in de database gezet.
daysCompleted is dus een DateTime[];

als er al 30 items in de daysCompleted zitten kan je niet meer bij doen

na de endDate kan je niks meer bij doen (via ui)
