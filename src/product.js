const products = [
  {
    name: "world of warcraft",
    price: "399kr",
    image:
      "https://media.istockphoto.com/photos/site-blizzard-picture-id458654879",
    _id: 1,
    rating: 4.0,
    numReviews: 4,
    countInStock: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: "valyrant",
    price: "399kr",
    image:
      "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?cs=srgb&dl=pexels-pixabay-163036.jpg&fm=jpg",
    _id: 2,
    rating: 4.0,
    numReviews: 4,
    countInStock: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: "ps5 controller",
    price: "499kr",
    image:
      "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?cs=srgb&dl=pexels-cottonbro-3945659.jpg&fm=jpg",
    _id: 3,
    rating: 4.0,
    numReviews: 4,
    countInStock: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: " nintendo switch",
    price: "1599kr",
    image:
      "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?cs=srgb&dl=pexels-pixabay-371924.jpg&fm=jpg",
    _id: 4,
    rating: 4.0,
    numReviews: 4,
    countInStock: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: "chess",
    price: "129kr",
    image:
      "https://images.pexels.com/photos/1152662/pexels-photo-1152662.jpeg?cs=srgb&dl=pexels-ylanite-koppens-1152662.jpg&fm=jpg",
    _id: 5,
    rating: 4.0,
    numReviews: 4,
    countInStock: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: "monopoly",
    price: "239kr",
    image:
      "https://images.pexels.com/photos/1329644/pexels-photo-1329644.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1329644.jpg&fm=jpg",
    _id: 6,
    rating: 4.0,
    numReviews: 4,
    countInStock: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
];

export default products;
