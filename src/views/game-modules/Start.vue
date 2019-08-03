<template>
  <game-segment
    @onButtonClick="onActionClick"
    :buttons="buttons"
    :stay-down="true"
  >
    <div class="game--start" v-if="map">
      <p><em>Och spelet tar sin början...</em></p>
      <br />
      <section
        class="game--start-segment"
        v-for="(s, stageIndex) in stages"
        :key="stageIndex"
      >
        <p v-for="(line, index) in getStageLines(s)" :key="index">{{ line }}</p>
        <br />
        <event
          v-if="stageEventActive"
          :event-type="s.event"
          :associations="s.associations"
          :enemy-level="s.enemyLevel"
          :squad="squad"
        />
      </section>
    </div>
  </game-segment>
</template>

<script>
import { mapActions, mapState } from "vuex";
import format from "string-format";
import GameSegment from "../../components/GameSegment";
import Event from "../../components/Event";

export default {
  name: "Start",
  components: { Event, GameSegment },
  data() {
    return {
      stages: [],
      stageEventActive: false,
      buttons: [
        {
          title: ""
        }
      ]
    };
  },
  methods: {
    ...mapActions(["setCurrentStage"]),
    onActionClick: function() {
      if (this.stage.event !== "continue") {
        this.stageEventActive = true;
      }
    },
    getStageLines(stage) {
      const data = {
        player1: this.squad[0].name,
        player2: this.squad[1].name,
        groupType: this.stage.groupType
      };
      return stage.description.map(line => format(line, data));
    },
    addStage(newStage) {
      this.stageEventActive = false;
      this.buttons[0].title = newStage.next;
      this.stages.push(newStage);
    }
  },
  computed: {
    ...mapState({
      map: state => state.story.maps.find(map => map.component === "start"),
      currentStage: state => state.story.currentStage,
      squad: state => state.squad.players
    }),
    stage: function() {
      return this.map ? this.map.stages[this.currentStage] : {};
    }
  },
  watch: {
    map: {
      immediate: true,
      handler: function(newMap) {
        if (newMap) {
          this.addStage(newMap.stages[this.currentStage]);
        }
      }
    },
    currentStage: function(newCurrentStage) {
      this.addStage(this.map.stages[newCurrentStage]);
    }
  }
};
</script>

<style lang="scss" scoped></style>
