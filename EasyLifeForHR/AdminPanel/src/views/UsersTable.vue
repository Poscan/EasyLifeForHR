<template>
  <div>
    <b-loading :active="isLoading" />
    <b-table :data="users" hoverable>
      <b-table-column field="mail" label="Почта" v-slot="props">
        {{ props.row.mail }}
      </b-table-column>

      <b-table-column
        field="limitRefundMoney"
        label="Лимит выплаты"
        v-slot="props"
      >
        <b-input v-model="props.row.limitRefundMoney" />
        <!-- {{props.row.limitRefundMoney}} -->
      </b-table-column>

      <b-table-column
        field="limitRefundMoney"
        label="Лимит выплаты"
        v-slot="props"
      >
        <b-input v-model="props.row.limitRefundMoney" />
        <!-- {{props.row.limitRefundMoney}} -->
      </b-table-column>

      <b-table-column>
        <div class="buttons">
          <b-button type="is-success is-light" label="Сохранить" />
        </div>
      </b-table-column>
    </b-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import User from "@/store/model/user";
import Service from "@/store/Service";
import { UserGroup } from "@/store/model/user";

export default Vue.extend({
  data() {
    return {
      users: Array<User>(),
      isLoading: false,
      roles: Array<UserGroup>(),
    };
  },

  methods: {
    async loadUsers() {
      this.isLoading = true;
      const response = await Service.GetUsers();
      this.users = response ?? new Array<User>();
      this.isLoading = false;
    },

    async loadUserGroups() {
      this.isLoading = true;

      this.isLoading = false;
    },
  },

  async mounted() {
    await this.loadUsers();
  },
});
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
