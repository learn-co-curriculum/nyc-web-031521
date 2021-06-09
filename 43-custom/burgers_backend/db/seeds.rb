eric = User.create(username: "eric", password: "abc123")

burgers = [
    { name: "Good Burger",
      description: "What a Good Burger!",
      image: "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg",
      price: rand(100)
    },
    { name: "Sal's Burger",
      description: "Burger of Sal's!",
      image: "http://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/umami-bomb-burgers-ck.jpg",
      price: rand(100)
    },
    { name: "Sloppy Beef",
      description: "Sloppimus Maximus",
      image: "https://www.budgetbytes.com/wp-content/uploads/2011/06/Sloppy-Joes-Plus-sandwich.jpg",
      price: rand(100)
    },
    { name: "Glamburger",
      description: "Bling Bling Burger",
      image: "https://i.ytimg.com/vi/zrnHrX_NCbY/hqdefault.jpg",
      price: rand(100)
    },
    { name: "Burgér",
      description: "Burgér fróm Fránce",
      image: "https://assets3.thrillist.com/v1/image/937699/size/tmg-article_default_mobile.jpg",
      price: rand(100)
    },
    { name: "Le Magnifique",
      description: "C'est la magnifique!",
      image: "https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2017/01/Delmonicos.jpg",
      price: rand(100)
    },
    { name: "HamBougie",
      description: "Not Bad, But Bougie",
      image: "https://townsquare.media/site/51/files/2018/04/ThinkstockPhotos-855832928.jpg",
      price: rand(100)
    },
    { name: "Green Eggs and Hamburger",
      description: "Cooked by Sam",
      image: "https://stupiddope.com/wp-content/uploads/2016/05/mcdonalds-green-angry-birds-burger-01.jpg",
      price: rand(100)
    },
    { name: "Veggie Burger",
      description: "Impossible Burger",
      image: "https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg",
      price: rand(100)
    },
    { name: "Spinach",
      description: "Ew.",
      image: "https://www.organicfacts.net/wp-content/uploads/spinach.jpg",
      price: rand(100)
    },
    { name: "Cow-abunga",
      description: "Mooooo",
      image: "https://graphicriver.img.customer.envatousercontent.com/files/255009462/preview_6765053.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=8bc270542ea3eabb74a484a7b96f7665",
      price: rand(100)
    }
  ]

Burger.create(burgers)

# Monday Order
o1 = Order.create(user: eric)
2.times do 
BurgerOrder.create(burger: Burger.all.sample, order: o1)
end


# Tuesday Order 
o2 = Order.create(user: eric)
5.times do 
    BurgerOrder.create(burger: Burger.all.sample, order: o2)
end