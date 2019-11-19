<template>
  <div class="container">
    <h1>To edit The List</h1>
    <hr />
    <table v-if="hasAnyData" class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">name</th>
          <th scope="col">surname</th>
          <th scope="col">phone</th>
          <th scope="col">email</th>
          <th scope="col">edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getUsers" :key="index">
          <td>
            <input v-model="item.name" type="text" />
          </td>
          <td>
            <input v-model="item.surName" type="text" />
          </td>
          <td>
            <input v-model="item.phone" type="text" />
          </td>
          <td>
            <input v-model="item.email" type="text" />
          </td>
          <td>
            <button class="btn btn-primary" @click="editUser(index)">Edit</button>
          </td>
        </tr>
        <tr>
          <td>
            <input v-model="newUser.name" type="text" />
          </td>
          <td>
            <input v-model="newUser.surName" type="text" />
          </td>
          <td>
            <input v-model="newUser.phone" type="text" />
          </td>
          <td>
            <input v-model="newUser.email" type="text" />
          </td>
          <td>
            <button class="btn btn-success" @click="addUser">create</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>There is no data to edit</p>
      <p>Please, enter a new user</p>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">name</th>
            <th scope="col">surname</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input v-model="newUser.name" type="text" />
            </td>
            <td>
              <input v-model="newUser.surName" type="text" />
            </td>
            <td>
              <input v-model="newUser.phone" type="text" />
            </td>
            <td>
              <input v-model="newUser.email" type="text" />
            </td>
            <td>
              <button class="btn btn-success" @click="addUser">create</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Or enter a JSON string into the form</p>
    </div>
    <input size="100px" placeholder="import JSON string" v-model="fulldata" />
    <button class="btn btn-success" @click="parse">parse</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [],
    newUser: {},
    fulldata: []
  }),
  computed: {
    getUsers: function() {
      this.users = JSON.parse(localStorage.getItem("users"));
      return this.users;
    }
  },
  methods: {
    synhronData: function() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    addUser: function() {
      this.users = this.users || [];
      this.users.push(this.newUser);
      this.synhronData();
      this.newUser = {};
    },
    editUser: function(ind) {
      localStorage.setItem("users", JSON.stringify(this.users));
      this.synhronData();
    },
    parse: function() {
      localStorage.setItem("users", this.fulldata);
      this.users = JSON.parse(this.fulldata);
    },
    hasAnyData: function() {
      return JSON.parse(localStorage.getItem("users")).length > 0
        ? true
        : false;
    }
  }
};
</script>