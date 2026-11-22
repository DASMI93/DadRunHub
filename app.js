/* ==========================================================================
   DadRunner Hub - JavaScript v6
   25 Fresh Recipes (5 Speedy, 5 Slowcooker, 5 Fakeaways, 5 One-Pan, 5 Regular)
   ========================================================================== */

// 8-Week 5k Comeback & Improvement Plan (Starting baseline: 7.0 km/h / 8:34/km)
const runningPlanData = [
  {
    week: 1,
    title: "Week 1: The Re-Entry & Aerobic Reset",
    runs: [
      { id: "w1r1", day: "Midweek 1", title: "Easy Aerobic Re-Start", desc: "3.5 km continuous @ 7.0 km/h (8:34/km). Shake off the 4 weeks of rust, zero pressure, light footsteps and relaxed breathing." },
      { id: "w1r2", day: "Midweek 2", title: "Rhythm & Form Reset", desc: "4.0 km continuous @ 7.0 km/h. Conversational effort around work. Keep shoulders relaxed and cadence brisk." },
      { id: "w1r3", day: "Weekend", title: "5k Baseline Check-In", desc: "5.0 km continuous @ 7.0 km/h (~42:50). Settle into your steady baseline rhythm. Proves the 5k engine is still there!" }
    ]
  },
  {
    week: 2,
    title: "Week 2: Awakening Leg Turnover (Strides)",
    runs: [
      { id: "w2r1", day: "Midweek 1", title: "Aerobic Base Run", desc: "4.0 km easy recovery pace (8:30–8:45/km). Rebuilding joint and tendon resilience." },
      { id: "w2r2", day: "Midweek 2", title: "5k Base + 4x30s Strides", desc: "4.5 km total: 3.5 km easy (7.0 km/h) + 4x 30s smooth accelerations (~8.0–8.5 km/h / 60s jog recovery). Wakes up fast-twitch fibers!" },
      { id: "w2r3", day: "Weekend", title: "5.2 km Aerobic Over-Distance", desc: "5.2 km continuous @ 7.0 km/h. Smooth, easy breathing, locking in consistent pacing." }
    ]
  },
  {
    week: 3,
    title: "Week 3: Introducing 5k Speed Intervals",
    runs: [
      { id: "w3r1", day: "Midweek 1", title: "Easy Recovery Flush", desc: "4.0 km @ 7.0 km/h easy. Keeps legs fresh and builds weekly aerobic volume." },
      { id: "w3r2", day: "Midweek 2", title: "1-Minute 5k Pace Surges", desc: "4.8 km total: 1.5 km warmup + 6x (1 min @ 8.0–8.2 km/h / 1 min easy jog) + 1 km cooldown. Teaches your body to hold faster paces!" },
      { id: "w3r3", day: "Weekend", title: "5.5 km Stamina Builder", desc: "5.5 km continuous steady run (7.0–7.2 km/h). Running beyond 5k makes race distance feel mentally so much shorter." }
    ]
  },
  {
    week: 4,
    title: "Week 4: Mid-Point Consolidation & 7.5 km/h Target",
    runs: [
      { id: "w4r1", day: "Midweek 1", title: "Aerobic Deload Run", desc: "4.0 km easy conversational pace (8:30/km). Relaxed reset run before the pace test." },
      { id: "w4r2", day: "Midweek 2", title: "5k Progressive Pace Run", desc: "5.0 km total: 2 km @ 7.0 km/h, 2 km @ 7.3 km/h, 1 km finish @ 7.6 km/h. Practicing negative splits and finishing strong!" },
      { id: "w4r3", day: "Weekend", title: "6.0 km Long Aerobic Anchor", desc: "6.0 km continuous @ comfortable Zone 2 effort (7.0 km/h). Solidifies endurance baseline." }
    ]
  },
  {
    week: 5,
    title: "Week 5: 1km Sustained Speed Repeats",
    runs: [
      { id: "w5r1", day: "Midweek 1", title: "Easy Base Cruise", desc: "4.5 km easy conversational pace (8:20–8:40/km). Light on your feet." },
      { id: "w5r2", day: "Midweek 2", title: "3 x 1km 5k Pace Repeats", desc: "5.2 km total: 1 km warmup + 3x (1.0 km @ 7.8–8.2 km/h / 90s slow jog recovery) + 1 km cooldown. Big aerobic stimulus for 5k speed." },
      { id: "w5r3", day: "Weekend", title: "6.2 km Weekend Long Run", desc: "6.2 km continuous @ 7.1 km/h. Steady, relaxed, high aerobic efficiency." }
    ]
  },
  {
    week: 6,
    title: "Week 6: Lactate Threshold & Sustained 5k Tempo",
    runs: [
      { id: "w6r1", day: "Midweek 1", title: "Midweek Aerobic Flush", desc: "4.5 km easy pace (8:15–8:35/km). Decompresses legs after workday." },
      { id: "w6r2", day: "Midweek 2", title: "15-Min Sustained Tempo Block", desc: "5.0 km total: 1.5 km warmup + 2.5 km continuous tempo @ 8.0–8.3 km/h (~7:20/km) + 1 km cooldown. Pushes out your lactate threshold!" },
      { id: "w6r3", day: "Weekend", title: "6.5 km Peak Over-Distance", desc: "6.5 km continuous easy aerobic run (7.2 km/h). Your longest run of the block — will make 5k feel so manageable!" }
    ]
  },
  {
    week: 7,
    title: "Week 7: Sharpening & Speed Polish",
    runs: [
      { id: "w7r1", day: "Midweek 1", title: "Easy Recovery Jog", desc: "4.0 km @ relaxed effort (8:20/km). Keeps turnover smooth." },
      { id: "w7r2", day: "Midweek 2", title: "5x 500m Speed Repeats", desc: "5.0 km total: 1.5 km warmup + 5x (500m fast @ 8.5–9.0 km/h / 90s walking recovery) + 1 km cooldown. Sharpens turnover and leg snap!" },
      { id: "w7r3", day: "Weekend", title: "4.5 km Shakeout Deload", desc: "4.5 km smooth easy pace with 3x20s light strides at the end. Resting legs for benchmark week." }
    ]
  },
  {
    week: 8,
    title: "Week 8: 5k Benchmark & Celebration Week",
    runs: [
      { id: "w8r1", day: "Midweek 1", title: "Easy Aerobic Tune-Up", desc: "3.5 km easy conversational jog + light dynamic stretching. Feel light and springy." },
      { id: "w8r2", day: "Midweek 2", title: "2.5 km Shakeout + Strides", desc: "2.5 km very easy jog + 3x 50m brisk strides. Priming neuromuscular system." },
      { id: "w8r3", day: "Weekend", title: "🏆 5k Benchmark Time-Trial!", desc: "5.0 km continuous effort! Aiming for 7.8–8.5+ km/h (sub-38 or sub-35 min territory). Smash your 7 km/h comeback baseline!" }
    ]
  }
];

// Funny Strava Titles Bank
const stravaTitles = [
  "Dans Fatyard Ultra Part III",
  "Still slower than the postman",
  "Ran further than the fridge",
  "Baby's up, might as well run",
  "Aggressive shuffle",
  "Competent but confused",
  "Fought the hill. Hill won.",
  "Technically a run",
  "Zone 2 or Zone Snooze",
  "Dog dragged me round",
  "Outrunning the mortgage",
  "Did not stop for sausage rolls",
  "10k dreams, 5k legs",
  "Sweat is just crying sideways",
  "This pace is intentional, I promise",
  "Legs: fine. Ego: injured.",
  "Dad mode: activated",
  "Treated myself to a biscuit after",
  "Definitely not walking",
  "The garmin lies. So do I."
];

// ============================================================
// 25 RECIPES — Speedy Cook, Slowcooker, Fakeaways, One-Pan & Regular
// ============================================================
const familyRecipesData = [

  // --- SPEEDY COOK (5) ---
  {
    id: "sp1",
    category: "speedy",
    title: "10-Minute Sticky Sweet Chilli Chicken Breast Rice Bowls",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Sliced chicken breast fillets flash-fried in 5 mins, glazed with sweet chilli sauce and honey, served over warm microwave basmati rice with sweet garden peas. Zero chopping, sweet and mild!",
    macros: "~510 kcal | 47g Protein | 48g Carbs | 11g Fats",
    ingredients: ["350g Mini chicken breast fillets (sliced)", "250g Pre-cooked microwave basmati rice", "3 tbsp Sweet chilli sauce & 1 tbsp honey", "1 tbsp Light soy sauce & 1 tsp garlic puree", "150g Garden peas or sweetcorn"],
    steps: ["Sear sliced chicken breast in hot skillet 4 mins until lightly golden.", "Pour in sweet chilli sauce, honey, soy sauce, and garlic puree; bubble 1-2 mins until thick and glossy.", "Microwave rice pouch 90 secs, divide into bowls with warm peas, and spoon glazed chicken over top."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Crispy Bacon & Cheesy Beef Quesadilla Wedges",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Seasoned 5% beef mince and crispy bacon pieces sandwiched in large tortillas with melted cheddar and toasted crisp in a dry skillet. Slice into triangles with cool sour cream!",
    macros: "~525 kcal | 46g Protein | 44g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked & chopped)", "2 Large flour tortillas", "1 tbsp Mild fajita/taco seasoning", "70g Grated light cheddar", "2 tbsp Light sour cream to dip"],
    steps: ["Brown beef mince with taco seasoning in skillet 5 mins; stir in cooked bacon bits.", "Place beef and cheddar inside half of each tortilla, fold over into half-moons.", "Toast in dry skillet on medium heat 2 mins per side until tortillas are crunchy and cheese is melted. Slice into wedges."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Garlic Butter & Lemon King Prawn Spaghetti",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Fresh egg spaghetti (cooks in 3 mins!) tossed with juicy king prawns sizzled in garlic butter, lemon juice, and a dusting of parmesan. Zero onion, pure Italian elegance in 10 minutes flat.",
    macros: "~495 kcal | 44g Protein | 46g Carbs | 12g Fats",
    ingredients: ["300g Raw peeled king prawns", "200g Fresh egg spaghetti (or fresh tagliatelle)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & juice of 1/2 lemon", "30g Grated parmesan cheese"],
    steps: ["Drop fresh spaghetti into salted boiling water for 3 mins, drain and reserve 2 tbsp pasta water.", "Melt butter and olive oil in skillet, flash-fry king prawns with garlic puree 3 mins until pink.", "Toss drained pasta and splash of pasta water into prawns, squeeze fresh lemon, and scatter with parmesan."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "10-Minute Korean Honey-Garlic Beef Mince Rice Bowls",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "5% beef mince browned crispy and tossed with sweet soy, honey, garlic puree, and toasted sesame oil over fluffy rice. Sweet, sticky, and 100% onion-free.",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 13g Fats",
    ingredients: ["350g 5% Fat beef mince", "250g Pre-cooked microwave jasmine rice", "3 tbsp Light soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Steamed edamame or sweetcorn"],
    steps: ["Brown beef mince in skillet on high heat 5 mins until crisp at edges.", "Stir in soy sauce, honey, garlic puree, and sesame oil; simmer 1-2 mins until sticky and coated.", "Microwave jasmine rice 90 secs, plate with warm sweetcorn or edamame, and spoon beef over top."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "12-Minute Smoky BBQ Chicken Breast & Mozzarella Naan Melts",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Soft mini garlic & coriander naans or plain naans topped with shredded chicken breast, rich BBQ sauce, and bubbly melted mozzarella under the grill. Better and faster than pizza!",
    macros: "~515 kcal | 48g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Soft plain naans or Greek flatbreads", "250g Cooked chicken breast (shredded)", "3 tbsp Smoky BBQ sauce", "70g Light mozzarella (grated)", "2 Rashers back bacon (cooked & chopped, optional)"],
    steps: ["Spread smoky BBQ sauce evenly over the naans.", "Top with shredded chicken breast, crispy bacon pieces, and a generous layer of mozzarella.", "Place under hot grill for 4-5 mins until cheese is bubbling golden and naan edges are crispy."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Honey Balsamic Glazed Beef Roast & Mash",
    prepTime: "8 mins",
    cookTime: "7 hrs",
    hack: "Beef chuck or brisket braised in sweet balsamic glaze, honey, garlic, and beef stock. Falls apart with a fork into a sweet-savory gravy to ladle over buttery mashed potatoes.",
    macros: "~525 kcal | 48g Protein | 46g Carbs | 13g Fats",
    ingredients: ["500g Beef braising steak or brisket", "3 tbsp Balsamic vinegar & 2 tbsp honey", "250ml Beef stock & 1 tbsp tomato puree", "1 tsp Garlic puree & dried thyme", "500g Potatoes (for mashing)", "150g Garden peas to serve"],
    steps: ["Whisk balsamic vinegar, honey, beef stock, tomato puree, garlic, and thyme; pour over beef in slowcooker. Cook LOW 7-8 hrs.", "Shred tender beef directly into the sweet balsamic cooking jus.", "Boil and mash potatoes with a splash of milk; serve ladled with shredded beef and green peas."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Creamy Tomato & Herb Chicken Breast over Fusilli",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken breasts cooked in smooth tomato passata and Italian herbs, enriched at the end with light cream cheese into a creamy pink sauce. Shreds effortlessly; zero chopped veg!",
    macros: "~515 kcal | 49g Protein | 48g Carbs | 11g Fats",
    ingredients: ["500g Chicken breast", "400g Smooth tomato passata", "150ml Chicken stock & 1 tsp garlic puree", "1 tsp Italian dried herbs", "70g Light cream cheese", "160g Fusilli pasta"],
    steps: ["Place chicken breasts, passata, stock, garlic, and herbs in slowcooker. Cook on LOW 4 hrs.", "Shred chicken breasts with two forks in the sauce, then stir in cream cheese until velvety and pink.", "Boil fusilli 9 mins, drain, and fold into the creamy chicken tomato sauce with parmesan."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Smoky Pulled Beef Brisket Loaded Jacket Potatoes",
    prepTime: "8 mins",
    cookTime: "7 hrs",
    hack: "Brisket slow-cooked in smoky barbecue sauce, Worcestershire sauce, and smoked paprika. Fluffy jacket potatoes stuffed with tender pulled beef and melted cheddar.",
    macros: "~520 kcal | 47g Protein | 48g Carbs | 14g Fats",
    ingredients: ["500g Beef brisket or braising steak", "4 tbsp Smoky BBQ sauce & 1 tbsp Worcestershire sauce", "1 tsp Smoked paprika & 1 tsp garlic puree", "2 Large baking potatoes", "60g Grated light cheddar", "Sour cream to serve"],
    steps: ["Rub brisket with paprika and garlic, place in slowcooker with BBQ sauce and Worcestershire. Cook on LOW 7 hrs.", "Shred beef with two forks in the rich juices.", "Bake or microwave jacket potatoes until fluffy, split open, fill with pulled beef, and top with cheddar."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Sweet Garlic Teriyaki Pork Tenderloin & Rice",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Lean pork tenderloin medallions cooked in sweet teriyaki glaze, honey, and garlic. Melt-in-the-mouth soft and sweet, perfect for picky palates.",
    macros: "~510 kcal | 46g Protein | 49g Carbs | 11g Fats",
    ingredients: ["500g Lean pork tenderloin (sliced into thick chunks)", "4 tbsp Teriyaki sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "1 tsp Cornstarch (to thicken glaze)", "200g Basmati or jasmine rice", "150g Tenderstem broccoli or sweetcorn"],
    steps: ["Place pork medallions in slowcooker with teriyaki sauce, honey, garlic puree, and sesame oil. Cook LOW 4 hrs.", "Stir in cornstarch mixed with 1 tbsp water 15 mins before serving to thicken glaze.", "Serve spooned over warm rice with tenderstem broccoli or sweetcorn."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Cheesy Chicken Breast & Bacon Potato Hash",
    prepTime: "8 mins",
    cookTime: "5 hrs",
    hack: "Diced chicken breast and baby potatoes slow-cooked in savory stock with herbs, finished with crisp bacon bits and melted cheddar. All-in-one comfort bowl!",
    macros: "~520 kcal | 48g Protein | 44g Carbs | 13g Fats",
    ingredients: ["500g Chicken breast (diced)", "400g Baby potatoes (halved)", "3 Rashers lean back bacon (cooked & chopped)", "200ml Chicken stock & 1 tsp garlic puree", "1 tsp Dried rosemary", "70g Grated light cheddar"],
    steps: ["Place potatoes, chicken breast cubes, stock, garlic, and rosemary in slowcooker. Cook on LOW 5 hrs.", "Drain excess cooking liquid, stir in crispy bacon pieces and half the cheddar.", "Scatter remaining cheddar over top, cover 5 mins to melt into a bubbling golden hash."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Buttermilk-Style Chicken Breast Tenders & Seasoned Chips",
    prepTime: "10 mins",
    cookTime: "18 mins",
    hack: "Chicken breast tenders dipped in seasoned light milk/egg wash and coated in crunchy seasoned panko crumbs, baked extra crisp. Tastes just like diner tenders!",
    macros: "~520 kcal | 49g Protein | 48g Carbs | 11g Fats",
    ingredients: ["350g Mini chicken breast fillets", "40g Panko breadcrumbs & 1 tsp smoked paprika", "1 tsp Garlic powder & pinch salt", "1 Egg (beaten with 2 tbsp milk)", "350g Oven chips or wedges", "2 tbsp Light mayonnaise or BBQ dip"],
    steps: ["Dip chicken breast tenders in egg wash, coat firmly in seasoned panko breadcrumbs.", "Arrange chicken and oven chips on a baking tray, bake at 200°C for 18 mins until deeply crunchy.", "Serve hot with sweetcorn and your favourite dipping sauce."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Double Cheeseburger Mac & Cheese Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Browned 5% beef mince simmered in a smooth light cheddar cheese sauce with macaroni, finished with a drizzle of burger sauce. Fast food flavors in hearty mac & cheese comfort!",
    macros: "~530 kcal | 48g Protein | 50g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "150g Macaroni pasta", "150ml Semi-skimmed milk & 1 tsp cornstarch", "70g Grated light cheddar", "1 tsp Garlic puree & 1 tsp mustard", "2 tbsp Light burger sauce"],
    steps: ["Boil macaroni 8 mins, drain.", "Brown beef mince in skillet 5 mins; whisk milk, cornstarch, garlic, and cheddar in small pan until creamy and thick.", "Fold pasta and beef into cheese sauce, swirl burger sauce over top, and serve immediately."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Crispy Sweet Soy Crispy Chicken Breast & Sesame Rice Boxes",
    prepTime: "10 mins",
    cookTime: "14 mins",
    hack: "Bite-sized crispy panko chicken breast chunks tossed in a warm honey, dark soy, and garlic glaze over egg fried rice. Authentic noodle bar flavor without any spicy peppers or onion chunks!",
    macros: "~520 kcal | 47g Protein | 52g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (cut into bite-sized chunks)", "35g Panko breadcrumbs & 1 egg (beaten)", "3 tbsp Light soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "250g Pre-cooked microwave basmati rice", "1 Egg (scrambled into rice)"],
    steps: ["Coat chicken breast pieces in beaten egg and panko; bake at 200°C for 14 mins until golden.", "Scramble egg in hot pan 1 min, toss in rice with splash of soy 2 mins.", "Warm honey, soy, garlic, and sesame oil in a small pan, toss crispy chicken to coat, and serve over egg rice."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Loaded Philly Cheese Steak Crusty Subs with Garlic Butter",
    prepTime: "8 mins",
    cookTime: "10 mins",
    hack: "Thinly sliced lean rump steak flash-fried in garlic butter and Worcestershire sauce, piled into crusty French sub rolls with melted mozzarella. Dan's hack: sweet sauteed peppers on the side!",
    macros: "~525 kcal | 47g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Lean rump steak (sliced ultra-thin)", "2 Crusty sub rolls or baguettes (halved)", "4 Slices light mozzarella or cheddar", "1 tsp Garlic puree & 1 tbsp Worcestershire sauce", "1 tsp Butter", "1 Red bell pepper (sliced thin, for Dan)"],
    steps: ["Halve sub rolls and toast lightly under grill.", "Flash-fry steak strips in skillet on high heat 3 mins with butter, garlic, and Worcestershire sauce (fry peppers in corner for Dan).", "Stuff hot steak into toasted rolls, cover with cheese, and grill 2 mins until bubbling and toasted."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Five-Spice Crispy Shredded Beef & Egg Fried Rice",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Rump steak strips tossed in Chinese five-spice and cornstarch, pan-crisped until crunchy, drizzled with a sticky garlic soy glaze over egg fried rice. Crunchy takeaway texture!",
    macros: "~515 kcal | 45g Protein | 50g Carbs | 13g Fats",
    ingredients: ["300g Lean rump steak (cut into thin strips)", "2 tbsp Cornstarch & 1/2 tsp Chinese five-spice", "3 tbsp Light soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "250g Microwave basmati rice", "1 Egg (beaten)"],
    steps: ["Toss steak strips in cornstarch and five-spice; flash-fry in hot oil spray 4 mins until crisp.", "Push steak to side of pan, scramble egg 1 min, stir in rice with 1 tbsp soy sauce.", "Drizzle honey, soy, garlic, and sesame oil over beef, toss together, and serve."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Garlic Herb Chicken Breast & Rice Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Diced chicken breast and sweetcorn simmered in chicken stock and garlic, stirred with pre-cooked basmati rice and melted light cream cheese right in the pan. Pure comforting risotto-style creaminess with zero onion!",
    macros: "~510 kcal | 48g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (diced)", "250g Pre-cooked microwave basmati rice", "200ml Chicken stock", "70g Light cream cheese", "1 tsp Garlic puree & Italian dried herbs", "100g Sweetcorn or garden peas"],
    steps: ["Brown chicken breast cubes in skillet with garlic puree and Italian herbs 4 mins.", "Pour in chicken stock and sweetcorn, simmer 5 mins until chicken is cooked through.", "Stir in rice and light cream cheese; heat 2 mins until thick, creamy, and velvety."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Smoky Spanish Chicken Breast & Baby Potato Roast",
    prepTime: "5 mins",
    cookTime: "16 mins",
    hack: "Halved baby potatoes crisped in olive oil and smoked paprika, then diced chicken breast added to cook tender in the savory garlic paprika oils. Sweet green peas tossed in at the end.",
    macros: "~515 kcal | 47g Protein | 44g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced into bite-sized chunks)", "400g Baby potatoes (halved small)", "1 tbsp Olive oil", "1 tsp Smoked paprika & 1 tsp garlic puree", "150g Sweet garden peas", "40g Grated light cheddar (optional to melt over)"],
    steps: ["Crisp halved potatoes in olive oil and paprika in a covered skillet 10 mins until golden and tender.", "Push potatoes to one side, add chicken breast chunks and garlic puree; sear 5 mins until cooked through.", "Toss peas through the pan juices 1-2 mins, sprinkle with cheese if desired, and serve straight from the pan."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Honey Mustard Salmon Fillets & Golden Potatoes",
    prepTime: "5 mins",
    cookTime: "14 mins",
    hack: "Baby potato cubes crisped in olive oil, then fresh salmon fillets seared alongside and glazed in sweet honey and mild Dijon mustard. Sweet, gentle, and packed with omega-3s.",
    macros: "~500 kcal | 43g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Fresh salmon fillets", "350g Baby potatoes (cubed small)", "2 tbsp Honey & 1 tbsp mild Dijon mustard", "1 tbsp Light soy sauce & 1 tbsp olive oil", "150g Green beans or asparagus"],
    steps: ["Fry cubed potatoes in olive oil in skillet 9 mins until crisp; push to one side.", "Place salmon fillets and green beans in pan, sear salmon 3 mins skin-down, then flip.", "Whisk honey, mild mustard, and soy sauce; pour over salmon, baste 2 mins into a glossy glaze, and plate."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Cheesy BBQ Beef Mince & Rice Hash",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "5% beef mince browned with sweet smoky BBQ sauce, microwave rice, and sweetcorn, smothered with cheddar melted under the lid in 2 mins. Ultimate comfort with 1 pan to wash!",
    macros: "~525 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "3 tbsp Smoky BBQ sauce", "200g Pre-cooked microwave basmati rice", "1 Can (200g) sweetcorn (drained)", "70g Grated light cheddar", "1 tsp Garlic puree"],
    steps: ["Brown beef mince in skillet with garlic puree 5 mins.", "Stir in BBQ sauce, warm rice, and sweetcorn with 2 tbsp water; heat 2 mins.", "Scatter cheddar over the top, cover with lid 2 mins until melted into a bubbling layer."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Garlic Butter Pork Tenderloin Medallions & Sweet Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Sweet potato cubes crisped in the pan, followed by lean pork tenderloin medallions seared golden in garlic herb butter. Naturally sweet and ultra-lean protein!",
    macros: "~515 kcal | 45g Protein | 46g Carbs | 13g Fats",
    ingredients: ["500g Lean pork tenderloin (sliced into medallions)", "350g Sweet potato (diced small)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried rosemary", "150g Steamed green beans or sweetcorn"],
    steps: ["Fry diced sweet potatoes in olive oil in skillet 10 mins until golden and soft; push to side.", "Melt butter in center of pan, add pork medallions, garlic, and rosemary; sear 2-3 mins per side until juicy.", "Toss sweet potatoes and pork in garlic pan juices, serve with green beans."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy Golden Chicken Breast Kiev Flatbread Melts",
    prepTime: "8 mins",
    cookTime: "16 mins",
    hack: "Chicken breast cutlets crusted in garlic herb panko breadcrumbs, baked extra crisp, sliced inside warm flatbreads with melted mozzarella and light garlic mayo. All the Kiev comfort without the greasy explosion!",
    macros: "~525 kcal | 49g Protein | 46g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (sliced into thin cutlets)", "35g Panko breadcrumbs & 1 tsp garlic powder", "1 tsp Dried parsley & pinch salt", "1 Egg (beaten)", "2 Greek flatbreads or folded naans", "60g Light mozzarella (grated)"],
    steps: ["Dip chicken cutlets in beaten egg, press into garlic-herb panko crumb.", "Bake at 200°C for 14 mins until golden and crunchy.", "Slice chicken, fold inside warm flatbreads with mozzarella, and grill 2 mins until cheese melts."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Classic British Cottage Pie with Cheesy Cheddar Mash",
    prepTime: "12 mins",
    cookTime: "22 mins",
    hack: "5% lean beef mince in a rich, smooth beef and Worcestershire gravy under fluffy mashed potatoes with a browned cheddar crust. Sauce is completely smooth with zero onion chunks!",
    macros: "~510 kcal | 46g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce & 1 tsp garlic puree", "50g Grated light cheddar", "100g Sweet garden peas to serve"],
    steps: ["Brown beef mince in pan 5 mins. Stir in tomato puree, Worcestershire sauce, garlic, and beef stock; simmer 5 mins into smooth gravy.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over top.", "Sprinkle cheddar over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Nut-Free Creamy Sun-Dried Tomato Chicken Breast & Penne Bake",
    prepTime: "8 mins",
    cookTime: "16 mins",
    hack: "Tender chicken breast and penne folded through a silky pink sauce made from smooth tomato passata, a touch of pureed sun-dried tomatoes (strictly nut-free), and light cream cheese under mozzarella.",
    macros: "~520 kcal | 48g Protein | 48g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (diced and cooked)", "160g Penne pasta", "250g Smooth tomato passata", "2 tbsp Sun-dried tomato puree (nut-free)", "70g Light cream cheese", "60g Light mozzarella (grated)"],
    steps: ["Boil penne pasta 9 mins, drain.", "Warm passata, sun-dried tomato puree, and light cream cheese together in pan until smooth and creamy; fold in chicken and pasta.", "Transfer to baking dish, top with mozzarella, bake at 200°C for 10 mins until bubbly."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Crispy Bacon & Cheddar Stuffed Chicken Breast with Wedges",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Chicken breasts pocketed with light cream cheese and cheddar, wrapped in lean bacon rashers, and oven-baked alongside crispy skin-on potato wedges. Melted cheese stays inside the chicken!",
    macros: "~525 kcal | 50g Protein | 42g Carbs | 14g Fats",
    ingredients: ["2 Large chicken breasts", "4 Rashers lean back bacon", "50g Light cream cheese & 40g grated cheddar", "350g Potato wedges or chips", "1 tbsp Olive oil & 1 tsp dried herbs"],
    steps: ["Slice a deep pocket in each chicken breast, stuff with cream cheese and cheddar, wrap bacon around to seal.", "Place on baking tray alongside seasoned potato wedges tossed in olive oil.", "Bake at 200°C for 20 mins until chicken is cooked through, bacon is crisp, and wedges are golden."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "Cheesy Italian Meatball & Pasta Bake in Smooth Marinara",
    prepTime: "6 mins",
    cookTime: "16 mins",
    hack: "Lean beef meatballs tossed with cooked fusilli and smooth marinara passata, smothered in a blanket of mozzarella and baked until bubbly. Pure comfort that kids and picky partners devour!",
    macros: "~520 kcal | 46g Protein | 50g Carbs | 13g Fats",
    ingredients: ["10 Lean cooked beef meatballs", "160g Fusilli or penne pasta", "350g Smooth tomato passata", "1 tsp Garlic puree & 1 tsp Italian dried herbs", "70g Light mozzarella (grated)"],
    steps: ["Boil fusilli 9 mins, drain.", "Simmer meatballs in smooth passata with garlic puree and Italian herbs for 5 mins.", "Combine pasta and saucy meatballs in a baking dish, cover with mozzarella, and bake at 200°C for 12 mins until cheese is golden and bubbling."]
  }
];

// ============================================================
// APPLICATION STATE
// ============================================================
const defaultCompleted = {};

// Clean up any legacy completed runs from older versions
if (localStorage.getItem('dadrunner_runs')) {
  localStorage.removeItem('dadrunner_runs');
}
if (localStorage.getItem('dadrunner_runs_v2')) {
  localStorage.removeItem('dadrunner_runs_v2');
}
if (localStorage.getItem('dadrunner_runs_v3')) {
  localStorage.removeItem('dadrunner_runs_v3');
}

let completedRuns    = JSON.parse(localStorage.getItem('dadrunner_runs_v4')) || defaultCompleted;
let waterCount       = parseInt(localStorage.getItem('dadrunner_water'))   || 0;
let currentCategory  = 'all';
let selectedRecipes  = new Set(); // IDs of recipes selected for shopping list

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderWorkoutPlan();
  initHydrationTracker();
  renderFamilyRecipes();
  initKettlebellTracker();
  initModal();
});

// ============================================================
// TAB NAVIGATION
// ============================================================
function initTabs() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchToTab(btn.getAttribute('data-tab')));
  });
}

function switchToTab(tabId) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// RUNNING PLAN
// ============================================================
function renderWorkoutPlan() {
  const container = document.getElementById('workout-list');
  if (!container) return;
  container.innerHTML = '';

  let total = 0, done = 0;

  runningPlanData.forEach(weekBlock => {
    const weekEl = document.createElement('div');
    weekEl.className = 'week-block';

    const header = document.createElement('div');
    header.className = 'week-header';
    header.textContent = weekBlock.title;
    weekEl.appendChild(header);

    weekBlock.runs.forEach(run => {
      total++;
      const isDone = !!completedRuns[run.id];
      if (isDone) done++;

      const item = document.createElement('div');
      item.className = 'workout-item' + (isDone ? ' completed' : '');
      item.innerHTML = `
        <div class="workout-checkbox"><i class="fa-solid fa-check"></i></div>
        <div class="workout-details">
          <h5>${run.day}: ${run.title}</h5>
          <p>${run.desc}</p>
        </div>`;
      item.addEventListener('click', () => toggleRun(run.id));
      weekEl.appendChild(item);
    });

    container.appendChild(weekEl);
  });

  const pct = Math.round((done / total) * 100) || 0;
  const txt = document.getElementById('plan-completion-text');
  if (txt) txt.textContent = `${pct}% Complete (${done}/${total} Runs)`;

  // Dynamic hero stats update
  const heroProgress = document.getElementById('hero-progress');
  if (heroProgress) heroProgress.textContent = `${pct}% Complete`;

  const heroRunsDone = document.getElementById('hero-runs-done');
  if (heroRunsDone) heroRunsDone.innerHTML = `${done}<small>/${total}</small>`;

  const heroPill = document.getElementById('hero-live-pill');
  if (heroPill) {
    if (done === 0) heroPill.innerHTML = `<span class="live-dot"></span>Plan Ready`;
    else if (done >= total) heroPill.innerHTML = `<span class="live-dot"></span>Plan Completed! 🏆`;
    else {
      let activeWeek = 1;
      for (const w of runningPlanData) {
        const hasUnticked = w.runs.some(r => !completedRuns[r.id]);
        if (hasUnticked) {
          activeWeek = w.week;
          break;
        }
      }
      heroPill.innerHTML = `<span class="live-dot"></span>Week ${activeWeek} Active`;
    }
  }

  // Next run dynamic callout
  let nextRun = null;
  let nextWeekNum = 1;
  for (const weekBlock of runningPlanData) {
    for (const run of weekBlock.runs) {
      if (!completedRuns[run.id]) {
        nextRun = run;
        nextWeekNum = weekBlock.week;
        break;
      }
    }
    if (nextRun) break;
  }

  const nextWeekEl = document.getElementById('next-run-week');
  const nextTitleEl = document.getElementById('next-run-title');
  const nextDescEl = document.getElementById('next-run-desc');
  if (nextRun) {
    if (nextWeekEl) nextWeekEl.textContent = `Week ${nextWeekNum} · ${nextRun.day.split(',')[0]}`;
    if (nextTitleEl) nextTitleEl.textContent = nextRun.title;
    if (nextDescEl) nextDescEl.textContent = nextRun.desc;
  } else if (done === total && total > 0) {
    if (nextWeekEl) nextWeekEl.textContent = `Completed 🏆`;
    if (nextTitleEl) nextTitleEl.textContent = `All 24 Runs Finished!`;
    if (nextDescEl) nextDescEl.textContent = `Incredible work Dan! You completed the full 8-week progressive endurance schedule!`;
  }
}

function toggleRun(id) {
  if (completedRuns[id]) delete completedRuns[id];
  else completedRuns[id] = true;
  localStorage.setItem('dadrunner_runs_v4', JSON.stringify(completedRuns));
  renderWorkoutPlan();
}

// ============================================================
// HYDRATION TRACKER
// ============================================================
function initHydrationTracker() {
  const container = document.getElementById('water-tracker');
  const countEl   = document.getElementById('water-count');
  if (!container || !countEl) return;

  container.innerHTML = '';
  countEl.textContent = `${waterCount} / 6 Glasses (${(waterCount * 0.5).toFixed(1)}L)`;

  for (let i = 1; i <= 6; i++) {
    const glass = document.createElement('div');
    glass.className = 'water-glass' + (i <= waterCount ? ' active' : '');
    glass.innerHTML = `<i class="fa-solid fa-glass-water"></i>`;
    glass.addEventListener('click', () => {
      waterCount = (waterCount === i) ? i - 1 : i;
      localStorage.setItem('dadrunner_water', waterCount);
      initHydrationTracker();
    });
    container.appendChild(glass);
  }
}

// ============================================================
// FAMILY RECIPES — FILTER, RENDER & SHOPPING LIST
// ============================================================
function filterRecipes(category) {
  currentCategory = category;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.cat === category);
  });
  renderFamilyRecipes();
}

function renderFamilyRecipes() {
  const container = document.getElementById('recipes-container');
  if (!container) return;
  container.innerHTML = '';

  const list = currentCategory === 'all'
    ? familyRecipesData
    : familyRecipesData.filter(r => r.category === currentCategory);

  list.forEach(recipe => {
    const isSelected = selectedRecipes.has(recipe.id);
    const card = document.createElement('div');
    card.className = 'recipe-card' + (isSelected ? ' recipe-selected' : '');
    card.dataset.id = recipe.id;

    card.innerHTML = `
      <div class="recipe-card-top">
        <div class="recipe-select-btn ${isSelected ? 'active' : ''}" data-id="${recipe.id}">
          <i class="fa-solid ${isSelected ? 'fa-circle-check' : 'fa-circle-plus'}"></i>
          ${isSelected ? 'Added' : 'Add to List'}
        </div>
      </div>
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span><i class="fa-solid fa-clock"></i> Prep: ${recipe.prepTime}</span>
        <span><i class="fa-solid fa-fire"></i> Cook: ${recipe.cookTime}</span>
      </div>
      <div class="fussy-hack">
        <div class="fussy-hack-title"><i class="fa-solid fa-shield-heart"></i> Fussy Partner Hack</div>
        <div class="fussy-hack-text">${recipe.hack}</div>
      </div>
      <div class="recipe-section-title">Ingredients (Serves 2–3)</div>
      <ul class="recipe-ingredients-list">${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="recipe-section-title">Quick Steps</div>
      <ol class="recipe-steps-list">${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="recipe-footer">
        <span class="recipe-macro-badge">${recipe.macros}</span>
      </div>`;

    // Toggle selection on button click
    card.querySelector('.recipe-select-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRecipeSelection(recipe.id);
    });

    container.appendChild(card);
  });

  updateShoppingListBar();
}

function toggleRecipeSelection(id) {
  if (selectedRecipes.has(id)) selectedRecipes.delete(id);
  else selectedRecipes.add(id);
  renderFamilyRecipes();
}

function updateShoppingListBar() {
  const bar = document.getElementById('shopping-list-bar');
  if (!bar) return;
  if (selectedRecipes.size === 0) {
    bar.classList.add('hidden');
  } else {
    bar.classList.remove('hidden');
    const countEl = bar.querySelector('.sl-count');
    if (countEl) countEl.textContent = `${selectedRecipes.size} recipe${selectedRecipes.size > 1 ? 's' : ''} selected`;
  }
}

function generateShoppingList() {
  const modal = document.getElementById('shopping-modal');
  const titleEl = document.getElementById('sl-modal-title');
  const listEl  = document.getElementById('sl-modal-list');
  if (!modal || !listEl) return;

  const selected = familyRecipesData.filter(r => selectedRecipes.has(r.id));
  if (selected.length === 0) return;

  // Collect and deduplicate ingredients
  const allIngredients = [];
  selected.forEach(recipe => {
    recipe.ingredients.forEach(ing => allIngredients.push(ing.trim()));
  });

  // Smart-group by common keywords
  const categories = {
    '🥩 Meat & Fish': ['chicken', 'beef', 'pork', 'turkey', 'steak', 'mince', 'salmon', 'cod', 'haddock', 'tuna', 'prawn', 'sausage', 'chorizo', 'lamb', 'bacon'],
    '🥛 Dairy & Eggs': ['milk', 'yogurt', 'cream cheese', 'mozzarella', 'cheddar', 'parmesan', 'egg', 'butter'],
    '🥫 Tins & Packets': ['can', 'tin', 'beans', 'tomatoes', 'passata', 'stock', 'coconut milk', 'orzo', 'pasta', 'rice', 'noodle', 'gnocchi', 'lentil'],
    '🧅 Fresh Veg & Fruit': ['onion', 'garlic', 'potato', 'pepper', 'tomato', 'mushroom', 'courgette', 'spinach', 'broccoli', 'cucumber', 'lemon', 'lime', 'carrot'],
    '🧂 Sauces & Spices': ['sauce', 'paste', 'oil', 'vinegar', 'soy', 'honey', 'mustard', 'paprika', 'cumin', 'oregano', 'pesto', 'chilli', 'seasoning', 'spice', 'herb', 'teriyaki', 'mayonnaise'],
    '🍞 Bread & Carbs': ['bread', 'bun', 'wrap', 'naan', 'tortilla', 'flatbread', 'pita', 'brioche', 'jacket', 'chip', 'breadcrumb', 'panko'],
  };

  const grouped = {};
  Object.keys(categories).forEach(cat => grouped[cat] = []);
  grouped['🛒 Other'] = [];

  allIngredients.forEach(ing => {
    const lower = ing.toLowerCase();
    let matched = false;
    for (const [cat, keywords] of Object.entries(categories)) {
      if (keywords.some(kw => lower.includes(kw))) {
        grouped[cat].push(ing);
        matched = true;
        break;
      }
    }
    if (!matched) grouped['🛒 Other'].push(ing);
  });

  // Build HTML
  titleEl.textContent = `Shopping List (${selected.map(r => r.title).join(', ')})`;
  let html = '';
  Object.entries(grouped).forEach(([cat, items]) => {
    if (items.length === 0) return;
    html += `<div class="sl-category">${cat}</div>`;
    items.forEach(item => {
      html += `<label class="sl-item"><input type="checkbox"><span>${item}</span></label>`;
    });
  });
  listEl.innerHTML = html;
  modal.classList.add('active');
}

function clearRecipeSelection() {
  selectedRecipes.clear();
  renderFamilyRecipes();
}

// ============================================================
// STRAVA TITLE GENERATOR
// ============================================================
function generateStravaTitle() {
  const el = document.getElementById('strava-title-output');
  if (!el) return;
  el.textContent = `"${stravaTitles[Math.floor(Math.random() * stravaTitles.length)]}"`;
}

// ============================================================
// PACE CALCULATOR
// ============================================================
function calculatePaces() {
  const input = document.getElementById('target-5k');
  const box   = document.getElementById('pace-results');
  if (!input || !box) return;

  const min5k = parseFloat(input.value) || 33;
  const pace5k = (min5k * 60) / 5;

  document.getElementById('pace-easy').textContent  = `${formatPace(pace5k + 60)} – ${formatPace(pace5k + 90)} /km`;
  document.getElementById('pace-tempo').textContent = `${formatPace(pace5k + 15)} – ${formatPace(pace5k + 30)} /km`;
  box.classList.remove('hidden');
}

function formatPace(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// ============================================================
// STRAVA API SYNC
// ============================================================
async function syncStravaActivities() {
  const tokenInput = document.getElementById('strava-token');
  const outputBox  = document.getElementById('strava-sync-output');
  if (!tokenInput || !outputBox) return;

  const token = tokenInput.value.trim() || localStorage.getItem('dadrunner_strava_token');
  if (!token) { alert("Please paste your Strava Access Token first! Click Help for instructions."); return; }

  localStorage.setItem('dadrunner_strava_token', token);
  outputBox.classList.remove('hidden');
  outputBox.innerHTML = `<span><i class="fa-solid fa-spinner fa-spin"></i> Connecting to Strava...</span>`;

  try {
    const res = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=5', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error(`Strava API Error ${res.status} — token invalid or expired`);

    const activities = await res.json();
    if (!activities || activities.length === 0) {
      outputBox.innerHTML = `<span>No recent activities found.</span>`;
      return;
    }

    let html = `<strong><i class="fa-brands fa-strava"></i> Latest Strava Runs:</strong>`;
    activities.forEach(act => {
      if (act.type === 'Run' || act.type === 'Hike') {
        const km  = (act.distance / 1000).toFixed(2);
        const min = Math.floor(act.moving_time / 60);
        const sec = act.moving_time % 60;
        html += `<div class="pace-row" style="padding:6px 0;border-bottom:1px dashed rgba(255,255,255,0.1)">
          <div><strong>${act.name}</strong><br><small>${new Date(act.start_date_local).toLocaleDateString()}</small></div>
          <div style="text-align:right"><strong style="color:var(--cyan)">${km} km</strong><br><small>${min}m ${sec}s · ${formatPace(act.moving_time / (act.distance / 1000))}/km</small></div>
        </div>`;
      }
    });
    outputBox.innerHTML = html;
  } catch (err) {
    outputBox.innerHTML = `<span style="color:#f87171"><i class="fa-solid fa-circle-exclamation"></i> ${err.message}</span>`;
  }
}

function openStravaTokenGuide() {
  alert("Get your Strava Access Token:\n\n1. Go to strava.com/settings/api on your computer\n2. Create a free API app if you haven't already\n3. Click 'My API Application' and copy your Access Token\n4. Paste it in the box and click Sync Runs!");
}

// ============================================================
// MODALS (GitHub + Shopping List)
// ============================================================
function initModal() {
  // GitHub modal
  const ghModal  = document.getElementById('gh-modal');
  const ghBtn    = document.getElementById('gh-help-btn');
  const ghClose  = document.querySelector('#gh-modal .close-modal');
  if (ghBtn)   ghBtn.addEventListener('click',  () => ghModal.classList.add('active'));
  if (ghClose) ghClose.addEventListener('click', () => ghModal.classList.remove('active'));
  if (ghModal) ghModal.addEventListener('click', e => { if (e.target === ghModal) ghModal.classList.remove('active'); });

  // Shopping list modal
  const slModal  = document.getElementById('shopping-modal');
  const slClose  = document.querySelector('#shopping-modal .close-modal');
  if (slClose) slClose.addEventListener('click',  () => slModal.classList.remove('active'));
  if (slModal) slModal.addEventListener('click', e => { if (e.target === slModal) slModal.classList.remove('active'); });
}

// ============================================================
// 12KG KETTLEBELL TRACKER & REST TIMER
// ============================================================
let kbSessions = JSON.parse(localStorage.getItem('dadrunner_kb_v1')) || { a: false, b: false };
let kbTimerDuration = 45;
let kbTimerSeconds = 45;
let kbTimerInterval = null;
let kbTimerRunning = false;

function initKettlebellTracker() {
  updateKbTrackerUI();
  updateKbTimerDisplay();
}

function updateKbTrackerUI() {
  const btnA = document.getElementById('btn-kb-session-a');
  const btnB = document.getElementById('btn-kb-session-b');
  const statusChip = document.getElementById('kb-weekly-status');
  const homeCardSub = document.getElementById('home-kb-status');

  let completedCount = 0;
  if (kbSessions.a) completedCount++;
  if (kbSessions.b) completedCount++;

  if (btnA) {
    btnA.classList.toggle('done', !!kbSessions.a);
    btnA.innerHTML = kbSessions.a
      ? `<i class="fa-solid fa-circle-check"></i> <span>Completed!</span>`
      : `<i class="fa-regular fa-circle"></i> <span>Mark Done</span>`;
  }

  if (btnB) {
    btnB.classList.toggle('done', !!kbSessions.b);
    btnB.innerHTML = kbSessions.b
      ? `<i class="fa-solid fa-circle-check"></i> <span>Completed!</span>`
      : `<i class="fa-regular fa-circle"></i> <span>Mark Done</span>`;
  }

  if (statusChip) {
    if (completedCount === 2) {
      statusChip.className = 'green-chip';
      statusChip.innerHTML = `<i class="fa-solid fa-trophy"></i> 2/2 Smashed!`;
    } else {
      statusChip.className = 'orange-chip';
      statusChip.innerHTML = `<i class="fa-solid fa-weight-hanging"></i> ${completedCount}/2 Done`;
    }
  }

  if (homeCardSub) {
    homeCardSub.textContent = completedCount === 2
      ? "2/2 Smashed this week! 🏆 High running economy."
      : `${completedCount}/2 Done this week · Mon & Fri 17:15 PM →`;
  }
}

function toggleKbSession(id) {
  if (id === 'a') kbSessions.a = !kbSessions.a;
  if (id === 'b') kbSessions.b = !kbSessions.b;
  localStorage.setItem('dadrunner_kb_v1', JSON.stringify(kbSessions));
  updateKbTrackerUI();
}

function resetKbWeek() {
  kbSessions = { a: false, b: false };
  localStorage.setItem('dadrunner_kb_v1', JSON.stringify(kbSessions));
  updateKbTrackerUI();
}

function updateKbTimerDisplay() {
  const display = document.getElementById('kb-timer-display');
  if (!display) return;
  const mins = Math.floor(kbTimerSeconds / 60);
  const secs = kbTimerSeconds % 60;
  display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function setKbTimer(seconds) {
  clearInterval(kbTimerInterval);
  kbTimerRunning = false;
  kbTimerDuration = seconds;
  kbTimerSeconds = seconds;
  const btn = document.getElementById('kb-timer-toggle-btn');
  if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
  const display = document.getElementById('kb-timer-display');
  if (display) display.classList.remove('pulse');
  updateKbTimerDisplay();
}

function toggleKbTimer() {
  const btn = document.getElementById('kb-timer-toggle-btn');
  const display = document.getElementById('kb-timer-display');

  if (kbTimerRunning) {
    clearInterval(kbTimerInterval);
    kbTimerRunning = false;
    if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Resume`;
  } else {
    if (kbTimerSeconds <= 0) {
      kbTimerSeconds = kbTimerDuration;
      if (display) display.classList.remove('pulse');
    }
    kbTimerRunning = true;
    if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;

    kbTimerInterval = setInterval(() => {
      if (kbTimerSeconds > 0) {
        kbTimerSeconds--;
        updateKbTimerDisplay();
        if (kbTimerSeconds === 0) {
          clearInterval(kbTimerInterval);
          kbTimerRunning = false;
          if (btn) btn.innerHTML = `<i class="fa-solid fa-rotate-left"></i> Done!`;
          if (display) display.classList.add('pulse');
          try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
          } catch(e) {}
        }
      }
    }, 1000);
  }
}

function resetKbTimer() {
  clearInterval(kbTimerInterval);
  kbTimerRunning = false;
  kbTimerSeconds = kbTimerDuration;
  const btn = document.getElementById('kb-timer-toggle-btn');
  if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
  const display = document.getElementById('kb-timer-display');
  if (display) display.classList.remove('pulse');
  updateKbTimerDisplay();
}
