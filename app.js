/* ==========================================================================
   DadRunner Hub - JavaScript v5
   20 Fresh Recipes + Shopping List Builder + All Existing Features
   ========================================================================== */

// 8-Week Smart Running Plan Data Structure
const runningPlanData = [
  {
    week: 1,
    title: "Week 1: Base Building & Easy Rhythm",
    runs: [
      { id: "w1r1", day: "Tuesday", title: "Easy Consolidation Run", desc: "5.0 km @ Easy Zone 2 (7:30 - 8:00/km). Focus on relaxed breathing." },
      { id: "w1r2", day: "Thursday", title: "Pace Intervals", desc: "10m Warmup + 5x (2m @ 6:15/km Pace / 1m Walk) + 5m Cooldown." },
      { id: "w1r3", day: "Saturday/Sunday", title: "Aerobic Long Run", desc: "6.0 km @ Easy Steady Pace. Keep HR low." }
    ]
  },
  {
    week: 2,
    title: "Week 2: Volume Maintenance",
    runs: [
      { id: "w2r1", day: "Tuesday", title: "Easy Recovery Run", desc: "5.0 km @ Easy Zone 2 Pace. Great after 07:00 dog walk." },
      { id: "w2r2", day: "Thursday", title: "Tempo Intervals", desc: "10m Warmup + 3x (4m @ 6:20/km Tempo / 90s Walk) + Cooldown." },
      { id: "w2r3", day: "Saturday/Sunday", title: "Weekend Endurance Run", desc: "6.5 km @ Steady Aerobic Pace." }
    ]
  },
  {
    week: 3,
    title: "Week 3: Stepping Up Endurance",
    runs: [
      { id: "w3r1", day: "Tuesday", title: "Easy Zone 2 Run", desc: "5.5 km @ Easy Pace (7:30 - 7:50/km)." },
      { id: "w3r2", day: "Thursday", title: "Fartlek Play Run", desc: "35 mins total: Surge for 1 min every 4 mins of easy running." },
      { id: "w3r3", day: "Saturday/Sunday", title: "Long Run Progression", desc: "7.5 km @ Easy Pace. Fuel with water/toast or gel." }
    ]
  },
  {
    week: 4,
    title: "Week 4: Recovery & Deload Week",
    runs: [
      { id: "w4r1", day: "Tuesday", title: "Light Flush Run", desc: "4.5 km @ Super Easy Recovery Pace." },
      { id: "w4r2", day: "Thursday", title: "Strides & Form", desc: "4.0 km total with 5x 100m smooth accelerations." },
      { id: "w4r3", day: "Saturday/Sunday", title: "Deload Long Run", desc: "5.5 km @ Relaxed Pace. Reset for next block." }
    ]
  },
  {
    week: 5,
    title: "Week 5: Endurance Base & Distance Build",
    runs: [
      { id: "w5r1", day: "Tuesday", title: "Easy Base Run", desc: "5.0 km @ Zone 2 Pace. Logged 23/09 (32:36 @ 6:31/km)." },
      { id: "w5r2", day: "Thursday", title: "Aerobic Steady Run", desc: "5.5 km @ Conversational Pace. Logged 29/09 (39:13 @ 7:07/km)." },
      { id: "w5r3", day: "Saturday/Sunday", title: "Weekend Long Run Milestone", desc: "7.5 km @ Steady Aerobic Pace. Keep HR low and focus on smooth distance." }
    ]
  },
  {
    week: 6,
    title: "Week 6: Aerobic Volume & Distance Extension",
    runs: [
      { id: "w6r1", day: "Tuesday", title: "Aerobic Flush Run", desc: "5.5 km @ Easy Zone 2 Pace (7:30 - 7:50/km)." },
      { id: "w6r2", day: "Thursday", title: "Aerobic Tempo Blocks", desc: "6.0 km Total: 2x 2.0 km @ Steady Aerobic Tempo with 2m walk recovery." },
      { id: "w6r3", day: "Saturday/Sunday", title: "Peak Long Run #1", desc: "8.5 km @ Conversational Pace. Hydrate well before & after!" }
    ]
  },
  {
    week: 7,
    title: "Week 7: Peak Endurance Block",
    runs: [
      { id: "w7r1", day: "Tuesday", title: "Easy Recovery Run", desc: "5.5 km @ Relaxed Zone 2 Pace." },
      { id: "w7r2", day: "Thursday", title: "Extended Aerobic Steady Run", desc: "6.5 km @ Continuous Steady Effort." },
      { id: "w7r3", day: "Saturday/Sunday", title: "Peak Long Run #2", desc: "9.5 km @ Smooth Conversational Pace. Build leg stamina!" }
    ]
  },
  {
    week: 8,
    title: "Week 8: 10k Distance Taper & Milestone",
    runs: [
      { id: "w8r1", day: "Tuesday", title: "Taper Flush Run", desc: "4.5 km Easy Pace to stay loose." },
      { id: "w8r2", day: "Thursday", title: "Easy Leg Opener", desc: "3.5 km Easy + light form drills." },
      { id: "w8r3", day: "Saturday/Sunday", title: "🏆 Milestone 10k Endurance Run", desc: "10.0 km Continuous Fun Run! Target sub-65 mins, focus on strong endurance finishing finish!" }
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
// FRESH 20 RECIPES — All new, none from the previous batch
// ============================================================
const familyRecipesData = [

  // --- SLOWCOOKER (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Mexican Beef Barbacoa Bowls",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Beef shoulder slow-cooked with lime, garlic & mild chipotle spices until falling apart. Serve over rice with sour cream and salsa on the side so partner can build a plain beef & rice bowl!",
    macros: "~520 kcal | 48g Protein | 46g Carbs | 14g Fats",
    ingredients: ["500g Beef braising steak or shoulder", "1 Can (400g) chopped tomatoes", "Juice of 1 Lime & 1 tsp garlic puree", "1 tsp Cumin & 1 tsp mild taco/fajita seasoning", "200g Basmati or long grain rice", "Sour cream, mild salsa & grated cheddar to serve"],
    steps: ["Place beef in slowcooker. Mix tomatoes, lime juice, garlic, cumin and taco seasoning, pour over.", "Cook LOW 7-8 hrs until beef is super tender. Shred beef with two forks.", "Serve over warm rice with sour cream, salsa and grated cheese on the side."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Honey & Mustard Pork Tenderloin",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Lean pork tenderloin slow cooked in honey, wholegrain mustard and apple juice. Melt-in-your-mouth pork served over creamy mash — partner gets gravy poured on top!",
    macros: "~490 kcal | 46g Protein | 44g Carbs | 11g Fats",
    ingredients: ["500g Pork tenderloin or shoulder", "3 tbsp Honey", "2 tbsp Wholegrain or Dijon mustard", "150ml Apple juice or chicken stock", "500g Potatoes (for mash)", "1 tsp Garlic powder & dried thyme"],
    steps: ["Add pork, honey, mustard, apple juice, garlic and thyme to slowcooker.", "Cook LOW 5-6 hrs until tender. Boil potatoes and mash with milk.", "Slice pork, thicken slowcooker juices with cornstarch to make gravy, serve over mash."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Beef Shin Ragu with Tagliatelle",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Beef shin melts into a rich Italian tomato sauce. Blitz the tomato sauce smooth before adding the shredded beef — zero onion chunks for partner to complain about!",
    macros: "~530 kcal | 47g Protein | 52g Carbs | 13g Fats",
    ingredients: ["500g Beef shin or braising steak", "1 Can (400g) passata & 2 tbsp tomato puree", "150ml Beef stock", "1 tsp Garlic puree & dried oregano", "200g Tagliatelle or pappardelle pasta", "Grated parmesan to serve"],
    steps: ["Add beef, passata, stock, tomato puree, garlic and oregano to slowcooker.", "Cook LOW 7-8 hrs until beef is falling apart. Shred beef with forks into the sauce.", "Boil pasta, toss with ragu, serve topped with parmesan."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Creamy Tuscan Chicken Thighs",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Boneless chicken thighs cooked in a rich sun-dried tomato and garlic cream sauce. Partner gets tender chicken over mash or pasta with sauce blended smooth!",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 14g Fats",
    ingredients: ["600g Boneless skinless chicken thighs", "60g Sun-dried tomatoes (chopped)", "200ml Chicken stock", "60g Light cream cheese", "1 tsp Garlic puree & dried oregano", "500g Baby potatoes or pasta to serve"],
    steps: ["Add chicken, sun-dried tomatoes, stock, garlic and oregano to slowcooker.", "Cook LOW 5 hrs. Stir in cream cheese 15 mins before serving to thicken.", "Serve chicken and sauce over boiled potatoes or pasta."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Mild Beef & Bean Chilli",
    prepTime: "10 mins",
    cookTime: "6 hrs",
    hack: "Lean beef mince cooked low and slow with sweetcorn, kidney beans and a square of dark chocolate for rich gloss without heat. Partner can skip beans easily!",
    macros: "~520 kcal | 47g Protein | 48g Carbs | 12g Fats",
    ingredients: ["500g 5% Fat beef mince", "1 Can (400g) kidney beans & 1 small can sweetcorn", "1 Can chopped tomatoes & 2 tbsp tomato puree", "1 tbsp Mild chilli powder or taco seasoning", "10g Dark chocolate (70%+)", "200g Long grain rice to serve"],
    steps: ["Brown beef mince in pan 4 mins, transfer to slowcooker.", "Add tomatoes, tomato puree, kidney beans, sweetcorn, spices and chocolate.", "Cook LOW 6 hrs. Serve over fluffy rice with a dollop of Greek yogurt or sour cream."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Crispy Chicken & Cheese Quesadillas",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Fold seasoned cooked chicken and grated cheddar inside tortillas, pan-fry until golden crispy on the outside and melted inside. Cut into triangles for instant crowd-pleaser!",
    macros: "~520 kcal | 46g Protein | 48g Carbs | 14g Fats",
    ingredients: ["300g Cooked chicken breast (shredded)", "4 Large flour tortilla wraps", "80g Grated light cheddar", "1 tbsp Mild salsa", "2 tbsp 0% Greek yogurt or sour cream"],
    steps: ["Spread chicken and grated cheese over half of each tortilla, fold over to seal.", "Dry fry in a hot non-stick pan 3 mins per side until golden brown and cheese is melted.", "Slice into wedges and serve with salsa and Greek yogurt for dipping."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Sweet & Sour Crispy Chicken Rice Bowls",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Diced chicken tossed in cornstarch, fried crispy and coated in a 3-ingredient sweet & sour glaze (pineapple juice + ketchup + soy). Tastes like takeaway night!",
    macros: "~510 kcal | 44g Protein | 56g Carbs | 11g Fats",
    ingredients: ["300g Chicken breast (diced)", "1 tbsp Cornstarch", "1 Small can (220g) pineapple chunks in juice", "2 tbsp Tomato ketchup & 2 tbsp soy sauce", "150g Jasmine or basmati rice", "1 Red pepper (sliced, optional)"],
    steps: ["Toss chicken in cornstarch and fry in hot pan 6 mins until crispy.", "Mix pineapple juice, ketchup and soy sauce. Pour into pan with pineapple chunks and pepper, simmer 3 mins until glossy.", "Serve crispy sweet & sour chicken over warm rice."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Smoky BBQ Pulled Chicken Loaded Fries",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Oven chips topped with shredded chicken in sweet BBQ sauce and melted cheddar cheese. Serve salad/sauces on the side so partner can build plain cheesy chips!",
    macros: "~530 kcal | 45g Protein | 54g Carbs | 14g Fats",
    ingredients: ["300g Oven chips or wedges", "250g Cooked chicken breast (shredded)", "3 tbsp Smoky BBQ sauce", "60g Light cheddar (grated)", "2 tbsp Sour cream or light mayo"],
    steps: ["Bake chips in oven at 200°C for 18-20 mins until crispy.", "Toss shredded chicken with BBQ sauce in a small pan until hot.", "Top hot chips with BBQ chicken and grated cheese, grill 2 mins until bubbling."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Greek Souvlaki Chicken Gyros Wraps",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Chicken breasts marinated in lemon, oregano and garlic, grilled and served in warm flatbreads with tzatziki. Fresh, clean takeaway vibes!",
    macros: "~490 kcal | 44g Protein | 46g Carbs | 12g Fats",
    ingredients: ["300g Chicken breast (sliced)", "Juice of 1 Lemon & 1 tsp dried oregano", "1 tsp Garlic puree", "2 Greek pita or flatbreads", "Tzatziki (Greek yogurt + grated cucumber + garlic)", "Sliced tomatoes & red onion"],
    steps: ["Marinate chicken in lemon juice, oregano and garlic 5 mins. Pan-fry 6 mins until golden.", "Warm flatbreads in pan.", "Assemble gyros: spread tzatziki, fill with chicken, tomato and onion."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Crispy Teriyaki Beef & Broccoli Rice",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Thin strips of steak cooked fast in sweet teriyaki glaze over jasmine rice. Broccoli florets served on your side of the plate so partner's rice remains clean!",
    macros: "~520 kcal | 45g Protein | 52g Carbs | 12g Fats",
    ingredients: ["300g Rump steak (sliced thin)", "3 tbsp Teriyaki sauce & 1 tsp honey", "150g Jasmine rice", "1 Broccoli head (cut florets)", "Sesame seeds & spring onion to finish"],
    steps: ["Boil rice. Steam broccoli florets for 4 mins.", "High heat fry steak strips 2 mins. Add teriyaki sauce and honey, toss 1 min until sticky.", "Serve teriyaki beef over rice with broccoli on the side, garnish with sesame seeds."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Tomato & Sausage Gnocchi",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Fresh potato gnocchi cooks in 5 mins directly in the tomato-cream sausage sauce. Soft, pillowy comfort food in under 15 minutes!",
    macros: "~530 kcal | 38g Protein | 58g Carbs | 14g Fats",
    ingredients: ["6 Lean pork sausages (removed from skins, crumbled)", "400g Fresh potato gnocchi", "250ml Passata", "60g Light cream cheese", "1 tsp Garlic puree & dried basil", "30g Parmesan to serve"],
    steps: ["Fry crumbled sausage meat in skillet 5 mins until browned.", "Add passata, cream cheese, garlic and 100ml water. Stir until smooth sauce.", "Add gnocchi directly to pan, cover and simmer 5 mins until tender. Top with parmesan."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Creamy Garlic Mushroom Chicken",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Tender chicken breasts cooked in a rich garlic & cream cheese sauce. Partner gets smooth creamy chicken; you load up on sliced mushrooms!",
    macros: "~500 kcal | 46g Protein | 42g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (sliced into cutlets)", "150g Sliced chestnut mushrooms", "70g Light cream cheese", "150ml Low-salt chicken stock", "1 tsp Garlic puree & dried thyme", "400g Boiled baby potatoes to serve"],
    steps: ["Sear chicken cutlets 4 mins per side until golden, remove to plate.", "Fry mushrooms and garlic in same pan 3 mins. Add stock and cream cheese, stir until smooth sauce.", "Return chicken to pan 2 mins to heat through. Serve over baby potatoes."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Chorizo & Sweet Potato Taco Skillet",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Crispy diced sweet potatoes and smoky mild chorizo sauteed together, topped with baked eggs or cheese. Huge flavour from minimal ingredients!",
    macros: "~510 kcal | 38g Protein | 50g Carbs | 15g Fats",
    ingredients: ["60g Cooking chorizo (diced)", "350g Sweet potato (diced small)", "1 Can (400g) black beans (drained)", "1 tsp Smoked paprika & 1 tsp garlic puree", "2 Large eggs", "Warm tortillas or bread to serve"],
    steps: ["Fry diced chorizo 2 mins to release oil, add sweet potato cubes. Cover pan and cook 8 mins until tender.", "Stir in black beans, garlic and paprika. Make two wells, crack eggs into wells.", "Cover and cook 4 mins until egg whites are set. Serve directly from skillet."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Creamy Tuscan Sausage & Penne",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Pork or turkey sausages sliced into penne pasta in a smooth tomato-cream sauce. Blitz tomato sauce smooth if partner dislikes visible onions!",
    macros: "~530 kcal | 42g Protein | 56g Carbs | 14g Fats",
    ingredients: ["6 Lean pork or turkey sausages (sliced)", "140g Penne pasta", "200ml Passata & 200ml chicken stock", "60g Light cream cheese", "1 tsp Garlic puree & dried basil"],
    steps: ["Fry sliced sausages in skillet 5 mins until browned.", "Add penne, passata, stock and garlic. Simmer covered 10-12 mins stirring occasionally.", "Stir in cream cheese until rich creamy sauce forms. Season and serve."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Lemon Herb Chicken Thighs & Orzo",
    prepTime: "5 mins",
    cookTime: "18 mins",
    hack: "Orzo pasta cooks directly in chicken stock, lemon and herbs underneath pan-seared chicken thighs. Absorbs all the rich juices!",
    macros: "~520 kcal | 46g Protein | 50g Carbs | 13g Fats",
    ingredients: ["4 Boneless chicken thighs", "140g Orzo pasta", "350ml Chicken stock", "Juice of 1 Lemon", "1 tsp Garlic puree & dried oregano", "50g Feta cheese (crumbled on top)"],
    steps: ["Sear chicken thighs skin-side down 5 mins, flip and sear 3 mins. Remove.", "Add orzo, chicken stock, lemon juice, garlic and oregano to pan. Place chicken back on top.", "Cover and simmer 12 mins until orzo is cooked and stock absorbed. Sprinkle feta."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Crispy Pesto Chicken & Halloumi Traybake",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Chicken breasts brushed with green pesto, roasted with baby potatoes and halloumi slices. Simple Mediterranean sheet pan dinner!",
    macros: "~530 kcal | 46g Protein | 42g Carbs | 16g Fats",
    ingredients: ["2 Chicken breasts", "2 tbsp Green basil pesto", "400g Baby potatoes (halved)", "100g Halloumi cheese (sliced)", "1 tbsp Olive oil & cherry tomatoes"],
    steps: ["Toss baby potatoes in olive oil, season, roast at 200°C for 15 mins.", "Spread pesto over chicken breasts. Add chicken, halloumi and tomatoes to tray.", "Roast 12-15 mins until chicken is cooked through and halloumi is golden."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Loaded Shepherd's Pie Potato Jackets",
    prepTime: "10 mins",
    cookTime: "30 mins",
    hack: "Baked potato jackets stuffed with rich minced lamb/beef in savory gravy, topped with extra mash and cheddar. Ultimate British comfort meal!",
    macros: "~510 kcal | 43g Protein | 50g Carbs | 13g Fats",
    ingredients: ["2 Large baking potatoes", "250g Lean beef or lamb mince", "1 tbsp Tomato puree & 150ml beef stock", "1 tsp Worcestershire sauce", "50g Grated light cheddar", "Frozen peas (optional)"],
    steps: ["Microwave potatoes 8-10 mins until soft. Scoop out middle into bowl.", "Fry mince with tomato puree, stock and Worcestershire sauce 8 mins.", "Stuff potato skins with mince, top with scooped potato mash and cheddar, grill 4 mins."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Garlic Herb Salmon & Crispy Potato Traybake",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Salmon fillets roasted alongside golden cubed potatoes and asparagus/green beans. Zero fuss, 1 tray, fantastic clean nutrition!",
    macros: "~520 kcal | 42g Protein | 44g Carbs | 18g Fats",
    ingredients: ["2 Salmon fillets", "400g Baby potatoes (cubed)", "1 tbsp Olive oil & 1 tsp garlic puree", "Juice of 1 Lemon & 1 tsp dried parsley", "150g Green beans or asparagus"],
    steps: ["Toss cubed potatoes in olive oil, garlic and herbs. Roast at 200°C for 15 mins.", "Add salmon fillets and green beans to the tray, season salmon with lemon juice.", "Return to oven for 10-12 mins until salmon is flakey and potatoes are crispy."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Cheesy Steak & Pepper Fajita Skillet",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Rump steak strips flash-fried with peppers and fajita spices, topped with melted mozzarella. Serve with warm tortillas on the side!",
    macros: "~510 kcal | 46g Protein | 42g Carbs | 14g Fats",
    ingredients: ["300g Lean rump steak (sliced thin)", "1 Red pepper & 1 Yellow pepper (sliced)", "1 tbsp Fajita seasoning", "60g Light mozzarella (grated)", "4 Small soft tortillas"],
    steps: ["Sear steak strips in a super hot pan 2 mins, remove to plate.", "Fry peppers in same pan 4 mins with fajita seasoning until tender.", "Return steak to pan, top with mozzarella, cover with lid 1 min to melt cheese. Serve with warm tortillas."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "Baked Honey & Soy Chicken Thighs with Rice",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Chicken thighs baked in sweet honey, garlic & soy sauce until sticky and glazed. Serve over rice with steamed broccoli for you!",
    macros: "~510 kcal | 45g Protein | 50g Carbs | 12g Fats",
    ingredients: ["4 Boneless chicken thighs", "3 tbsp Soy sauce & 2 tbsp honey", "1 tsp Garlic puree & 1 tsp sesame oil", "200g Jasmine or basmati rice", "1 Broccoli head (florets)"],
    steps: ["Whisk soy, honey, garlic and sesame oil. Coat chicken thighs in baking dish.", "Bake at 200°C for 22-25 mins until chicken is cooked and glaze is bubbling.", "Serve sticky chicken over warm rice with steamed broccoli."]
  }
];

// ============================================================
// APPLICATION STATE
// ============================================================
const defaultCompleted = {
  w1r1: true, w1r2: true, w1r3: true,
  w2r1: true, w2r2: true, w2r3: true,
  w3r1: true, w3r2: true, w3r3: true,
  w4r1: true, w4r2: true, w4r3: true,
  w5r1: true, w5r2: true
};
let completedRuns    = Object.assign({}, defaultCompleted, JSON.parse(localStorage.getItem('dadrunner_runs')) || {});
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
}

function toggleRun(id) {
  if (completedRuns[id]) delete completedRuns[id];
  else completedRuns[id] = true;
  localStorage.setItem('dadrunner_runs', JSON.stringify(completedRuns));
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
