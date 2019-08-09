<template>
  <div class="fight-scene">
    <h3>Bråk!</h3>
    <p>
      Du hamnar i en spontan-match och ni ställer upp på följande sätt:
    </p>
    <div class="fighters">
      <player-select
        v-for="member in this.squad"
        :key="member.id"
        :player="member"
        :is-selected="true"
        :hide-check="true"
      />
    </div>
    <p>
      Framför er så står en grupp frustande motståndare, de kommer ifrån
      {{ this.fullAssociations }} och ställer upp så här:
    </p>
    <div class="fighters">
      <player-select
        v-for="enemy in this.enemies"
        :key="enemy.id"
        :player="enemy"
        :is-selected="true"
        :hide-check="true"
      />
    </div>
    <div class="sequences" v-if="sequences.length > 0">
      <h3>Referat:</h3>
      <fight-sequence
        v-for="(sequence, index) in sequences"
        :key="index"
        :line="sequence.line"
        :score="sequence.score"
        :attribute="sequence.attribute"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import random from "../../helpers/random";
import PlayerSelect from "../Player/PlayerSelect";
import generateAttributes from "../../helpers/generateAttributes";
import calculateFight from "../../helpers/calculate-fight";
import FightSequence from "./FightSequence";

export default {
  name: "FightScene",
  components: { FightSequence, PlayerSelect },
  props: {
    enemyLevel: Number,
    associations: Array,
    squad: Array
  },
  data() {
    return {
      sequences: []
    };
  },
  computed: {
    ...mapState({
      enemyRooster: state => state.enemies,
      availableAssociations: state => state.associations,
      isFighting: state => state.fight.isFighting,
      actions: state => state.fight.actions,
      inactions: state => state.fight.inactions
    }),
    fullAssociations: function() {
      return this.availableAssociations
        .filter(aa => this.associations.includes(aa.name))
        .map(a => a.fullName)
        .join(" och ");
    },
    enemies: function() {
      const availableEnemies = this.enemyRooster
        .filter(
          e =>
            e.level === this.enemyLevel &&
            this.associations.includes(e.association)
        )
        .map(e => ({
          ...e,
          associationData: this.availableAssociations.find(
            aa => aa.name === e.association
          ),
          attributes: generateAttributes(e.attributeTotal)
        }));

      const enemyTroops = [];
      for (let i = 0; i < this.squad.length; i++) {
        const index = random(0, availableEnemies.length - 1);
        enemyTroops.push(availableEnemies[index]);
        availableEnemies.splice(index, 1);
      }

      return enemyTroops;
    }
  },
  methods: {
    ...mapActions(["activateAutoScroll", "deactivateAutoScroll"]),
    executeFight: function(sequences) {
      const [sequence] = sequences.splice(0, 1);

      console.log("SEQUENCES: ", this.sequences);
      this.sequences.push(sequence);

      if (sequences.length > 0) {
        setTimeout(() => this.executeFight(sequences), 3000);
      } else {
        this.deactivateAutoScroll();
      }
    }
  },
  watch: {
    isFighting: function(newValue, oldValue) {
      if (newValue && !oldValue) {
        this.activateAutoScroll();
        const sequences = calculateFight(
          this.squad,
          this.enemies,
          10,
          this.actions,
          this.inactions
        );

        this.executeFight(sequences);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.fight-scene {
  .fighters {
    display: flex;
    margin: 1rem 0;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/deep/ .fight-sequence {
  &:last-child {
    .icon {
      animation: 3s spin;
      color: black;
    }
  }
}
</style>
