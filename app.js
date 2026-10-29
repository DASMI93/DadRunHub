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
    title: "10-Minute Sesame Garlic Steak Strips & Rice",
    prepTime: "3 mins",
    cookTime: "7 mins",
    hack: "Flash-fry thin rump steak strips in a smoking pan for 3 minutes, then toss in a 30-second garlic-soy glaze. Serve over microwaved basmati rice with tenderstem broccoli on the side!",
    macros: "~490 kcal | 45g Protein | 46g Carbs | 12g Fats",
    ingredients: ["300g Lean rump steak (sliced thin)", "250g Pre-cooked microwave basmati rice", "2 tbsp Soy sauce & 1 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "150g Tenderstem broccoli or green beans"],
    steps: ["Sear steak strips in a smoking hot pan with oil spray for 3 mins until browned.", "Steam tenderstem broccoli in microwave with splash of water for 3 mins.", "Pour soy sauce, honey, garlic and sesame oil into the steak pan for 1 min until glossy. Serve over warm basmati rice."]
  },
  {
    id: "sp2",
    category: "speedy",
    title: "12-Minute Mediterranean Lemon Herb Prawn Linguine",
    prepTime: "3 mins",
    cookTime: "9 mins",
    hack: "Raw king prawns cook in just 3 minutes! Toss into freshly boiled linguine with lemon juice, garlic, olive oil and grated parmesan. Incredibly light, fresh and restaurant-quality.",
    macros: "~480 kcal | 42g Protein | 54g Carbs | 10g Fats",
    ingredients: ["300g Raw peeled king prawns", "160g Quick-cook linguine or spaghetti", "1 tbsp Olive oil & juice of 1 Lemon", "1 tsp Garlic puree & 1 tsp dried parsley", "25g Grated parmesan", "Handful cherry tomatoes (halved, optional)"],
    steps: ["Boil linguine in salted water 8-9 mins until al dente.", "Heat olive oil in pan, add garlic and prawns, cook 3 mins until pink and cooked through. Add lemon juice and cherry tomatoes.", "Toss drained pasta directly into the prawn pan, stir in parmesan, and serve immediately."]
  },
  {
    id: "sp3",
    category: "speedy",
    title: "10-Minute Crispy Bacon & Egg Protein Noodle Bowl",
    prepTime: "2 mins",
    cookTime: "8 mins",
    hack: "Crispy smoked back bacon tossed into soft egg noodles with soy, topped with a fried egg. Soft yolk creates a natural rich sauce without heavy cream. Comfort in minutes!",
    macros: "~510 kcal | 42g Protein | 50g Carbs | 15g Fats",
    ingredients: ["4 Rashers lean smoked back bacon (chopped)", "2 Large eggs", "150g Quick medium egg noodles", "2 tbsp Soy sauce & 1 tsp sesame oil", "Handful baby spinach (wilted, optional on your side)"],
    steps: ["Fry chopped bacon in pan 4 mins until crispy.", "Drop noodles into boiling water for 3 mins, drain and toss into bacon pan with soy sauce and sesame oil.", "Fry two eggs in the pan 2-3 mins until whites are set and yolk is runny. Slide over noodles and serve."]
  },
  {
    id: "sp4",
    category: "speedy",
    title: "10-Minute Honey Mustard Chicken Cutlets & Mash",
    prepTime: "3 mins",
    cookTime: "7 mins",
    hack: "Thin chicken cutlets cook through in just 3 minutes per side. Whisk honey, mild mustard and a spoonful of light cream cheese in the pan for an instant velvety sauce over ready-mash!",
    macros: "~490 kcal | 46g Protein | 42g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (sliced horizontally into thin cutlets)", "400g Fresh ready-made potato mash (microwave 3 mins)", "2 tbsp Honey & 2 tbsp mild mustard", "40g Light cream cheese", "1 tsp Garlic puree & dried thyme"],
    steps: ["Sear thin chicken cutlets in a hot pan 3 mins per side until golden and cooked through.", "Turn heat to low, stir in honey, mustard, garlic and cream cheese into pan juices for 1 min until smooth.", "Microwave mash for 3 mins, spoon onto plates, top with tender chicken cutlets and spoon glaze over."]
  },
  {
    id: "sp5",
    category: "speedy",
    title: "12-Minute Smoky Turkey Taco Bowls with Crushed Crispy Nachos",
    prepTime: "2 mins",
    cookTime: "10 mins",
    hack: "Lean turkey mince browns in under 6 mins with taco seasoning and passata. Spoon over warm pouch rice, top with crushed salted tortilla chips and grated cheddar. Fast, crunchy & fun!",
    macros: "~500 kcal | 46g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g Turkey mince (lean)", "250g Pre-cooked pouch Mexican or long grain rice", "1 tbsp Mild taco seasoning", "150ml Passata & 100g sweetcorn (drained)", "50g Grated light cheddar", "30g Salted tortilla chips (crushed for crunch)"],
    steps: ["Brown turkey mince in skillet 5 mins until cooked. Drain any liquid.", "Stir in taco seasoning, passata and sweetcorn, simmer 3 mins until thick.", "Microwave rice pouch 90 secs, divide into bowls, ladle turkey chili over, scatter cheddar and crushed tortilla chips."]
  },

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Mexican Beef Barbacoa Bowls",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Beef shoulder slow-cooked with lime, garlic & mild chipotle spices until falling apart tender. Serve over rice with sour cream and mild salsa on the side so partner can build a plain beef & rice bowl!",
    macros: "~520 kcal | 48g Protein | 46g Carbs | 14g Fats",
    ingredients: ["500g Beef braising steak or shoulder", "1 Can (400g) chopped tomatoes", "Juice of 1 Lime & 1 tsp garlic puree", "1 tsp Cumin & 1 tsp mild taco seasoning", "200g Basmati or long grain rice", "Sour cream, mild salsa & grated cheddar to serve"],
    steps: ["Place beef in slowcooker. Mix tomatoes, lime juice, garlic, cumin and taco seasoning, pour over.", "Cook LOW 7-8 hrs until beef is super tender. Shred beef with two forks.", "Serve over warm rice with sour cream, salsa and grated cheese on the side."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Creamy French Garlic Chicken & Potatoes",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Boneless chicken thighs and potatoes cook together in savory broth. Stir in light cream cheese at the end for a velvety French bistro sauce with zero visible veg chunks!",
    macros: "~490 kcal | 46g Protein | 42g Carbs | 12g Fats",
    ingredients: ["600g Boneless skinless chicken thighs", "500g Baby potatoes (halved)", "150ml Low-salt chicken stock", "70g Light cream cheese", "2 tsp Mild Dijon mustard", "1 tsp Garlic puree & dried thyme"],
    steps: ["Place chicken thighs, halved potatoes, stock, mustard, garlic and thyme into slowcooker.", "Cook LOW 5-6 hrs until chicken and potatoes are tender.", "Stir in light cream cheese 15 mins before serving to create a rich, silky sauce. Serve immediately."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Rich Beef Steak & Gravy Stew",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Lean beef cubes slow-cooked in thick savory pub-style gravy. Mash or blend one ladle of gravy with a potato to thicken naturally without any lumpy flour. Tender beef melts in your mouth!",
    macros: "~500 kcal | 45g Protein | 44g Carbs | 12g Fats",
    ingredients: ["500g Lean diced stewing steak", "300ml Beef stock", "2 tbsp Tomato puree", "1 tbsp Worcestershire sauce", "450g Baby potatoes", "Crusty bread or mash to serve"],
    steps: ["Place beef, potatoes, tomato puree, Worcestershire sauce and beef stock into slowcooker. Season with pepper.", "Cook LOW 7-8 hrs until beef is fall-apart tender.", "Thicken gravy by crushing a couple of cooked potato cubes into the juices. Serve with crusty bread."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Smoky BBQ Pulled Pork Buns",
    prepTime: "5 mins",
    cookTime: "6 hrs",
    hack: "Lean pork shoulder simmers in sweet smoky BBQ sauce until tender enough to shred with two forks. Serve inside toasted brioche buns with melted cheese — partner gets zero visible onion or bits!",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 14g Fats",
    ingredients: ["500g Lean pork shoulder (fat trimmed)", "150ml Smoky BBQ sauce", "1 tbsp Apple cider vinegar or honey", "1 tsp Garlic puree & smoked paprika", "4 Soft brioche burger buns", "50g Grated light cheddar (for melting)"],
    steps: ["Rub pork with paprika and garlic. Place in slowcooker with BBQ sauce and apple cider vinegar.", "Cook LOW 6-7 hrs until completely tender. Shred with two forks directly in the sweet glaze.", "Load shredded pork into warm brioche buns, top with grated cheddar, and grill 1 min to melt."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Creamy Tomato & Basil Shredded Chicken",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Chicken breasts cook directly in seasoned passata. Shred with two forks, stir in cream cheese for a rich rose pink sauce, and toss with pasta. Smooth, creamy, 100% partner-approved comfort!",
    macros: "~510 kcal | 47g Protein | 48g Carbs | 12g Fats",
    ingredients: ["500g Chicken breast", "400ml Passata", "80g Light cream cheese", "1 tsp Garlic puree & dried basil", "200g Penne pasta or tagliatelle", "20g Grated parmesan to serve"],
    steps: ["Place chicken breasts, passata, garlic and dried basil into slowcooker. Season with salt and pepper.", "Cook LOW 5 hrs. Shred chicken with forks into the sauce.", "Stir in cream cheese until a velvety pink sauce forms. Toss through freshly boiled pasta and top with parmesan."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Double Smash Cheeseburger & Crispy Potato Bowls",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Seasoned lean beef mince flash-seared crispy in a hot pan, served over oven chips with burger sauce and melted cheese. All the takeaway burger satisfaction, 45g protein, and zero grease!",
    macros: "~530 kcal | 46g Protein | 50g Carbs | 14g Fats",
    ingredients: ["300g 5% Fat beef mince", "350g Crispy oven chips or seasoned potato wedges", "50g Grated light cheddar", "2 tbsp Light burger sauce (light mayo + ketchup)", "Shredded iceberg lettuce & sliced gherkins (optional)"],
    steps: ["Bake chips in oven at 200°C for 18 mins until crispy.", "High-heat sear beef mince in a smoking pan 5 mins until browned and crispy at edges. Season with salt and garlic powder.", "Layer chips into bowls, top with hot crispy beef, grated cheddar, shredded lettuce, and a drizzle of burger sauce."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Sweet Sticky Honey Sesame Crispy Chicken",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Crispy fried diced chicken tossed in a 3-minute honey-soy glaze. Coat partner's portion in just a light glaze, serve with plain jasmine rice. Beats Chinese takeaway every time!",
    macros: "~520 kcal | 45g Protein | 54g Carbs | 11g Fats",
    ingredients: ["300g Chicken breast (diced)", "1 tbsp Cornstarch", "3 tbsp Soy sauce & 2 tbsp honey", "1 tsp Sesame oil", "150g Jasmine rice", "1 tsp Sesame seeds & sliced spring onion to garnish"],
    steps: ["Toss diced chicken in cornstarch. Pan-fry in hot oil spray 6 mins until golden and crispy.", "In a bowl mix soy sauce, honey and sesame oil. Pour into hot pan and toss with chicken 1 min until glossy.", "Serve over fluffy jasmine rice, sprinkled with toasted sesame seeds and spring onion."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Greek Lemon Chicken & Halloumi Souvlaki Wraps",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Chicken breast strips marinated in lemon and oregano, pan-seared alongside squeaky golden halloumi. Rolled in warm flatbreads with tzatziki. Fresh, vibrant, and incredibly tasty!",
    macros: "~510 kcal | 45g Protein | 44g Carbs | 16g Fats",
    ingredients: ["300g Chicken breast (sliced into strips)", "80g Light halloumi cheese (sliced)", "Juice of 1 Lemon & 1 tsp dried oregano", "1 tsp Garlic puree", "2 Greek flatbreads or folded naans", "3 tbsp Tzatziki & sliced cucumber"],
    steps: ["Toss chicken strips in lemon juice, oregano and garlic. Pan-fry 5 mins until browned.", "Add halloumi slices to the same pan for 2 mins per side until golden.", "Warm flatbreads, spread with tzatziki, load with chicken and crispy halloumi, roll tightly."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Crispy Beef & Sweet Chilli Noodle Toss",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Thin steak strips tossed in cornstarch flash-fry in 3 mins until ultra crispy, then glazed in sweet chilli and soy. Serve noodles on the side so partner can have plain noodles if preferred!",
    macros: "~530 kcal | 44g Protein | 55g Carbs | 13g Fats",
    ingredients: ["250g Lean beef steak (sliced thin)", "1 tbsp Cornstarch", "3 tbsp Sweet chilli sauce", "2 tbsp Soy sauce & 1 tsp garlic puree", "150g Egg noodles", "1 Red pepper (sliced thin, kept on side for you)"],
    steps: ["Toss steak strips in cornstarch. Cook in smoking hot pan 3 mins until crispy. Remove to plate.", "Boil noodles 4 mins. In the pan, simmer sweet chilli, soy and garlic 1 min until sticky.", "Toss crispy beef into the glaze. Serve over noodles with stir-fried peppers on your side."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Stovetop Creamy Buffalo Chicken Mac & Cheese",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Ultra creamy stovetop mac & cheese made with light cream cheese, cheddar and shredded chicken. Drizzle Buffalo sauce on your portion — partner enjoys pure comforting cheesy pasta!",
    macros: "~530 kcal | 46g Protein | 52g Carbs | 14g Fats",
    ingredients: ["250g Cooked chicken breast (shredded)", "150g Macaroni pasta", "100ml Semi-skimmed milk", "70g Light cream cheese", "50g Grated light cheddar", "2 tbsp Mild Buffalo hot sauce (kept on side for you)"],
    steps: ["Boil macaroni pasta in salted water 8 mins until al dente, drain.", "Over low heat in the pasta pot, stir together milk, cream cheese and grated cheddar until smooth sauce forms.", "Fold in cooked macaroni and shredded chicken. Spoon into bowls and drizzle yours with Buffalo sauce."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Sun-Dried Tomato Chicken & Gnocchi",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Pillowy potato gnocchi cooks directly in the creamy tomato-garlic broth in 4 minutes. One skillet, zero boiling water to drain, and guaranteed restaurant-quality comfort!",
    macros: "~520 kcal | 45g Protein | 54g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "400g Fresh potato gnocchi", "200ml Chicken stock", "60g Light cream cheese", "50g Sun-dried tomatoes (chopped)", "1 tsp Garlic puree & Italian dried herbs"],
    steps: ["Sear diced chicken with oil spray in skillet 5 mins until golden.", "Add sun-dried tomatoes, garlic, Italian herbs, chicken stock and cream cheese. Stir until smooth.", "Add fresh gnocchi directly to pan. Cover and simmer 4 mins until gnocchi is tender and sauce is thick."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Spanish Chorizo & Chicken Rice Skillet",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Slicing chorizo into the pan releases smoky paprika oil that naturally flavours the chicken and rice without extra butter or oil. Everything cooks together under one lid!",
    macros: "~520 kcal | 45g Protein | 52g Carbs | 14g Fats",
    ingredients: ["2 Chicken breasts (diced)", "60g Cooking chorizo (sliced)", "150g Long grain rice (uncooked)", "350ml Chicken stock", "150ml Passata", "1 tsp Smoked paprika & garlic puree"],
    steps: ["Fry sliced chorizo in skillet 2 mins to release oil, add diced chicken and brown 3 mins.", "Stir in rice, smoked paprika, garlic, passata and chicken stock. Bring to boil.", "Cover with lid, turn heat to low and simmer 15 mins until rice is fluffy and liquid absorbed."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Creamy Lemon & Garlic Salmon Orzo",
    prepTime: "5 mins",
    cookTime: "16 mins",
    hack: "Pan-sear salmon fillets 4 mins, set on a plate while orzo simmers in lemon-garlic cream broth. Return salmon on top to finish steaming. Rich in omega-3 and pure decadence!",
    macros: "~530 kcal | 42g Protein | 48g Carbs | 17g Fats",
    ingredients: ["2 Salmon fillets", "140g Orzo pasta", "350ml Low-salt veg or chicken stock", "Juice of 1 Lemon", "60g Light cream cheese", "1 tsp Garlic puree & dried parsley"],
    steps: ["Sear salmon fillets in skillet 3 mins per side until golden, remove to plate.", "In same pan, add orzo, stock, lemon juice, garlic and dried herbs. Simmer covered 8 mins.", "Stir cream cheese into orzo until creamy. Nestle salmon back on top for 2 mins to warm through."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Sausage, Sweet Potato & Cheddar Hash",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Sweet potato cubes cook super fast when diced small and covered with a lid. Pork sausages and melted cheddar turn this into the ultimate hearty family hash!",
    macros: "~510 kcal | 38g Protein | 48g Carbs | 16g Fats",
    ingredients: ["6 Lean pork sausages (sliced into rounds)", "350g Sweet potato (diced small)", "1 tsp Smoked paprika & 1 tsp garlic puree", "50g Grated light cheddar", "2 Large eggs (cracked on top, optional)"],
    steps: ["Fry sausage rounds in skillet 4 mins until lightly browned.", "Toss in diced sweet potato, paprika and garlic. Add 2 tbsp water, cover with lid and cook 8 mins until tender.", "Uncover, scatter grated cheddar over top, crack eggs into wells if desired, cover 3 mins until cheese melts."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Creamy Mild Cajun Chicken & Penne",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Mild Cajun seasoning looks bold but light cream cheese transforms it into a smooth, silky orange sauce with zero spice burn. Partner will love every mouthful!",
    macros: "~530 kcal | 46g Protein | 55g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "140g Penne pasta", "1 tsp Mild Cajun seasoning", "80g Light cream cheese", "250ml Chicken stock", "100g Cherry tomatoes (halved)"],
    steps: ["Dust diced chicken in Cajun seasoning and sear in pan 5 mins until cooked.", "Boil penne pasta separately (or in same pan with stock).", "Stir cream cheese, stock and cherry tomatoes into the chicken pan to create sauce. Toss pasta in sauce and serve."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy Honey Mustard Chicken & Sweet Potato Wedges",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Everything bakes on one oven tray. Sweet honey and mild mustard glaze caramelizes onto the chicken thighs while sweet potato wedges turn golden and crispy. Zero faff!",
    macros: "~510 kcal | 46g Protein | 46g Carbs | 13g Fats",
    ingredients: ["4 Boneless chicken thighs", "350g Sweet potatoes (cut into wedges)", "2 tbsp Honey", "2 tbsp Mild mustard", "1 tbsp Olive oil", "1 tsp Garlic powder & smoked paprika"],
    steps: ["Toss sweet potato wedges in half the olive oil, garlic powder and paprika. Spread on large baking tray.", "Mix honey and mustard, brush over chicken thighs, place on same tray.", "Bake at 200°C for 25 mins until sweet potatoes are tender and chicken is glazed and cooked through."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Italian Mozzarella & Pesto Stuffed Chicken Breasts",
    prepTime: "10 mins",
    cookTime: "22 mins",
    hack: "Slice a pocket into chicken breasts, stuff with green basil pesto and mozzarella, and bake. The melted cheese keeps the chicken extraordinarily moist and tender!",
    macros: "~520 kcal | 47g Protein | 42g Carbs | 15g Fats",
    ingredients: ["2 Chicken breasts", "60g Light mozzarella (sliced)", "2 tbsp Green basil pesto", "400g Baby potatoes (halved)", "1 tbsp Olive oil & cherry tomatoes"],
    steps: ["Cut a horizontal pocket into each chicken breast. Spoon 1 tbsp pesto inside and tuck in mozzarella slices.", "Place on baking tray alongside halved baby potatoes tossed in olive oil.", "Bake at 200°C for 22 mins until potatoes are crispy and chicken is golden and bubbling with cheese."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Classic British Cottage Pie with Cheddar Mash",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "Rich lean beef mince in a thick Worcestershire gravy topped with creamy mash and melted cheddar. Blitz gravy smooth before baking — zero visible onion chunks for partner!",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g 5% Fat beef mince", "500g Potatoes (mashed with milk)", "1 tbsp Tomato puree & 200ml beef stock", "1 tbsp Worcestershire sauce", "40g Grated light cheddar (for top)", "50g Frozen sweetcorn (optional)"],
    steps: ["Brown beef mince in pan 5 mins, add tomato puree, Worcestershire sauce and beef stock. Simmer 5 mins.", "Transfer beef mixture to an oven dish. Spread warm fluffy mashed potatoes over the top.", "Scatter grated cheddar over mash. Grill or bake at 200°C for 15 mins until bubbling and golden."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Garlic Herb Baked Cod with Crispy Parmesan Crust",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "White fish fillets topped with lemon, garlic, parmesan and crunchy panko breadcrumbs. Bakes in only 15 mins. Delivers the crunch of fish & chips with clean, lean nutrition!",
    macros: "~490 kcal | 42g Protein | 46g Carbs | 12g Fats",
    ingredients: ["2 Thick cod or haddock fillets", "30g Panko breadcrumbs", "20g Grated parmesan", "Juice of 1 Lemon & 1 tsp garlic puree", "400g Baby potatoes (cubed)", "150g Green beans or peas"],
    steps: ["Roast cubed potatoes tossed in olive oil spray at 200°C for 15 mins.", "Mix panko, parmesan, garlic puree and lemon juice. Press crust onto cod fillets.", "Place fish on tray with potatoes and green beans. Bake 12-15 mins until fish flakes easily and topping is golden."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "Crispy BBQ Chicken Flatbread Pizzas",
    prepTime: "5 mins",
    cookTime: "8 mins",
    hack: "Greek flatbreads or folded naans make the ultimate quick, crispy pizza crust! Top with smoky BBQ sauce, shredded chicken and mozzarella. Melts in under 10 minutes!",
    macros: "~520 kcal | 44g Protein | 52g Carbs | 13g Fats",
    ingredients: ["2 Greek flatbreads or folded naans", "200g Cooked chicken breast (shredded)", "3 tbsp Smoky BBQ sauce", "60g Light mozzarella (grated)", "Sliced red onion or sweetcorn (optional, easy to leave on your half)"],
    steps: ["Place flatbreads on a baking tray. Spread smoky BBQ sauce evenly over the bases.", "Scatter shredded chicken and top generously with grated mozzarella.", "Bake at 220°C for 8 mins until cheese is bubbling, golden and base is crispy. Slice into slices."]
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
