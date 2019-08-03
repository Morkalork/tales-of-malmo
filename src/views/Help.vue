<template>
  <game-segment>
    <div class="help">
      <go-back />
      <h2>Hjälp!</h2>
      <section>
        <h3>Vad går det här spelet ut på?</h3>
        <p>
          Samla ihop en trupp med (max 4) spelare som ska överleva
          fotbolls-Sverige och allt vad det innehåller.
        </p>
        <p>
          Dina spelare har olika förmågor och kvalitéter som du kan använda för
          att bekämpa andra grupperingar.
        </p>
        <p>
          Ju längre du klarar dig ju mer poäng får du, poäng som avgör huruvida
          du når highscore-tabellen eller inte!
        </p>
      </section>

      <section>
        <h3>Din trupp</h3>
        <p>
          Du skapar en trupp med två spelare och så som spelet lider så kan fler
          spelare (upp till 4 st) gå med i din trupp.
        </p>
        <p>
          Du kan alltid välja att dumpa någon spelare för någon annan, sånt är
          fotbollslivet. Spelare kan alltid jämföras genom att trycka på deras
          porträtt, där kan du se deras förmågor och bonusar.
        </p>
      </section>

      <section>
        <h3>Förmågor</h3>
        <p>Det finns fem förmågor i spelet:</p>
        <ul>
          <list-item>
            <strong>Karisma:</strong> hur trevlig och omtyckt din spelare är.
            Detta kan påverka hur andra spelare reagerar på honom.
          </list-item>
          <list-item>
            <strong>Uthållighet:</strong> en uthållig spelare klarar av längre
            match-strider och kan dessutom ta fler löpningar.
          </list-item>
          <list-item>
            <strong>Teknik:</strong> en teknisk spelare behöver inte skjuta lika
            hårt för att placera bollen rätt och kan dessutom dribbla förbi
            försvarare.
          </list-item>
          <list-item>
            <strong>Styrka:</strong> en stark spelare kan hålla täcka boll
            bättre och skjuta hårdare.
          </list-item>
          <list-item>
            <strong>Spelförståelse:</strong> en stark spelförståelse höjer
            resten av truppens förmågor och sammanhållning. Förbättrad
            positionering.
          </list-item>
        </ul>
      </section>

      <section>
        <h3>Bonusar</h3>
        <p>
          Det finns en hel drös med bonusar en spelare kan ha beroende på
          erfarenhet och personlighet.
        </p>
        <ul>
          <list-item v-for="bonus in bonuses" :key="bonus.name">
            <strong>{{ bonus.name }}:</strong> {{ bonus.description }}
            <span v-if="bonus.attributes.length > 0"
              >({{ getAttributes(bonus) }})</span
            >
          </list-item>
        </ul>
      </section>
      <go-back />
    </div>
  </game-segment>
</template>

<script>
import GameSegment from "../components/GameSegment";
import { mapState } from "vuex";
import ListItem from "../components/ListItem";
import translateAttributes from "../helpers/translateAttributes";
import GoBack from "../components/go-back";
export default {
  name: "Help",
  components: { GoBack, ListItem, GameSegment },
  computed: {
    ...mapState({
      bonuses: state => state.bonuses
    })
  },
  methods: {
    getAttributes: function(bonus) {
      return bonus.attributes
        .map(attribute =>
          Object.keys(attribute)
            .map(
              attributeKey =>
                `${translateAttributes(attributeKey)}: ${
                  attribute[attributeKey] < 0 ? "-" : "+"
                }${attribute[attributeKey]}`
            )
            .join(", ")
        )
        .join();
    }
  }
};
</script>

<style lang="scss" scoped>
.help {
  margin: 1rem;

  section {
    margin-top: 1rem;
  }
}
</style>
