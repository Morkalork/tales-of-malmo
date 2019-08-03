<template>
  <div class="top-menu">
    <nav>
      <ul>
        <li>
          <router-link to="/share"
            >Dela! <i class="fas fa-share-alt"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/help"
            >Hjälp! <i class="fas fa-ambulance"></i
          ></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.top-menu {
  height: 5vh;
  nav {
    margin: 0.25rem 1rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px $white solid;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      li {
        margin-left: 1rem;
        a {
          color: $white;
          text-transform: uppercase;
        }
        &:not(:last-child)::after {
          content: "|";
          color: $white;
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>
