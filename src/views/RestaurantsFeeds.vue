// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import NewestRestaurants from "./../components/NewestRestaurants.vue";
import NewestComments from "./../components/NewestComments.vue";
// 確認./..的用法
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Delia Nikolaus",
      tel: "1-233-571-4809",
      address: "0352 Dibbert Valleys",
      opening_hours: "08:00",
      description:
        "Fuga dolores autem officia odit corporis. Quam accusamus voluptas et. Voluptatem voluptatibus earum delectus omnis dolore possimus asperiores non veritatis. Consequatur cum ducimus autem voluptatem suscipit.",
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
    },
    {
      id: 3,
      name: "Colin Fahey IV",
      tel: "1-872-768-5095",
      address: "148 Champlin Skyway",
      opening_hours: "08:00",
      description:
        "Fugiat facilis tenetur eveniet magnam vero facilis enim veritatis.",
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
    },
    {
      id: 5,
      name: "Rigoberto Ritchie",
      tel: "(878) 816-8296",
      address: "4270 Funk Spring",
      opening_hours: "08:00",
      description:
        "Quasi sint hic atque ratione. Voluptatem expedita laborum qui. Architecto sapiente a magnam consequatur quibusdam dolor sed ducimus voluptatem. Ea labore rem qui hic voluptas voluptas quod doloremque ab. Quia quae itaque autem enim praesentium dolorem.",
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
    },
    {
      id: 6,
      name: "Mrs. Sammie Hermiston",
      tel: "(207) 067-9529 x190",
      address: "161 Troy Heights",
      opening_hours: "08:00",
      description:
        "Magni voluptates provident. Ullam nemo voluptatibus occaecati dolorum ratione voluptate iste. Voluptatem sint veniam blanditiis aut qui ut repellendus beatae. Reprehenderit ut saepe. Molestiae quis consequuntur nam cum earum.\n \rFugiat et voluptate. Sunt et ducimus et veritatis magnam at quis dolorem ut. Modi sunt molestias et architecto id dignissimos ducimus occaecati. Quod veniam architecto veritatis aut saepe id quas. Dolores doloribus impedit iure quia ratione voluptate. Quae est ducimus et.\n \rNemo deleniti modi id officiis non inventore sed error. Consectetur dolorem possimus et quisquam aliquam. Tenetur aut architecto. Vitae deleniti accusamus labore voluptatum id.",
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
    },
    {
      id: 7,
      name: "Izabella Armstrong PhD",
      tel: "865-547-3674 x00312",
      address: "99879 Tanya Isle",
      opening_hours: "08:00",
      description:
        "Eos quam enim aut et.\nEsse aut quia voluptate nesciunt et reiciendis ipsam voluptates est.",
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
    },
    {
      id: 8,
      name: "Judge Nitzsche",
      tel: "095.297.0111 x668",
      address: "49091 Beer Court",
      opening_hours: "08:00",
      description:
        "Consequuntur ut consequatur dolorum incidunt sed illo et excepturi voluptas. Id debitis error commodi dolore eveniet magni expedita omnis. Qui libero voluptates sequi corrupti nisi delectus ab impedit. Natus ea cumque sunt illum nihil error ab. Et numquam rem tempora alias quidem magni maxime dolores. Aut sint voluptas totam commodi provident.\n \rAd explicabo quasi et sequi. Rerum rerum minus saepe odit ullam tenetur soluta. Expedita explicabo eos ut eos. A doloremque quas error libero impedit est et. Id illo nulla fugiat voluptatem maiores rerum quia et.\n \rSit quod sunt ea consequatur voluptatibus molestiae nihil autem pariatur. Iure ea deserunt ut nulla tempora. Dolorem asperiores excepturi et. Omnis necessitatibus quia id veritatis aut accusantium cum. Consequuntur voluptas et laborum. Est animi voluptates non fuga velit ea reiciendis sunt animi.",
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
    },
    {
      id: 9,
      name: "Justen Bednar",
      tel: "(974) 201-4185 x74265",
      address: "569 Bartell Spring",
      opening_hours: "08:00",
      description:
        "Labore placeat facere aliquid. Repellat error non repellendus iure tenetur sed. Dolores labore illo impedit harum ut rerum cupiditate. Eos tenetur voluptates corrupti nihil tempore quo. Enim vero iusto quasi laudantium labore error eligendi. Et et quaerat.",
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
    },
    {
      id: 10,
      name: "Javier Lebsack",
      tel: "862.530.5943 x991",
      address: "19204 Olen Tunnel",
      opening_hours: "08:00",
      description:
        "Magnam inventore repellat totam facilis autem aut consequuntur. Veniam hic architecto et ipsam commodi quis molestias enim. Saepe a dicta maxime aut voluptatum iusto debitis ut. Quasi error placeat veniam.",
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
    },
  ],
  comments: [
    {
      id: 11,
      text: "Placeat reprehenderit id nam est.",
      UserId: 1,
      RestaurantId: 11,
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
      Restaurant: {
        id: 11,
        name: "Belle Lebsack",
        tel: "1-088-148-2115 x1064",
        address: "98095 King Village",
        opening_hours: "08:00",
        description:
          "Possimus fugit qui quam possimus cupiditate porro aut dignissimos molestiae. Libero autem tempora saepe. Ratione rerum nesciunt quos sed ut reprehenderit nemo ipsa qui.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=94.13540856624492",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 47,
      text: "Quae voluptas facilis ducimus quia optio pariatur.",
      UserId: 1,
      RestaurantId: 47,
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
      Restaurant: {
        id: 47,
        name: "Leo King",
        tel: "(145) 570-8628 x9789",
        address: "0469 Wilderman Overpass",
        opening_hours: "08:00",
        description:
          "Dignissimos magni laborum quibusdam aliquam aperiam qui. Voluptas quam tempora sint et nemo optio enim. Cum voluptatibus aspernatur dolores similique rerum molestiae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=23.09372790541131",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 68,
      text: "Totam omnis vero iusto recusandae expedita magnam.",
      UserId: 1,
      RestaurantId: 18,
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
      Restaurant: {
        id: 18,
        name: "Mrs. Christopher Goyette",
        tel: "1-447-562-8811 x53787",
        address: "765 Russell Point",
        opening_hours: "08:00",
        description: "Suscipit voluptatum eligendi dolores rerum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=11.421073062436292",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 98,
      text: "Ratione laborum enim voluptas animi sint mollitia reiciendis.",
      UserId: 1,
      RestaurantId: 48,
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
      Restaurant: {
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
      },
    },
    {
      id: 119,
      text: "Magni animi alias sed quisquam dicta natus nobis tempora.",
      UserId: 1,
      RestaurantId: 19,
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
      Restaurant: {
        id: 19,
        name: "Webster Kuhn",
        tel: "1-388-972-8766 x05633",
        address: "3296 Roxane Mountains",
        opening_hours: "08:00",
        description: "hic",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=3.8104530266109826",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 147,
      text: "Vero ut facilis praesentium culpa consectetur ipsum tempora.",
      UserId: 1,
      RestaurantId: 47,
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
      Restaurant: {
        id: 47,
        name: "Leo King",
        tel: "(145) 570-8628 x9789",
        address: "0469 Wilderman Overpass",
        opening_hours: "08:00",
        description:
          "Dignissimos magni laborum quibusdam aliquam aperiam qui. Voluptas quam tempora sint et nemo optio enim. Cum voluptatibus aspernatur dolores similique rerum molestiae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=23.09372790541131",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 18,
      text: "Quia sit eaque maiores est esse tenetur odio.",
      UserId: 2,
      RestaurantId: 18,
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
      Restaurant: {
        id: 18,
        name: "Mrs. Christopher Goyette",
        tel: "1-447-562-8811 x53787",
        address: "765 Russell Point",
        opening_hours: "08:00",
        description: "Suscipit voluptatum eligendi dolores rerum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=11.421073062436292",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 44,
      text: "Rerum culpa adipisci quis id.",
      UserId: 2,
      RestaurantId: 44,
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
      Restaurant: {
        id: 44,
        name: "Jeanette Monahan",
        tel: "583.619.4722 x02971",
        address: "39529 Stehr Vista",
        opening_hours: "08:00",
        description:
          "Quia earum hic consequatur animi dignissimos voluptatem fugiat.\nIn fuga doloremque quia.\nCulpa aut ea.\nDolores sunt voluptatem doloremque.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=57.13812493231363",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 69,
      text: "Qui voluptatem nam ipsum aut maxime.",
      UserId: 2,
      RestaurantId: 19,
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
      Restaurant: {
        id: 19,
        name: "Webster Kuhn",
        tel: "1-388-972-8766 x05633",
        address: "3296 Roxane Mountains",
        opening_hours: "08:00",
        description: "hic",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=3.8104530266109826",
        viewCounts: 0,
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 92,
      text: "Qui cupiditate dolores voluptatem sapiente.",
      UserId: 2,
      RestaurantId: 42,
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
      Restaurant: {
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
      },
    },
  ],
};
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text);
    },
  },
};
</script>