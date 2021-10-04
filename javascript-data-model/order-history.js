var orderHistory = [
  {
    orderDetails: {
      orderNo: '#114-3941687-8772232',
      shipTo: 'JS Masher',
      orderPlaced: 'August 4, 2020',
      deliveredDate: 'August 8, 2020',
      returnWindow: 'September 7, 2020',
      invoice: '$34'
    },
    productCategory: {
      productType: 'book',
      productDetails: {
        title: 'JavaScript for Impatient programmers',
        author: 'Rauschmayer, Dr.Axel',
        price: '$31.55'
      }
    }
  },
  {
    orderDetails: {
      orderNo: '#113-9984268-1280257',
      shipTo: 'JS Masher',
      orderPlaced: 'July 19, 2020',
      deliveredDate: 'July 20, 2020',
      returnWindow: 'Aug 19th 2020',
      invoice: '$44.53'
    },
    productCategory: {
      productType: 'book',
      productDetails: {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        price: '$41.53'
      }
    }
  },
  {
    orderDetails: {
      orderNo: '#114-287557-9059409',
      shipTo: 'JS Masher',
      orderPlaced: 'July 4, 2020',
      deliveredDate: 'July 7, 2020',
      returnWindow: 'August 5, 2020',
      invoice: '$17.22'
    },
    productCategory: {
      productType: 'electronics',
      productDetails: {
        name: 'Gamecube Controller Adapter Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        price: '$15.98'
      }
    }
  },
  {
    orderDetails: {
      orderNo: '#113-2883177-2648248',
      shipTo: 'JS Masher',
      orderPlaced: 'July 3, 2020',
      delieveredDate: 'July 5, 2020',
      returnWindow: 'August 4, 2020',
      invoice: '$138.93'
    },
    productCategory: [
      {
        productType: 'electronics',
        productsDetails: {
          name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
          price: '$94'
        }
      },

      {
        productType: 'book',
        productDetails: {
          title: 'The Art of Sql',
          author: 'Faroult, Stephane',
          price: '$33.99'
        }
      }
    ]
  }
];

console.log('orderHistory object:', orderHistory);
