import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

// TODO: add filter for image in all pages
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}

// export const statusCheckMethod = {
//   methods: {
//     statusCheck(data) {
//       if (data.status !== 'success') {
//         throw new Error(data.message)
//         console.log('error')
//       }
//     }
//   }
// }