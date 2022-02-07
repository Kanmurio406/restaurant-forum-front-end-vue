<template>
  <div class="row no-gutters">
    <!-- User Profile Card -->
    <div class="col-md-4">
      <img :src="this.profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.name }}</h5>
        <p class="card-text">{{ this.profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ this.profile.commentsLength }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ this.profile.favoritedRestaurantsLength }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ this.profile.followingsLength }}</strong> followings
            (追蹤者)
          </li>
          <li>
            <strong>{{ this.profile.followersLength }}</strong> followers
            (追隨者)
          </li>
        </ul>
        <p></p>
        <form v-if="checkCurrentUser" action="">
          <router-link :to="{ name: 'user-edit', params: { id: routeUserId } }"
            ><button type="button" class="btn btn-primary">
              Edit
            </button></router-link
          >
        </form>
        <form
          v-else
          action="/following/3"
          method="POST"
          style="display: contents"
        >
          <button
            v-if="isFollowed"
            @click.stop.prevent="deleteFollowing"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            @click.stop.prevent="addFollowing"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
    // get route params id for Edit
    routeUserId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
      isCurrentUser: false,
    };
  },
  methods: {
    addFollowing() {
      this.isFollowed = true;
    },
    deleteFollowing() {
      this.isFollowed = false;
    },
  },
  computed: {
    checkCurrentUser() {
      return this.currentUserId === this.profile.id ? true : false;
    },
  },
};
</script>