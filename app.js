/* ==========================================================================
   DadRunner Hub - JavaScript v5
   20 Fresh Recipes + Shopping List Builder + All Existing Features
   ========================================================================== */

// 8-Week Smart Running Plan Data Structure
const runningPlanData = [
  {
    week: 1,
    title: "Week 1: Base Building & Initial Rhythm",
    runs: [
      { id: "w1r1", day: "Tue, 01/09", title: "Low and Slow!", desc: "5.02 km in 39:07 @ 7:47/km. (Logged on Strava)" },
      { id: "w1r2", day: "Thu, 03/09", title: "Slow and consistent", desc: "5.05 km in 36:38 @ 7:15/km. (Logged on Strava)" },
      { id: "w1r3", day: "Sat, 05/09", title: "Nice", desc: "3.07 km in 22:37 @ 7:22/km. (Logged on Strava)" }
    ]
  },
  {
    week: 2,
    title: "Week 2: Volume Building & Deload",
    runs: [
      { id: "w2r1", day: "Sun, 13/09", title: "No sleep and a sore knee", desc: "4.03 km in 27:28 @ 6:49/km. (Logged on Strava)" },
      { id: "w2r2", day: "Tue, 15/09", title: "Evening Run", desc: "5.01 km in 33:51 @ 6:45/km. (Logged on Strava)" },
      { id: "w2r3", day: "Thu, 17/09", title: "Nope + And the rest", desc: "5.11 km total (2.09 km + 3.02 km) in 32:46 @ 6:25/km. (Logged on Strava)" }
    ]
  },
  {
    week: 3,
    title: "Week 3: Base Stepping & 6.0km Extension",
    runs: [
      { id: "w3r1", day: "Wed, 23/09", title: "Lunch Run", desc: "5.00 km in 32:36 @ 6:31/km. (Logged on Strava)" },
      { id: "w3r2", day: "Tue, 29/09", title: "Slow and Steady", desc: "5.51 km in 39:13 @ 7:07/km. (Logged on Strava)" },
      { id: "w3r3", day: "Weekend", title: "6.0 km Base Extension", desc: "6.0 km @ Conversational Zone 2 (7:15 - 7:40/km). First step into 6k territory!" }
    ]
  },
  {
    week: 4,
    title: "Week 4: Stepping Up into 7.0km Territory",
    runs: [
      { id: "w4r1", day: "Tuesday", title: "6.2 km Midweek Build", desc: "6.2 km @ Easy Aerobic Pace. Keep breathing relaxed." },
      { id: "w4r2", day: "Thursday", title: "6.5 km Steady Aerobic Run", desc: "6.5 km Continuous Run. Focus on steady rhythm." },
      { id: "w4r3", day: "Weekend", title: "7.0 km Milestone Long Run", desc: "7.0 km @ Conversational Effort. Fuel with water/toast before!" }
    ]
  },
  {
    week: 5,
    title: "Week 5: Endurance Engine & 8.0km Milestone",
    runs: [
      { id: "w5r1", day: "Tuesday", title: "7.2 km Aerobic Base Run", desc: "7.2 km @ Zone 2 Pace. Building strong leg stamina." },
      { id: "w5r2", day: "Thursday", title: "7.5 km Midweek Steady Run", desc: "7.5 km @ Smooth Effort. Pace yourself early." },
      { id: "w5r3", day: "Weekend", title: "8.0 km Long Run Milestone", desc: "8.0 km @ Relaxed Pace. Big endurance benchmark!" }
    ]
  },
  {
    week: 6,
    title: "Week 6: Volume Build & 9.0km Peak",
    runs: [
      { id: "w6r1", day: "Tuesday", title: "8.2 km Aerobic Flush Run", desc: "8.2 km @ Easy Zone 2 Pace." },
      { id: "w6r2", day: "Thursday", title: "8.5 km Extended Steady Run", desc: "8.5 km Continuous Steady Aerobic Run." },
      { id: "w6r3", day: "Weekend", title: "9.0 km Peak Long Run #1", desc: "9.0 km @ Conversational Pace. Only 1 km away from 10k!" }
    ]
  },
  {
    week: 7,
    title: "Week 7: Peak 9.5km Dress Rehearsal & Deload",
    runs: [
      { id: "w7r1", day: "Tuesday", title: "9.2 km Aerobic Stamina Run", desc: "9.2 km @ Smooth Aerobic Effort." },
      { id: "w7r2", day: "Thursday", title: "9.5 km Peak Dress Rehearsal", desc: "9.5 km Continuous Run! Proves you can handle the 10k distance easily." },
      { id: "w7r3", day: "Weekend", title: "7.0 km Active Deload Run", desc: "7.0 km @ Easy Pace. Reset legs for race week!" }
    ]
  },
  {
    week: 8,
    title: "Week 8: 10k Celebration Week",
    runs: [
      { id: "w8r1", day: "Tuesday", title: "5.0 km Taper Flush Run", desc: "5.0 km Easy Pace to keep legs fresh." },
      { id: "w8r2", day: "Thursday", title: "3.5 km Shakeout Run", desc: "3.5 km Easy Pace + light strides." },
      { id: "w8r3", day: "Weekend", title: "🏆 10.0 km Milestone Endurance Run", desc: "10.0 km Continuous Celebration Run! You built the endurance step by step — claim your 10k!" }
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
    title: "10-Minute Crispy Chorizo & Mozzarella Gnocchi Bake",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Pan-fry shelf-stable potato gnocchi dry with smoky chorizo bits for 4 mins, stir in smooth marinara passata and shredded chicken, then melt light mozzarella under the grill. Zero fuss comfort!",
    macros: "~510 kcal | 42g Protein | 48g Carbs | 15g Fats",
    ingredients: ["350g Potato gnocchi", "60g Cooking chorizo (diced)", "200g Smooth tomato passata", "70g Light mozzarella (grated)", "200g Cooked chicken breast (shredded)", "1 tsp Garlic puree & Italian dried herbs"],
    steps: ["Pan-fry diced chorizo and gnocchi in a skillet 4 mins until chorizo is crisp and gnocchi is lightly golden.", "Stir in passata, garlic, and shredded chicken breast for 2 mins.", "Top with mozzarella and pop under a hot grill 3 mins until golden and bubbling."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Teriyaki Beef Steak & Udon Noodle Bowls",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Thinly sliced lean rump steak flash-sears in 3 mins. Toss with straight-to-wok udon noodles in sweet soy-teriyaki glaze. High protein, glossy, and completely partner approved.",
    macros: "~510 kcal | 45g Protein | 50g Carbs | 12g Fats",
    ingredients: ["300g Lean rump steak (cut into thin strips)", "300g Straight-to-wok udon noodles", "3 tbsp Teriyaki sauce & 1 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Tenderstem broccoli or peas"],
    steps: ["High-heat sear steak strips in oil spray 3 mins until browned.", "Drop in straight-to-wok udon noodles and steamed broccoli with 2 tbsp water.", "Pour in teriyaki sauce, honey, garlic, and sesame oil, tossing vigorously 2 mins until sticky and coated."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Lemon Herb Butter Salmon with Herby Rice",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Salmon fillets pan-sear crispy skin-down for 4 mins, then baste with melted lemon butter and garlic. Serve alongside instant microwave basmati rice and sweet garden peas.",
    macros: "~495 kcal | 42g Protein | 42g Carbs | 16g Fats",
    ingredients: ["2 Salmon fillets", "250g Pre-cooked microwave basmati rice", "1 tbsp Butter & 1 tsp olive oil", "1 tsp Garlic puree & juice of ½ lemon", "150g Garden peas", "Fresh parsley or dill"],
    steps: ["Sear salmon fillets skin-side down 4 mins in hot skillet with olive oil, flip 2 mins.", "Melt butter with garlic and lemon juice in the pan, basting over salmon for 1 min.", "Microwave rice pouch and peas 90 secs, plate together with pan juices."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "12-Minute Smoky Mexican Chicken Fajita Rice Bowls",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Diced chicken breast flash-fried with mild fajita seasoning, served over warm rice with sweetcorn, mild salsa, and sour cream. Fast, clean Mexican comfort!",
    macros: "~510 kcal | 47g Protein | 48g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (diced)", "250g Pre-cooked microwave basmati rice", "1 tbsp Mild fajita seasoning", "1 Can (200g) sweetcorn (drained)", "2 tbsp Sour cream & mild salsa", "50g Grated light cheddar"],
    steps: ["Pan-sear chicken cubes in olive oil spray with fajita seasoning 5 mins until cooked and golden.", "Heat rice pouch 90 secs and divide into bowls with warm sweetcorn.", "Top with sizzling chicken, grated cheddar, sour cream, and mild salsa."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "10-Minute Crispy Bacon & Poached Egg Toast Topper",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Crusty bread toasted, smeared with light cream cheese, topped with crispy lean back bacon medallions and runny eggs. Perfect high-protein breakfast-for-dinner in 10 mins!",
    macros: "~490 kcal | 40g Protein | 42g Carbs | 16g Fats",
    ingredients: ["4 Slices crusty bread or sourdough", "4 Rashers lean back bacon", "4 Large eggs (poached or fried)", "60g Light cream cheese", "Salt and cracked black pepper"],
    steps: ["Fry lean bacon rashers in a non-stick pan 4 mins until crispy.", "Poach or fry eggs to runny yolks.", "Toast crusty bread, spread with light cream cheese, layer crispy bacon, and top with hot eggs and black pepper."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Mexican Barbacoa Pulled Beef (Dan's Favourite!)",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Chuck braising steak cooked low and slow with pureed chopped tomatoes, lime juice, cumin, and mild chipotle seasoning. Shreds into succulent, juicy barbacoa beef over fluffy rice with sour cream!",
    macros: "~520 kcal | 48g Protein | 46g Carbs | 14g Fats",
    ingredients: ["500g Beef braising steak or chuck", "1 Can (400g) chopped tomatoes", "Juice of 1 Lime & 1 tsp garlic puree", "1 tsp Cumin & 1 tbsp mild fajita seasoning", "200g Basmati or long grain rice", "Sour cream, mild salsa & grated cheddar to serve"],
    steps: ["Place beef into slowcooker. Blend chopped tomatoes with lime juice, garlic, cumin, and fajita seasoning smooth, pour over.", "Cook on LOW for 7-8 hrs until beef falls apart effortlessly. Shred thoroughly with two forks.", "Serve warm over fluffy basmati rice with sour cream, mild salsa, and grated cheddar on the side."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Creamy Tuscan Garlic Chicken with Penne",
    prepTime: "8 mins",
    cookTime: "5 hrs",
    hack: "Chicken breasts slow-cooked with sun-dried tomatoes, garlic, and chicken stock, finished with light cream cheese and tossed with cooked penne pasta. Pure Italian restaurant comfort.",
    macros: "~520 kcal | 47g Protein | 50g Carbs | 13g Fats",
    ingredients: ["500g Chicken breast", "50g Sun-dried tomatoes (chopped)", "350ml Chicken stock", "1 tsp Garlic puree & Italian dried herbs", "80g Light cream cheese", "180g Penne pasta", "30g Grated parmesan"],
    steps: ["Place chicken breasts, sun-dried tomatoes, garlic, Italian herbs, and stock in slowcooker. Cook LOW 5 hrs.", "Shred chicken with two forks, stir in cream cheese and parmesan until silky and smooth.", "Toss through freshly boiled penne pasta and serve warm."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Honey Glazed Pork Carnitas",
    prepTime: "5 mins",
    cookTime: "7 hrs",
    hack: "Lean pork shoulder slow-cooked with apple/orange juice, honey, oregano, and garlic. Shredded and popped under the grill for 3 mins to crisp the edges, served inside warm tortillas!",
    macros: "~515 kcal | 46g Protein | 46g Carbs | 14g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "150ml Orange juice or apple juice", "2 tbsp Honey & 1 tbsp soy sauce", "1 tsp Garlic puree & dried oregano", "4 Soft flour tortilla wraps", "Sour cream & mild salsa to serve"],
    steps: ["Place pork shoulder in slowcooker with juice, honey, soy, garlic, and oregano. Cook LOW 7 hrs.", "Transfer pork to an oven tray, shred with forks, spoon over 3 tbsp cooking juices.", "Grill 3-4 mins until edges get crispy, serve inside warm tortillas with sour cream and salsa."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Rich Beef & Mushroom Shin Stew with Colcannon Mash",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Tender diced beef shin simmered in smooth rich beef stock and tomato paste. Whole button mushrooms kept large for easy removal. Served over warm fluffy mashed potatoes.",
    macros: "~510 kcal | 46g Protein | 46g Carbs | 12g Fats",
    ingredients: ["500g Beef shin or stewing steak (cubed)", "300ml Beef stock", "2 tbsp Tomato puree & 1 tbsp Worcestershire sauce", "500g Potatoes (for mash)", "1 tsp Garlic puree & dried thyme", "150g Button mushrooms (kept whole for easy removal)"],
    steps: ["Add beef cubes, tomato puree, Worcestershire sauce, stock, garlic, thyme, and whole mushrooms to slowcooker.", "Cook on LOW 7-8 hrs until beef is melt-in-the-mouth tender.", "Boil and mash potatoes with splash of milk, ladle rich beef stew over the top."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Sweet & Sticky BBQ Chicken Breasts & Wedges",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken breasts slow-cooked in smoky BBQ sauce with honey and Worcestershire sauce. Shredded and piled over oven-crisped potato wedges with melted cheddar.",
    macros: "~510 kcal | 46g Protein | 48g Carbs | 13g Fats",
    ingredients: ["500g Chicken breast", "5 tbsp Smoky BBQ sauce", "1 tbsp Honey & 1 tbsp Worcestershire sauce", "1 tsp Garlic puree", "350g Potato wedges or chips", "60g Grated light cheddar"],
    steps: ["Add chicken breasts, BBQ sauce, honey, Worcestershire sauce, and garlic to slowcooker. Cook LOW 4-5 hrs.", "Bake potato wedges in oven at 200°C for 22 mins until crisp.", "Shred chicken in the slowcooker sauce, ladle over hot wedges, scatter cheddar and grill 2 mins to melt."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Salt & Chilli Chicken Strips & Egg Fried Rice",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Cornstarch-crusted crispy chicken tenders tossed in Chinese five-spice, garlic puree, and coarse sea salt, over golden egg fried microwave rice. 100% takeaway flavor!",
    macros: "~515 kcal | 47g Protein | 50g Carbs | 12g Fats",
    ingredients: ["350g Chicken breast (sliced into strips)", "1 tbsp Cornstarch", "1 tsp Chinese five-spice & coarse sea salt", "250g Pre-cooked microwave basmati rice", "2 Eggs (beaten)", "1 tsp Sesame oil & soy sauce"],
    steps: ["Dust chicken strips in cornstarch, five-spice, and sea salt. Pan-fry in oil spray 6 mins until crispy and golden.", "Scramble beaten eggs in hot pan for 1 min, stir in rice pouch with soy sauce and sesame oil 2 mins.", "Plate fluffy egg fried rice, top with hot crispy chicken strips (peppers kept strictly on Dan's half or omitted)."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "The Double Bacon Cheeseburger Baguette Sub",
    prepTime: "8 mins",
    cookTime: "10 mins",
    hack: "Lean 5% beef mince browned crispy in the pan, loaded into a crusty baguette with back bacon, light burger sauce, and melted cheddar. Saturday night takeaway on a weeknight!",
    macros: "~530 kcal | 48g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked and chopped)", "1 Crusty French baguette (halved)", "60g Grated light cheddar", "2 tbsp Light burger sauce", "Pinch of garlic powder & salt"],
    steps: ["Sear beef mince and bacon in a hot skillet 5 mins until browned and crispy.", "Slice baguette in half lengthwise, spread light burger sauce, and fill with hot seasoned beef and bacon.", "Top with cheddar and grill 3 mins until cheese melts into the warm bread."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Crispy Southern Fried Chicken Tenders & Sweetcorn Mash",
    prepTime: "8 mins",
    cookTime: "15 mins",
    hack: "Mini chicken breast fillets dipped in seasoned Greek yogurt, coated in crunchy panko breadcrumbs, oven-baked crisp and served with instant creamy mash and sweetcorn.",
    macros: "~500 kcal | 48g Protein | 46g Carbs | 11g Fats",
    ingredients: ["350g Mini chicken breast fillets", "40g Panko breadcrumbs", "2 tbsp 0% Greek yogurt", "1 tsp Smoked paprika & garlic puree", "400g Fresh ready-made potato mash", "1 Can (200g) sweetcorn (drained)"],
    steps: ["Mix yogurt with garlic puree and paprika, coat chicken mini fillets, press into panko breadcrumbs.", "Bake on tray at 200°C for 15 mins until crispy and golden.", "Microwave ready mash and sweetcorn, serve alongside crunchy golden chicken tenders."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Crispy Breaded Fish Burger with Garlic Mayo & Chips",
    prepTime: "8 mins",
    cookTime: "16 mins",
    hack: "Cod fillets crusted in panko and baked crunchy, served on toasted brioche buns with light garlic mayo, crisp lettuce, and oven chips.",
    macros: "~510 kcal | 40g Protein | 54g Carbs | 13g Fats",
    ingredients: ["2 Thick cod fillets", "35g Panko breadcrumbs", "1 Egg (beaten)", "2 Soft brioche burger buns", "300g Oven chips", "2 tbsp Light mayonnaise & 1 tsp garlic puree"],
    steps: ["Dip cod fillets in beaten egg, press into seasoned panko breadcrumbs.", "Bake on tray with chips at 200°C for 16-18 mins until cod is crunchy and chips are golden.", "Toast brioche buns, spread garlic mayo, add crisp lettuce, and top with hot crispy fish fillets."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Sizzling Sticky Honey Soy Steak Bites & Jasmine Rice",
    prepTime: "8 mins",
    cookTime: "8 mins",
    hack: "Cubes of lean rump steak flash-fried until caramelized, basted in sweet soy, garlic, and honey, served over jasmine rice with sweet peas.",
    macros: "~520 kcal | 46g Protein | 50g Carbs | 13g Fats",
    ingredients: ["350g Lean rump steak (cut into bite-sized cubes)", "250g Pre-cooked microwave basmati rice", "3 tbsp Soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Garden peas or broccoli"],
    steps: ["Sear steak cubes in smoking hot pan 3 mins to get deep brown crust on all sides.", "Pour in soy sauce, honey, garlic puree, and sesame oil, tossing 1 min until glaze is bubbling and thick.", "Serve hot glossy steak cubes over steamed rice with sweet peas."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Garlic Parmesan Chicken & Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Halved baby potatoes steam-fry in a little butter while seasoned chicken breasts cook. Finished with garlic, parmesan, and a splash of cream cheese. Delicious, rich, and one pan!",
    macros: "~515 kcal | 47g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Chicken breasts", "400g Baby potatoes (halved)", "1 tbsp Butter & 1 tsp olive oil", "1 tsp Garlic puree & Italian dried herbs", "50g Light cream cheese & 20g grated parmesan", "150g Steamed green beans or broccoli"],
    steps: ["Add baby potatoes to skillet with 3 tbsp water and butter, cover and steam 8 mins.", "Push potatoes to side, add chicken breasts seasoned with garlic and Italian herbs, cook 5 mins per side.", "Stir cream cheese and parmesan into pan juices to create a rich garlic sauce, tossing potatoes and chicken."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Cheesy Mexican Beef Enchilada Skillet",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Lean beef mince, mild fajita spices, smooth tomato passata, and small torn tortilla pieces cooked together and smothered in melted cheddar. Crowd-pleasing Mexican night in 12 mins!",
    macros: "~525 kcal | 46g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita seasoning", "200g Smooth tomato passata", "3 Small flour tortilla wraps (cut into bite-sized squares)", "60g Grated light cheddar", "2 tbsp Sour cream to serve"],
    steps: ["Brown beef mince with fajita seasoning in skillet 5 mins.", "Pour in tomato passata and 50ml water, stir in torn tortilla pieces, simmer 3 mins until soft and saucy.", "Cover with grated cheddar, pop lid on 2 mins until melted, serve with sour cream."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Honey Mustard Salmon & Roast Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Baby potato slices crisped in olive oil, salmon fillets seared alongside, basted in sweet honey and mild mustard glaze.",
    macros: "~500 kcal | 42g Protein | 42g Carbs | 16g Fats",
    ingredients: ["2 Salmon fillets", "350g Baby potatoes (thinly sliced)", "1 tbsp Butter & 1 tbsp olive oil", "2 tbsp Honey & 1 tbsp mild mustard", "150g Asparagus spears or green beans"],
    steps: ["Pan-fry potato slices in olive oil and butter 8 mins until golden and soft, move to side.", "Place salmon fillets and asparagus in centre, cook 4 mins skin-down, flip 2 mins.", "Whisk honey and mustard, pour over salmon and potatoes, basting 1 min until caramelized."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Smoky Pork Sausage, Pea & Rice Pilaf",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Sliced pork sausages browned in skillet, rice toasted with garlic and smoked paprika, simmered in chicken stock with sweet green peas.",
    macros: "~510 kcal | 38g Protein | 50g Carbs | 15g Fats",
    ingredients: ["6 Lean pork sausages (sliced into coins)", "150g Long grain rice", "400ml Chicken stock", "1 tsp Smoked paprika & 1 tsp garlic puree", "100g Frozen peas", "30g Grated parmesan"],
    steps: ["Brown sausage coins in skillet 4 mins. Stir in dry rice, garlic, and smoked paprika for 1 min.", "Pour in hot chicken stock, bring to simmer, cover and cook on low 12 mins until liquid is absorbed.", "Stir in peas and parmesan, leave covered off heat 2 mins to steam, then serve."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Creamy Chicken, Bacon & Spinach Gnocchi",
    prepTime: "5 mins",
    cookTime: "14 mins",
    hack: "Diced chicken breast and smoked back bacon seared with shelf-stable potato gnocchi, simmered in light cream cheese and chicken stock with wilted baby spinach.",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "3 Rashers lean back bacon (chopped)", "350g Potato gnocchi", "200ml Chicken stock", "70g Light cream cheese", "80g Baby spinach (wilts invisible!)"],
    steps: ["Pan-fry diced chicken and bacon 5 mins in skillet until golden.", "Add potato gnocchi and chicken stock, cover and simmer 4 mins until gnocchi is tender.", "Stir in cream cheese and baby spinach until sauce is silky and spinach wilts completely."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy BBQ Pulled Chicken & Cheddar Quesadillas",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Shredded cooked chicken tossed in smoky BBQ sauce, folded into large flour tortillas with cheddar, baked extra crispy in the oven. Cut into wedges for a guaranteed family hit!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Cooked chicken breast (shredded)", "4 Large flour tortilla wraps", "3 tbsp Smoky BBQ sauce", "80g Grated light cheddar", "Sour cream to dip"],
    steps: ["Mix shredded chicken with smoky BBQ sauce.", "Spread chicken and grated cheddar over half of each tortilla wrap, fold in half firmly.", "Bake on tray at 200°C for 10-12 mins (flip halfway) until crunchy and golden. Cut into triangles."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Classic British Shepherd's Pie with Bubbly Cheddar Mash",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "5% lean beef mince simmered with tomato puree, Worcestershire sauce, and rich beef stock, topped with fluffy mashed potatoes and melted cheddar. Blitz gravy smooth so partner sees zero onion chunks!",
    macros: "~510 kcal | 45g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce", "40g Grated light cheddar (for top)", "50g Frozen sweetcorn or peas"],
    steps: ["Brown beef mince in skillet 5 mins. Add tomato puree, Worcestershire sauce, and stock. Simmer 5 mins.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over the top.", "Sprinkle cheddar cheese over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Garlic & Herb Pork Chops with Creamy Mash & Green Beans",
    prepTime: "8 mins",
    cookTime: "15 mins",
    hack: "Lean pork loin chops pan-seared in butter with garlic puree and dried rosemary, served with ready mash and steamed greens. Quick Sunday dinner comfort on a Tuesday.",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Lean boneless pork loin chops", "400g Fresh ready-made potato mash", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried rosemary", "150g Steamed green beans or broccoli"],
    steps: ["Pan-fry pork chops in olive oil and butter with garlic and rosemary 4 mins per side until golden.", "Microwave ready mash and steam green beans 2 mins.", "Plate juicy pork chops with warm mash and spoon over pan garlic butter juices."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Golden Baked Cod Fillets with Tartar Dip & Roast Potatoes",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Thick cod fillets baked with a crunchy panko-parmesan crust, alongside crispy cubed roast potatoes and sweet garden peas.",
    macros: "~495 kcal | 42g Protein | 48g Carbs | 12g Fats",
    ingredients: ["2 Thick cod fillets", "30g Panko breadcrumbs", "20g Grated parmesan", "Juice of ½ lemon & 1 tsp garlic puree", "400g Baby potatoes (cubed)", "150g Garden peas"],
    steps: ["Toss cubed potatoes in olive oil spray, roast at 200°C for 15 mins.", "Mix panko, parmesan, lemon juice, and garlic puree, press firmly on top of cod fillets.", "Add cod to tray with potatoes, bake 12 mins until crunchy and fish flakes easily. Serve with peas."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "French Bread Cheesy Bacon & Chicken Pizza Boats",
    prepTime: "5 mins",
    cookTime: "10 mins",
    hack: "Baguette halved lengthwise, topped with marinara passata, shredded chicken, crispy bacon pieces, and bubbly mozzarella. Melts into crispy pizza boats in 10 mins!",
    macros: "~525 kcal | 46g Protein | 50g Carbs | 14g Fats",
    ingredients: ["1 Crusty French baguette (halved lengthwise)", "200g Cooked chicken breast (shredded)", "2 Rashers back bacon (cooked and chopped)", "4 tbsp Smooth tomato passata", "70g Light mozzarella (grated)"],
    steps: ["Cut baguette in half lengthwise and place crust-side down on an oven tray.", "Spread smooth passata across bread, top with shredded chicken and bacon pieces.", "Cover generously with mozzarella, bake at 200°C for 10 mins until bubbling and crispy. Slice into sections."]
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

let completedRuns    = JSON.parse(localStorage.getItem('dadrunner_runs_v3')) || defaultCompleted;
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
  localStorage.setItem('dadrunner_runs_v3', JSON.stringify(completedRuns));
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
