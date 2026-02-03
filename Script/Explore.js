/* =========================================================
   GLOBAL SHARED STORAGE
========================================================= */
const STORAGE = {
    LANGUAGE: 'dalilak_language',
    THEME: 'dalilak_theme',
    SAVED_TRIPS: 'dalilak_saved_trips',
    USER_BUDGET: 'dalilak_user_budget'
};

// =============================================
// DATA STORAGE - Egyptian Attractions Database
// =============================================
const attractions = [
    {
        id: 1,
        nameEn: "Great Pyramids of Giza",
        nameAr: "أهرامات الجيزة الكبرى",
        price: 240,
        locationEn: "Giza, Cairo",
        locationAr: "الجيزة، القاهرة",
        descEn: "The last remaining Wonder of the Ancient World. Visit the Great Pyramid of Khufu, Khafre, and Menkaure.",
        descAr: "آخر عجائب الدنيا السبع القديمة المتبقية. زر هرم خوفو وخفرع ومنقرع العظيم.",
        rating: 4.8,
        reviews: 12500,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Pyramids of Giza.jpg",
        saved: false,
        lat: 29.9792,
        lng: 31.1342
    },
    {
        id: 2,
        nameEn: "Egyptian Museum Cairo",
        nameAr: "المتحف المصري بالقاهرة",
        price: 200,
        locationEn: "Tahrir Square, Cairo",
        locationAr: "ميدان التحرير، القاهرة",
        descEn: "Home to an extensive collection of ancient Egyptian antiquities including Tutankhamun's treasures.",
        descAr: "يضم مجموعة واسعة من الآثار المصرية القديمة بما في ذلك كنوز توت عنخ آمون.",
        rating: 4.7,
        reviews: 8900,
        category: "historical",
        aiRecommended: false,
        image: "./Images/The Grand Egyptian Museum.jpg",
        saved: false,
        lat: 30.0478,
        lng: 31.2336
    },
    {
        id: 3,
        nameEn: "Khan El Khalili Bazaar",
        nameAr: "خان الخليلي",
        price: 0,
        locationEn: "Islamic Cairo",
        locationAr: "القاهرة الإسلامية",
        descEn: "Historic bazaar dating back to 1382. Shop for souvenirs, spices, jewelry, and traditional crafts.",
        descAr: "سوق تاريخي يعود تاريخه إلى عام 1382. تسوق الهدايا التذكارية والتوابل والمجوهرات والحرف التقليدية.",
        rating: 4.5,
        reviews: 6700,
        category: "shopping",
        aiRecommended: false,
        image: "./Images/Khan El Khalili Bazaar.jpg",
        saved: false,
        lat: 30.0472,
        lng: 31.2620
    },
    {
        id: 4,
        nameEn: "Luxor Temple",
        nameAr: "معبد الأقصر",
        price: 160,
        locationEn: "Luxor City",
        locationAr: "مدينة الأقصر",
        descEn: "Ancient temple complex on the east bank of the Nile, beautifully illuminated at night.",
        descAr: "مجمع معابد قديم على الضفة الشرقية للنيل، مضاء بشكل جميل في الليل.",
        rating: 4.9,
        reviews: 7800,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Luxor Temple.jpg",
        saved: false,
        lat: 25.6995,
        lng: 32.6397
    },
    {
        id: 5,
        nameEn: "Karnak Temple Complex",
        nameAr: "معابد الكرنك",
        price: 200,
        locationEn: "Luxor, Upper Egypt",
        locationAr: "الأقصر، صعيد مصر",
        descEn: "Massive ancient temple complex, one of the largest religious buildings ever constructed.",
        descAr: "مجمع معابد قديم ضخم، أحد أكبر المباني الدينية التي تم بناؤها على الإطلاق.",
        rating: 4.9,
        reviews: 9200,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Karnak Temple Complex.jpg",
        saved: false,
        lat: 25.7188,
        lng: 32.6573
    },
    {
        id: 6,
        nameEn: "Valley of the Kings",
        nameAr: "وادي الملوك",
        price: 240,
        locationEn: "West Bank, Luxor",
        locationAr: "البر الغربي، الأقصر",
        descEn: "Ancient burial site of pharaohs including Tutankhamun's tomb. Underground royal tombs.",
        descAr: "موقع دفن فراعنة قدماء بما في ذلك مقبرة توت عنخ آمون. مقابر ملكية تحت الأرض.",
        rating: 4.8,
        reviews: 8500,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Valley of the Kings.jpg",
        saved: false,
        lat: 25.7402,
        lng: 32.6014
    },
    {
        id: 7,
        nameEn: "Abu Simbel Temples",
        nameAr: "معابد أبو سمبل",
        price: 300,
        locationEn: "Aswan Governorate",
        locationAr: "محافظة أسوان",
        descEn: "Two massive rock temples built by Ramesses II, relocated to avoid flooding from Aswan Dam.",
        descAr: "معبدان صخريان ضخمان بناهما رمسيس الثاني، تم نقلهما لتجنب الفيضانات من سد أسوان.",
        rating: 5.0,
        reviews: 5600,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Abu Simbel Temples.jpg",
        saved: false,
        lat: 22.3372,
        lng: 31.6258
    },
    {
        id: 8,
        nameEn: "Alexandria Library",
        nameAr: "مكتبة الإسكندرية",
        price: 70,
        locationEn: "Alexandria",
        locationAr: "الإسكندرية",
        descEn: "Modern library and cultural center commemorating the ancient Library of Alexandria.",
        descAr: "مكتبة حديثة ومركز ثقافي يخلد ذكرى مكتبة الإسكندرية القديمة.",
        rating: 4.6,
        reviews: 4200,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Alexandria Library.jpg",
        saved: false,
        lat: 31.2089,
        lng: 29.9097
    },
    {
        id: 9,
        nameEn: "Citadel of Salah El Din",
        nameAr: "قلعة صلاح الدين الأيوبي",
        price: 180,
        locationEn: "Cairo",
        locationAr: "القاهرة",
        descEn: "Medieval Islamic fortification with stunning views of Cairo and Muhammad Ali Mosque.",
        descAr: "تحصينات إسلامية من العصور الوسطى مع إطلالات خلابة على القاهرة ومسجد محمد علي.",
        rating: 4.7,
        reviews: 7100,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Citadel of Salah El Din.jpg",
        saved: false,
        lat: 30.0296,
        lng: 31.2600
    },
    {
        id: 10,
        nameEn: "Ras Mohammed National Park",
        nameAr: "محمية رأس محمد",
        price: 300,
        locationEn: "Sharm El Sheikh, South Sinai",
        locationAr: "شرم الشيخ، جنوب سيناء",
        descEn: "Egypt's first national park with stunning coral reefs, perfect for diving and snorkeling.",
        descAr: "أول حديقة وطنية في مصر مع شعاب مرجانية خلابة، مثالية للغوص والسنوركلينج.",
        rating: 4.9,
        reviews: 5800,
        category: "nature",
        aiRecommended: false,
        image: "./Images/Ras Mohammed National Park.jpg",
        saved: false,
        lat: 27.7375,
        lng: 34.2399
    },
    {
        id: 11,
        nameEn: "White Desert (Sahara el Beyda)",
        nameAr: "الصحراء البيضاء",
        price: 450,
        locationEn: "Farafra, New Valley",
        locationAr: "الفرافرة، الوادي الجديد",
        descEn: "Surreal landscape of chalk rock formations shaped by desert winds. Camping under stars.",
        descAr: "مشهد طبيعي سريالي من تشكيلات صخرية من الطباشير شكلتها رياح الصحراء. التخييم تحت النجوم.",
        rating: 5.0,
        reviews: 3400,
        category: "nature",
        aiRecommended: false,
        image: "./Images/Sahara el Beyda.jpg",
        saved: false,
        lat: 27.3472,
        lng: 27.9572
    },
    {
        id: 12,
        nameEn: "Siwa Oasis",
        nameAr: "واحة سيوة",
        price: 350,
        locationEn: "Siwa, Matrouh",
        locationAr: "سيوة، مطروح",
        descEn: "Remote desert oasis with salt lakes, hot springs, and ancient Shali fortress.",
        descAr: "واحة صحراوية نائية مع بحيرات مالحة وينابيع ساخنة وقلعة شالي القديمة.",
        rating: 4.8,
        reviews: 2900,
        category: "nature",
        aiRecommended: false,
        image: "./Images/Siwa Oasis.jpg",
        saved: false,
        lat: 29.2030,
        lng: 25.5199
    },
    {
        id: 13,
        nameEn: "Four Seasons Hotel Cairo",
        nameAr: "فندق فورسيزونز القاهرة",
        price: 3500,
        locationEn: "Garden City, Cairo",
        locationAr: "جاردن سيتي، القاهرة",
        descEn: "Luxury 5-star hotel with Nile views, spa, and world-class dining. One night stay.",
        descAr: "فندق فاخر 5 نجوم مع إطلالات على النيل ومنتجع صحي وطعام عالمي. إقامة ليلة واحدة.",
        rating: 4.8,
        reviews: 4500,
        category: "hotel",
        aiRecommended: false,
        image: "./Images/Four Seasons Hotel Cairo at Nile Plaza.jpg",
        saved: false,
        lat: 30.0409,
        lng: 31.2314
    },
    {
        id: 14,
        nameEn: "Mena House Hotel",
        nameAr: "فندق مينا هاوس",
        price: 4200,
        locationEn: "Pyramids Road, Giza",
        locationAr: "طريق الأهرامات، الجيزة",
        descEn: "Historic palace hotel with direct views of the Pyramids. Presidential suite experience.",
        descAr: "فندق قصر تاريخي مع إطلالات مباشرة على الأهرامات. تجربة الجناح الرئاسي.",
        rating: 4.9,
        reviews: 3800,
        category: "hotel",
        aiRecommended: false,
        image: "./Images/Mena House Hotel.jpg",
        saved: false,
        lat: 29.9936,
        lng: 31.1335
    },
    {
        id: 15,
        nameEn: "Sofitel Legend Old Cataract",
        nameAr: "فندق سوفيتيل ليجند",
        price: 3800,
        locationEn: "Aswan",
        locationAr: "أسوان",
        descEn: "Iconic Victorian hotel on the Nile where Agatha Christie wrote 'Death on the Nile'.",
        descAr: "فندق فيكتوري أيقوني على النيل حيث كتبت أجاثا كريستي 'الموت على النيل'.",
        rating: 4.9,
        reviews: 3200,
        category: "hotel",
        aiRecommended: false,
        image: "./Images/Sofitel Legend Old Cataract Aswan.jpg",
        saved: false,
        lat: 24.0875,
        lng: 32.8864
    },
    {
        id: 16,
        nameEn: "City Stars Mall",
        nameAr: "سيتي ستارز مول",
        price: 0,
        locationEn: "Nasr City, Cairo",
        locationAr: "مدينة نصر، القاهرة",
        descEn: "Egypt's largest shopping mall with 750+ stores, cinema complex, and entertainment.",
        descAr: "أكبر مول في مصر مع أكثر من 750 متجر ومجمع سينما وترفيه.",
        rating: 4.3,
        reviews: 8900,
        category: "shopping",
        aiRecommended: false,
        image: "./Images/City Stars Mall.jpg",
        saved: false,
        lat: 30.0727,
        lng: 31.3499
    },
    {
        id: 17,
        nameEn: "Mall of Egypt",
        nameAr: "مول مصر",
        price: 0,
        locationEn: "6th of October City",
        locationAr: "مدينة 6 أكتوبر",
        descEn: "Modern mega mall featuring Ski Egypt - first indoor ski resort in Africa.",
        descAr: "ميجا مول حديث يضم سكي مصر - أول منتجع تزلج داخلي في إفريقيا.",
        rating: 4.5,
        reviews: 7200,
        category: "shopping",
        aiRecommended: false,
        image: "./Images/Mall of Egypt.jpg",
        saved: false,
        lat: 30.0070,
        lng: 30.9691
    },
    {
        id: 18,
        nameEn: "Philae Temple",
        nameAr: "معبد فيلة",
        price: 180,
        locationEn: "Aswan",
        locationAr: "أسوان",
        descEn: "Beautiful island temple complex dedicated to goddess Isis, relocated due to Aswan Dam.",
        descAr: "مجمع معابد جزيرة جميل مخصص للإلهة إيزيس، تم نقله بسبب سد أسوان.",
        rating: 4.8,
        reviews: 5600,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Philae Temple.jpg",
        saved: false,
        lat: 24.0174,
        lng: 32.8845
    },
    {
        id: 19,
        nameEn: "St. Catherine's Monastery",
        nameAr: "دير سانت كاترين",
        price: 200,
        locationEn: "Mount Sinai, South Sinai",
        locationAr: "جبل موسى، جنوب سيناء",
        descEn: "Ancient monastery at the foot of Mount Sinai, UNESCO World Heritage Site.",
        descAr: "دير قديم عند سفح جبل موسى، موقع تراث عالمي لليونسكو.",
        rating: 4.7,
        reviews: 4100,
        category: "historical",
        aiRecommended: false,
        image: "./Images/St. Catherine's Monastery.jpg",
        saved: false,
        lat: 28.5564,
        lng: 33.9756
    },
    {
        id: 20,
        nameEn: "Montazah Palace Gardens",
        nameAr: "حدائق قصر المنتزه",
        price: 50,
        locationEn: "Alexandria",
        locationAr: "الإسكندرية",
        descEn: "Royal palace gardens on the Mediterranean with beaches, gardens, and historic palaces.",
        descAr: "حدائق القصر الملكي على البحر المتوسط مع الشواطئ والحدائق والقصور التاريخية.",
        rating: 4.5,
        reviews: 6800,
        category: "nature",
        aiRecommended: false,
        image: "./Images/Montazah Palace Gardens.jpg",
        saved: false,
        lat: 31.2872,
        lng: 30.0179
    },
    {
        id: 21,
        nameEn: "Coptic Cairo",
        nameAr: "القاهرة القبطية",
        price: 100,
        locationEn: "Old Cairo",
        locationAr: "مصر القديمة",
        descEn: "Historic Christian quarter with ancient churches including Hanging Church and Ben Ezra Synagogue.",
        descAr: "حي مسيحي تاريخي مع كنائس قديمة بما في ذلك الكنيسة المعلقة وكنيس بن عزرا.",
        rating: 4.6,
        reviews: 5200,
        category: "historical",
        aiRecommended: false,
        image: "./Images/Coptic Cairo.jpg",
        saved: false,
        lat: 30.0056,
        lng: 31.2297
    },
    {
        id: 22,
        nameEn: "Hurghada Marina",
        nameAr: "مارينا الغردقة",
        price: 0,
        locationEn: "Hurghada, Red Sea",
        locationAr: "الغردقة، البحر الأحمر",
        descEn: "Waterfront promenade with restaurants, shops, yacht rentals, and nightlife.",
        descAr: "كورنيش على الواجهة البحرية مع مطاعم ومحلات وتأجير يخوت وحياة ليلية.",
        rating: 4.4,
        reviews: 4700,
        category: "shopping",
        aiRecommended: false,
        image: "./Images/Hurghada Marina.jpg",
        saved: false,
        lat: 27.2579,
        lng: 33.8116
    },
    {
        id: 23,
        nameEn: "Nile River Felucca Ride",
        nameAr: "رحلة بالفلوكة على النيل",
        price: 150,
        locationEn: "Luxor / Aswan",
        locationAr: "الأقصر / أسوان",
        descEn: "Traditional sailboat cruise on the Nile at sunset. 2-hour peaceful journey.",
        descAr: "رحلة بالمركب الشراعي التقليدي على النيل عند الغروب. رحلة هادئة لمدة ساعتين.",
        rating: 4.9,
        reviews: 6200,
        category: "nature",
        aiRecommended: false,
        image: "./Images/Nile River Felucca Ride.jpg",
        saved: false,
        lat: 25.6872,
        lng: 32.6396
    },
    {
        id: 24,
        nameEn: "Grand Egyptian Museum",
        nameAr: "المتحف المصري الكبير",
        price: 400,
        locationEn: "Giza Plateau",
        locationAr: "هضبة الجيزة",
        descEn: "World's largest archaeological museum near the Pyramids. Complete Tutankhamun collection.",
        descAr: "أكبر متحف أثري في العالم بالقرب من الأهرامات. مجموعة توت عنخ آمون الكاملة.",
        rating: 4.9,
        reviews: 8900,
        category: "historical",
        aiRecommended: false,
        image: "./Images/The Grand Egyptian Museum.jpg",
        saved: false,
        lat: 29.9934,
        lng: 31.1169
    },
    {
        id: 25,
        nameEn: "Sequoia Mediterranean Restaurant",
        nameAr: "مطعم سيكويا",
        price: 800,
        locationEn: "Zamalek, Cairo",
        locationAr: "الزمالك، القاهرة",
        descEn: "Upscale Mediterranean dining with stunning Nile views. Perfect for romantic dinners and special occasions.",
        descAr: "مطعم متوسطي راقي مع إطلالات خلابة على النيل. مثالي للعشاء الرومانسي والمناسبات الخاصة.",
        rating: 4.7,
        reviews: 3200,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant1.jpg",
        saved: false,
        lat: 30.0626,
        lng: 31.2218
    },
    {
        id: 26,
        nameEn: "Zooba Egyptian Street Food",
        nameAr: "زوبا للأكل الشعبي",
        price: 200,
        locationEn: "Zamalek & Maadi, Cairo",
        locationAr: "الزمالك و المعادي، القاهرة",
        descEn: "Modern take on traditional Egyptian street food. Try authentic koshari, ta'meya, and feteer.",
        descAr: "نسخة عصرية من الأكل الشعبي المصري. جرب الكشري والطعمية والفطير الأصلي.",
        rating: 4.6,
        reviews: 4800,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant2.jpg",
        saved: false,
        lat: 30.0619,
        lng: 31.2206
    },
    {
        id: 27,
        nameEn: "Cilantro Cafe",
        nameAr: "كافيه سيلانترو",
        price: 150,
        locationEn: "Multiple Locations, Cairo",
        locationAr: "فروع متعددة، القاهرة",
        descEn: "Popular Egyptian cafe chain serving specialty coffee, fresh pastries, and light meals. Cozy atmosphere for work or relaxation.",
        descAr: "سلسلة مقاهي مصرية شهيرة تقدم القهوة المختصة والمعجنات الطازجة والوجبات الخفيفة. أجواء مريحة للعمل أو الاسترخاء.",
        rating: 4.5,
        reviews: 5600,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/cafe1.jpg",
        saved: false,
        lat: 30.0444,
        lng: 31.2357
    },
    {
        id: 28,
        nameEn: "Abou El Sid",
        nameAr: "أبو السيد",
        price: 500,
        locationEn: "Zamalek, Cairo",
        locationAr: "الزمالك، القاهرة",
        descEn: "Traditional Egyptian cuisine in authentic vintage setting. Famous for molokhia, stuffed pigeon, and oriental desserts.",
        descAr: "مطبخ مصري تقليدي في أجواء تراثية أصيلة. مشهور بالملوخية والحمام المحشي والحلويات الشرقية.",
        rating: 4.8,
        reviews: 4200,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant3.jpg",
        saved: false,
        lat: 30.0642,
        lng: 31.2211
    },
    {
        id: 29,
        nameEn: "La Poire Patisserie",
        nameAr: "لابوار للحلويات",
        price: 180,
        locationEn: "Heliopolis, Cairo",
        locationAr: "مصر الجديدة، القاهرة",
        descEn: "French-style patisserie and cafe. Exquisite pastries, cakes, and gourmet coffee in elegant setting.",
        descAr: "مقهى وحلويات على الطراز الفرنسي. معجنات وكيك رائع وقهوة فاخرة في أجواء أنيقة.",
        rating: 4.7,
        reviews: 3800,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/cafe2.jpg",
        saved: false,
        lat: 30.0871,
        lng: 31.3242
    },
    {
        id: 30,
        nameEn: "Kazoku Japanese Restaurant",
        nameAr: "كازوكو الياباني",
        price: 700,
        locationEn: "New Cairo",
        locationAr: "القاهرة الجديدة",
        descEn: "Authentic Japanese cuisine featuring sushi, ramen, and teppanyaki. Modern minimalist design with skilled chefs.",
        descAr: "مطبخ ياباني أصيل يقدم السوشي والرامن والتيبانياكي. تصميم عصري بسيط مع طهاة ماهرين.",
        rating: 4.8,
        reviews: 2900,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant4.jpg",
        saved: false,
        lat: 30.0266,
        lng: 31.4906
    },
    {
        id: 31,
        nameEn: "Beano's Cafe",
        nameAr: "كافيه بينوز",
        price: 120,
        locationEn: "Various Locations, Cairo",
        locationAr: "فروع متعددة، القاهرة",
        descEn: "Casual cafe chain with American-style breakfast, sandwiches, and specialty coffee. Great for brunches.",
        descAr: "سلسلة مقاهي غير رسمية مع فطور أمريكي وساندويتشات وقهوة مختصة. رائع لوجبة البرانش.",
        rating: 4.4,
        reviews: 6100,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/cafe3.jpg",
        saved: false,
        lat: 30.0595,
        lng: 31.2234
    },
    {
        id: 32,
        nameEn: "Le Deck Alexandria",
        nameAr: "لو ديك الإسكندرية",
        price: 600,
        locationEn: "Stanley Bridge, Alexandria",
        locationAr: "كوبري ستانلي، الإسكندرية",
        descEn: "Seafood restaurant overlooking the Mediterranean. Fresh catch daily with international and Egyptian flavors.",
        descAr: "مطعم مأكولات بحرية يطل على البحر المتوسط. صيد طازج يومياً مع نكهات عالمية ومصرية.",
        rating: 4.6,
        reviews: 3500,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant5.jpg",
        saved: false,
        lat: 31.2430,
        lng: 29.9626
    },
    {
        id: 33,
        nameEn: "The Smokery",
        nameAr: "ذا سموكري",
        price: 550,
        locationEn: "Katameya, New Cairo",
        locationAr: "القطامية، القاهرة الجديدة",
        descEn: "Trendy restaurant with garden setting. International menu featuring burgers, salads, and grilled specialties.",
        descAr: "مطعم عصري مع حديقة. قائمة عالمية تضم البرجر والسلطات والمشويات الخاصة.",
        rating: 4.7,
        reviews: 4100,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant6.jpg",
        saved: false,
        lat: 30.0190,
        lng: 31.4658
    },
    {
        id: 34,
        nameEn: "Greek Club Restaurant",
        nameAr: "النادي اليوناني",
        price: 650,
        locationEn: "Downtown Cairo",
        locationAr: "وسط القاهرة",
        descEn: "Historic restaurant serving authentic Greek and Mediterranean cuisine since 1920. Classic elegant atmosphere.",
        descAr: "مطعم تاريخي يقدم المطبخ اليوناني والمتوسطي الأصيل منذ 1920. أجواء كلاسيكية أنيقة.",
        rating: 4.5,
        reviews: 2800,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant7.jpg",
        saved: false,
        lat: 30.0444,
        lng: 31.2353
    },
    {
        id: 35,
        nameEn: "Urban Bistro Cafe",
        nameAr: "أوربان بيسترو كافيه",
        price: 300,
        locationEn: "Maadi, Cairo",
        locationAr: "المعادي، القاهرة",
        descEn: "Cozy neighborhood cafe with healthy options, smoothies, specialty coffee, and all-day breakfast menu.",
        descAr: "مقهى محلي مريح مع خيارات صحية وسموثي وقهوة مختصة وقائمة فطور طوال اليوم.",
        rating: 4.6,
        reviews: 3700,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/cafe4.jpg",
        saved: false,
        lat: 29.9602,
        lng: 31.2569
    },
    {
        id: 36,
        nameEn: "Andrea Mariouteya",
        nameAr: "أندريا المريوطية",
        price: 400,
        locationEn: "Mariouteya Road, Giza",
        locationAr: "طريق المريوطية، الجيزة",
        descEn: "Famous outdoor chicken restaurant. Grilled chicken, fresh salads in countryside garden setting near pyramids.",
        descAr: "مطعم دجاج مشوي مفتوح شهير. دجاج مشوي وسلطات طازجة في حديقة ريفية بالقرب من الأهرامات.",
        rating: 4.8,
        reviews: 5200,
        category: "restaurant",
        aiRecommended: false,
        image: "./Images/restaurant8.jpg",
        saved: false,
        lat: 29.9880,
        lng: 31.1656
    }
];

// =============================================
// STATE MANAGEMENT
// =============================================
let currentLanguage = 'en';
let currentTheme = 'light';
let currentCategory = 'all';
let currentSort = 'popularity';
let maxPrice = 5000;
let savedTrips = [];
let displayedAttractions = 6;
let searchQuery = '';
let searchExpanded = false;

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    loadSettings();
    renderAttractions();
    setupEventListeners();
    updateAllTranslations();
});

// =============================================
// SETTINGS MANAGEMENT
// =============================================
function loadSettings() {
    const savedLang = localStorage.getItem(STORAGE.LANGUAGE) || 'en';
    const savedTheme = localStorage.getItem(STORAGE.THEME) || 'light';
    const savedTripsData = localStorage.getItem(STORAGE.SAVED_TRIPS);

    currentLanguage = savedLang;
    currentTheme = savedTheme;

    if (savedTripsData) {
        savedTrips = JSON.parse(savedTripsData);
        savedTrips.forEach(id => {
            const attraction = attractions.find(a => a.id === id);
            if (attraction) attraction.saved = true;
        });
    }

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
}

function saveSettings() {
    localStorage.setItem(STORAGE.LANGUAGE, currentLanguage);
    localStorage.setItem(STORAGE.THEME, currentTheme);
    localStorage.setItem(STORAGE.SAVED_TRIPS, JSON.stringify(savedTrips));
}

// =============================================
// TOAST NOTIFICATIONS
// =============================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? 'check_circle' : 'cancel';

    toast.innerHTML = `
        <div class="toast-icon">
            <span class="material-symbols-outlined text-lg">${icon}</span>
        </div>
        <div class="flex-1">
            <p class="font-semibold text-sm">${message}</p>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 400);
    }, 3000);
}

// =============================================
// SEARCH TOGGLE
// =============================================
function toggleSearch() {
    const container = document.getElementById('searchContainer');
    const input = document.getElementById('searchInput');

    searchExpanded = !searchExpanded;

    if (searchExpanded) {
        container.classList.remove('collapsed');
        container.classList.add('expanded');
        setTimeout(() => {
            input.focus();
        }, 300);
    } else {
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        input.value = '';
        searchQuery = '';
        renderAttractions();
    }
}

// =============================================
// THEME TOGGLE
// =============================================
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark');
    saveSettings();
}

// =============================================
// LANGUAGE TOGGLE
// =============================================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateAllTranslations();
    renderAttractions();
    saveSettings();
}

function updateAllTranslations() {
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        const key = currentLanguage === 'ar' ? 'data-ar' : 'data-en';
        if (el.hasAttribute(key)) {
            el.textContent = el.getAttribute(key);
        }
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = currentLanguage === 'ar' ? 'ابحث عن الوجهات...' : 'Search destinations...';
    }
}

// =============================================
// STORAGE LISTENER
// =============================================
window.addEventListener('storage', function (event) {
    if (event.key === STORAGE.LANGUAGE) {
        currentLanguage = event.newValue || 'en';
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        updateAllTranslations();
        renderAttractions();
    }

    if (event.key === STORAGE.THEME) {
        currentTheme = event.newValue || 'light';
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
});

// =============================================
// MENU & SIDEBAR FUNCTIONS - IMPROVED
// =============================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');

    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // منع التمرير عندما تكون القائمة مفتوحة
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerIcon');

    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleSidebar() {
    const mobileSidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    mobileSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (mobileSidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeSidebar() {
    const mobileSidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleNotifications() {
    const dropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');
    const sortDropdown = document.getElementById('sortDropdown');

    profileDropdown.classList.remove('active');
    sortDropdown.classList.remove('active');
    dropdown.classList.toggle('active');
}

function toggleProfile() {
    const dropdown = document.getElementById('profileDropdown');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const sortDropdown = document.getElementById('sortDropdown');

    notificationDropdown.classList.remove('active');
    sortDropdown.classList.remove('active');
    dropdown.classList.toggle('active');
}

function closeProfile() {
    document.getElementById('profileDropdown').classList.remove('active');
}

function toggleSortDropdown() {
    const dropdown = document.getElementById('sortDropdown');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');

    notificationDropdown.classList.remove('active');
    profileDropdown.classList.remove('active');
    dropdown.classList.toggle('active');
}

// =============================================
// IMPROVED CLICK OUTSIDE HANDLER - تم التحديث
// =============================================
document.addEventListener('click', function (event) {
    // إغلاق القوائم المنسدلة
    const notifBtn = document.getElementById('notificationBtn');
    const profileBtn = document.getElementById('profileBtn');
    const sortBtn = document.getElementById('sortBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');
    const sortDropdown = document.getElementById('sortDropdown');

    if (notifBtn && notificationDropdown && !notifBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
        notificationDropdown.classList.remove('active');
    }

    if (profileBtn && profileDropdown && !profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.classList.remove('active');
    }

    if (sortBtn && sortDropdown && !sortBtn.contains(event.target) && !sortDropdown.contains(event.target)) {
        sortDropdown.classList.remove('active');
    }

    // إغلاق البحث عند الضغط خارجه
    const container = document.getElementById('searchContainer');
    const input = document.getElementById('searchInput');

    if (searchExpanded && container && !container.contains(event.target)) {
        searchExpanded = false;
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        if (input) {
            input.value = '';
            searchQuery = '';
            renderAttractions();
        }
    }

    // إغلاق القائمة المحمولة عند الضغط على الـ overlay أو خارج القائمة
    const overlay = document.getElementById('sidebarOverlay');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const hamburger = document.getElementById('hamburgerIcon');

    // إغلاق عند الضغط على الـ overlay
    if (overlay && overlay.classList.contains('active') && event.target === overlay) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        if (mobileSidebar && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
    }

    // إغلاق القائمة المحمولة عند الضغط خارجها (ماعدا زر الهامبورجر)
    if (mobileMenu && hamburger) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }

    // إغلاق الـ sidebar المحمول عند الضغط خارجه
    if (mobileSidebar) {
        const isClickInsideSidebar = mobileSidebar.contains(event.target);
        const filterBtn = document.querySelector('[onclick="toggleSidebar()"]');
        const isClickOnFilterBtn = filterBtn && filterBtn.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnFilterBtn && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
    }
});

// منع الإغلاق عند الضغط داخل القائمة نفسها
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSidebar = document.getElementById('mobileSidebar');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if (mobileSidebar) {
        mobileSidebar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// =============================================
// FILTER & SORT FUNCTIONS
// =============================================
function filterCategory(category) {
    currentCategory = category;
    displayedAttractions = 6;

    // Update active state for desktop
    document.querySelectorAll('#categoryList .category-item').forEach(item => {
        if (item.dataset.category === category) {
            item.className = 'category-item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary cursor-pointer transition-all';
        } else {
            item.className = 'category-item flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#e7ecf3] dark:hover:bg-slate-800 transition-colors cursor-pointer text-[#4c6c9a] dark:text-slate-300';
        }
    });

    // Update active state for mobile
    document.querySelectorAll('#categoryListMobile .category-item-mobile').forEach(item => {
        if (item.dataset.category === category) {
            item.className = 'category-item-mobile flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary cursor-pointer transition-all';
        } else {
            item.className = 'category-item-mobile flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#e7ecf3] dark:hover:bg-slate-800 transition-colors cursor-pointer text-[#4c6c9a] dark:text-slate-300';
        }
    });

    renderAttractions();
}

function updatePriceRange(value) {
    maxPrice = parseInt(value);
    const displayValue = maxPrice >= 5000 ? '5,000+ EGP' : `${maxPrice.toLocaleString()} EGP`;

    document.getElementById('priceRangeValue').textContent = displayValue;
    document.getElementById('priceRangeValueMobile').textContent = displayValue;

    // Sync both sliders
    document.getElementById('priceRange').value = value;
    document.getElementById('priceRangeMobile').value = value;

    displayedAttractions = 6;
    renderAttractions();
}

function sortAttractions(sortType) {
    currentSort = sortType;

    const labels = {
        'popularity': { en: 'Sort By: Popularity', ar: 'ترتيب حسب: الشعبية' },
        'price-low': { en: 'Sort By: Price (Low)', ar: 'ترتيب حسب: السعر (منخفض)' },
        'price-high': { en: 'Sort By: Price (High)', ar: 'ترتيب حسب: السعر (مرتفع)' },
        'rating': { en: 'Sort By: Rating', ar: 'ترتيب حسب: التقييم' }
    };

    const label = labels[sortType][currentLanguage];
    document.getElementById('sortLabel').textContent = label;

    toggleSortDropdown();
    displayedAttractions = 6;
    renderAttractions();
}

function handleSearch() {
    searchQuery = document.getElementById('searchInput').value.toLowerCase();
    displayedAttractions = 6;
    renderAttractions();
}

// =============================================
// RENDER ATTRACTIONS
// =============================================
function renderAttractions() {
    let filtered = attractions.filter(a => {
        const categoryMatch = currentCategory === 'all' || a.category === currentCategory;
        const priceMatch = a.price <= maxPrice;
        const searchMatch = searchQuery === '' ||
            a.nameEn.toLowerCase().includes(searchQuery) ||
            a.nameAr.includes(searchQuery) ||
            a.locationEn.toLowerCase().includes(searchQuery) ||
            a.locationAr.includes(searchQuery);

        return categoryMatch && priceMatch && searchMatch;
    });

    // Sort
    switch (currentSort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
        default:
            filtered.sort((a, b) => b.reviews - a.reviews);
    }

    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    const toDisplay = filtered.slice(0, displayedAttractions);

    toDisplay.forEach(attraction => {
        const card = createAttractionCard(attraction);
        grid.appendChild(card);
    });

    updateLoadMoreButton(filtered.length);
}

// =============================================
// UPDATE LOAD MORE BUTTON
// =============================================
function updateLoadMoreButton(totalFilteredCount) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!loadMoreBtn) return;

    if (displayedAttractions >= totalFilteredCount) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

function createAttractionCard(attraction) {
    const div = document.createElement('div');
    div.className = 'attraction-card';

    const name = currentLanguage === 'ar' ? attraction.nameAr : attraction.nameEn;
    const location = currentLanguage === 'ar' ? attraction.locationAr : attraction.locationEn;
    const desc = currentLanguage === 'ar' ? attraction.descAr : attraction.descEn;
    const price = attraction.price === 0 ? (currentLanguage === 'ar' ? 'مجاني' : 'Free') : `${attraction.price} EGP`;

    div.innerHTML = `
        <div class="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-[#e7ecf3] dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
            <div class="relative overflow-hidden h-48">
                <img src="${attraction.image}" alt="${name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button onclick="toggleFavorite(${attraction.id})" class="absolute top-3 right-3 size-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-xl ${attraction.saved ? 'fill-current text-red-500' : 'text-slate-600 dark:text-slate-300'}">${attraction.saved ? 'favorite' : 'favorite_border'}</span>
                </button>
            </div>

            <div class="p-4 flex flex-col gap-3 flex-1">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1">
                        <h3 class="text-[#0d131b] dark:text-white font-bold text-lg line-clamp-1">${name}</h3>
                        <p class="text-[#4c6c9a] dark:text-slate-400 text-sm flex items-center gap-1 mt-1">
                            <span class="material-symbols-outlined text-base">location_on</span>
                            ${location}
                        </p>
                    </div>
                    <div class="flex flex-col items-end">
                        <span class="text-primary font-bold text-lg">${price}</span>
                    </div>
                </div>

                <p class="text-[#4c6c9a] dark:text-slate-400 text-sm line-clamp-2">${desc}</p>

                <div class="flex items-center gap-2 pt-2 border-t border-[#e7ecf3] dark:border-slate-800">
                    <div class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                        <span class="font-bold text-sm">${attraction.rating}</span>
                    </div>
                    <span class="text-[#4c6c9a] text-xs">(${attraction.reviews.toLocaleString()} ${currentLanguage === 'ar' ? 'تقييم' : 'reviews'})</span>
                </div>

                <button onclick="saveToTrip(${attraction.id})" ${attraction.saved ? 'disabled' : ''} class="w-full mt-auto flex items-center justify-center gap-2 rounded-lg h-10 ${attraction.saved ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'} text-white text-sm font-bold transition-all ${attraction.saved ? 'cursor-not-allowed' : ''}">
                    <span class="material-symbols-outlined text-lg">${attraction.saved ? 'check_circle' : 'add_circle'}</span>
                    <span>${attraction.saved ? (currentLanguage === 'ar' ? 'تمت الإضافة' : 'Added') : (currentLanguage === 'ar' ? 'إضافة للرحلة' : 'Add to Trip')}</span>
                </button>
            </div>
        </div>
    `;

    return div;
}

// =============================================
// SAVE TO TRIP
// =============================================
function saveToTrip(id) {
    const attraction = attractions.find(a => a.id === id);
    if (!attraction || attraction.saved) return;

    attraction.saved = true;
    savedTrips.push(id);
    saveSettings();

    const message = currentLanguage === 'ar'
        ? `تمت إضافة ${attraction.nameAr} إلى رحلتك`
        : `${attraction.nameEn} added to your trip`;
    showToast(message, 'success');

    renderAttractions();
}

// =============================================
// FAVORITE TOGGLE
// =============================================
function toggleFavorite(id) {
    const attraction = attractions.find(a => a.id === id);
    if (!attraction) return;

    attraction.saved = !attraction.saved;

    if (attraction.saved) {
        savedTrips.push(id);
        const message = currentLanguage === 'ar'
            ? `تمت إضافة ${attraction.nameAr} إلى المفضلة`
            : `${attraction.nameEn} added to favorites`;
        showToast(message, 'success');
    } else {
        savedTrips = savedTrips.filter(x => x !== id);
        const message = currentLanguage === 'ar'
            ? `تمت إزالة ${attraction.nameAr} من المفضلة`
            : `${attraction.nameEn} removed from favorites`;
        showToast(message, 'error');
    }

    saveSettings();
    renderAttractions();
}

// =============================================
// LOAD MORE
// =============================================
function loadMoreAttractions() {
    let filtered = attractions.filter(a => {
        const categoryMatch = currentCategory === 'all' || a.category === currentCategory;
        const priceMatch = a.price <= maxPrice;
        const searchMatch = searchQuery === '' ||
            a.nameEn.toLowerCase().includes(searchQuery) ||
            a.nameAr.includes(searchQuery) ||
            a.locationEn.toLowerCase().includes(searchQuery) ||
            a.locationAr.includes(searchQuery);

        return categoryMatch && priceMatch && searchMatch;
    });

    const totalCount = filtered.length;

    if (displayedAttractions < totalCount) {
        displayedAttractions += 6;
        renderAttractions();
    } else {
        const message = currentLanguage === 'ar'
            ? 'لا يوجد المزيد من الوجهات لعرضها'
            : 'No more destinations to display';
        showToast(message, 'error');
    }
}

// =============================================
// MAP FUNCTIONS
// =============================================
function openMapView() {
    const modal = document.getElementById('mapModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        initializeMap();
    }, 300);
}

function closeMapView() {
    const modal = document.getElementById('mapModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    closeInfoCard();
}

function closeInfoCard() {
    document.getElementById('mapInfoCard').classList.remove('active');
}

// =============================================
// GOOGLE MAPS INTEGRATION
// =============================================
let map;
let markers = [];
let infoWindow;

function initializeMap() {
    if (map) {
        updateMapMarkers();
        return;
    }

    const egyptCenter = { lat: 26.8206, lng: 30.8025 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: egyptCenter,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ],
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true
    });

    infoWindow = new google.maps.InfoWindow();

    updateMapMarkers();
}

function updateMapMarkers() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    let filtered = attractions.filter(a => {
        const categoryMatch = currentCategory === 'all' || a.category === currentCategory;
        const priceMatch = a.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    const bounds = new google.maps.LatLngBounds();

    filtered.forEach(attraction => {
        const position = { lat: attraction.lat, lng: attraction.lng };

        let markerColor = '#136dec';
        if (attraction.category === 'historical') markerColor = '#ef4444';
        if (attraction.category === 'nature') markerColor = '#10b981';
        if (attraction.category === 'shopping') markerColor = '#f59e0b';
        if (attraction.category === 'hotel') markerColor = '#8b5cf6';
        if (attraction.category === 'restaurant') markerColor = '#ec4899';

        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: currentLanguage === 'ar' ? attraction.nameAr : attraction.nameEn,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: markerColor,
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 3
            },
            animation: google.maps.Animation.DROP
        });

        marker.addListener('click', () => {
            showAttractionInfo(attraction);
            map.panTo(position);
        });

        markers.push(marker);
        bounds.extend(position);
    });

    if (markers.length > 0) {
        map.fitBounds(bounds);
    }
}

function showAttractionInfo(attraction) {
    const name = currentLanguage === 'ar' ? attraction.nameAr : attraction.nameEn;
    const location = currentLanguage === 'ar' ? attraction.locationAr : attraction.locationEn;
    const price = attraction.price === 0
        ? (currentLanguage === 'ar' ? 'مجاني' : 'Free')
        : `${attraction.price} EGP`;

    document.getElementById('infoCardImage').src = attraction.image;
    document.getElementById('infoCardImage').alt = name;
    document.getElementById('infoCardName').textContent = name;
    document.getElementById('infoCardLocation').querySelector('span').textContent = location;
    document.getElementById('infoCardPrice').textContent = price;
    document.getElementById('infoCardRating').textContent = attraction.rating;

    document.getElementById('mapInfoCard').classList.add('active');
}

function setupEventListeners() {
    document.getElementById('mapModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeMapView();
        }
    });

    const originalFilterCategory = window.filterCategory;
    window.filterCategory = function (category) {
        originalFilterCategory(category);
        if (map) {
            updateMapMarkers();
        }
    };

    const originalUpdatePriceRange = window.updatePriceRange;
    window.updatePriceRange = function (value) {
        originalUpdatePriceRange(value);
        if (map) {
            updateMapMarkers();
        }
    };
}

// Mock Google Maps for demo
if (typeof google === 'undefined') {
    window.google = {
        maps: {
            Map: function (element, options) {
                this.element = element;
                this.zoom = options.zoom;
                this.center = options.center;
                element.innerHTML = `
                    <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; flex-direction: column; color: white;">
                        <span class="material-symbols-outlined" style="font-size: 120px; margin-bottom: 20px;">map</span>
                        <h2 style="font-size: 32px; font-weight: bold; margin-bottom: 10px;">Interactive Map</h2>
                        <p style="font-size: 18px; opacity: 0.9;">Add your Google Maps API key to enable the map</p>
                        <p style="font-size: 14px; opacity: 0.7; margin-top: 10px;">Showing ${attractions.length} attractions across Egypt</p>
                    </div>
                `;
                return this;
            },
            Marker: function () { return this; },
            InfoWindow: function () { return this; },
            LatLngBounds: function () {
                return {
                    extend: function () { },
                };
            },
            SymbolPath: { CIRCLE: 0 },
            Animation: { DROP: 1 }
        }
    };
    google.maps.Marker.prototype.setMap = function () { };
    google.maps.Marker.prototype.addListener = function () { };
    google.maps.Map.prototype.fitBounds = function () { };
    google.maps.Map.prototype.panTo = function () { };
}