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
    title: "10-Minute Bang Bang Crispy Chicken Rice Bowls",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Air-fry or pan-crisp pre-cooked chicken breast tenders, toss in sweet & creamy Bang Bang sauce (Greek yogurt + light mayo + sweet chilli). Piled over warm jasmine rice with sweetcorn. Pure comfort!",
    macros: "~510 kcal | 46g Protein | 50g Carbs | 12g Fats",
    ingredients: ["350g Cooked chicken breast (strips or tenders)", "250g Pre-cooked microwave basmati rice", "2 tbsp Light mayonnaise & 2 tbsp 0% Greek yogurt", "2 tbsp Sweet chilli sauce", "1 Can (200g) sweetcorn (drained)", "1 Cucumber (sliced for side)"],
    steps: ["Crisp chicken tenders in air-fryer, oven, or hot pan for 6 mins until hot and crunchy.", "Whisk light mayo, Greek yogurt, and sweet chilli sauce into a smooth creamy Bang Bang drizzle.", "Heat rice pouch 90 secs, plate with warm sweetcorn, top with crispy chicken and generous sauce drizzle."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Cheesy Beef Crunchwrap Supreme",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "The legendary Taco Bell hack! Seasoned 5% beef, light cheddar, sour cream, and a crunchy tortilla chip layer folded inside a warm flour tortilla and pan-toasted sealed. Guaranteed family obsession.",
    macros: "~520 kcal | 45g Protein | 46g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita/taco seasoning", "2 Large flour tortilla wraps", "2 Handfuls salted crunchy tortilla chips (for crunch layer)", "60g Grated light cheddar", "2 tbsp Sour cream & mild salsa"],
    steps: ["Brown beef mince with taco seasoning in skillet 5 mins.", "Lay large tortillas flat: add beef, cheddar, sour cream, flat crunchy tortilla chips, and mild salsa.", "Fold edges into the centre to enclose, place seam-side down in a dry hot pan 2-3 mins per side until toasted and sealed."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Sizzling Garlic Butter King Prawn Tacos",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "King prawns pan-fry in garlic butter and smoked paprika in only 3 mins! Tuck into warm mini tortillas with a zesty lime sour cream crema. Light, juicy, and lightning fast.",
    macros: "~480 kcal | 42g Protein | 42g Carbs | 12g Fats",
    ingredients: ["300g Raw peeled king prawns", "4 Mini soft flour tortilla wraps", "1 tbsp Butter & 1 tsp garlic puree", "1 tsp Smoked paprika & juice of 1 lime", "3 tbsp Light sour cream", "Crispy shredded lettuce"],
    steps: ["Melt butter in skillet, add garlic puree, paprika, and prawns; flash-fry 3 mins until pink and juicy.", "Warm mini tortillas in microwave for 15 seconds.", "Whisk sour cream with lime juice. Layer tortillas with lettuce, sizzling prawns, and lime crema."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "10-Minute Sticky Korean Honey-Soy Steak Sliders",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Flash-sear thin steak strips in sweet soy, garlic, and honey. Stuff into toasted soft brioche slider buns with melted cheddar. Pure street-food luxury in 10 minutes flat.",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 13g Fats",
    ingredients: ["300g Lean rump steak (sliced into thin strips)", "4 Mini brioche slider buns or soft rolls", "3 tbsp Soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "4 Slices light cheddar or burger cheese"],
    steps: ["High-heat sear steak strips in oil spray 3 mins until caramelized.", "Add soy sauce, honey, garlic, and sesame oil, bubbling 1 min into a thick glossy glaze.", "Tuck sticky steak into toasted slider buns with a slice of cheese that melts instantly."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "12-Minute Crispy Bacon, Chicken & Ranch Flatbread Melts",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Warm Greek flatbreads spread with creamy light ranch or garlic mayo, loaded with shredded chicken, crispy bacon pieces, and melted mozzarella. Bakes into gooey perfection under the grill.",
    macros: "~520 kcal | 47g Protein | 45g Carbs | 14g Fats",
    ingredients: ["2 Greek flatbreads or folded naans", "250g Cooked chicken breast (shredded)", "3 Rashers lean back bacon (cooked and chopped)", "2 tbsp Light garlic mayonnaise or ranch dressing", "70g Light mozzarella (grated)"],
    steps: ["Spread light garlic mayo across flatbreads.", "Top evenly with shredded chicken breast, crispy bacon pieces, and a blanket of mozzarella.", "Grill on high 3-4 mins until cheese is bubbling, browned, and edges of flatbread are crispy."]
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
    title: "Slowcooker Smoky BBQ Pulled Pork Mac & Cheese",
    prepTime: "5 mins",
    cookTime: "7 hrs",
    hack: "Pork shoulder cooked in rich smoky BBQ sauce, shredded and layered on top of warm, velvety macaroni cheese. Ultimate Saturday-night comfort with Monday-night ease!",
    macros: "~530 kcal | 46g Protein | 52g Carbs | 14g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "5 tbsp Smoky BBQ sauce & 1 tbsp honey", "1 tsp Garlic puree & smoked paprika", "150g Macaroni pasta", "150ml Semi-skimmed milk & 1 tsp cornstarch", "60g Grated light cheddar"],
    steps: ["Rub pork with paprika and garlic, slow-cook with BBQ sauce and honey on LOW 7 hrs. Shred with two forks.", "Boil macaroni 8 mins. Whisk milk, cornstarch, and garlic in a pan until bubbling, stir in cheddar until melted.", "Stir pasta into cheese sauce and top bowls with heaps of hot BBQ pulled pork."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Beef Brisket French Dip Subs with Rich Jus",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Tender beef brisket braised in rich garlic beef broth and Worcestershire sauce. Piled into crusty baguettes with melted cheddar, served with the strained hot jus to dip!",
    macros: "~520 kcal | 47g Protein | 48g Carbs | 13g Fats",
    ingredients: ["500g Beef brisket or braising steak", "400ml Beef stock", "1 tbsp Worcestershire sauce & 1 tbsp tomato puree", "1 tsp Garlic puree & dried thyme", "2 Crusty French baguettes (halved)", "60g Grated light cheddar or mozzarella"],
    steps: ["Place brisket in slowcooker with beef stock, Worcestershire sauce, tomato puree, garlic, and thyme. Cook LOW 7-8 hrs.", "Shred tender beef. Split baguettes, stuff generously with beef, top with cheese, and grill 2 mins to melt.", "Ladle the strained cooking broth into small ramekins for dipping each crunchy sandwich bite!"]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Creamy Garlic & Parmesan Chicken with Rice",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Chicken thighs slow-cooked in savory broth and garlic, enriched with light cream cheese and parmesan into a silky, luscious sauce over rice. Zero onion chunks for partner!",
    macros: "~515 kcal | 46g Protein | 46g Carbs | 13g Fats",
    ingredients: ["500g Boneless skinless chicken thighs", "300ml Chicken stock", "1 tsp Garlic puree & Italian dried herbs", "70g Light cream cheese", "30g Grated parmesan", "200g Jasmine or basmati rice"],
    steps: ["Place chicken thighs, stock, garlic, and herbs in slowcooker. Cook LOW 5 hrs.", "Shred chicken lightly, stir in cream cheese and grated parmesan until the sauce turns creamy and velvety.", "Serve over warm jasmine or basmati rice with sweet peas or greens on the side."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Sticky Honey Garlic Chicken Wings & Wedges",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken wings or mini fillets slow-cooked in honey, soy, garlic, and tomato glaze. Finished under a blistering hot grill for 4 mins to get sticky, caramelized char marks!",
    macros: "~500 kcal | 45g Protein | 44g Carbs | 12g Fats",
    ingredients: ["600g Skinless chicken drumsticks or mini fillets", "3 tbsp Honey & 3 tbsp soy sauce", "2 tbsp Tomato ketchup", "1 tsp Garlic puree & 1 tsp sesame oil", "300g Oven chips or wedges"],
    steps: ["Whisk honey, soy sauce, ketchup, garlic, and sesame oil. Pour over chicken in slowcooker, cook LOW 4-5 hrs.", "Transfer chicken to a baking tray, brush with slowcooker juices, grill on high 4 mins until sticky and charred.", "Serve with crispy oven chips or wedges."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Loaded Crispy Salt & Pepper Chicken Rice Boxes",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Takeaway style! Panko-dusted chicken tenders tossed in Chinese five-spice, garlic, and crunchy sea salt over golden egg fried microwave rice with a pot of sweet chilli sauce.",
    macros: "~520 kcal | 46g Protein | 54g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (cut into thin strips)", "1 tbsp Cornstarch & 30g panko breadcrumbs", "1 tsp Chinese five-spice & coarse sea salt", "250g Pre-cooked microwave basmati rice", "2 Eggs (beaten)", "2 tbsp Sweet chilli sauce to dip"],
    steps: ["Coat chicken in cornstarch, five-spice, and panko. Oven bake or air-fry 14 mins at 200°C until super crispy.", "Scramble eggs in hot skillet 1 min, toss in rice pouch with splash of soy sauce 2 mins.", "Box up egg fried rice, top with hot crispy salt & pepper chicken, serve with sweet chilli dip."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "The Double Smash Bacon Cheeseburger & Seasoned Wedges",
    prepTime: "8 mins",
    cookTime: "10 mins",
    hack: "Two thin, crispy-crusted 5% beef patties smashed thin in a smoking hot pan, layered with melted cheddar, back bacon, and burger sauce in a toasted brioche bun!",
    macros: "~530 kcal | 48g Protein | 46g Carbs | 15g Fats",
    ingredients: ["350g 5% Fat beef mince", "2 Rashers lean back bacon (cooked)", "2 Soft brioche burger buns", "4 Slices light cheddar or burger cheese", "300g Potato wedges or chips", "2 tbsp Light burger sauce"],
    steps: ["Bake potato wedges at 200°C for 20 mins until crisp.", "Divide mince into 4 balls, smash super flat into hot dry skillet 2 mins per side, melt cheese on top.", "Assemble double patties into toasted brioche with bacon and burger sauce. Pure burger joint bliss!"]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Nando's-Style Peri-Peri Chicken Pittas & Peri Chips",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Butterflied chicken breasts marinated in mild lemon & herb peri-peri marinade, griddled with dark char marks, tucked into toasted pittas with garlic perinaise and oven chips.",
    macros: "~510 kcal | 47g Protein | 48g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (butterflied flat)", "2 tbsp Mild lemon & herb peri-peri sauce", "2 Greek flatbreads or large pitta breads", "2 tbsp Light mayonnaise mixed with 1 tsp peri-peri", "300g Oven chips", "Crispy shredded lettuce"],
    steps: ["Coat chicken in peri-peri marinade, grill on hot griddle pan 5 mins per side until charred and juicy.", "Bake chips tossed in smoked paprika at 200°C for 18 mins.", "Stuff warm pittas with grilled chicken, shredded lettuce, and peri-mayo, serve with peri-chips."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Crispy Firecracker Glazed Popcorn Chicken & Fried Rice",
    prepTime: "10 mins",
    cookTime: "14 mins",
    hack: "Bite-sized crispy chicken pieces tossed in sweet, sticky, mild firecracker glaze (honey + soy + ketchup + sweet chilli) over egg fried rice. Restaurant crunch without the grease!",
    macros: "~520 kcal | 46g Protein | 52g Carbs | 11g Fats",
    ingredients: ["350g Chicken breast (diced into bite-sized chunks)", "40g Panko breadcrumbs", "1 Egg (beaten)", "2 tbsp Sweet chilli sauce & 1 tbsp honey", "1 tbsp Soy sauce & 1 tbsp tomato ketchup", "250g Pre-cooked microwave basmati rice"],
    steps: ["Dip chicken chunks in beaten egg, roll in panko, bake at 200°C for 14 mins until golden.", "Warm sweet chilli sauce, honey, soy, and ketchup in a pan for 1 min until glossy.", "Toss crunchy chicken in sauce and serve immediately over warm rice with sweetcorn."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Philly Cheesesteak Loaded Potato Wedges",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Lean steak strips pan-fried with garlic and Worcestershire sauce, piled on top of piping hot crispy potato wedges and smothered with bubbling melted mozzarella and cheddar.",
    macros: "~525 kcal | 46g Protein | 48g Carbs | 15g Fats",
    ingredients: ["300g Lean rump steak (sliced thin)", "350g Potato wedges or chips", "1 tbsp Worcestershire sauce & 1 tsp garlic puree", "60g Light mozzarella (grated)", "30g Grated light cheddar", "1 Bell pepper (sliced, on side for Dan)"],
    steps: ["Bake wedges at 200°C for 22 mins until deeply golden and crispy.", "Flash-fry steak strips in skillet 3 mins with garlic puree and Worcestershire sauce.", "Top hot wedges with steak (and peppers for Dan), cover with cheese, grill 2 mins until bubbly."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Cajun Chicken & Bacon Penne",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Tender chicken and smoked bacon simmered with penne in seasoned chicken stock and milk. Swirl in light cream cheese and mild Cajun spice for a velvety pasta that's pure comfort!",
    macros: "~525 kcal | 47g Protein | 50g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "3 Rashers lean back bacon (chopped)", "140g Penne pasta", "1 tsp Mild Cajun seasoning & 1 tsp garlic puree", "300ml Chicken stock & 150ml semi-skimmed milk", "70g Light cream cheese"],
    steps: ["Pan-fry chicken, bacon, and Cajun seasoning in a deep skillet 4 mins until lightly browned.", "Add dry penne, stock, and milk. Simmer 10 mins until pasta is tender and liquid has reduced.", "Stir in cream cheese until thick, glossy, and creamy. Partner-approved with zero chopped onions!"]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Cheesy Mexican Beef Taco Rice Skillet",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "5% beef mince browned with mild taco spices, pre-cooked rice, and sweetcorn, topped with a thick blanket of melted cheddar straight in the skillet. Scoop straight from pan!",
    macros: "~520 kcal | 45g Protein | 48g Carbs | 14g Fats",
    ingredients: ["350g 5% Fat beef mince", "1 tbsp Mild fajita/taco seasoning", "200g Long grain rice (pre-cooked or microwave pouch)", "1 Can (200g) sweetcorn (drained)", "70g Grated light cheddar", "2 tbsp Sour cream & mild salsa to serve"],
    steps: ["Brown beef mince in skillet with taco seasoning 5 mins.", "Stir in warm rice, sweetcorn, and 2 tbsp water; heat 2 mins.", "Cover with grated cheddar, put lid on pan for 2 mins until cheese is completely melted. Scoop straight into bowls!"]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Garlic Butter Steak Bites with Crispy Potatoes",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Cubed baby potatoes crisped in the pan in olive oil, then juicy steak cubes flash-seared in garlic herb butter for 3 mins. Simple, high protein, and unbelievably satisfying.",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 15g Fats",
    ingredients: ["350g Lean rump steak (cut into bite-sized cubes)", "400g Baby potatoes (cubed small)", "1 tbsp Butter & 1 tbsp olive oil", "1 tsp Garlic puree & dried rosemary", "150g Green beans or sweet peas"],
    steps: ["Fry cubed potatoes in olive oil and butter with rosemary 12 mins until crispy and tender; push to side of pan.", "Crank heat to high, add steak cubes and garlic puree, sear 2-3 mins until browned outside and juicy inside.", "Toss steak and potatoes together in pan garlic butter, serve with steamed green beans."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Honey Soy Glazed Salmon & Jasmine Rice",
    prepTime: "3 mins",
    cookTime: "12 mins",
    hack: "Salmon fillets pan-seared with sweet honey, soy sauce, garlic, and tenderstem broccoli. Clean, sweet, rich in omega-3, and done in 12 mins flat.",
    macros: "~500 kcal | 42g Protein | 44g Carbs | 15g Fats",
    ingredients: ["2 Salmon fillets", "250g Pre-cooked microwave basmati rice", "2 tbsp Honey & 2 tbsp soy sauce", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Tenderstem broccoli or asparagus"],
    steps: ["Sear salmon fillets 4 mins skin-down with broccoli spears alongside in the pan.", "Flip salmon, pour in whisked honey, soy, garlic, and sesame oil.", "Baste salmon in bubbling glaze 2 mins. Serve over warm basmati rice."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Smoky Sausage, Sweet Potato & Cheddar Hash",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Sliced lean sausages and cubed sweet potatoes pan-fried with smoked paprika, covered with melted cheddar. Top with a fried egg for ultimate hearty diner comfort.",
    macros: "~515 kcal | 38g Protein | 46g Carbs | 16g Fats",
    ingredients: ["6 Lean pork sausages (sliced into rounds)", "350g Sweet potato (diced small)", "1 tsp Smoked paprika & 1 tsp garlic puree", "60g Grated light cheddar", "2 Eggs (fried on top, optional)"],
    steps: ["Fry sliced sausages 4 mins until lightly browned.", "Add diced sweet potatoes, paprika, garlic, and 3 tbsp water; cover pan 8 mins until tender.", "Uncover, scatter cheddar on top to melt, and slide onto plates."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy BBQ Chicken & Melted Cheddar Quesadilla Wedges",
    prepTime: "8 mins",
    cookTime: "12 mins",
    hack: "Shredded chicken breast tossed in sweet smoky BBQ sauce, sandwiched in large flour tortillas with melted cheddar and baked super crisp in the oven. Cut into triangles!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Cooked chicken breast (shredded)", "4 Large flour tortilla wraps", "3 tbsp Smoky BBQ sauce", "80g Grated light cheddar", "Sour cream to dip"],
    steps: ["Mix shredded chicken with smoky BBQ sauce.", "Fold chicken and grated cheddar inside tortillas, place on baking tray sprayed with oil.", "Bake at 200°C for 10-12 mins until golden and crunchy. Slice into wedges for an easy family dinner."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Baked Cheesy Italian Meatball Pasta Bake",
    prepTime: "8 mins",
    cookTime: "18 mins",
    hack: "Plump beef meatballs simmered in smooth marinara passata, tossed with penne and smothered in a bubbling mozzarella-cheddar crust. Zero visible onion bits, 100% comfort.",
    macros: "~525 kcal | 46g Protein | 50g Carbs | 14g Fats",
    ingredients: ["10 Lean cooked beef meatballs (or 300g lean beef mince rolled into balls)", "150g Penne pasta", "300g Smooth tomato passata", "1 tsp Garlic puree & Italian dried herbs", "70g Light mozzarella (grated)"],
    steps: ["Boil penne pasta 9 mins, drain.", "Simmer meatballs in smooth passata with garlic and Italian herbs 5 mins.", "Toss pasta and saucy meatballs in a baking dish, cover with mozzarella, and bake at 200°C for 12 mins until golden."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Crispy Parmesan-Crusted Chicken Cutlets with Wedges",
    prepTime: "8 mins",
    cookTime: "18 mins",
    hack: "Chicken cutlets pressed into grated parmesan and crunchy panko breadcrumbs, baked extra crisp and served with oven wedges and garlic mayo. Always a crowd-pleaser.",
    macros: "~510 kcal | 48g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (sliced into thin cutlets)", "35g Panko breadcrumbs", "25g Grated parmesan", "1 Egg (beaten)", "350g Potato wedges or chips", "2 tbsp Light mayonnaise"],
    steps: ["Dip chicken cutlets in beaten egg, coat firmly in parmesan and panko mixture.", "Place on baking tray with wedges at 200°C for 18 mins until deeply golden and crunchy.", "Serve with light garlic mayo dip and sweetcorn or peas."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Classic British Shepherd's Pie with Golden Cheddar Mash",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "5% lean beef mince in a rich, smooth Worcestershire gravy under fluffy mashed potatoes with a browned, bubbly cheddar topping. Blitz gravy smooth for picky partner!",
    macros: "~510 kcal | 45g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with splash of milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce", "40g Grated light cheddar (for top)", "50g Frozen sweetcorn or peas"],
    steps: ["Brown beef mince in skillet 5 mins. Stir in tomato puree, Worcestershire sauce, and stock. Simmer 5 mins.", "Transfer beef mixture to an oven baking dish, spread warm mashed potatoes over top.", "Sprinkle cheddar over mash, bake at 200°C for 15 mins until golden and bubbling."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "French Bread Cheesy Bacon & Chicken Pizza Boats",
    prepTime: "5 mins",
    cookTime: "10 mins",
    hack: "Crusty baguette halved lengthwise, loaded with smooth marinara sauce, shredded chicken, crispy bacon pieces, and melted mozzarella. Bakes into crunchy pizza boats in 10 mins!",
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
