// ./src/components/RestaurantCard.vue
<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category ? restaurant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          @click.stop.prevent="removeFavorited"
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          @click.stop.prevent="addFavorited"
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>
        <button
          @click.stop.prevent="removeLiked"
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          @click.stop.prevent="addLiked"
          v-else
          type="button"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    addFavorited() {
      // this.restaurant.isFavorited = true;
      // 直接這樣改的話，initialRestaurant的資料也會被改到，因為指向的儲存位置其實是一樣的
      this.restaurant = {
        // 展開並複製this.restaurant，更改isFavorited然後回傳
        ...this.restaurant,
        isFavorited: true,
      };
      // 展開並複製的做法，可以保留原本initialRestaurant的資料不被改動
    },
    removeFavorited() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
    addLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
    removeLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    },
  },
};
</script>