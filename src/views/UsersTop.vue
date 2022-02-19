// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowing(user.id)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
// import { statusCheckMethod } from "./../utils/mixins";

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
export default {
  // mixins: [statusCheckMethod],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        this.users = data.users.map((user, ID) => ({
          id: user.id,
          name: user.name,
          // 圖片為null，以假資料暫時代替
          image: dummyData.users[ID].image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        // statusCheck(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
    // stopFollow(user) {
    //   user.isFollowed = false;
    // },
  },
};
</script>