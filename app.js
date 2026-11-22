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
    title: "10-Minute Crispy Garlic Butter Steak Bites & Rice",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Rump steak cut into bite-sized cubes, flash-seared 2.5 mins in foaming garlic butter, tossed over steaming microwave basmati rice with sweet garden peas. Zero onion, pure steakhouse luxury in minutes!",
    macros: "~515 kcal | 46g Protein | 44g Carbs | 14g Fats",
    ingredients: ["350g Lean rump steak (cubed small)", "250g Pre-cooked microwave basmati rice", "1 tbsp Butter & 1 tsp olive oil", "1 tsp Garlic puree & dried parsley", "150g Sweet garden peas"],
    steps: ["Sear steak cubes in smoking hot skillet with oil 2 mins until deeply browned.", "Drop in butter, garlic puree, and parsley, basting steak 30 seconds into glossy juices.", "Microwave rice pouch 90 secs, plate with warm sweet peas, and pour sizzling steak bites and garlic butter over top."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Smoky Bacon Cheeseburger Tortilla Melts",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "5% beef mince browned with pinch of garlic & smoked paprika, loaded into a folded flour tortilla with crispy back bacon and melted cheddar, pan-toasted until crunchy. Slice into wedges with cool sour cream!",
    macros: "~525 kcal | 46g Protein | 44g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked & chopped)", "2 Large flour tortillas", "1 tbsp Mild burger seasoning or smoked paprika", "70g Grated light cheddar", "2 tbsp Light sour cream to dip"],
    steps: ["Brown beef mince with smoked paprika and garlic in skillet 5 mins; stir in cooked bacon bits.", "Place beef and cheddar inside half of each tortilla, fold over into half-moons.", "Toast in dry skillet on medium heat 2 mins per side until tortillas are crunchy and cheese is melted. Slice into wedges."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Sticky Teriyaki Chicken Breast & Noodle Toss",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Mini chicken breast strips flash-fried in 5 mins, tossed with straight-to-wok egg noodles and sweet teriyaki glaze with sweetcorn. Fast, mild, sweet, and zero chopping!",
    macros: "~505 kcal | 46g Protein | 50g Carbs | 11g Fats",
    ingredients: ["350g Mini chicken breast fillets (sliced into strips)", "300g Ready-to-wok egg noodles (2 pouches)", "3 tbsp Teriyaki sauce & 1 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "100g Sweetcorn (drained)"],
    steps: ["Flash-fry chicken breast strips in hot oil spray 4 mins until lightly golden.", "Add sweetcorn and noodles, tossing high-heat for 1 min to heat through.", "Pour over teriyaki sauce, honey, garlic puree, and sesame oil; bubble 2 mins until sticky and coated."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "10-Minute Cheesy Chicken & Bacon French Bread Melts",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Crusty baguette halved lengthwise, loaded with shredded chicken breast, crispy bacon pieces, smooth tomato passata, and melted mozzarella under the grill. The ultimate quick family comfort!",
    macros: "~520 kcal | 48g Protein | 46g Carbs | 13g Fats",
    ingredients: ["1 Crusty French baguette (halved lengthwise)", "250g Cooked chicken breast (shredded)", "2 Rashers lean back bacon (cooked & chopped)", "4 tbsp Smooth tomato passata", "70g Light mozzarella (grated)"],
    steps: ["Cut baguette in half lengthwise and place crust-side down on baking tray.", "Spread with smooth passata, top with shredded chicken and crispy bacon pieces.", "Cover with mozzarella and grill on high 3-4 mins until cheese is bubbling golden and crust is crunchy."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "12-Minute Lemon Butter Pan-Seared Cod & Mash",
    prepTime: "2 mins",
    cookTime: "10 mins",
    hack: "Flaky skinless cod fillets pan-seared in 5 mins with lemon juice and a touch of butter, served over ready-steamed buttery mashed potatoes with sweet garden peas. Mild, clean, and delicious.",
    macros: "~485 kcal | 42g Protein | 45g Carbs | 12g Fats",
    ingredients: ["2 Skinless cod or haddock fillets", "400g Ready mashed potatoes (or microwave mash)", "1 tbsp Butter & juice of 1/2 lemon", "1 tsp Garlic puree & black pepper", "150g Frozen garden peas"],
    steps: ["Heat mashed potatoes in microwave 3 mins; cook peas in boiling water 2 mins.", "Melt butter in skillet with garlic puree, sear cod fillets 3 mins per side until opaque and flaky.", "Squeeze fresh lemon over cod, serve immediately atop fluffy mash with sweet peas."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Silky Beef Bourguignon Stew (Smooth Gravy) & Mash",
    prepTime: "8 mins",
    cookTime: "7 hrs",
    hack: "Lean beef braising steak cooked 7 hrs in rich beef stock, tomato puree, Worcestershire, garlic, and dried thyme until melt-in-the-mouth tender. Gravy is completely smooth with zero onion chunks!",
    macros: "~520 kcal | 47g Protein | 46g Carbs | 13g Fats",
    ingredients: ["500g Beef braising steak or chuck", "300ml Beef stock", "2 tbsp Tomato puree & 1 tbsp Worcestershire sauce", "1 tsp Garlic puree & dried thyme", "500g Potatoes (for mashing)", "150g Garden peas to serve"],
    steps: ["Place braising steak in slowcooker with beef stock, tomato puree, Worcestershire sauce, garlic, and thyme. Cook on LOW 7-8 hrs.", "Shred or chunk tender beef in the glossy thickened gravy.", "Boil and mash potatoes with a splash of milk; serve ladled with tender beef stew and green peas."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Melt-in-the-Mouth BBQ Pulled Pork Shoulder Baps",
    prepTime: "5 mins",
    cookTime: "7 hrs",
    hack: "Lean pork shoulder slow-braised in sweet smoky BBQ sauce and a dash of honey. Shreds effortlessly into juicy, sweet pulled pork to pile into toasted brioche buns with melted cheddar!",
    macros: "~525 kcal | 46g Protein | 48g Carbs | 13g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "5 tbsp Smoky BBQ sauce & 1 tbsp honey", "1 tsp Smoked paprika & 1 tsp garlic puree", "2 Soft brioche burger buns", "50g Grated light cheddar", "300g Oven wedges or chips to serve"],
    steps: ["Rub pork with paprika and garlic, place in slowcooker with BBQ sauce and honey. Cook on LOW 7 hrs.", "Bake oven wedges at 200°C for 22 mins until crisp.", "Shred pork with two forks in the slowcooker sauce, stuff into toasted brioche buns with melted cheese, and serve with hot wedges."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Creamy Garlic & Herb Chicken Breast with Tagliatelle",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken breasts slow-braised in chicken stock and Italian herbs, shredded directly in the pot, then swirled with light cream cheese and parmesan into a velvety Alfredo-style sauce over pasta.",
    macros: "~515 kcal | 49g Protein | 48g Carbs | 11g Fats",
    ingredients: ["500g Chicken breast", "250ml Chicken stock", "1 tsp Garlic puree & 1 tsp Italian dried herbs", "70g Light cream cheese", "30g Grated parmesan", "160g Tagliatelle or fettuccine pasta"],
    steps: ["Place chicken breasts, chicken stock, garlic puree, and Italian herbs into slowcooker. Cook on LOW 4 hrs.", "Shred chicken breasts with two forks, stir in light cream cheese and parmesan until silky and smooth.", "Boil tagliatelle 9 mins, drain, toss through the creamy chicken sauce, and serve warm."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Mild Mexican Beef Chilli Bowls (Smooth Sauce)",
    prepTime: "8 mins",
    cookTime: "6 hrs",
    hack: "5% lean beef mince simmered with smooth tomato passata, cumin, mild smoked paprika, and sweetcorn. Pure comfort chilli with zero onion bits, served over rice with crunchy tortilla chips!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 13g Fats",
    ingredients: ["400g 5% Fat beef mince", "400g Smooth tomato passata", "1 tbsp Mild fajita/taco seasoning", "1 tsp Garlic puree & 1 tsp cumin", "1 Can (200g) sweetcorn (drained)", "200g Basmati rice & sour cream to serve"],
    steps: ["Brown beef mince in skillet 4 mins; transfer to slowcooker with smooth passata, taco seasoning, garlic, and sweetcorn.", "Cook on LOW 6 hrs until thick, rich, and fragrant.", "Serve piping hot over basmati rice with a dollop of sour cream and crunchy salted tortilla chips on the side."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Sweet Honey Garlic Chicken Breast over Jasmine Rice",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Whole chicken breasts cooked in a sweet soy, honey, and garlic sauce. Shreds into sticky, sweet-savory pulled chicken over fluffy rice with tenderstem broccoli. A family favorite!",
    macros: "~510 kcal | 48g Protein | 50g Carbs | 11g Fats",
    ingredients: ["500g Chicken breast", "4 tbsp Honey & 3 tbsp light soy sauce", "2 tbsp Tomato ketchup & 1 tsp garlic puree", "1 tsp Sesame oil", "200g Jasmine or basmati rice", "150g Tenderstem broccoli or sweetcorn"],
    steps: ["Whisk honey, soy sauce, ketchup, garlic, and sesame oil; pour over chicken breasts in slowcooker. Cook LOW 4 hrs.", "Cook jasmine rice and steam broccoli 5 mins.", "Shred chicken into the rich glaze, spoon generously over warm jasmine rice, and serve."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "The Ultimate Double Smash Bacon Cheeseburger & Seasoned Fries",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Two thin 5% beef patties smashed thin in a smoking hot skillet, layered with melted cheddar and crispy back bacon inside toasted brioche with light burger sauce. Pure burger joint bliss!",
    macros: "~530 kcal | 48g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked)", "2 Soft brioche burger buns", "4 Slices light cheddar cheese", "300g Oven chips or skinny fries", "2 tbsp Light burger sauce"],
    steps: ["Bake oven chips at 200°C for 20 mins until crisp.", "Divide mince into 4 balls, smash super thin in hot dry skillet 2 mins per side, top with cheddar slices to melt.", "Assemble double smash patties, bacon, and burger sauce inside toasted brioche with hot fries."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Loaded Crispy Salt & Pepper Chicken Breast Rice Boxes",
    prepTime: "10 mins",
    cookTime: "14 mins",
    hack: "Panko and cornstarch-dusted chicken breast strips tossed in Chinese five-spice, coarse sea salt, and garlic powder, served over golden egg fried microwave rice with sweet chilli dip.",
    macros: "~520 kcal | 47g Protein | 54g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (cut into thin strips)", "1 tbsp Cornstarch & 30g panko breadcrumbs", "1 tsp Chinese five-spice & coarse sea salt", "250g Pre-cooked microwave basmati rice", "2 Eggs (beaten)", "2 tbsp Sweet chilli sauce to dip"],
    steps: ["Coat chicken breast strips in cornstarch, five-spice, and panko; bake at 200°C for 14 mins until super crunchy.", "Scramble eggs in hot skillet 1 min, toss in rice pouch with splash of soy sauce 2 mins.", "Box up egg fried rice, top with hot crispy salt & pepper chicken, serve with sweet chilli dip."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Wagamama-Style Crispy Sweet Chilli Glazed Chicken Breast & Rice",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Golden panko chicken breast cutlets sliced over sticky jasmine rice, drizzled with sweet mild chilli glaze and sweetcorn. 100% curry-free, pure crispy Japanese-inspired comfort!",
    macros: "~515 kcal | 48g Protein | 52g Carbs | 11g Fats",
    ingredients: ["2 Chicken breasts (butterflied flat)", "40g Panko breadcrumbs & 1 egg (beaten)", "250g Pre-cooked microwave jasmine rice", "3 tbsp Sweet chilli sauce & 1 tbsp soy sauce", "150g Sweet garden peas or sweetcorn"],
    steps: ["Dip chicken in beaten egg, coat in panko; bake at 200°C for 14 mins until golden and crunchy.", "Warm jasmine rice in microwave 90 secs with peas.", "Slice crispy chicken into strips, fan over warm rice, and drizzle with sweet chilli glaze."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Philly Cheesesteak Crusty Baguette Subs with Dipping Gravy",
    prepTime: "8 mins",
    cookTime: "10 mins",
    hack: "Thinly sliced lean rump steak flash-fried in garlic butter and Worcestershire sauce, piled into crusty baguettes with melted cheddar and mozzarella. Dan's hack: sweet peppers sizzled on side!",
    macros: "~525 kcal | 47g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Lean rump steak (sliced ultra-thin)", "2 Crusty sub rolls or baguettes (halved)", "4 Slices light mozzarella or cheddar", "1 tsp Garlic puree & 1 tbsp Worcestershire sauce", "1 tsp Butter", "1 Red bell pepper (sliced thin, for Dan)"],
    steps: ["Toast baguettes lightly under grill.", "Flash-fry steak strips in skillet on high heat 3 mins with butter, garlic, and Worcestershire sauce (fry peppers on side for Dan).", "Stuff hot steak into toasted baguettes, cover with cheese, and grill 2 mins until bubbling and toasted."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Crispy Popcorn Chicken Breast Nuggets with Honey Mustard & Chips",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Bite-sized chicken breast nuggets dipped in egg, rolled in seasoned panko, and baked golden. Served with hot oven chips and a sweet honey-Dijon dipping sauce that beats takeaway any day!",
    macros: "~520 kcal | 48g Protein | 49g Carbs | 12g Fats",
    ingredients: ["350g Chicken breast (diced into nuggets)", "35g Panko breadcrumbs & 1 egg (beaten)", "1 tsp Garlic powder & pinch smoked paprika", "300g Oven chips", "2 tbsp Honey & 1 tbsp mild Dijon mustard"],
    steps: ["Coat chicken nuggets in beaten egg and seasoned panko crumbs.", "Bake on tray alongside oven chips at 200°C for 15 mins until golden and crunchy.", "Mix honey and mild Dijon into a sweet dip, and serve with hot nuggets and chips."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Tuscan Garlic Chicken Breast & Bacon Gnocchi",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Diced chicken breast and bacon lardons seared, simmered with fresh potato gnocchi in chicken stock and light cream cheese. Pillowy gnocchi cooks in 4 mins directly in the sauce!",
    macros: "~525 kcal | 48g Protein | 48g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "3 Rashers lean back bacon (chopped)", "350g Fresh potato gnocchi", "200ml Chicken stock", "70g Light cream cheese", "1 tsp Garlic puree & Italian dried herbs"],
    steps: ["Sear chicken breast cubes and bacon in skillet 4 mins until lightly browned.", "Pour in chicken stock and drop in gnocchi; cover and simmer 4 mins until gnocchi is tender.", "Stir in cream cheese off the heat until thick, velvety, and luxurious. Zero chopped onions!"]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Cheesy Beef Taco Rice Skillet",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "5% beef mince browned with mild taco spices, pre-cooked rice, and sweetcorn, topped with a blanket of melted cheddar straight in the skillet. Scoop straight from pan with sour cream!",
    macros: "~520 kcal | 45g Protein | 48g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita/taco seasoning", "200g Pre-cooked microwave basmati rice", "1 Can (200g) sweetcorn (drained)", "70g Grated light cheddar", "2 tbsp Sour cream & mild salsa to serve"],
    steps: ["Brown beef mince in skillet with taco seasoning 5 mins.", "Stir in warm rice, sweetcorn, and 2 tbsp water; heat 2 mins.", "Cover with grated cheddar, put lid on pan for 2 mins until cheese is completely melted. Scoop straight into bowls!"]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Honey Garlic Glazed Salmon & Crispy Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "14 mins",
    hack: "Halved baby potatoes crisped in olive oil, then fresh salmon fillets seared alongside and glazed in sweet honey, soy, and garlic with sweet green beans. High protein, clean omega-3s.",
    macros: "~500 kcal | 43g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Fresh salmon fillets", "350g Baby potatoes (halved small)", "2 tbsp Honey & 2 tbsp light soy sauce", "1 tsp Garlic puree & 1 tbsp olive oil", "150g Green beans or sweetcorn"],
    steps: ["Fry halved baby potatoes in olive oil in skillet 9 mins until crisp; push to one side.", "Place salmon fillets and green beans in pan, sear salmon 3 mins skin-down, then flip.", "Whisk honey, soy sauce, and garlic puree; pour over salmon, baste 2 mins into a glossy glaze, and plate."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Smoky Sausage, Sweet Potato & Cheddar Hash",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Sliced lean sausages and cubed sweet potatoes pan-fried with smoked paprika and garlic, covered with melted cheddar. Hearty comfort with only one skillet to wash!",
    macros: "~515 kcal | 38g Protein | 46g Carbs | 16g Fats",
    ingredients: ["6 Lean pork sausages (sliced into rounds)", "350g Sweet potato (diced small)", "1 tsp Smoked paprika & 1 tsp garlic puree", "60g Grated light cheddar", "100g Sweet garden peas"],
    steps: ["Fry sliced sausages in skillet 4 mins until lightly browned.", "Add diced sweet potatoes, paprika, garlic, and 3 tbsp water; cover pan 8 mins until potatoes are tender.", "Stir in sweet peas, scatter cheddar on top to melt under lid 2 mins, and serve."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Garlic Butter Steak Bites with Crispy Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Cubed baby potatoes crisped in the pan in olive oil, then juicy steak cubes flash-seared in garlic herb butter for 2.5 mins. Simple, high protein, and unbelievably satisfying.",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 15g Fats",
    ingredients: ["350g Lean rump steak (cut into bite-sized cubes)", "400g Baby potatoes (cubed small)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried rosemary", "150g Green beans or sweet peas"],
    steps: ["Fry cubed potatoes in olive oil and butter with rosemary 12 mins until crispy and tender; push to side of pan.", "Crank heat to high, add steak cubes and garlic puree, sear 2-3 mins until browned outside and juicy inside.", "Toss steak and potatoes together in pan garlic butter, serve with green beans."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Classic British Shepherd's Pie with Golden Cheddar Mash",
    prepTime: "12 mins",
    cookTime: "22 mins",
    hack: "5% lean beef mince in a rich, smooth Worcestershire beef gravy under fluffy mashed potatoes with a browned, bubbly cheddar topping. Blitz gravy smooth for picky partner!",
    macros: "~510 kcal | 46g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce & 1 tsp garlic puree", "50g Grated light cheddar", "100g Sweet garden peas to serve"],
    steps: ["Brown beef mince in pan 5 mins. Stir in tomato puree, Worcestershire sauce, garlic, and beef stock; simmer 5 mins into smooth gravy.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over top.", "Sprinkle cheddar over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Crispy Bacon & Cheddar Smothered Chicken Breast & Roasties",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Tender chicken breasts seared, wrapped in crispy bacon, topped with a dollop of light cream cheese and melted cheddar, and baked until juicy and bubbly. Served with crispy roasted baby potato cubes.",
    macros: "~520 kcal | 49g Protein | 42g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts", "4 Rashers lean back bacon", "50g Light cream cheese", "60g Grated light cheddar", "350g Baby potatoes (cubed small)", "1 tbsp Olive oil & 1 tsp dried rosemary"],
    steps: ["Toss cubed potatoes in olive oil and rosemary, roast at 200°C for 20 mins until crisp.", "Sear chicken breasts in pan 2 mins per side; place in baking dish and top each with cream cheese, bacon rashers, and cheddar.", "Bake chicken 12-14 mins until cheese is bubbly and chicken is juicy. Serve alongside hot crispy roasties."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Creamy Tomato & Herb Chicken Breast Penne Pasta Bake",
    prepTime: "8 mins",
    cookTime: "16 mins",
    hack: "Cooked penne and diced chicken breast folded through smooth tomato passata and light cream cheese, baked under golden melted mozzarella. Strict nut-free recipe (0 walnuts, 0 almonds).",
    macros: "~520 kcal | 48g Protein | 48g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (diced and cooked)", "160g Penne pasta", "350g Smooth tomato passata", "70g Light cream cheese", "1 tsp Garlic puree & Italian dried herbs", "70g Light mozzarella (grated)"],
    steps: ["Boil penne pasta 9 mins, drain.", "Warm passata, garlic, Italian herbs, and light cream cheese in pan until smooth and creamy; fold in chicken and pasta.", "Transfer to baking dish, top with mozzarella, bake at 200°C for 12 mins until golden and bubbling."]
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
    title: "Crispy Parmesan-Crusted Chicken Breast Cutlets with Wedges",
    prepTime: "8 mins",
    cookTime: "18 mins",
    hack: "Chicken breast cutlets pressed into grated parmesan and crunchy panko breadcrumbs, baked extra crisp and served with oven wedges and garlic mayo. Always a crowd-pleaser.",
    macros: "~510 kcal | 49g Protein | 46g Carbs | 11g Fats",
    ingredients: ["2 Chicken breasts (sliced into thin cutlets)", "35g Panko breadcrumbs", "25g Grated parmesan", "1 Egg (beaten)", "350g Potato wedges or chips", "2 tbsp Light mayonnaise"],
    steps: ["Dip chicken breast cutlets in beaten egg, coat firmly in parmesan and panko mixture.", "Place on baking tray with wedges at 200°C for 18 mins until deeply golden and crunchy.", "Serve with light garlic mayo dip and sweetcorn or peas."]
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
