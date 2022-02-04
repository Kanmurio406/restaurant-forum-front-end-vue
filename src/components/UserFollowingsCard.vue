<template>
  <div class="card">
    <!-- UserFollowingsCard -->
    <div class="card-header"><strong>{{this.followings.length}}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link :to="{ name: 'user', params: { id: following.id } }" class="mr-1" v-for="following in followings" :key="following.id">
        <img
          :src="following.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      required: true
    }
  }
}
</script>