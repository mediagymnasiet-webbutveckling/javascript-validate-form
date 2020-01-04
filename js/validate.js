/* HÄR SKRIVER DU DIN KOD SOM SKA VALIDERA FORMULÄRET
 * Utgå från funktionen validateForm().  Du är fri att skriva fler funktioner efter behov. 
 *  
 * Ändra inget i index.html (Förutom om du vill lägga till funkionalitet för modal)
 */

 // Hämtar dom-variabeln för formuläret
 const form = document.querySelector('form');
 
 //Denna funktion körs när 'SSkicka anmälan'-knappen klickas
 function validateForm(event) {
    
         // Denna funktion hindrar att man skickas till dummy.html. 
         // D.v.s använd denna för att ge feedback till användaren om vaidering misslyckas
         event.preventDefault();

 }
 

 // Lyssnar på submit-event för formuläret. Om knappen 'Skicka anmälan' klickas körs funktionen validateForm()
 form.addEventListener('submit', validateForm);

 