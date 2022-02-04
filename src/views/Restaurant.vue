// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Delia Nikolaus",
    tel: "1-233-571-4809",
    address: "0352 Dibbert Valleys",
    opening_hours: "08:00",
    description:
      "Fuga dolores autem officia odit corporis. Quam accusamus voluptas et. Voluptatem voluptatibus earum delectus omnis dolore possimus asperiores non veritatis. Consequatur cum ducimus autem voluptatem suscipit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=83.16462311027261",
    viewCounts: 1,
    createdAt: "2022-01-29T16:37:28.000Z",
    updatedAt: "2022-02-03T14:16:57.311Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 101,
        text: "Necessitatibus ut et ipsam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$sEPbZ1QFX8f24lHQ1X2ToOQ.WGCKZr9dcV7fKnw5ON3q6p8Jcoq46",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-29T16:37:28.000Z",
          updatedAt: "2022-01-29T16:37:28.000Z",
        },
      },
      {
        id: 1,
        text: "Rerum adipisci ea velit possimus a.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$WKBk6H5ed/.XKpuhIxn80eiGQJPGsh7MJ1jOvwSG7X.CYwLX.YVBC",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-29T16:37:28.000Z",
          updatedAt: "2022-01-29T16:37:28.000Z",
        },
      },
      {
        id: 51,
        text: "Officia qui impedit et.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$sOSQ4plGCHIlakLcbaQpceRHZ4xzsse0ZhIHgJHisELEvpLgy5aW6",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-29T16:37:28.000Z",
          updatedAt: "2022-01-29T16:37:28.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
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
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      // 解構賦值
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        text,
        UserId: 1,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
      });
    },
  },
};
</script>