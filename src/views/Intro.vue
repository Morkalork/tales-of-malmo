<template>
  <game-segment :buttons="buttons">
    <div class="intro">
      <MainHeader />
      <p>
        Välkommen till Tales of Malmö, ett rollspel där du klär dig i rollen av
        de episka heralder som lyfter vår gråa Kockumsvardag, förgyller våran
        bleka tisdags-falaffel och dränker ljudet av betongdjungelens
        handgranatsvrål.
      </p>
      <p>
        Här tar du dig an fotbolls-Sverige som en grupp av de finaste spelare
        vårt land har att erbjuda. Utmaningar i form av matcher med motståndare
        från runt om i landet, slagsmål med fotbollsanalfabeta
        medgångssupportrar samt kampsångstifon.
      </p>
      <p>
        Tryck starta och se hur långt ditt lag tar sig, se sedan om du kan nå
        highscoresvenskan och sätta ditt namn på toppen!
      </p>
      <p>För mer information, tryck Hjälp uppe i menyn (i toppajävelen).</p>
    </div>
  </game-segment>
</template>

<script>
import MainHeader from "../components/MainHeader";
import GameSegment from "../components/GameSegment";
export default {
  name: "Intro",
  components: { GameSegment, MainHeader },
  data() {
    return {
      buttons: [
        {
          title: "Starta",
          route: "init"
        },
        {
          title: "Se tabellen",
          route: "score"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1.25rem;
  margin-top: 1rem;
}
</style>
