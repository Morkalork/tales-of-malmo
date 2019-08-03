<template>
  <div class="fight-scene">
    <p><strong>Bråk!</strong></p>
    <p>
      Du hamnar i ett bråk och ni ställer upp på följande sätt:
    </p>
    <ul>
      <list-item v-for="member in this.squad" :key="member.id">{{
        member.name
      }}</list-item>
    </ul>
    <p>
      Framför er så står en grupp frustande motståndare, de kommer ifrån
      {{ this.fullAssociations }} och ställer upp så här:
    </p>
    <ul>
      <list-item v-for="enemy in this.enemies" :key="enemy.id">{{
        enemy.name
      }}</list-item>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import random from "../../helpers/random";
import ListItem from "../ListItem";

export default {
  name: "FightScene",
  components: { ListItem },
  props: {
    enemyLevel: Number,
    associations: Array,
    squad: Array
  },
  computed: {
    ...mapState({
      enemyRooster: state => state.enemies,
      availableAssociations: state => state.associations
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
          )
        }));

      const enemyTroops = [];
      for (let i = 0; i < this.squad.length; i++) {
        const index = random(0, availableEnemies.length - 1);
        enemyTroops.push(availableEnemies[index]);
        availableEnemies.splice(index, 1);
      }

      return enemyTroops;
    }
  }
};
</script>

<style lang="scss" scoped>
.fight-scene {
  ul {
    margin: 1rem 0;
  }
}
</style>
