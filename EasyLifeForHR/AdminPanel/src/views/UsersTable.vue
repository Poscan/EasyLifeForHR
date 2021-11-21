<template>
  <div>
    <b-loading :active="isLoading" />

    <div>
      <b-button label="Работники" @click="pageIndex = 0" />
      <b-button label="Чеки" @click="pageIndex = 1" />
    </div>

    <b-table v-if="pageIndex == 0" :data="users" hoverable>
      <b-table-column field="mail" label="Почта" v-slot="props">
        {{ props.row.mail }}
      </b-table-column>

      <b-table-column field="role" label="Роль" v-slot="props">
        <b-select v-model="props.row.role">
          <option
            v-for="roleElement in roles"
            :key="roleElement.id"
            :value="roleElement"
          >
            {{ roleElement.name }}
          </option>
        </b-select>
      </b-table-column>

      <b-table-column
        field="limitRefundMoney"
        label="Лимит выплаты"
        v-slot="props"
      >
        <b-numberinput :controls="false" v-model="props.row.limitRefundMoney" />
      </b-table-column>

      <b-table-column v-slot="props">
        <div class="buttons">
          <b-button
            type="is-success is-light"
            label="Сохранить"
            @click="saveUser(props.row)"
          />
        </div>
      </b-table-column>
    </b-table>

    <b-table v-if="pageIndex == 1" :data="bills" hoverable>
      <b-table-column field="mail" label="Компания" v-slot="props">
        {{ props.row.name }}
      </b-table-column>

      <b-table-column field="amount" label="Сумма" v-slot="props">
        {{ props.row.amount }}
      </b-table-column>

      <b-table-column field="date" label="Дата оплаты по чеку" v-slot="props">
        {{ props.row.date.toLocaleDateString() }}
      </b-table-column>

      <b-table-column field="type" label="Тип" v-slot="props">
        {{ props.row.type.name }}
      </b-table-column>

      <b-table-column field="status" label="Статус" v-slot="props">
        {{ props.row.status.status }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import User from "@/store/model/user";
import Service from "@/store/Service";
import { UserGroup } from "@/store/model/user";
import Bill from "@/store/model/bill";

export default Vue.extend({
  data() {
    return {
      users: Array<User>(),
      isLoading: false,
      roles: Array<UserGroup>(),
      bills: Array<Bill>(),
      pageIndex: 0,
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
      const response = await Service.GetUserGroup();
      this.roles = response ?? new Array<User>();
      this.isLoading = false;
    },

    async loadBillsAll() {
      this.isLoading = true;
      const reponse = await Service.GetAllBill();
      this.bills = reponse ?? new Array<Bill>();
      this.isLoading = false;
    },

    async saveUser(user: User) {
      try {
        console.log(user);
        await Service.UpdateUser(user);
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    await this.loadUsers();
    await this.loadUserGroups();
    await this.loadBillsAll();
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
