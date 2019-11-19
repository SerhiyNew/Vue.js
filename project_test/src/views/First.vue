<template>
  <div class="container">
    <h2>To view The List</h2>
    <router-link tag="button" class="btn btn-success" to="/second">Add new User</router-link>
    <hr />
    <table v-if="users[0]" class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">name</th>
          <th scope="col">surname</th>
          <th scope="col">phone</th>
          <th scope="col">email</th>
          <th scope="col">Edit info</th>
          <th scope="col">Delete user</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getUsers" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.surName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link tag="button" class="btn btn-primary" to="/second">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-primary" @click="delUser(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>There is no any data</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: []
  }),
  name: "first",
  created: function() {
    let _localStorage = JSON.parse(localStorage.getItem("users"));
    if (_localStorage) this.users = _localStorage;
  },
  methods: {
    synhronData: function() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    delUser: function(ind) {
      this.users.splice(ind, 1);
      this.synhronData();
    },
  },
  computed: {
    getUsers: function() {
      return this.users;
    }
  }
};
</script>
