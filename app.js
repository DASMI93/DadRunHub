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
    title: "10-Minute Sticky Honey Garlic Salmon Rice Bowls",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Fresh salmon pan-seared in 6 mins, basted in a glossy 3-ingredient sweet honey garlic soy glaze. Flaked over steaming microwave jasmine rice with sweetcorn. Fast, omega-3 rich, and naturally sweet!",
    macros: "~510 kcal | 42g Protein | 46g Carbs | 14g Fats",
    ingredients: ["2 Fresh salmon fillets", "250g Pre-cooked microwave jasmine rice", "2 tbsp Honey & 2 tbsp light soy sauce", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Sweetcorn or garden peas"],
    steps: ["Sear salmon fillets in a hot skillet 3 mins skin-side down, flip and cook 2 mins.", "Pour in honey, soy sauce, garlic puree, and sesame oil; bubble 1-2 mins until sticky and glossy.", "Microwave rice pouch 90 secs, plate with warm sweetcorn, and top with glazed flaked salmon."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Crispy Bacon & Chicken Caesar Piadina Flatbreads",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Toasted Greek flatbreads spread with creamy light Caesar dressing, piled with succulent shredded chicken breast, crispy smoked bacon pieces, and shaved parmesan. No onion, no fuss, diner crunch!",
    macros: "~520 kcal | 48g Protein | 44g Carbs | 13g Fats",
    ingredients: ["2 Greek flatbreads or folded naans", "250g Cooked chicken breast (shredded)", "4 Rashers lean back bacon (cooked & chopped)", "3 tbsp Light Caesar dressing", "30g Shaved or grated parmesan", "Crispy shredded romaine lettuce"],
    steps: ["Fry bacon rashers in a pan 4 mins until crispy, chop into bite-sized bits.", "Warm flatbreads in a dry skillet or under the grill for 1 min until soft and toasted.", "Spread with light Caesar dressing, fill with chicken breast, crispy bacon, parmesan, and crisp lettuce. Fold and enjoy."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Sweet Chilli King Prawn Egg Fried Noodles",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Juicy king prawns sizzled in garlic oil, tossed with straight-to-wok egg noodles, scrambled eggs, and sweet chilli glaze. 10 minutes total and zero veg peeling!",
    macros: "~490 kcal | 43g Protein | 50g Carbs | 11g Fats",
    ingredients: ["300g Raw peeled king prawns", "300g Ready-to-wok egg noodles (2 pouches)", "2 Eggs (lightly beaten)", "3 tbsp Sweet chilli sauce", "1 tbsp Light soy sauce & 1 tsp garlic puree"],
    steps: ["Sizzle prawns and garlic puree in a hot wok or skillet 2 mins until pink.", "Push to the side, scramble beaten eggs 1 min, then toss in straight-to-wok noodles.", "Drizzle over sweet chilli and soy sauce, toss everything high-heat for 2 mins until piping hot."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "12-Minute Cheesy Philly Steak & Melted Mozzarella Bagels",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Shaved lean rump steak flash-fried in garlic butter and Worcestershire sauce, stuffed into toasted bagels with melted mozzarella. Dan's hack: toss sliced peppers in the pan on the side!",
    macros: "~515 kcal | 46g Protein | 45g Carbs | 14g Fats",
    ingredients: ["300g Lean rump steak (sliced ultra-thin)", "2 Plain bagels (halved and toasted)", "4 Slices light mozzarella or cheddar", "1 tsp Garlic puree & 1 tbsp Worcestershire sauce", "1 tsp Butter", "1 Red bell pepper (sliced thin, for Dan)"],
    steps: ["Toast bagels under grill or in toaster.", "High-heat flash-fry thin steak strips with butter, garlic puree, and Worcestershire sauce for 2-3 mins.", "Pile juicy steak into toasted bagels, top with cheese slices, grill 1 min to melt into gooey perfection."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "10-Minute Mild Honey Buffalo Chicken Breast Pitta Pockets",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Mini chicken breast tenders tossed in a sweet & tangy mild glaze (mild hot sauce, honey & a touch of butter), loaded into warm fluffy pitta pockets with melted cheddar and sour cream.",
    macros: "~510 kcal | 47g Protein | 46g Carbs | 12g Fats",
    ingredients: ["350g Mini chicken breast fillets", "2 tbsp Mild buffalo sauce & 1 tbsp honey", "1 tsp Butter", "2 Large Greek pitta breads or soft wraps", "50g Grated light cheddar", "2 tbsp Light sour cream or ranch dressing"],
    steps: ["Pan-fry mini chicken breast fillets 3 mins per side until golden and cooked through.", "Stir in mild buffalo sauce, honey, and butter; coat chicken into a glossy sweet-tangy glaze.", "Split warm pittas, fill with glazed chicken tenders, grated cheddar, and cool sour cream."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Rich Beef Ragu with Pappardelle & Parmesan",
    prepTime: "8 mins",
    cookTime: "7 hrs",
    hack: "Lean beef braising steak slow-cooked in smooth tomato passata, beef stock, garlic, and dried oregano until melt-in-the-mouth tender. Shreds with two forks into a velvety, onion-free Italian ragu!",
    macros: "~525 kcal | 48g Protein | 48g Carbs | 13g Fats",
    ingredients: ["500g Beef braising steak or chuck", "400g Smooth tomato passata", "200ml Beef stock", "1 tsp Garlic puree & 1 tsp Italian dried herbs", "160g Pappardelle or tagliatelle pasta", "40g Grated parmesan cheese"],
    steps: ["Place braising steak into slowcooker, pour over smooth passata, beef stock, garlic puree, and Italian herbs. Cook on LOW for 7-8 hrs.", "Shred tender beef directly into the rich tomato sauce with two forks.", "Boil pasta 9 mins, drain, toss through the shredded beef ragu, and dust generously with parmesan."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Sticky Honey & Garlic Pork Tenderloin Bites",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Lean pork medallions slow-braised in honey, soy sauce, garlic, and tomato glaze. Becomes melt-in-the-mouth succulent with a sweet Asian barbecue glaze over rice.",
    macros: "~515 kcal | 46g Protein | 50g Carbs | 11g Fats",
    ingredients: ["500g Lean pork tenderloin (cut into thick bite-sized medallions)", "4 tbsp Honey & 3 tbsp light soy sauce", "2 tbsp Tomato ketchup & 1 tsp garlic puree", "1 tsp Cornstarch (dissolved in 1 tbsp water)", "200g Jasmine or basmati rice", "150g Tenderstem broccoli or sweet peas"],
    steps: ["Whisk honey, soy sauce, ketchup, and garlic puree; pour over pork chunks in the slowcooker. Cook on LOW 4-5 hrs.", "Stir in cornstarch slurry 15 mins before serving to turn the cooking juices into a thick glossy glaze.", "Serve juicy pork bites over steamed jasmine rice with tenderstem broccoli or sweet peas."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Cheesy Chicken Breast & Bacon Ranch Potato Casserole",
    prepTime: "8 mins",
    cookTime: "5 hrs",
    hack: "Lean chicken breast, baby potatoes, and bacon lardons slow-cooked with light cream cheese, mild garlic ranch seasoning, and cheddar. Pure cozy potato-bake comfort with zero prep!",
    macros: "~520 kcal | 48g Protein | 44g Carbs | 14g Fats",
    ingredients: ["500g Chicken breast (diced)", "400g Baby potatoes (halved)", "3 Rashers lean back bacon (chopped)", "80g Light cream cheese", "1 tsp Garlic powder & dried parsley", "70g Grated light cheddar"],
    steps: ["Layer halved baby potatoes, chicken breast cubes, and chopped bacon in slowcooker with garlic powder and parsley.", "Dollop cream cheese over the top and cook on LOW 5 hrs until potatoes and chicken are fork-tender.", "Stir together so the cream cheese coats everything in silky sauce, scatter cheddar on top to melt, and serve."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Mexican Shredded Beef Tacos with Mild Salsa",
    prepTime: "8 mins",
    cookTime: "7 hrs",
    hack: "Lean beef brisket slow-cooked in lime juice, cumin, smoked paprika, and smooth tomato passata. Shreds effortlessly for crowd-pleasing DIY tacos with zero onion chunks!",
    macros: "~520 kcal | 47g Protein | 46g Carbs | 13g Fats",
    ingredients: ["500g Lean beef brisket or braising steak", "200g Smooth tomato passata", "Juice of 1 lime & 1 tbsp mild fajita seasoning", "1 tsp Garlic puree", "6 Mini soft flour tortillas or taco shells", "60g Grated light cheddar & sour cream to serve"],
    steps: ["Place brisket in slowcooker with passata, lime juice, garlic puree, and fajita seasoning. Cook on LOW 7 hrs.", "Shred the tender beef with two forks in the spiced cooking juices.", "Warm soft tortillas and build tacos with warm shredded beef, grated cheddar, and cool sour cream."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Italian Tomato & Garlic Chicken Breast Pasta Melt",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken breasts slow-braised in seasoned Italian tomato passata and garlic. Shredded in the pot, tossed with warm pasta, and smothered in a blanket of melted mozzarella.",
    macros: "~510 kcal | 49g Protein | 48g Carbs | 11g Fats",
    ingredients: ["500g Chicken breast", "400g Smooth tomato passata", "150ml Chicken stock", "1 tsp Garlic puree & dried basil", "160g Fusilli or penne pasta", "80g Light mozzarella (grated)"],
    steps: ["Place chicken breasts in slowcooker with passata, chicken stock, garlic puree, and dried basil. Cook on LOW 4 hrs.", "Shred chicken breasts into the sauce with two forks.", "Boil pasta 9 mins, drain, stir into slowcooker, scatter mozzarella over top, and cover 5 mins to melt into strings."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Sweet & Sour Popcorn Chicken Breast & Egg Fried Rice",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Bite-sized chicken breast nuggets coated in crunchy panko, baked golden, and tossed in sweet & sour glaze over egg fried rice. Restaurant crunch without takeaway grease!",
    macros: "~525 kcal | 47g Protein | 55g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (cut into bite-sized nuggets)", "35g Panko breadcrumbs & 1 egg (beaten)", "3 tbsp Sweet & sour sauce", "250g Pre-cooked microwave basmati rice", "1 Egg (for frying rice) & 1 tbsp soy sauce", "1 Bell pepper (sliced, on side for Dan)"],
    steps: ["Dip chicken chunks in beaten egg, coat in panko, bake at 200°C for 14 mins until crunchy.", "Scramble 1 egg in skillet 1 min, add microwave rice and soy sauce, toss 2 mins.", "Toss crunchy popcorn chicken in warm sweet & sour sauce and serve over hot egg fried rice."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Cheesy Sourdough Smash Bacon Patty Melts with Seasoned Wedges",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Thin, crispy-edged 5% beef patties smashed hot, layered with back bacon, melted cheddar, and light burger sauce between golden pan-toasted sourdough slices. Next-level burger night!",
    macros: "~530 kcal | 48g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked)", "4 Slices sourdough or thick toast", "4 Slices light cheddar cheese", "300g Potato wedges or chips", "2 tbsp Light burger sauce & 1 tsp butter"],
    steps: ["Bake potato wedges at 200°C for 20 mins until crisp.", "Divide mince into 4 balls, smash super thin in smoking skillet 2 mins per side, top with cheddar slices to melt.", "Assemble double smash patties, bacon, and burger sauce between toasted sourdough slices with hot wedges."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Wagamama-Style Crispy Katsu Chicken Breast (Curry-Free Tonkatsu Gravy)",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Golden panko-crusted chicken breast cutlets sliced over sticky jasmine rice. 100% curry-free! Served with a rich Japanese Tonkatsu savoury BBQ-fruit glaze (ketchup, soy, honey, Worcestershire) that picky partners love.",
    macros: "~515 kcal | 48g Protein | 52g Carbs | 11g Fats",
    ingredients: ["2 Chicken breasts (butterflied flat)", "40g Panko breadcrumbs & 1 egg (beaten)", "250g Pre-cooked microwave jasmine or sticky rice", "3 tbsp Tonkatsu sauce (or whisk 2 tbsp ketchup, 1 tbsp soy, 1 tsp honey & 1 tsp Worcestershire)", "150g Sweet garden peas or edamame"],
    steps: ["Dip butterflied chicken in beaten egg, coat in panko, bake or air-fry at 200°C for 14 mins until golden and super crispy.", "Warm rice pouch in microwave 90 secs with peas.", "Slice crispy katsu chicken into strips, fan over warm rice, and drizzle with sweet savory Tonkatsu glaze."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Gourmet BBQ Bacon & Crispy Chicken Breast Brioche Burger & Fries",
    prepTime: "8 mins",
    cookTime: "14 mins",
    hack: "Panko-crumbed chicken breast fillet baked extra crisp, layered with crispy back bacon, smoky sweet BBQ sauce, and melted cheddar inside toasted brioche. Beats fast food every time!",
    macros: "~525 kcal | 48g Protein | 48g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (lightly flattened)", "30g Panko breadcrumbs", "2 Soft brioche burger buns", "2 Rashers lean back bacon", "2 tbsp Smoky BBQ sauce", "2 Slices light cheddar", "300g Oven chips or skinny fries"],
    steps: ["Coat chicken breasts in panko, bake at 200°C alongside chips for 15 mins until golden.", "Grill bacon rashers until crisp, toast brioche buns lightly.", "Build burgers: toasted brioche, crispy chicken breast, melted cheddar, bacon, and rich smoky BBQ drizzle."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Crispy Beijing-Style Shredded Beef & Sticky Steamed Rice",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Thin strips of lean rump steak dusted in cornstarch and flash-fried crispy, tossed in a sweet garlic soy glaze. Pure Chinese restaurant crunch without soggy onions or deep frying!",
    macros: "~520 kcal | 46g Protein | 49g Carbs | 13g Fats",
    ingredients: ["300g Lean rump steak (cut into thin strips)", "2 tbsp Cornstarch", "3 tbsp Light soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "250g Pre-cooked microwave basmati rice", "100g Sweetcorn or sugar snap peas"],
    steps: ["Toss steak strips in cornstarch to coat. Pan-fry in hot oil spray 4 mins until deeply browned and crunchy.", "Whisk soy sauce, honey, garlic puree, and sesame oil; pour into pan and toss 1 min until glossy and clinging to beef.", "Serve immediately over hot steamed rice with sweetcorn."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Garlic Herb Chicken Breast & Pillowy Gnocchi",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Tender chicken breast cubes and soft potato gnocchi simmered together directly in chicken stock, light cream cheese, and parmesan. Gnocchi cooks straight in the creamy sauce in 5 mins!",
    macros: "~520 kcal | 47g Protein | 48g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "350g Fresh potato gnocchi", "250ml Chicken stock", "70g Light cream cheese", "30g Grated parmesan", "1 tsp Garlic puree & Italian dried herbs"],
    steps: ["Sear chicken breast cubes in skillet with garlic puree and Italian herbs 4 mins until golden.", "Pour in chicken stock and add fresh gnocchi straight to pan; simmer covered 5 mins until gnocchi is tender.", "Stir in cream cheese and parmesan off the heat until thick, velvety, and luxurious. Zero chopped onions!"]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Cheesy Mexican Beef Enchilada Rice Skillet",
    prepTime: "5 mins",
    cookTime: "14 mins",
    hack: "5% lean beef mince browned with mild taco spices, smooth tomato passata, rice, and sweetcorn. Blanketed with cheddar melted under the lid right on the stove!",
    macros: "~525 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita/taco seasoning", "200g Smooth tomato passata & 100ml beef stock", "200g Pre-cooked microwave basmati rice", "100g Sweetcorn (drained)", "70g Grated light cheddar"],
    steps: ["Brown beef mince in skillet with taco seasoning 5 mins.", "Stir in smooth passata, stock, warm rice, and sweetcorn; bubble 3 mins until piping hot.", "Scatter grated cheddar over the top, put lid on pan for 2 mins until melted. Scoop straight into bowls with sour cream!"]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Lemon Garlic Butter Cod Fillets & Golden Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Baby potatoes crisped in olive oil and butter, then mild flaky cod fillets nestled alongside in lemon garlic butter. Zero fishy smell, clean protein, pure family crowd-pleaser.",
    macros: "~495 kcal | 43g Protein | 42g Carbs | 13g Fats",
    ingredients: ["2 Skinless cod or haddock fillets", "350g Baby potatoes (halved small)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & juice of 1/2 lemon", "150g Frozen garden peas"],
    steps: ["Fry halved baby potatoes in olive oil and butter 10 mins until golden and tender; push to one side.", "Place cod fillets in empty half of pan, season with garlic puree, black pepper, and lemon juice; cook 3 mins per side.", "Toss frozen peas in the buttery pan juices for 2 mins to finish."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Smoky Spanish Chorizo, Chicken Breast & Rice Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Lean diced chicken breast and smoky Spanish chorizo rounds sizzled together, infusing basmati rice with rich paprika flavor. Sweet pepper pieces kept on the side or stirred in for Dan!",
    macros: "~525 kcal | 48g Protein | 46g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "50g Diced Spanish chorizo", "250g Pre-cooked microwave basmati rice", "1 tsp Smoked paprika & 1 tsp garlic puree", "100g Sweet garden peas", "1 Red bell pepper (diced small, optional for Dan)"],
    steps: ["Fry diced chorizo in dry skillet 2 mins until fragrant oil releases; add chicken breast cubes and brown 4 mins.", "Add garlic puree, smoked paprika, sweet peas (and peppers for Dan); cook 2 mins.", "Stir in microwave basmati rice, toss through the rich chorizo oils 2 mins until steaming."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Sweet Honey Mustard Pork Chops & Crispy Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Lean boneless pork chops seared golden, basted in sweet honey and mild mustard glaze alongside crispy cubed potatoes and sweet green beans. No sharp mustard bite, just warm sweetness.",
    macros: "~515 kcal | 45g Protein | 45g Carbs | 13g Fats",
    ingredients: ["2 Lean boneless pork loin chops", "350g Potatoes (diced small)", "2 tbsp Honey & 1 tbsp mild Dijon or wholegrain mustard", "1 tbsp Soy sauce & 1 tbsp olive oil", "150g Green beans or sweetcorn"],
    steps: ["Crisp diced potatoes in olive oil in pan 10 mins until golden; push to the side.", "Add pork chops to pan, sear 3 mins per side.", "Whisk honey, mild mustard, and soy sauce; pour over chops and simmer 2 mins into a thick glossy glaze."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy Baked Garlic Parmesan Chicken Breast Tenders & Wedges",
    prepTime: "10 mins",
    cookTime: "18 mins",
    hack: "Chicken breast mini fillets rolled in grated parmesan, garlic seasoning, and panko breadcrumbs, baked crunchy with skin-on potato wedges and garlic mayo dip.",
    macros: "~520 kcal | 49g Protein | 45g Carbs | 12g Fats",
    ingredients: ["350g Mini chicken breast fillets", "35g Panko breadcrumbs & 25g grated parmesan", "1 tsp Garlic powder & pinch coarse salt", "1 Egg (beaten)", "350g Potato wedges or chips", "2 tbsp Light garlic mayonnaise to dip"],
    steps: ["Dip chicken breast tenders in beaten egg, roll in parmesan-panko seasoning.", "Arrange on baking tray alongside potato wedges, bake at 200°C for 18 mins until deeply golden and crunchy.", "Serve with light garlic mayo dip and sweetcorn on the side."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Cheesy Beef Lasagne Stuffed Jacket Potatoes",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Fluffy baked jacket potatoes (microwaved 8 mins first for speed!), scooped and loaded with rich 5% beef bolognese in smooth tomato passata, topped with bubbly mozzarella and grilled.",
    macros: "~510 kcal | 46g Protein | 48g Carbs | 13g Fats",
    ingredients: ["2 Large baking potatoes", "350g 5% Fat beef mince", "200g Smooth tomato passata", "1 tsp Garlic puree & Italian dried herbs", "70g Grated light mozzarella", "2 tbsp Sour cream"],
    steps: ["Prick potatoes with a fork and microwave 8 mins until tender inside.", "Brown beef mince in skillet with garlic, Italian herbs, and smooth passata 6 mins.", "Slice potatoes open, fluff insides with a fork, ladle in hot beef bolognese, cover with mozzarella, and grill 4 mins until melted and bubbling."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Creamy Nut-Free Pesto Chicken Breast & Bacon Penne Bake",
    prepTime: "8 mins",
    cookTime: "16 mins",
    hack: "Penne pasta and tender chicken breast tossed in nut-free basil pesto, light cream cheese, and crispy bacon pieces, baked under golden cheddar. Strict nut-free recipe (0 walnuts, 0 almonds).",
    macros: "~525 kcal | 48g Protein | 49g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced and cooked)", "3 Rashers lean back bacon (cooked & chopped)", "160g Penne pasta", "3 tbsp Nut-free basil pesto", "60g Light cream cheese", "50g Grated light cheddar"],
    steps: ["Boil penne pasta 9 mins, drain.", "Stir nut-free pesto and light cream cheese into hot pasta until melted and creamy, fold in diced chicken breast and bacon.", "Transfer to baking dish, top with grated cheddar, and bake at 200°C for 10 mins until golden and bubbling."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Classic Italian Meatball Sub Rolls with Melted Mozzarella",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Juicy beef meatballs simmered in smooth marinara passata, packed into crusty sub rolls or hot dog buns, covered with mozzarella and grilled until toasted and melted.",
    macros: "~520 kcal | 45g Protein | 50g Carbs | 14g Fats",
    ingredients: ["10 Cooked lean beef meatballs", "2 Sub rolls or brioche hot dog rolls", "200g Smooth tomato passata", "1 tsp Garlic puree & Italian herbs", "60g Grated light mozzarella"],
    steps: ["Simmer meatballs in smooth passata with garlic puree and Italian herbs for 6 mins.", "Slice sub rolls open, nestle hot meatballs and marinara sauce inside.", "Cover generously with grated mozzarella and grill on high 3 mins until bread is toasted and cheese is bubbling."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "Crispy Bacon & Cheddar Smothered Chicken Breast & Roasties",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Tender chicken breasts seared, wrapped in crispy bacon, topped with a dollop of light cream cheese and melted cheddar, and baked until juicy and bubbly. Served with crispy roasted baby potato cubes.",
    macros: "~520 kcal | 49g Protein | 42g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts", "4 Rashers lean back bacon", "50g Light cream cheese", "60g Grated light cheddar", "350g Baby potatoes (cubed small)", "1 tbsp Olive oil & 1 tsp dried rosemary"],
    steps: ["Toss cubed potatoes in olive oil and rosemary, roast at 200°C for 20 mins until crisp.", "Sear chicken breasts in pan 2 mins per side; place in baking dish and top each with cream cheese, bacon rashers, and cheddar.", "Bake chicken 12-14 mins until cheese is bubbly and chicken is juicy. Serve alongside hot crispy roasties."]
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
