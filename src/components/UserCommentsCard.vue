<template>
  <div class="card">
    <!-- UserCommentsCard -->
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
        v-for="comment in comments"
        :key="comment.id"
        class="mr-1"
      >
        <img
          :src="comment.Restaurant.image"
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
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>