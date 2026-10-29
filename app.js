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
    title: "10-Minute Sticky Teriyaki Salmon & Steamed Rice",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Salmon fillets pan-fry skin-down for 5 mins, then glaze with sweet teriyaki in the pan for 1 min. Serve with ready-steamed basmati rice and edamame/cucumber on the side!",
    macros: "~510 kcal | 42g Protein | 45g Carbs | 16g Fats",
    ingredients: ["2 Salmon fillets", "250g Pre-cooked microwave basmati rice", "3 tbsp Teriyaki sauce & 1 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "1 Cucumber (sliced for crunchy side)"],
    steps: ["Sear salmon fillets in hot pan 4 mins skin-down, flip 2 mins.", "Pour teriyaki sauce and honey into the pan, spooning glaze over salmon for 1 min until sticky.", "Heat rice pouch for 90 secs, plate with salmon, cucumber, and drizzle pan glaze."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Smoky Chorizo & Prawn Garlic Sauté",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Diced chorizo releases rich smoked paprika oil in 2 mins, then king prawns cook in 3 mins. Mop up the garlic paprika oil with warm crusty bread!",
    macros: "~490 kcal | 44g Protein | 42g Carbs | 15g Fats",
    ingredients: ["300g Raw peeled king prawns", "60g Cooking chorizo (diced)", "1 tsp Garlic puree & juice of ½ lemon", "1 tsp Smoked paprika & fresh parsley", "1 Crusty French baguette to serve"],
    steps: ["Fry diced chorizo in skillet 3 mins until sizzling and oil is released.", "Toss in garlic puree and prawns, fry 3-4 mins until prawns are pink and juicy.", "Finish with lemon juice and parsley, serve straight from pan with warm crusty bread."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Crispy Prosciutto & Mozzarella Chicken Cutlets",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Wrap chicken cutlets in prosciutto, sear 3 mins per side, top with mozzarella slices and pop a lid on for 1 min to melt. Zero chopping, pure Italian bistro flavor!",
    macros: "~490 kcal | 48g Protein | 38g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (sliced into thin cutlets)", "4 Slices prosciutto or Parma ham", "60g Light mozzarella (sliced)", "400g Fresh ready-made potato mash", "1 tbsp Olive oil & dried oregano"],
    steps: ["Wrap each chicken cutlet in a slice of prosciutto.", "Pan-fry in olive oil 3 mins per side until prosciutto is crispy and chicken is cooked.", "Top with mozzarella and oregano, cover pan with lid 1 min until melted. Serve over warm mash."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "10-Minute Korean Sweet Garlic Beef Stir-Fry Bowls",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Thin flash-fried steak strips tossed in sweet soy, garlic, and brown sugar over warm rice. Ultra fast, high protein, completely kid & partner approved!",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 12g Fats",
    ingredients: ["300g Lean rump steak (sliced into thin strips)", "250g Pre-cooked microwave basmati rice", "3 tbsp Soy sauce & 1 tbsp brown sugar or honey", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Tenderstem broccoli or green peas"],
    steps: ["High-heat sear steak strips 2-3 mins in oil spray until browned.", "Steam broccoli or peas in microwave 2 mins.", "Pour soy sauce, sugar, garlic and sesame oil into the pan, tossing steak 1 min until caramelized. Serve over rice."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "12-Minute Creamy Garlic & Herb Tortellini with Shredded Chicken",
    prepTime: "2 mins",
    cookTime: "10 mins",
    hack: "Fresh refrigerated stuffed cheese tortellini cooks in only 3 mins! Stir in cream cheese, chicken stock, and pre-cooked shredded chicken for instant velvety pasta.",
    macros: "~520 kcal | 46g Protein | 54g Carbs | 13g Fats",
    ingredients: ["250g Fresh cheese tortellini or ravioli", "250g Cooked chicken breast (shredded)", "80g Light cream cheese", "100ml Low-salt chicken stock", "1 tsp Garlic puree & Italian dried herbs", "20g Grated parmesan"],
    steps: ["Boil tortellini in salted water 3 mins, drain.", "In same pot, whisk chicken stock, cream cheese, garlic and Italian herbs over low heat until smooth.", "Stir in shredded chicken and drained tortellini for 2 mins until coated. Top with parmesan."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Mexican Chipotle Pulled Beef Bowls",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Beef braising steak cooked low and slow with crushed tomatoes, lime, cumin, and mild chipotle seasoning. Shred with two forks into savory barbacoa beef over fluffy rice with sour cream!",
    macros: "~520 kcal | 48g Protein | 46g Carbs | 14g Fats",
    ingredients: ["500g Beef braising steak or brisket", "1 Can (400g) chopped tomatoes", "Juice of 1 Lime & 1 tsp garlic puree", "1 tsp Cumin & 1 tbsp mild fajita seasoning", "200g Basmati or long grain rice", "Sour cream, mild salsa & grated cheddar to serve"],
    steps: ["Place beef into slowcooker. Mix chopped tomatoes with lime juice, garlic, cumin, and fajita seasoning, pour over.", "Cook LOW 7-8 hrs until beef is melt-in-your-mouth tender. Shred with two forks.", "Serve over warm rice with sour cream, cheddar, and salsa on the side."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Creamy Bacon & Leek Chicken Stew",
    prepTime: "10 mins",
    cookTime: "6 hrs",
    hack: "Chicken thighs, potatoes, and smoked bacon cook in seasoned chicken stock. Blitz half the potatoes and sauce smooth for a luscious creamy finish without heavy double cream!",
    macros: "~500 kcal | 46g Protein | 44g Carbs | 12g Fats",
    ingredients: ["500g Boneless skinless chicken thighs", "4 Rashers lean smoked back bacon (chopped)", "450g Baby potatoes (halved)", "1 Leek (sliced thin)", "300ml Low-salt chicken stock", "60g Light cream cheese to finish"],
    steps: ["Layer chicken, chopped bacon, halved potatoes, and leeks in slowcooker. Pour in stock.", "Cook LOW 6 hrs. Remove chicken, shred gently.", "Stir cream cheese into the juices (mash a few potatoes into the broth for thickness), return chicken, and serve."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Rich Beef Shin Bourguignon with Mash",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Tender beef shin simmered in rich beef stock, tomato puree, garlic, and herbs. Zero alcohol needed, sauce is smooth and luxurious, served over mountains of mashed potatoes!",
    macros: "~510 kcal | 47g Protein | 46g Carbs | 12g Fats",
    ingredients: ["500g Beef shin or stewing steak (cubed)", "300ml Beef stock", "2 tbsp Tomato puree & 1 tbsp Worcestershire sauce", "500g Potatoes (for mash)", "1 tsp Garlic puree, dried thyme & salt", "150g Button mushrooms (kept whole so partner can remove easily)"],
    steps: ["Add beef cubes, tomato puree, Worcestershire sauce, stock, garlic, thyme, and mushrooms to slowcooker.", "Cook LOW 7-8 hrs until beef is butter-tender.", "Boil potatoes and mash with milk. Thicken gravy if needed, serve over hot mash."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Honey Garlic Glazed Pork Shoulder",
    prepTime: "5 mins",
    cookTime: "6 hrs",
    hack: "Pork shoulder bathed in honey, soy sauce, garlic, and a splash of apple juice. Shreds into glossy, sticky pulled pork that pairs beautifully with potato wedges or rice.",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 14g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "3 tbsp Honey & 3 tbsp soy sauce", "150ml Apple juice or chicken stock", "1 tsp Garlic puree & 1 tsp onion powder", "400g Baby potatoes or rice to serve"],
    steps: ["Whisk honey, soy sauce, apple juice, garlic puree, and onion powder. Pour over pork in slowcooker.", "Cook LOW 6-7 hrs. Remove pork and shred with two forks.", "Pour slowcooker liquid into small pan, simmer 4 mins to thicken glaze, toss with shredded pork."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Golden Tuscan Chicken & Rice Casserole",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Chicken thighs, sun-dried tomatoes, and garlic slow cook in broth. Rice stirred in towards the end so it absorbs all the savory chicken essence. Comfort food heaven!",
    macros: "~520 kcal | 46g Protein | 50g Carbs | 13g Fats",
    ingredients: ["500g Boneless skinless chicken thighs", "60g Sun-dried tomatoes (chopped)", "150g Long grain rice (uncooked)", "450ml Chicken stock", "60g Light cream cheese", "1 tsp Garlic puree & dried oregano"],
    steps: ["Place chicken thighs, sun-dried tomatoes, garlic, oregano, and stock in slowcooker. Cook LOW 4 hrs.", "Shred chicken, stir in uncooked rice, and cook on HIGH for 45 mins until rice is tender.", "Fold in cream cheese until rich and creamy, then serve."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Buttermilk-Style Chicken Burger & Fries",
    prepTime: "10 mins",
    cookTime: "18 mins",
    hack: "Dip chicken breast cutlets in seasoned Greek yogurt, coat in crunchy crushed cornflakes or panko, and oven bake. Mega crispy crunch with fraction of the calories!",
    macros: "~530 kcal | 47g Protein | 52g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (butterflied into cutlets)", "40g Panko breadcrumbs", "2 tbsp 0% Greek yogurt", "2 Soft brioche burger buns", "300g Oven chips", "Light garlic mayonnaise & shredded lettuce"],
    steps: ["Coat chicken cutlets in yogurt, press into seasoned panko breadcrumbs.", "Bake on tray with chips at 200°C for 18 mins until crispy and golden.", "Toast brioche buns, spread light garlic mayo, add lettuce and hot crunchy chicken."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Crispy Salt & Pepper Chicken & Rice Boxes",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Crispy coated chicken tossed in Chinese five-spice, garlic, and coarse sea salt. Serve onions/peppers on your side of the box so partner gets pure crispy chicken!",
    macros: "~510 kcal | 46g Protein | 54g Carbs | 11g Fats",
    ingredients: ["300g Chicken breast (diced)", "1 tbsp Cornstarch", "1 tsp Chinese five spice & coarse sea salt", "150g Jasmine rice", "1 Bell pepper (sliced, on side)", "Sweet chilli sauce to dip"],
    steps: ["Toss diced chicken in cornstarch and five spice. Pan-fry in hot oil spray 7 mins until crispy.", "Boil rice and drain.", "Toss crispy chicken with sea salt and serve over rice with peppers and sweet chilli dip."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Smoky Bacon Double Cheeseburger Loaded Wedges",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Seasoned lean beef mince cooked with crispy bacon pieces, layered over oven wedges with burger sauce and melted cheddar. Saturday takeaway vibes on a Tuesday!",
    macros: "~540 kcal | 46g Protein | 48g Carbs | 16g Fats",
    ingredients: ["300g 5% Fat beef mince", "3 Rashers lean back bacon (chopped)", "350g Potato wedges or chips", "60g Grated light cheddar", "2 tbsp Light burger sauce"],
    steps: ["Bake potato wedges at 200°C for 20 mins until crispy.", "Fry bacon and beef mince in skillet 6 mins until browned. Season with salt and garlic powder.", "Top hot wedges with beef, bacon, and cheddar. Grill 2 mins until melted, drizzle burger sauce."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Crispy Fish Finger Sub with Homemade Tartar Sauce",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Thick chunky breaded cod fillets baked extra crispy, tucked into a crusty sub roll with light tartar (Greek yogurt + light mayo + lemon juice). Pure comfort food!",
    macros: "~490 kcal | 38g Protein | 54g Carbs | 12g Fats",
    ingredients: ["4 Breaded cod or haddock fillets", "2 Sub rolls or crusty baguettes", "2 tbsp 0% Greek yogurt & 1 tbsp light mayo", "Juice of ½ lemon", "Crispy shredded lettuce"],
    steps: ["Bake breaded fish fillets at 200°C for 15 mins until golden and crunchy.", "Mix yogurt, light mayo, and lemon juice with pinch of salt for tartar sauce.", "Slice sub rolls, spread tartar sauce, line with lettuce, and tuck hot fish fillets inside."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Nando's-Style Lemon & Herb Butterfly Chicken & Spicy Rice",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Butterfly chicken breasts coated in lemon juice, garlic, oregano, and mild peri-peri sauce (zero burn). Griddled until charred and served with seasoned long-grain rice!",
    macros: "~510 kcal | 47g Protein | 48g Carbs | 11g Fats",
    ingredients: ["2 Chicken breasts (butterflied flat)", "2 tbsp Mild lemon & herb peri-peri marinade", "150g Long grain rice", "1 tsp Smoked paprika & 1 tsp garlic puree", "1 Can (200g) sweetcorn (drained)"],
    steps: ["Marinate butterflied chicken in lemon peri-peri sauce for 5 mins.", "Boil rice with smoked paprika and garlic, stir in sweetcorn.", "Grill chicken on a hot griddle pan 5 mins per side until charred and juicy. Serve over seasoned rice."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Tuscan Garlic Butter Chicken & Baby Potatoes",
    prepTime: "5 mins",
    cookTime: "20 mins",
    hack: "Halved baby potatoes steam-fry in garlic butter while chicken thighs roast alongside. In the last 3 minutes, toss in sun-dried tomatoes and parsley. Everything in one skillet!",
    macros: "~520 kcal | 46g Protein | 42g Carbs | 16g Fats",
    ingredients: ["4 Boneless skinless chicken thighs", "400g Baby potatoes (halved)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried thyme", "50g Sun-dried tomatoes (chopped)"],
    steps: ["Add potatoes and chicken thighs to skillet with butter, olive oil, garlic, and thyme.", "Cover and cook on medium-low heat 15 mins, flipping potatoes and chicken halfway.", "Uncover, add sun-dried tomatoes, and sear on high heat 3 mins until potatoes are golden and chicken is cooked."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Creamy Bacon, Pea & Parmesan Risotto",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Arborio rice absorbs hot stock naturally into creamy velvet without hours of stirring. Fold in smoked bacon, peas, and parmesan at the end for pure comfort.",
    macros: "~520 kcal | 38g Protein | 58g Carbs | 14g Fats",
    ingredients: ["4 Rashers lean smoked back bacon (chopped)", "160g Arborio risotto rice", "600ml Low-salt chicken stock", "80g Frozen peas", "30g Grated parmesan", "1 tsp Garlic puree"],
    steps: ["Fry bacon and garlic in pan 3 mins. Add rice and stir 1 min to coat.", "Add chicken stock two ladles at a time, simmering 14 mins until rice is creamy and tender.", "Stir in peas and parmesan cheese. Season with cracked black pepper and serve."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Smoky Sausage & Sweet Potato Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Pork sausages sliced into rounds and pan-fried with tiny diced sweet potatoes and mild smoked paprika. Topped with light cheddar for a melty skillet dinner.",
    macros: "~510 kcal | 38g Protein | 46g Carbs | 16g Fats",
    ingredients: ["6 Lean pork sausages (sliced into rounds)", "350g Sweet potato (diced small)", "1 tsp Smoked paprika & 1 tsp garlic puree", "50g Grated light cheddar", "Crusty bread or warm tortillas to serve"],
    steps: ["Fry sliced sausages in skillet 4 mins until lightly browned.", "Toss in diced sweet potato, paprika, garlic, and 2 tbsp water. Cover and cook 8 mins until potatoes are soft.", "Uncover, scatter cheddar on top, and let melt for 2 mins. Serve with warm crusty bread."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Creamy Garlic Chicken & Penne Alfredo",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Pasta cooks directly in chicken stock and milk. Light cream cheese and parmesan melt into the starch of the pasta to form a luxurious Alfredo sauce without heavy double cream!",
    macros: "~530 kcal | 46g Protein | 52g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "140g Penne pasta", "300ml Chicken stock & 150ml semi-skimmed milk", "70g Light cream cheese", "30g Grated parmesan", "1 tsp Garlic puree & Italian dried herbs"],
    steps: ["Sear diced chicken in pan with garlic 4 mins until cooked, remove to a plate.", "Add penne, chicken stock, and milk to pan. Bring to boil, simmer 10 mins until pasta is cooked and liquid absorbed.", "Stir in cream cheese and parmesan, fold chicken back in for 1 min until creamy."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Honey Balsamic Salmon & Asparagus",
    prepTime: "3 mins",
    cookTime: "12 mins",
    hack: "Salmon fillets and asparagus spears cook side-by-side in 10 mins, glazed with sweet honey and balsamic vinegar. Clean, rich in omega-3, and zero messy cleanup.",
    macros: "~500 kcal | 42g Protein | 40g Carbs | 16g Fats",
    ingredients: ["2 Salmon fillets", "150g Asparagus spears or green beans", "2 tbsp Honey & 1 tbsp balsamic vinegar", "1 tbsp Soy sauce", "250g Microwave basmati rice to serve"],
    steps: ["Pan-fry salmon fillets in skillet 4 mins skin-down with asparagus spears alongside.", "Flip salmon. Whisk honey, balsamic vinegar, and soy sauce, pour into the pan.", "Spoon bubbling glaze over salmon and asparagus for 2 mins. Serve with warm basmati rice."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Cheesy Crispy Chicken Quesadilla Bake",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Fold seasoned chicken and cheddar inside large flour tortillas and bake on an oven tray until golden and super crispy. Cut into wedges for a guaranteed family hit!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Cooked chicken breast (shredded)", "4 Large flour tortilla wraps", "80g Grated light cheddar", "2 tbsp Mild salsa", "Sour cream to dip"],
    steps: ["Spread shredded chicken and grated cheddar over half of each tortilla, fold over firmly.", "Place on baking tray sprayed with oil, bake at 200°C for 12 mins (flip once) until crispy and golden.", "Slice into triangles and serve with mild salsa and sour cream."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Classic British Shepherd's Pie with Cheddar Crust",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "Lean beef or lamb mince in a rich, smooth Worcestershire tomato gravy topped with creamy mashed potatoes and bubbly cheddar. Blitz gravy smooth so partner sees zero onion chunks!",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce", "40g Grated light cheddar (for top)", "50g Frozen sweetcorn or peas"],
    steps: ["Brown beef mince in skillet 5 mins. Add tomato puree, Worcestershire sauce, and stock. Simmer 5 mins.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over the top.", "Sprinkle cheddar cheese over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Garlic Butter Pork Chops with Crispy Roast Potatoes",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Crispy cubed roast potatoes bake in the oven while lean pork chops pan-sear in garlic butter for 8 minutes. Juicy, golden, and classic Sunday dinner comfort.",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Lean boneless pork loin chops", "450g Baby potatoes (cubed)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried rosemary", "150g Steamed green beans or broccoli"],
    steps: ["Toss cubed potatoes in olive oil, rosemary, and salt. Roast at 200°C for 25 mins until crispy.", "Pan-fry pork chops in butter and garlic puree 4 mins per side until golden and cooked through.", "Serve juicy pork chops with crispy roast potatoes and green beans."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Crispy Parmesan Herb Crusted Cod with Mash",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Top fresh cod fillets with lemon juice, garlic, grated parmesan, and panko breadcrumbs. Bakes into a golden crunchy crust in 12 mins. Better than fish and chips!",
    macros: "~490 kcal | 42g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Thick cod fillets", "30g Panko breadcrumbs", "20g Grated parmesan", "Juice of ½ lemon & 1 tsp garlic puree", "400g Fresh ready-made potato mash", "150g Peas or sweetcorn"],
    steps: ["Mix panko, parmesan, lemon juice, and garlic puree with salt and pepper.", "Press the crumb mixture firmly onto the tops of the cod fillets.", "Bake on tray at 200°C for 12-14 mins until topping is crunchy and fish flakes easily. Serve with mash and peas."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "Crispy BBQ Chicken & Bacon French Bread Pizzas",
    prepTime: "5 mins",
    cookTime: "10 mins",
    hack: "Halve a crusty French baguette lengthwise, spread smoky BBQ sauce, shredded chicken, bacon, and mozzarella. Bakes into the crispiest, cheesiest pizza boats in 10 minutes!",
    macros: "~520 kcal | 45g Protein | 50g Carbs | 14g Fats",
    ingredients: ["1 Crusty French baguette (halved lengthwise)", "200g Cooked chicken breast (shredded)", "2 Rashers back bacon (cooked and chopped)", "3 tbsp Smoky BBQ sauce", "70g Light mozzarella (grated)"],
    steps: ["Cut baguette in half lengthwise and place crust-side down on an oven tray.", "Spread smoky BBQ sauce across bread, top with shredded chicken and bacon pieces.", "Cover generously with mozzarella, bake at 200°C for 10 mins until bubbling and crispy. Slice into sections."]
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
