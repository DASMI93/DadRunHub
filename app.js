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
    title: "10-Minute Garlic Lemon Butter King Prawn Linguine",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Fresh egg linguine cooks in only 3 mins! Toss king prawns in garlic butter, lemon juice, and a splash of pasta water with parmesan. Pure restaurant quality in 8 minutes flat.",
    macros: "~490 kcal | 42g Protein | 48g Carbs | 12g Fats",
    ingredients: ["300g Raw peeled king prawns", "180g Fresh egg linguine", "1 tbsp Butter & 1 tsp olive oil", "1 tsp Garlic puree & juice of ½ lemon", "25g Grated parmesan", "Fresh parsley to garnish"],
    steps: ["Boil fresh linguine in salted water 3 mins, reserve 2 tbsp pasta water then drain.", "Melt butter with olive oil in a skillet, sizzle garlic puree 30 secs, add prawns and fry 3 mins until pink.", "Toss drained pasta and reserved water into the pan with lemon juice and parmesan until glossy and coated."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Crispy Honey Mustard Chicken Tender Bowls",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Flash-fry mini chicken breast fillets in a sweet honey-wholegrain mustard glaze. Serve over microwave white basmati rice and sweetcorn. Super clean, sweet, savory, and picky-eater approved.",
    macros: "~510 kcal | 46g Protein | 46g Carbs | 12g Fats",
    ingredients: ["350g Mini chicken breast fillets", "250g Pre-cooked microwave basmati rice", "2 tbsp Honey & 1 tbsp mild wholegrain mustard", "1 tbsp Soy sauce", "1 Can (200g) sweetcorn (drained)", "1 tsp Garlic puree"],
    steps: ["Sear chicken mini fillets in oil spray on medium-high heat 3 mins per side until golden.", "Whisk honey, mustard, soy sauce, and garlic puree; pour into pan to bubble into a sticky glaze for 2 mins.", "Heat rice pouch 90 secs, plate with warm sweetcorn and top with glazed chicken tenders."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Smoked Salmon, Chive & Cream Cheese Bagel Melts",
    prepTime: "3 mins",
    cookTime: "7 mins",
    hack: "Toasted seeded bagels smeared with light garlic-chive cream cheese, layered with smoked salmon and melted mozzarella under the grill. Massive hit of omega-3 and pure weekend luxury on a weeknight.",
    macros: "~500 kcal | 42g Protein | 48g Carbs | 14g Fats",
    ingredients: ["2 Seeded bagel buns (halved)", "180g Smoked salmon slices", "80g Light cream cheese", "60g Light mozzarella (grated)", "Fresh chives or black pepper", "Crispy salad leaves to serve"],
    steps: ["Toast bagel halves lightly under the grill.", "Spread generously with light cream cheese, top with folds of smoked salmon, and scatter with grated mozzarella.", "Grill 3-4 mins until cheese is bubbling and golden. Sprinkle with chives and serve with a fresh salad."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "12-Minute Sizzling Beef Fajita Stir-Fry Wraps",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Flash-sear thin strips of rump steak with mild Mexican fajita spices. Keep peppers on Dan's half or in a separate dish so your partner gets pure juicy seasoned beef and cheese!",
    macros: "~520 kcal | 46g Protein | 44g Carbs | 14g Fats",
    ingredients: ["300g Lean rump steak (sliced thin)", "4 Small flour tortilla wraps", "1 tbsp Mild fajita seasoning", "60g Grated light cheddar", "2 tbsp Sour cream & mild salsa", "1 Bell pepper (sliced, on side)"],
    steps: ["High-heat sear steak strips in a smoking hot pan with fajita seasoning for 3-4 mins until browned.", "Warm tortilla wraps in the microwave for 20 seconds.", "Fill wraps with sizzling beef, cheddar, and a dollop of sour cream and mild salsa (peppers on the side)."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "10-Minute Cheesy Pesto Chicken Gnocchi Skillet",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Pan-fry shelf-stable potato gnocchi dry in oil spray so they crisp on the outside and stay pillowy inside. Fold in green pesto, light mozzarella, and cooked shredded chicken for total comfort.",
    macros: "~510 kcal | 44g Protein | 50g Carbs | 13g Fats",
    ingredients: ["350g Potato gnocchi", "250g Cooked chicken breast (shredded)", "2 tbsp Green basil pesto", "60g Light mozzarella (cubed)", "100ml Chicken stock", "Pinch of black pepper"],
    steps: ["Pan-fry gnocchi in olive oil spray 4 mins until lightly crisp and golden.", "Pour in chicken stock and shredded chicken, simmer 2 mins until heated through.", "Stir in basil pesto and mozzarella cubes, cover with lid 1 min until cheese melts into velvety ribbons."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Mexican Beef Barbacoa Bowls (Dan's Favourite!)",
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
    title: "Slowcooker Creamy Garlic & Herb Chicken Stew with Potatoes",
    prepTime: "8 mins",
    cookTime: "6 hrs",
    hack: "Skinless chicken thighs, baby potatoes, and sweet carrots slow-cooked in rich seasoned chicken broth. Swirl in light cream cheese at the end for a thick, velvety stew with zero chopped onion chunks.",
    macros: "~495 kcal | 45g Protein | 42g Carbs | 12g Fats",
    ingredients: ["500g Boneless skinless chicken thighs", "450g Baby potatoes (halved)", "2 Carrots (sliced into thick coins)", "350ml Low-salt chicken stock", "70g Light cream cheese", "1 tsp Garlic puree & dried thyme"],
    steps: ["Place chicken thighs, halved baby potatoes, and carrot coins in slowcooker. Season with garlic puree, thyme, salt, and pepper.", "Pour in chicken stock, cover and cook on LOW 6 hrs until chicken and potatoes are fork-tender.", "Shred chicken lightly, stir cream cheese into hot cooking juices until silky and rich, then serve."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Sticky BBQ Pulled Pork with Jacket Potatoes",
    prepTime: "5 mins",
    cookTime: "7 hrs",
    hack: "Lean pork shoulder bathed in smoky BBQ sauce, apple juice, and garlic. Shreds into glossy, tender pulled pork to pile high over fluffy baked jacket potatoes with melted cheddar!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "5 tbsp Smoky BBQ sauce", "150ml Apple juice or stock", "1 tsp Garlic puree & smoked paprika", "2 Large baking jacket potatoes", "40g Grated light cheddar"],
    steps: ["Rub pork with paprika and garlic, place in slowcooker. Whisk BBQ sauce with apple juice and pour over.", "Cook on LOW for 7-8 hrs. Transfer pork to a board and shred with two forks, tossing back in the juices.", "Bake or microwave jacket potatoes, split open, load with piping hot pulled pork and melted cheddar."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Hearty Beef Ragu with Pappardelle",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Stewing beef slow-cooked in smooth tomato passata, beef stock, garlic, and Italian herbs. The beef shreds into a restaurant-style rich ragu that coats ribbons of pasta without a single lump of onion.",
    macros: "~510 kcal | 46g Protein | 52g Carbs | 12g Fats",
    ingredients: ["500g Stewing beef or brisket", "400g Smooth tomato passata", "200ml Beef stock", "1 tbsp Tomato puree & 1 tsp garlic puree", "180g Pappardelle or tagliatelle pasta", "25g Grated parmesan"],
    steps: ["Place beef in slowcooker, pour over passata, beef stock, tomato puree, garlic, and Italian herbs.", "Cook on LOW 7 hrs until beef falls apart. Shred beef with two forks directly into the rich sauce.", "Boil pasta, drain, toss through hot slow-cooked ragu, and finish with grated parmesan."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Honey Soy Garlic Chicken with Jasmine Rice",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Boneless chicken thighs simmer in soy sauce, honey, garlic puree, and a touch of rice vinegar. Shreds into glossy, sweet-savory Asian-style chicken over tender jasmine rice.",
    macros: "~500 kcal | 44g Protein | 50g Carbs | 11g Fats",
    ingredients: ["500g Boneless skinless chicken thighs", "4 tbsp Soy sauce & 3 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "1 tbsp Cornstarch (mixed with 2 tbsp water)", "200g Jasmine or basmati rice", "150g Steamed green beans or sweet peas"],
    steps: ["Whisk soy sauce, honey, garlic, sesame oil, and place chicken thighs into slowcooker. Cook on LOW for 5-6 hrs.", "Remove chicken and shred. Whisk cornstarch slurry into the slowcooker sauce on HIGH for 10 mins until thickened.", "Toss chicken in glossy glaze and serve over steamed jasmine rice with green beans on the side."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Firecracker Glazed Chicken & Sesame Rice Bowls",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Panko-crusted chicken baked ultra crispy, tossed in a sweet & tangy mild honey-soy firecracker glaze (sweet with no spicy burn). Chinese takeaway crunch without the greasy calories!",
    macros: "~520 kcal | 46g Protein | 54g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (cut into bite-sized chunks)", "40g Panko breadcrumbs", "1 Egg (beaten)", "250g Pre-cooked microwave basmati rice", "2 tbsp Sweet chilli sauce & 1 tbsp soy sauce", "1 tbsp Honey & 1 tsp sesame seeds"],
    steps: ["Dip chicken chunks in beaten egg, press into seasoned panko. Bake at 200°C for 15 mins until crispy.", "Simmer sweet chilli sauce, soy sauce, and honey in a pan for 1 min to make a glossy glaze.", "Toss crispy chicken gently in glaze and serve immediately over steamed jasmine rice."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "The Ultimate Smash Burger & Baked Crispy Fries",
    prepTime: "8 mins",
    cookTime: "10 mins",
    hack: "Press 5% fat beef mince balls flat with a spatula onto a smoking skillet for crispy lacey edges. Stack inside toasted brioche with melted cheddar and light burger sauce!",
    macros: "~530 kcal | 48g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Soft brioche burger buns", "4 Slices light cheddar or burger cheese", "300g Oven chips or wedges", "2 tbsp Light burger sauce", "Pinch of salt and garlic powder"],
    steps: ["Form mince into 4 balls. Place on baking tray with chips at 200°C for 20 mins.", "Press beef balls flat into a searing hot non-stick pan, sear 2 mins, flip, top with cheddar slices 1 min to melt.", "Assemble double burgers on toasted brioche with light burger sauce and serve with hot fries."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Greek Chicken Gyros Flatbreads with Garlic Yogurt Dip",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Marinate sliced chicken breast in lemon juice, oregano, and garlic puree. Grill until charred, fold into warm Greek flatbreads with a few crispy oven chips and smooth garlic Greek yogurt!",
    macros: "~510 kcal | 46g Protein | 48g Carbs | 12g Fats",
    ingredients: ["300g Chicken breast (sliced into strips)", "2 Greek flatbreads or pocket pitas", "3 tbsp 0% Greek yogurt", "1 tsp Garlic puree & juice of ½ lemon", "1 tsp Dried oregano", "150g Oven chips (to tuck inside like authentic gyros)"],
    steps: ["Toss chicken strips in lemon juice, oregano, garlic, salt, and olive oil spray.", "Grill or pan-fry chicken on high heat 6-7 mins until charred at the edges.", "Warm flatbreads, spread garlic yogurt, pack with charred chicken and a handful of crispy oven chips."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Crispy Popcorn Chicken Mac & Cheese Bake",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Crispy panko chicken bites baked on top of a velvety macaroni cheese made light with milk and reduced-fat cheddar. Pure American diner indulgence tailored for running macros!",
    macros: "~530 kcal | 46g Protein | 52g Carbs | 14g Fats",
    ingredients: ["300g Chicken breast (cut into mini nuggets)", "30g Panko breadcrumbs", "140g Macaroni pasta", "150ml Semi-skimmed milk & 1 tsp cornstarch", "60g Grated light cheddar", "1 tsp Garlic puree & smoked paprika"],
    steps: ["Toss chicken nuggets in paprika and panko breadcrumbs, bake at 200°C for 12 mins until crispy.", "Boil macaroni 8 mins and drain. Whisk milk, cornstarch, and garlic in pan until bubbling, stir in cheddar until melted.", "Stir macaroni into cheese sauce, dish into bowls, and top with hot crispy popcorn chicken."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Salt & Pepper Crispy Shredded Beef & Egg Fried Rice",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Toss rump steak strips in cornstarch and pan-sear until sizzling and crunchy. Toss with sea salt, five-spice, and garlic over quick egg fried microwave rice. 100% takeaway taste!",
    macros: "~520 kcal | 46g Protein | 52g Carbs | 13g Fats",
    ingredients: ["300g Lean rump steak (cut into thin strips)", "1 tbsp Cornstarch", "1 tsp Chinese five-spice & coarse sea salt", "250g Pre-cooked microwave basmati rice", "2 Eggs (beaten)", "1 tsp Sesame oil & soy sauce"],
    steps: ["Coat beef strips in cornstarch and five-spice. Fry in hot oil spray 4-5 mins until crispy, season with sea salt.", "Scramble eggs in a hot pan for 1 min, tip in rice pouch, drizzle soy sauce and sesame oil, toss 2 mins.", "Plate fluffy egg fried rice and crown with hot crispy shredded salt and pepper beef."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Honey Mustard Pork Chops with Crispy Potatoes",
    prepTime: "5 mins",
    cookTime: "20 mins",
    hack: "Thinly sliced baby potatoes roast and crisp in the pan while juicy pork chops sear in honey-mustard butter. All done in a single skillet in 20 minutes!",
    macros: "~510 kcal | 45g Protein | 44g Carbs | 15g Fats",
    ingredients: ["2 Lean boneless pork loin chops", "400g Baby potatoes (thinly sliced into discs)", "1 tbsp Butter & 1 tbsp olive oil", "2 tbsp Honey & 1 tbsp mild mustard", "150g Green beans or sweet peas"],
    steps: ["Pan-fry potato discs in olive oil and butter for 10 mins until golden and tender, push to side.", "Season pork chops, add to skillet, and cook 4 mins per side.", "Stir honey and mustard into pan juices, spoon over pork and potatoes, add green beans for last 2 mins."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Creamy Sun-Dried Tomato & Basil Chicken Orzo",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Orzo pasta simmers directly in seasoned chicken stock, soaking up all the chicken juices. Stir in diced chicken, sun-dried tomatoes, and light cream cheese for a risotto-like texture without the effort!",
    macros: "~520 kcal | 46g Protein | 50g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "150g Orzo pasta", "500ml Chicken stock", "50g Sun-dried tomatoes (chopped)", "60g Light cream cheese", "1 tsp Garlic puree & dried basil"],
    steps: ["Brown diced chicken in deep pan with garlic for 4 mins, remove to a plate.", "Pour dry orzo and chicken stock into same pan, simmer 10 mins until orzo is tender and liquid absorbed.", "Fold in cooked chicken, sun-dried tomatoes, and cream cheese until rich, creamy, and bubbling."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Mexican Beef Taco Rice Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Lean beef mince cooked with mild taco seasoning, sweetcorn, and long grain rice. Topped with bubbly cheddar in the skillet. Scoop straight from pan into warm tortillas or bowls!",
    macros: "~520 kcal | 45g Protein | 48g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita/taco seasoning", "200g Long grain rice (pre-cooked or pouch)", "1 Can (200g) sweetcorn (drained)", "60g Grated light cheddar", "2 tbsp Mild salsa to dollop"],
    steps: ["Brown beef mince in skillet with taco seasoning for 5 mins.", "Tip in warm rice, sweetcorn, and 2 tbsp water, stirring together for 3 mins until piping hot.", "Scatter grated cheddar across top, cover with lid 2 mins until melted, serve with salsa."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Lemon Garlic Salmon, Asparagus & Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Baby potatoes steam-fry until tender, then salmon fillets and asparagus spears cook side-by-side in garlic-lemon butter. High in healthy fats and zero pots to wash.",
    macros: "~500 kcal | 42g Protein | 40g Carbs | 16g Fats",
    ingredients: ["2 Salmon fillets", "350g Baby potatoes (halved)", "150g Asparagus spears (woody ends snapped off)", "1 tbsp Butter & 1 tsp olive oil", "1 tsp Garlic puree & juice of ½ lemon", "Fresh dill or parsley"],
    steps: ["Cook halved baby potatoes in skillet with 3 tbsp water and butter covered for 8 mins until tender.", "Move potatoes to edge, place salmon skin-down with asparagus in centre, cook 4 mins.", "Flip salmon, add garlic puree and lemon juice, spooning over salmon for 3 mins until cooked through."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Spanish Chorizo, Chicken & Rice Paella",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Crispy diced chorizo releases fragrant smoky paprika oil to fry chicken breast and rice. Simmered in chicken stock with sweet peas. Zero seafood shells, 100% comfort!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "50g Cooking chorizo (diced)", "150g Paella or long grain rice", "450ml Chicken stock", "1 tsp Smoked paprika & 1 tsp garlic puree", "80g Frozen peas"],
    steps: ["Fry diced chorizo 3 mins until oils release, add chicken cubes and sear 3 mins.", "Stir in rice, garlic, and smoked paprika for 1 min, then pour in hot chicken stock.", "Simmer uncovered 12 mins without stirring until rice absorbs stock, sprinkle peas on top for last 2 mins."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy Golden Chicken Schnitzel with Creamy Mash & Peas",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Pound chicken breasts thin, dip in beaten egg and panko, pan-fry to golden perfection. Served with instant ready potato mash and sweet garden peas. Always a crowd-pleaser.",
    macros: "~510 kcal | 47g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (butterflied and lightly flattened)", "40g Panko breadcrumbs", "1 Egg (beaten)", "400g Fresh ready-made potato mash", "150g Garden peas", "Juice of ½ lemon"],
    steps: ["Dip flattened chicken cutlets into beaten egg, coat evenly in seasoned panko breadcrumbs.", "Pan-fry in olive oil spray 4 mins per side until deeply golden and crunchy.", "Microwave mash and steam peas, plate schnitzel with a squeeze of fresh lemon."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Classic British Cottage Pie with Cheddar Mash Crust",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "5% lean beef mince simmered in a thick, velvety Worcestershire beef gravy. Spread warm buttery mashed potatoes on top with grated cheddar and grill until crisp and bubbling!",
    macros: "~510 kcal | 45g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce", "40g Grated light cheddar (for top)", "50g Frozen sweetcorn or peas"],
    steps: ["Brown beef mince in pan 5 mins. Stir in tomato puree, Worcestershire sauce, and beef stock. Simmer 5 mins.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over top.", "Sprinkle cheddar over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Baked Mozzarella & Herb Stuffed Chicken Breasts",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Slice a pocket into chicken breasts and tuck in light mozzarella and green basil pesto. As it bakes, the melting mozzarella keeps the chicken amazingly tender and juicy!",
    macros: "~510 kcal | 48g Protein | 38g Carbs | 15g Fats",
    ingredients: ["2 Chicken breasts", "60g Light mozzarella (sliced)", "2 tbsp Green basil pesto", "400g Baby potatoes (halved)", "1 tbsp Olive oil & pinch of dried oregano", "150g Green beans to serve"],
    steps: ["Cut a horizontal pocket into each chicken breast. Spoon pesto inside and tuck in mozzarella slices.", "Place on baking tray alongside halved baby potatoes tossed in olive oil.", "Bake at 200°C for 20 mins until potatoes are crispy and chicken is golden and bubbling with cheese."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "British Pub-Style Baked Fish & Chunky Roast Chips",
    prepTime: "8 mins",
    cookTime: "20 mins",
    hack: "Thick white cod fillets crusted with crushed sea salt, lemon, and crunchy panko. Oven-baked alongside crispy chunky potato chips with sweet garden peas and light tartar dip!",
    macros: "~495 kcal | 42g Protein | 50g Carbs | 11g Fats",
    ingredients: ["2 Thick cod or haddock fillets", "30g Panko breadcrumbs", "Juice of ½ lemon & 1 tsp garlic puree", "350g Chunky oven chips or roast potatoes", "150g Garden peas", "2 tbsp Light mayonnaise or Greek yogurt for dip"],
    steps: ["Bake chunky chips at 200°C for 20 mins until crisp.", "Mix panko with lemon juice, garlic, salt and pepper. Press firmly onto cod fillets.", "Add cod to oven tray for final 12 mins until fish flakes easily. Serve with steamed peas."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "French Bread Cheesy Meatball Subs",
    prepTime: "8 mins",
    cookTime: "15 mins",
    hack: "Split a crusty baguette lengthwise, load with lean cooked beef meatballs simmered in smooth marinara passata, and smother in grated mozzarella. Grilled into crunchy, cheesy perfection.",
    macros: "~525 kcal | 46g Protein | 50g Carbs | 14g Fats",
    ingredients: ["1 Crusty French baguette (halved lengthwise)", "10 Lean cooked beef meatballs (or 300g lean beef mince rolled into balls)", "200g Smooth tomato passata", "1 tsp Garlic puree & Italian dried herbs", "70g Light mozzarella (grated)"],
    steps: ["Warm meatballs in tomato passata, garlic, and Italian herbs for 6 mins.", "Slice baguette in half lengthwise, hollow out slightly, and tuck in saucy meatballs.", "Cover generously with grated mozzarella, bake at 200°C for 8-10 mins until bread is crispy and cheese is melted."]
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
    '🥩 Meat & Fish': ['chicken', 'beef', 'pork', 'turkey', 'steak', 'mince', 'salmon', 'cod', 'haddock', 'tuna', 'prawn', 'sausage', 'chorizo', 'lamb'],
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
