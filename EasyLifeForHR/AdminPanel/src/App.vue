<template>
  <div id="app">
    <router-link to="/" replace>
      <UsersTable></UsersTable>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UsersTable from "@/views/UsersTable.vue";

export default Vue.extend({
  components: {
    UsersTable,
  },
});
</script>
