<template>
  <game-segment @onButtonClick="onActionClick" :buttons="buttons">
    <div class="game--start" v-if="map">
      <p><em>Och spelet tar sin början...</em></p>
      <br />
      <section class="game--start-segment">
        <p v-for="(line, index) in getStageLines(stage)" :key="index">
          {{ line }}
        </p>
        <br />
        <event
          v-if="stageEventActive"
          :event-type="stage.event"
          :associations="stage.associations"
          :enemy-level="stage.enemyLevel"
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
    ...mapActions(["setCurrentStage", "startFighting"]),
    onActionClick: function() {
      if (this.stage.event === "continue") {
        // Do something
        console.log("continue!");
      } else if (!this.stageEventActive) {
        this.stageEventActive = true;
        this.buttons[0].title = "Aktivera!";
      } else if (this.stageEventActive) {
        switch (this.stage.event) {
          case "fight":
            this.startFighting();
            break;
          default:
            break;
        }
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
