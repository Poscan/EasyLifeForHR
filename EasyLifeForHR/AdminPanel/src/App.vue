<template>
  <div id="app">
      <UsersTable></UsersTable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UsersTable from "@/views/UsersTable.vue";

export default Vue.extend({
  components: {
    UsersTable,
  },
})
</script>

