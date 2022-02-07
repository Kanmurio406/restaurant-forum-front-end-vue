<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>
            <span v-if="user.isAdmin">admin</span><span v-else>user</span>
          </td>
          <td>
            <template v-if="user.id !== currentUserId">
              <button
                v-if="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="setUser(user.id)"
              >
                set as user
              </button>
              <button
                v-else
                type="button"
                class="btn btn-link"
                @click.stop.prevent="setAdmin(user.id)"
              >
                set as admin
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$sEPbZ1QFX8f24lHQ1X2ToOQ.WGCKZr9dcV7fKnw5ON3q6p8Jcoq46",
      isAdmin: true,
      image: "https://randomuser.me/api/portraits/lego/7.jpg",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$WKBk6H5ed/.XKpuhIxn80eiGQJPGsh7MJ1jOvwSG7X.CYwLX.YVBC",
      isAdmin: false,
      image: "https://randomuser.me/api/portraits/lego/0.jpg",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$sOSQ4plGCHIlakLcbaQpceRHZ4xzsse0ZhIHgJHisELEvpLgy5aW6",
      isAdmin: false,
      image: "https://randomuser.me/api/portraits/lego/8.jpg",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUserId: -1,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.users = dummyData.users;
      this.currentUserId = dummyUser.currentUser.id;
    },
    setUser(id) {
      this.users = this.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isAdmin: false,
          };
        }
        return user;
      });
    },
    setAdmin(id) {
      this.users = this.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isAdmin: true,
          };
        }
        return user;
      });
    },
  },
};
</script>