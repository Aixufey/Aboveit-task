
# Aboveit
> Mål: Lag en webapplikasjon som lister opp en rekke brukere.   Følgende API-kall lister opp 30 brukerprofiler som du skal bruke i applikasjonen:
https://randomuser.me/api/?results=30&seed=aboveit&exc=login

>Applikasjonen skal liste opp brukere med bilde, navn, alder og annen informasjon du finner relevant. Når det trykkes på en bruker, skal brukerprofilen vises med mer detaljert informasjon om brukeren. Det skal også være mulig å registrere seg som bruker. En ny registrert bruker skal dukke opp øverst i listen.

### Krav:
- [x] Brukergrensesnitt (GUI): Webapplikasjonen skal ha et rent og brukervennlig grensesnitt. Du kan bruke teknologier som HTML5, CSS3, JavaScript, React, Angular, Vue.js, eller andre teknologier du er komfortabel med.
- [x] API-integrasjon: Bruk API-kallet for å hente ut en liste med 30 brukerprofiler.
- [x] Registrering av nye brukere: Webapplikasjonen skal ha et brukervennlig skjema for å registrere nye brukere. Når en bruker er registrert, skal den legges til i listen over brukerprofiler (du kan lagre dette lokalt i staten i din webapplikasjon).
- [x] Vise detaljert brukerprofil: Når man trykker på en bruker skal brukerprofilen med detaljert informasjon om brukeren vises.
- [x] Responsivt design: Webapplikasjonen skal være responsiv og kunne vises korrekt på ulike skjermstørrelser.
- [x] Testing: Test at applikasjonen virker på moderne nettlesere (Chrome, Edge, Firefox, etc.)
### Innlevering: 
    Oppgaven leveres på mail til meg kl 09:30 med kildekoden til applikasjonen din. Redegjør kjente feil/mangler/tolkninger ved levering. Pass på å slette node_modules før levering dersom du bruker React/Node.



## Issues / Fix
- [ ] Kjente feil er blant annet GUI ikke oppdaterer seg etter man har sendt inn skjemaet.
- [ ] Ingen tilbakemelding / feedback etter man har trykket på "submit".
- [ ] Kunne kanskje ha form og list i samme page, hvor bruker ser at GUI oppdaterer seg? 
- [ ] Context var kanskje litt overkill, har derfor også alternativ til en enklere løsning med hook som fetcher. Men det blir mye props drilling.