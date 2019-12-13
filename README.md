# Javascript - Validering av formulär

Syftet med denna uppgift är att använda JavaScript för att validera information som skrivs in i ett webbformulär. Att validera innebär att göra något giltigt. Du ska skriva kod i som verifierar att:

* Inget av fälten Förnamn, Efternamn, E-post eller Skola får lämnas tomt
* E-postadressen måste vara korrekt formaterad
* Om ett meddelande skickas skall innehållet kontrolleras så att det inte överstiger 200 tecken.

Om formuläret innehåller något fel skall användaren upplysas om detta. Då skickas inte formuläret iväg utan användaren blir kvar på formulärsidan (index.html)  och får feedback om vilka fel användaren gjort. Hur du väljer att upplysa användaren är upp till dig att bestämma (se bedömningskriterier).

**Inget får ändras i html eller css. Ni löser uppgiften genom att endast skriva kod i medföljande validate.js**

## Bra att veta 

Det du behöver veta är att funktionen validateForm() i validate.js är den som triggas när man trycker på “Skicka anmälan”. Det är denna funktion du ska utgå ifrån när du skriver din kod som ska validera. Du kan även skapa andra funktioner som anropas från den. Det som är viktigt att veta att om validateForm() returnerar true så skickas användaren vidare till dummy.html, om false stannar användaren kvar på index.html.

## Validering av e-mail med reguljärt uttryck

En e-postadress valideras mest effektivt med hjälp av reguljära uttryck (regular expressions). Då reguljära uttryck är ganska komplicerade för nybörjare får ni här den kod som behöver för att kontrollera detta. I exemplet nedan innehåller variabeln email själva e-postadressen och variabeln isValid är en boolsk variabel som får värdet true om e-postadressen är korrekt och false om den inte är korrekt: 

const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let isValid = pattern.test(email); 

Om du är intresserad, läs mer om reguljära uttryck [här](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) eller här https://regexr.com/

## Bedömningskriterier

### Godkänd

* Din validate.js validerar enligt instruktionen med tillfredsställande resultat
* Du upplyser användaren om vad som är fel med enkel lösning exempelvis med alert-fönster som informerar

### Högre betyg

* Din validate.js validerar enligt instruktionen med gott resultat
* Du upplyser användaren om vad som är fel med att ändra i DOM, exempelvis att lägga till/ta bort klasser med CSS eller om du vill få en utmaning i att göra en s.k Modal [Se exempel här](https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e)
* Din kod har en bra tydlig och bra struktur som är lätt att följa och förstå

Lycka till!
/Sandra

 
