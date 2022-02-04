// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="prevPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from "./../components/RestaurantCard.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "./../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Delia Nikolaus",
      tel: "1-233-571-4809",
      address: "0352 Dibbert Valleys",
      opening_hours: "08:00",
      description: "Fuga dolores autem officia odit corporis. Quam acc",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.16462311027261",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Dr. Kadin Koepp",
      tel: "1-509-857-3760",
      address: "204 Karolann Path",
      opening_hours: "08:00",
      description: "cupiditate nihil aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.07619689497636",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Colin Fahey IV",
      tel: "1-872-768-5095",
      address: "148 Champlin Skyway",
      opening_hours: "08:00",
      description: "Fugiat facilis tenetur eveniet magnam vero facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.15913899043977",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Virgil Prohaska",
      tel: "458-545-4402",
      address: "22918 Schamberger Knolls",
      opening_hours: "08:00",
      description: "laudantium rerum velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.93308817007764",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Rigoberto Ritchie",
      tel: "(878) 816-8296",
      address: "4270 Funk Spring",
      opening_hours: "08:00",
      description: "Quasi sint hic atque ratione. Voluptatem expedita ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.10074255928581",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Mrs. Sammie Hermiston",
      tel: "(207) 067-9529 x190",
      address: "161 Troy Heights",
      opening_hours: "08:00",
      description: "Magni voluptates provident. Ullam nemo voluptatibu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.803164348225674",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Izabella Armstrong PhD",
      tel: "865-547-3674 x00312",
      address: "99879 Tanya Isle",
      opening_hours: "08:00",
      description: "Eos quam enim aut et.\nEsse aut quia voluptate nesc",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.65311294775352",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Judge Nitzsche",
      tel: "095.297.0111 x668",
      address: "49091 Beer Court",
      opening_hours: "08:00",
      description: "Consequuntur ut consequatur dolorum incidunt sed i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.51125050429622",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Justen Bednar",
      tel: "(974) 201-4185 x74265",
      address: "569 Bartell Spring",
      opening_hours: "08:00",
      description: "Labore placeat facere aliquid. Repellat error non ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.300304085783424",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Javier Lebsack",
      tel: "862.530.5943 x991",
      address: "19204 Olen Tunnel",
      opening_hours: "08:00",
      description: "Magnam inventore repellat totam facilis autem aut ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.51247227610506",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};
export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      prevPage: 1,
      nextPage: 2,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.prevPage = prev;
      this.nextPage = next;
    },
  },
};
</script>