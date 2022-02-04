// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorited(restaurant)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorited(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Telly Maggio",
      tel: "690-466-9185",
      address: "1063 Chesley Trail",
      opening_hours: "08:00",
      description: "Est facilis quia delectus eos reiciendis et offici",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.17072135722833",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Waldo Gusikowski",
      tel: "658-785-9500",
      address: "67521 Elisha Spurs",
      opening_hours: "08:00",
      description: "Iusto voluptas est praesentium harum modi explicab",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.15716045922627",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Henry Walsh",
      tel: "(003) 860-9187",
      address: "34187 Shanna Route",
      opening_hours: "08:00",
      description: "dolore rerum velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.34163564260751",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Leo King",
      tel: "(145) 570-8628 x9789",
      address: "0469 Wilderman Overpass",
      opening_hours: "08:00",
      description: "Dignissimos magni laborum quibusdam aliquam aperia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.09372790541131",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Jalon Wolf MD",
      tel: "302.391.1498 x534",
      address: "7648 Claire Shoals",
      opening_hours: "08:00",
      description: "et id et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.945119509709343",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Eliezer Mraz MD",
      tel: "031.761.7782 x8626",
      address: "3496 Zakary Courts",
      opening_hours: "08:00",
      description: "Quasi rerum consequatur eaque ipsam sint quaerat i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.47785205933614",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Jeanette Monahan",
      tel: "583.619.4722 x02971",
      address: "39529 Stehr Vista",
      opening_hours: "08:00",
      description: "Quia earum hic consequatur animi dignissimos volup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.13812493231363",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Kitty Denesik",
      tel: "688-764-1542",
      address: "16927 Coby Shoal",
      opening_hours: "08:00",
      description: "veniam corrupti perspiciatis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.23844673048477",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Amely Hagenes",
      tel: "1-919-122-7542 x8141",
      address: "4100 Liliana Freeway",
      opening_hours: "08:00",
      description: "eius",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.95300917476705",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Evelyn Veum",
      tel: "1-021-041-0390",
      address: "669 Daniel Islands",
      opening_hours: "08:00",
      description: "Ex assumenda non recusandae consequatur quidem lau",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.63147840305762",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      dummyData.restaurants.forEach((restaurant) => {
        let thisRestaurant = { ...restaurant };
        this.restaurants.push(thisRestaurant);
      });
    },
    addFavorited(restaurant) {
      restaurant.isFavorited = true;
    },
    removeFavorited(restaurant) {
      restaurant.isFavorited = false;
    },
  },
};
</script>