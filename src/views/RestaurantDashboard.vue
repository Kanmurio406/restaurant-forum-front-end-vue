<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
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
    updatedAt: "2022-02-03T14:16:57.000Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
    },
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
};

export default {
  data() {
    return {
      restaurant: dummyData.restaurant,
    };
  },
};
</script>