// ./src/components/AdminRestaurantsTable.vue
<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 12,
      name: "Emmalee Mante",
      tel: "(378) 291-6375 x773",
      address: "5349 Cortez Light",
      opening_hours: "08:00",
      description: "laboriosam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.80934171554628",
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
      id: 13,
      name: "Jessyca Hintz",
      tel: "(590) 602-9770 x54930",
      address: "7154 Ashton Lodge",
      opening_hours: "08:00",
      description:
        "Deserunt praesentium soluta commodi optio sunt quis sequi non.\nAssumenda eveniet et sit dolor.\nConsequuntur dolor quisquam ut ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.10628481820255",
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
      id: 14,
      name: "Dudley McLaughlin",
      tel: "586.282.3179 x14983",
      address: "9665 Delfina Village",
      opening_hours: "08:00",
      description:
        "Non autem sint qui.\nNon itaque ipsam pariatur vitae nam consequatur voluptatem nobis voluptatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.72755383946277",
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
      id: 15,
      name: "Kaleb Gerhold",
      tel: "1-502-829-9186 x56326",
      address: "7832 Lia Stream",
      opening_hours: "08:00",
      description:
        "Quisquam et illum quibusdam doloribus quia dolorem voluptas repellendus quasi.\nNecessitatibus est rem qui.\nAliquid numquam distinctio maiores dolor animi aut et.\nReprehenderit ducimus dolore et repellendus accusantium cupiditate ut repudiandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.14405800339114",
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
      id: 16,
      name: "Alexandro Kunde",
      tel: "195.603.3961 x065",
      address: "0928 Lemke Tunnel",
      opening_hours: "08:00",
      description: "voluptatem rem quibusdam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.38541512453246",
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
      id: 17,
      name: "Erna Trantow",
      tel: "1-093-846-5213 x29561",
      address: "967 Steuber Coves",
      opening_hours: "08:00",
      description:
        "Et nisi ea velit et.\nVoluptas rerum ut aut.\nExplicabo sed est facilis explicabo quo sint.\nIpsam debitis earum et voluptates distinctio exercitationem ut incidunt quidem.\nEa ut sed laborum qui omnis dolor cumque sapiente.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.651841627703384",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 20,
      name: "Domingo Brekke",
      tel: "(875) 027-0095",
      address: "90792 Prosacco Locks",
      opening_hours: "08:00",
      description:
        "Assumenda necessitatibus qui autem. Quae enim ut inventore nihil ut omnis molestias ut. Reprehenderit dolorem at in quidem laboriosam quae laboriosam. Illo et corrupti. Ad ex a necessitatibus ea sed. Quae exercitationem sit.\n \rQuis sapiente distinctio nemo eveniet. Dignissimos ea et eligendi nesciunt aliquam tempora soluta consequatur doloribus. Est dicta dolorem temporibus quis aliquid ut expedita. Numquam ab velit cum occaecati fugit dolorem alias blanditiis. Ut cumque sit et nam. Et laborum ipsam accusantium ut qui voluptas facere sit.\n \rSint fuga suscipit qui eos pariatur corrupti perspiciatis quia. Beatae rerum inventore quasi. Voluptates quos illum ex laborum. Voluptatem architecto sed qui provident magni fugit quia ut. Autem quae nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.7043385686054",
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
      id: 21,
      name: "Felipe Barrows",
      tel: "912-141-2267 x754",
      address: "536 Anderson Route",
      opening_hours: "08:00",
      description:
        "Assumenda ducimus necessitatibus. Est vitae in. Non rem dignissimos debitis nihil. Omnis expedita sint doloribus incidunt soluta debitis. Illo quia architecto cum quis quibusdam sit in.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.8133134027449",
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
      id: 22,
      name: "Judy Jacobson",
      tel: "286-033-2253",
      address: "128 Pouros Lock",
      opening_hours: "08:00",
      description:
        "Ad nihil omnis.\nRerum doloremque saepe doloribus repellendus esse recusandae.\nRecusandae reiciendis omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.76805255342474",
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
      id: 23,
      name: "Letha Nader",
      tel: "1-255-350-5229 x570",
      address: "65978 Mohr Bypass",
      opening_hours: "08:00",
      description:
        "Dolore nisi omnis non accusantium aliquid repellendus non hic.\nVel voluptatem illo at enim accusamus.\nQuo quia quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.620710275599745",
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
      id: 24,
      name: "Angelita Treutel",
      tel: "883.061.4021 x853",
      address: "4532 Daugherty Underpass",
      opening_hours: "08:00",
      description: "sit magnam hic",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.44296160664077",
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
      id: 25,
      name: "Hudson Franecki",
      tel: "1-280-621-0359 x6528",
      address: "75413 Bernier Fork",
      opening_hours: "08:00",
      description: "Sunt consequatur a.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.09749712300561",
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
      id: 26,
      name: "Alycia Thompson DVM",
      tel: "(481) 132-1897",
      address: "2529 Schoen Centers",
      opening_hours: "08:00",
      description: "in sit aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.93355739635787",
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
      id: 27,
      name: "Micah Reinger",
      tel: "490.025.6874",
      address: "2861 Bahringer Dale",
      opening_hours: "08:00",
      description:
        "Qui ut nam. Quo autem earum adipisci aperiam corrupti quia non tempore dolores. Dolor officiis aut. Harum molestiae velit quaerat error. Voluptatem sapiente asperiores ipsam laboriosam quos.\n \rNihil quo blanditiis omnis nihil omnis. Et est quia necessitatibus qui hic optio. Voluptatum est illo quisquam totam tempora aut. Quae doloremque nulla ducimus eveniet. Exercitationem harum inventore magni debitis voluptatem sed.\n \rRerum debitis consequatur accusamus. Cum rerum quis ratione aspernatur aut qui veritatis maiores. Aut veniam culpa aspernatur consectetur aut. Hic rerum aut impedit omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.40434809734612",
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
      id: 28,
      name: "Paula Ferry",
      tel: "443.734.3138 x859",
      address: "779 Predovic Brooks",
      opening_hours: "08:00",
      description: "Saepe vero eum ipsum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.85140570190152",
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
      id: 29,
      name: "Carolyn Waelchi",
      tel: "708.283.7414 x879",
      address: "87682 Winston Spurs",
      opening_hours: "08:00",
      description:
        "Qui provident voluptas laboriosam ut.\nAliquid illo neque.\nIn consectetur alias expedita occaecati animi enim temporibus.\nIste ducimus dolorum.\nVoluptatem alias totam omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.27448697025551",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 30,
      name: "Brionna Muller",
      tel: "553-094-0597",
      address: "4080 Rosalind Plains",
      opening_hours: "08:00",
      description: "similique ipsa eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.865972786225242",
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
      id: 31,
      name: "Frankie Glover",
      tel: "857-881-1786",
      address: "517 Jane Flats",
      opening_hours: "08:00",
      description:
        "Labore esse maiores inventore nihil ducimus sit voluptas. Itaque sit sed laborum accusamus. Voluptatem nihil amet a qui et. Quia soluta minima dolorum sint enim aut provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.70613200248471",
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
      id: 32,
      name: "Lizzie Harber",
      tel: "536-588-1741",
      address: "9502 Considine Grove",
      opening_hours: "08:00",
      description: "nihil rem eveniet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.85649426021199",
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
      id: 33,
      name: "Taurean Baumbach",
      tel: "754.133.0188",
      address: "3231 Nasir Mill",
      opening_hours: "08:00",
      description: "Tenetur qui voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.18488622171566",
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
      id: 34,
      name: "Katheryn Steuber",
      tel: "1-348-786-4778",
      address: "3336 Bernice Alley",
      opening_hours: "08:00",
      description:
        "Et cum aut quo sunt. Enim est ut nisi ut quasi. Omnis aut reprehenderit enim aut officia consequatur iure. Molestiae temporibus repellat. Beatae dolor et rerum quo ratione possimus neque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.80469172282059",
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
      id: 35,
      name: "Bo Hills",
      tel: "613.841.6897",
      address: "952 Toy Flat",
      opening_hours: "08:00",
      description:
        "Et veniam quisquam ipsa dolore voluptatem. Reprehenderit et fugiat quia vel libero dolorem similique eius. Perspiciatis tempore sed ut est eaque. Enim fugit amet asperiores eos nisi dolorem labore sint.\n \rSimilique animi ipsa qui. Ipsum dolor molestiae voluptatem tenetur. Rerum nisi voluptas illum. Ex sed qui. Illo voluptas est molestias repudiandae pariatur illo.\n \rUt tempora cum. Perferendis nihil blanditiis rerum distinctio illo amet excepturi aliquid hic. Qui quo incidunt voluptatibus expedita. Aut repellat libero quibusdam et illum velit illo architecto. Commodi minus nostrum libero laudantium consequatur quisquam possimus itaque quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.50267364727782",
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
      id: 36,
      name: "Marvin Morissette",
      tel: "(352) 335-3417 x4688",
      address: "994 Zachery Rest",
      opening_hours: "08:00",
      description:
        "In eos ducimus labore voluptas porro voluptatem quo. Voluptas nesciunt iusto tempore ut qui nemo officiis dicta dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.55168241429526",
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
      id: 37,
      name: "Mossie Jacobi",
      tel: "1-351-028-9633",
      address: "4854 Steuber Extensions",
      opening_hours: "08:00",
      description:
        "Aliquid dolore pariatur ut veritatis itaque similique sequi odit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.39001747505892",
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
      id: 38,
      name: "Valentine Rosenbaum",
      tel: "499-304-3500 x8691",
      address: "734 Howell Turnpike",
      opening_hours: "08:00",
      description:
        "Vero error est velit nulla soluta vel omnis. Animi neque rerum voluptas autem aspernatur voluptas corporis modi aut. Aut dolorem non vel placeat sint facere. Voluptatem non ipsum maxime placeat neque dicta sapiente ipsa itaque. Ut consequatur et ut rerum. Est ut et saepe.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.94475289245534",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 39,
      name: "Jazmyne Bechtelar",
      tel: "1-064-978-6924 x4610",
      address: "13344 Wisozk Lodge",
      opening_hours: "08:00",
      description:
        "Velit cum cum error eligendi magni voluptatem. Iure ut ex explicabo. Corrupti magni est suscipit deserunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.482974109163536",
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
      id: 40,
      name: "Furman Simonis",
      tel: "(389) 170-3118 x3793",
      address: "6164 Floyd Row",
      opening_hours: "08:00",
      description:
        "Possimus inventore hic consequatur. Perspiciatis distinctio similique eius ut quisquam vel recusandae voluptas doloribus. Minus molestiae nulla ut a. Reprehenderit dicta dignissimos blanditiis temporibus iste.\n \rUt minus ut et sed laboriosam nesciunt facere aperiam. Officiis veritatis voluptate eum nemo doloremque eum sint. Aut saepe eaque facere molestiae officiis esse.\n \rDignissimos rerum eaque dolorum adipisci nam officiis odio et. Provident voluptatum et ad aut ut ea distinctio nostrum ad. Suscipit architecto totam aspernatur nostrum et sint officia. Recusandae maxime aut ut recusandae id. Occaecati non voluptatem ipsa perspiciatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.86798510014285",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 41,
      name: "Evelyn Veum",
      tel: "1-021-041-0390",
      address: "669 Daniel Islands",
      opening_hours: "08:00",
      description:
        "Ex assumenda non recusandae consequatur quidem laudantium et beatae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.63147840305762",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 45,
      name: "Eliezer Mraz MD",
      tel: "031.761.7782 x8626",
      address: "3496 Zakary Courts",
      opening_hours: "08:00",
      description:
        "Quasi rerum consequatur eaque ipsam sint quaerat incidunt. Ut voluptates quia occaecati illum. Aperiam eveniet atque modi ut totam aut ducimus quis. Nemo voluptas iusto nemo molestiae. Tempore nisi velit maxime et. Voluptatem est aspernatur.\n \rEt quis minus. Vitae voluptate praesentium veniam iure laudantium consequatur. Rerum reiciendis suscipit sunt praesentium consectetur aut.\n \rConsectetur fugiat iusto vitae. Tempore ad at. Ut expedita sequi eaque sint perferendis voluptas quaerat aut. Est id illum qui. Adipisci vel assumenda expedita ullam vel est maxime nulla officiis. Dicta ullam ipsa optio magni dignissimos consequatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.47785205933614",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
    {
      id: 49,
      name: "Waldo Gusikowski",
      tel: "658-785-9500",
      address: "67521 Elisha Spurs",
      opening_hours: "08:00",
      description:
        "Iusto voluptas est praesentium harum modi explicabo sint. Omnis rerum autem totam illum dolor laudantium cumque a accusantium. Veritatis dolore ut officiis. Error aliquid est in est culpa officia voluptatem. In voluptas adipisci. Labore eos adipisci est numquam voluptatibus reiciendis nostrum sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.15716045922627",
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
      id: 50,
      name: "Telly Maggio",
      tel: "690-466-9185",
      address: "1063 Chesley Trail",
      opening_hours: "08:00",
      description:
        "Est facilis quia delectus eos reiciendis et officiis voluptatum nisi. Sunt aut eum quia ipsa veniam. Similique eligendi eos. Nemo quis nisi ut ab aliquam quae sunt. Voluptatem aliquam sapiente.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.17072135722833",
      viewCounts: 0,
      createdAt: "2022-01-29T16:37:28.000Z",
      updatedAt: "2022-01-29T16:37:28.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-29T16:37:28.000Z",
        updatedAt: "2022-01-29T16:37:28.000Z",
      },
    },
  ],
};
export default {
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
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>