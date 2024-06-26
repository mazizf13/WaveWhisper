const mongoose = require("mongoose");
const Beach = require("../models/beach");

mongoose
  .connect("mongodb://127.0.0.1/wave_whisper")
  .then((result) => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });

async function seedBeaches() {
  const beaches = [
    {
      title: "Pasir Panjang Beach",
      cost: 2000000,
      description:
        "Labengki, an enchanting island situated off the eastern coast of Sulawesi, boasts some of Indonesia's most breathtaking beaches. Long Sand Beach, also known as Pantai Pasir Panjang, earns its name from being Labengki's lengthiest shoreline. With its pristine expanse of white sand, complemented by a lush palm grove and tranquil azure waters, it stands out as a prime example of Indonesia's coastal beauty. Adding to its allure, Labengki Island offers beachfront hut accommodations conveniently located within walking distance from Long Sand Beach.",
      location: "Labengki Island, Southeast Sulawesi",
      images: [
        {
          url: "public\\images\\1_Pasir_Panjang_Beach.jpg",
          filename: "1_Pasir_Panjang_Beach.jpg",
        },
        {
          url: "public\\images\\2_Pasir_Panjang_Beach.jpg",
          filename: "2_Pasir_Panjang_Beach.jpg",
        },
      ],
    },
    {
      title: "Pasir Merah Beach",
      cost: 3500000,
      description:
        "The beach is locally known as Pantai Pasir Merah, which translates to Red Sand Beach due to the reddish-orange hue of its sand. Its towering cliffs and curved palm trees create an idyllic scene, making it my top choice among Labengki's beaches and one of Indonesia's finest. Despite its untamed beauty, there are no lodgings available directly on the beach. However, it remains largely untouched, offering a wild and unspoiled environment. Accessible only by boat from Labengki island, visitors can enjoy a day trip to explore its wonders.",
      location: "Labengki Island, Southeast Sulawesi",
      images: [
        {
          url: "public\\images\\3_Pasir_Merah_Beach.jpg",
          filename: "3_Pasir_Merah_Beach.jpg",
        },
        {
          url: "public\\images\\4_Pasir_Merah_Beach.jpg",
          filename: "4_Pasir_Merah_Beach.webp",
        },
        {
          url: "public\\images\\5_Pasir_Merah_Beach.jpg",
          filename: "5_Pasir_Merah_Beach.jpg",
        },
      ],
    },
    {
      title: "Mahoro Beach",
      cost: 5000000,
      description:
        "Mahoro is an isolated island close to Manado, the main city of northern Sulawesi. To reach Mahoro, travelers need to either fly to Siau Island or embark on a four-hour fast ferry journey from Manado city. From Siau, a small speedboat is required for an island-hopping excursion to Mahoro and the neighboring islands. Despite the travel time, the experience is worthwhile as it leads to one of Indonesia's finest white sand beaches. This secluded beach offers panoramic views of the active Karangetang volcano in the distance.",
      location: "Siau Island, North Sulawesi",
      images: [
        {
          url: "public\\images\\6_Mahoro_Island.jpg",
          filename: "6_Mahoro_Island.jpg",
        },
        {
          url: "public\\images\\7_Mahoro_Island.jpg",
          filename: "7_Mahoro_Island.jpg",
        },
        {
          url: "public\\images\\8_Mahoro_Island.jpg",
          filename: "8_Mahoro_Island.jpg",
        },
      ],
    },
    {
      title: "Mandel Beach",
      cost: 4000000,
      description:
        "Mandel Beach stretches over a kilometer with pristine white sand, making it one of the stunning beaches in the Banggai archipelago of central Sulawesi. Situated on Peleng Island in Banggai, accessing Mandel Beach requires flying to Luwuk in central Sulawesi, followed by taking a public ferry to Salakan. From there, travelers can opt to rent a motorbike or arrange for a driver to reach the beach. Mandel Beach boasts exceptionally white sands and crystal-clear turquoise waters, offering a refreshing swimming experience akin to being immersed in a sea of cool mint Listerine.",
      location: "Baggai Island, Central Sulawesi",
      images: [
        {
          url: "public\\images\\9_Mandel_Beach.jpg",
          filename: "9_Mandel_Beach.jpg",
        },
        {
          url: "public\\images\\10_Mandel_Beach.jpg",
          filename: "10_Mandel_Beach.jpg",
        },
      ],
    },
    {
      title: "Tanjung Gundul Beach",
      cost: 4000000,
      description:
        "Tanjung Gundul stands out as one of Indonesia's most distinctive beaches, distinguished by its white pebbles in lieu of sand and a colossal rock arch sculpted from limestone by the relentless forces of wind and waves. Its resemblance to the white pebble beaches of Kefalonia, Greece, adds to its allure. Nestled in Banggai Laut, reaching this secluded beach entails flying to Luwuk, followed by a ferry journey to Banggai Laut, and finally a short ride on a small speedboat to Tanjung Gundul. Despite its remote location, the Banggai area offers numerous other attractions and activities to explore during your visit.",
      location: "Baggai Island, Central Sulawesi",
      images: [
        {
          url: "public\\images\\11_Tanjung_Gundul_Beach.jpg",
          filename: "11_Tanjung_Gundul_Beach.jpg",
        },
      ],
    },
    {
      title: "Pink Sand Beach",
      cost: 5000000,
      description:
        "In eastern Indonesia, the Komodo National Park boasts several rare pink sand beaches, a phenomenon attributed to tiny organisms known as foraminifera present in the coral. Pink beaches are exceptionally uncommon, with only a few scattered across the globe. Visiting these distinctive beaches is an essential part of any exploration of the Komodo islands.",
      location: "Komodo Island, West Flores, East Nusa Tenggara",
      images: [
        {
          url: "public\\images\\12_Pink_Sand_Beach.webp",
          filename: "12_Pink_Sand_Beach.webp",
        },
        {
          url: "public\\images\\13_Pink_Sand_Beach.webp",
          filename: "13_Pink_Sand_Beach.webp",
        },
      ],
    },
    {
      title: "Padar Island",
      cost: 600000,
      description:
        "Padar Island, located within the Komodo National Park, isn't your typical beach destination but offers a stunning panoramic view of multiple beaches. Renowned for its iconic X-shaped formation, Padar Island boasts three distinct bays showcasing white, black, and pink beaches. Each beach's unique sand color adds to the island's allure, making it an extraordinary sight to behold. Witnessing the convergence of these diverse beach colors in one location is truly an unparalleled experience, making Padar Island a must-visit destination for travelers seeking natural wonders.",
      location: "Padar Island, West Flores, East Nusa Tenggara",
      images: [
        {
          url: "public\\images\\14_Padar_Island.jpg",
          filename: "14_Padar_Island.jpg",
        },
        {
          url: "public\\images\\15_Padar_Island.jpg",
          filename: "15_Padar_Island.jpg",
        },
      ],
    },
    {
      title: "Ora Beach",
      cost: 10000000,
      description:
        "Ora Beach, nestled in the serene surroundings of Seram Island in Maluku, offers an exclusive and tranquil getaway experience. To reach this secluded paradise, travelers typically embark on a multi-step journey. Beginning with a flight to Ambon (AMQ), adventurers then embark on a scenic 2-hour fast ferry ride from Tulehu to Amahai. From Amahai, a 2-hour drive leads to the picturesque Ora Bay. Upon arrival, guests have the option to reside in the luxurious Ora Beach Resort or opt for accommodation in one of the charming homestays nestled in the nearby Saleman village. Renowned for its breathtaking beauty.",
      location: "Seram Island, Central Maluku",
      images: [
        {
          url: "public\\images\\16_Ora_Beach.jpg",
          filename: "16_Ora_Beach.jpg",
        },
        {
          url: "public\\images\\17_Ora_Beach.jpg",
          filename: "17_Ora_Beach.jpg",
        },
        {
          url: "public\\images\\18_Ora_Beach.jpg",
          filename: "18_Ora_Beach.jpg",
        },
      ],
    },
    {
      title: "Tanjung Tinggi Beach",
      cost: 3000000,
      description:
        "Belitung's Tanjung Tinggi beach is a true gem. With its white sand and striking granite boulders against clear waters, it's a picturesque spot. Perfect for sunset views, it's still relatively quiet, offering a peaceful retreat. Tanjung Tinggi is among Sumatra's best beaches, promising a memorable experience in nature's beauty.",
      location: "Bangka Belitung Islands",
      images: [
        {
          url: "public\\images\\19_Tanjung_Tinggi_Beach.jpg",
          filename: "19_Tanjung_Tinggi_Beach.jpg",
        },
        {
          url: "public\\images\\20_Tanjung_Tinggi_Beach.jpg",
          filename: "20_Tanjung_Tinggi_Beach.jpg",
        },
      ],
    },
    {
      title: "Lengkuas Island",
      cost: 3500000,
      description:
        "Lengkuas Island in Belitung is a must-visit destination for island-hoppers. Its main attraction is a Dutch lighthouse from the 1800s, offering stunning views from the top. Besides history, the island boasts pristine beaches perfect for relaxation and snorkeling. With its blend of historical charm and natural beauty, Lengkuas Island promises an unforgettable adventure.",
      location: "Lengkuas Island, Bangka Belitung Islands",
      images: [
        {
          url: "public\\images\\21_Lengkuas_Island.jpg",
          filename: "21_Lengkuas_Island.jpg",
        },
        {
          url: "public\\images\\22_Lengkuas_Island.jpg",
          filename: "22_Lengkuas_Island.jpg",
        },
      ],
    },
    {
      title: "Batu Berlayar Island",
      cost: 4000000,
      description:
        "This tiny island in Belitung is a real charmer! It's like a circle of sand with rocks scattered around, giving it a natural, rustic vibe. You can even explore a cute little cave that cuts through the middle of the island, adding to its adventurous feel. It's a must-see spot for anyone exploring Belitung's wonders!",
      location: "Batu Berlayar Island, Bangka Belitung Islands",
      images: [
        {
          url: "public\\images\\23_Batu_Berlayar_Island.jpg",
          filename: "23_Batu_Berlayar_Island.jpg",
        },
        {
          url: "public\\images\\24_Batu_Berlayar_Island.jpg",
          filename: "24_Batu_Berlayar_Island.jpg",
        },
      ],
    },
    {
      title: "Banyak Islands",
      cost: 7000000,
      description:
        "The Banyak Islands, located northwest of Sumatra, offer a secluded paradise experience with barely inhabited islands surrounded by pristine beaches and crystal-clear waters. Accommodation options include basic bungalows on nearly private islands, where you can enjoy white sand beaches and stunning views in every direction. For those seeking a Robinson Crusoe lifestyle, Pulau Palambak stands out with one of the finest beaches in Sumatra, Indonesia.",
      location: "Banyak Islands, Aceh",
      images: [
        {
          url: "public\\images\\25_Banyak_Island.jpg",
          filename: "25_Banyak_Island.jpg",
        },
        {
          url: "public\\images\\26_Banyak_Island.jpg",
          filename: "26_Banyak_Island.jpg",
        },
      ],
    },
    {
      title: "Karang Island ",
      cost: 3500000,
      description:
        "Coral Island, also known as Pulau Karang, is a hidden treasure tucked away in North Sumatra, boasting pristine white sand beaches and picturesque palm trees framing the turquoise waters like a scene from a postcard. While the entire island can be circled on foot in just one hour, the most breathtaking scenery awaits on the western beaches leading to the lighthouse. Here, you'll find numerous bent palm trees ideal for photo opportunities, some of which are climbable, and the sand is as soft as powder. Despite its small size, Coral Island boasts one of the most stunning beaches in Sumatra, Indonesia.",
      location: "Karang Island, North Sumatra",
      images: [
        {
          url: "public\\images\\27_Karang_Island.jpg",
          filename: "27_Karang_Island.jpg",
        },
        {
          url: "public\\images\\28_Karang_Island.jpg",
          filename: "28_Karang_Island.jpg",
        },
      ],
    },
    {
      title: "Kuta Beach",
      cost: 3000000,
      description:
        "Kuta Beach in Bali, Indonesia, is world-renowned for its stunning sunsets, lively vibe, and great waves for surfing. Its wide golden sands attract sun-seekers, while the beachfront is lined with cafes and bars offering local and international cuisine. Water sports like surfing, bodyboarding, and parasailing are popular here, with options for both beginners and experienced surfers. At night, Kuta comes alive with beach clubs and bars hosting live music and DJ performances, making it the perfect spot to dance under the stars or enjoy a cocktail by the ocean.",
      location: "Kuta, Badung Regency, Bali",
      images: [
        {
          url: "public\\images\\29_Kuta_Beach.webp",
          filename: "29_Kuta_Beach.webp",
        },
      ],
    },
    {
      title: "Bingin Beach",
      cost: 3000000,
      description:
        "Bingin Beach is a picturesque spot adorned with exotic boulders and seaweed-covered rocks, offering excellent opportunities for both photography and surfing. Compared to other beaches in the vicinity, Bingin tends to be less crowded, providing a more serene experience. Nevertheless, the area is witnessing the emergence of high-quality accommodation and restaurants, adding to its appeal as a destination.",
      location: "Badung Regency, Bali",
      images: [
        {
          url: "public\\images\\30_Bingin_Beach.jpg",
          filename: "30_Bingin_Beach.jpg",
        },
      ],
    },
    {
      title: "Padang-Padang Beach",
      cost: 4500000,
      description:
        "Padang Padang Beach is a charming coastal enclave nestled within the cliffs of South Bali. Accessible via a narrow passage through the rocks and a descent down steps, it offers a unique and intimate setting. The beach is renowned for its popularity among surfers, but it's also perfect for leisurely activities like savoring a fresh coconut while lounging on the white sand. Visitors may even encounter monkeys adding to the area's natural charm.",
      location: "Badung Regency, Bali",
      images: [
        {
          url: "public\\images\\31_Padang_Padang_Beach.jpg",
          filename: "31_Padang_Padang_Beach.jpg",
        },
      ],
    },
    {
      title: "Melasti Beach",
      cost: 4000000,
      description:
        "Melasti Beach in southern Bali offers a scenic setting with tall cliffs and a road carved into them. Despite its development, the beach remains attractive, featuring clean white sand and clear blue waters. Alongside, you'll find upscale clubs like Cattamaran and Minoo. Despite some occasional trash, it's generally clean and enjoyable.",
      location: "Badung Regency, Bali",
      images: [
        {
          url: "public\\images\\32_Melasti_Beach.webp",
          filename: "32_Melasti_Beach.webp",
        },
      ],
    },
    {
      title: "Kelingking Beach",
      cost: 6000000,
      description:
        "Kelingking Beach on Nusa Penida Island, Bali, is famous for its dramatic cliffs, turquoise waters, and white sandy shores. The beach sits at the base of towering limestone cliffs shaped like a T-Rex, earning it the nickname 'T-Rex Bay.' Its secluded location makes it perfect for nature lovers and adventurers. To reach Kelingking Beach, visitors typically take a boat from Sanur or Padang Bai to Nusa Penida Island, then travel by car or scooter to the western side of the island. Despite the journey's challenges, the breathtaking views make it worthwhile. Besides admiring the scenery, visitors can hike, snorkel, and explore nearby attractions like Kelingking Cliff viewpoint and Angel's Billabong natural pool.",
      location: "Nusa Penida Island, Bali",
      images: [
        {
          url: "public\\images\\33_Kelingking_Beach.jpg",
          filename: "33_Kelingking_Beach.jpg",
        },
        {
          url: "public\\images\\34_Kelingking_Beach.jpg",
          filename: "34_Kelingking_Beach.jpg",
        },
      ],
    },
    {
      title: "Suwehan Beach",
      cost: 5000000,
      description:
        "Suwehan Beach in Penida is a hidden gem boasting pristine white sand and turquoise waves. It features a unique pointy rock formation resembling a Christmas tree or an elf hat. Recently, locals have constructed tree houses near the cliffs, offering a unique accommodation option for visitors seeking a tranquil beach getaway.",
      location: "Nusa Penida Island, Bali",
      images: [
        {
          url: "public\\images\\35_Suwehan_Beach.jpg",
          filename: "35_Suwehan_Beach.jpg",
        },
      ],
    },
    {
      title: "Tembeling Beach",
      cost: 5000000,
      description:
        "This incredible sea cave offers a mesmerizing view of the towering cliffs along the Penida coast. Adjacent to the cave lies a charming natural pool, inviting visitors to take a refreshing dip amidst the scenic beauty of the surroundings.",
      location: "Nusa Penida Island, Bali",
      images: [
        {
          url: "public\\images\\36_Tembeling_Beach.jpg",
          filename: "36_Tembeling_Beach.jpg",
        },
      ],
    },
    {
      title: "Diamond Beach",
      cost: 5000000,
      description:
        "Diamond Beach, aptly named after a striking diamond-shaped rock formation on its shores, is a breathtaking 'cliff beach' nestled along the southeastern coast of Nusa Penida. Accessible via a newly carved path since late 2018, this stunning destination offers visitors the opportunity to witness its mesmerizing beauty firsthand.",
      location: "Nusa Penida Island, Bali",
      images: [
        {
          url: "public\\images\\37_Diamond_Beach.jpg",
          filename: "37_Diamond_Beach.jpg",
        },
        {
          url: "public\\images\\38_Diamond_Beach.jpg",
          filename: "38_Diamond_Beach.jpg",
        },
      ],
    },
    {
      title: "Nyanyad Beach",
      cost: 3500000,
      description:
        "Nyanyad Beach, located at the southern end of Nusa Penida, is a hidden gem waiting to be discovered. This lesser-known beach features a small temple and towering hills flanking its sides. Accessible via a short 15-minute hike with concrete steps, Nyanyad Beach welcomes visitors with its pristine white sand and serene ambiance.",
      location: "Nusa Penida Island, Bali",
      images: [
        {
          url: "public\\images\\39_Nyanyad_Beach.jpg",
          filename: "39_Nyanyad_Beach.jpg",
        },
        {
          url: "public\\images\\40_Nyanyad_Beach.jpg",
          filename: "40_Nyanyad_Beach.jpg",
        },
      ],
    },
  ];

  try {
    const newBeach = beaches.map((beach) => {
      return {
        ...beach,
        author: "6638eec23d0183da9bd75c12",
      };
    });

    await Beach.deleteMany({});
    await Beach.insertMany(newBeach);
    console.log("Data saved successfully");
  } catch (error) {
    console.log("An error occurred while saving data:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedBeaches();
