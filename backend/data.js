import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'BaoAn',
      email: 'baoan@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Quyen',
      email: 'vanquyen0508@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Viet',
      email: 'viet123@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'qua slim shirt',
      slug: 'qua-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 12,
      brand: 'Nike',
      rating: 4.6,
      numReviews: 6,
      description: 'high quality shirt',
    },
    {
      //_id: '3',
      name: 'Adidas slim shirt',
      slug: 'Adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 80,
      countInStock: 11,
      brand: 'Adidas',
      rating: 4.1,
      numReviews: 5,
      description: 'high quality shirt',
    },
    {
      //_id: '4',
      name: 'Li slim shirt',
      slug: 'Li-slim-shirt',
      category: 'Paint',
      image: '/images/p4.jpg', //679px x 829px
      price: 40,
      countInStock: 14,
      brand: 'Paint',
      rating: 4.8,
      numReviews: 2,
      description: 'high quality shirt',
    },
  ],
};

export default data;
