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
    title: "Week 5: Speed & Distance Build",
    runs: [
      { id: "w5r1", day: "Tuesday", title: "Easy Base Run", desc: "5.5 km @ Zone 2 Pace." },
      { id: "w5r2", day: "Thursday", title: "Interval Power", desc: "10m Warmup + 6x (3m @ 6:00/km / 90s Walk) + Cooldown." },
      { id: "w5r3", day: "Saturday/Sunday", title: "Long Run Milestone", desc: "8.5 km @ Conversational Pace." }
    ]
  },
  {
    week: 6,
    title: "Week 6: Sub-30 5k Speed Prep",
    runs: [
      { id: "w6r1", day: "Tuesday", title: "Easy Aerobic Run", desc: "6.0 km @ Easy Pace." },
      { id: "w6r2", day: "Thursday", title: "Threshold Test Run", desc: "5.0 km Total: 3.0 km Continuous @ Sub-30 5k Pace (5:55/km)." },
      { id: "w6r3", day: "Saturday/Sunday", title: "Peak Long Run #1", desc: "9.5 km @ Easy Steady Pace." }
    ]
  },
  {
    week: 7,
    title: "Week 7: Peak Endurance Block",
    runs: [
      { id: "w7r1", day: "Tuesday", title: "Easy Recovery Run", desc: "5.0 km @ Zone 2 Pace." },
      { id: "w7r2", day: "Thursday", title: "Sharpening Intervals", desc: "10m Warmup + 4x (4m @ 6:00/km Pace / 2m Walk) + Cooldown." },
      { id: "w7r3", day: "Saturday/Sunday", title: "Peak Long Run #2", desc: "10.5 km @ Smooth Effort." }
    ]
  },
  {
    week: 8,
    title: "Week 8: Sub-60 10k Celebration",
    runs: [
      { id: "w8r1", day: "Tuesday", title: "Easy Taper Run", desc: "4.0 km Easy Pace." },
      { id: "w8r2", day: "Thursday", title: "Leg Opener", desc: "3.5 km Easy + 3 Strides." },
      { id: "w8r3", day: "Saturday/Sunday", title: "🏆 Milestone 10k Run", desc: "10.0 km Time Trial / Fun Run! Target sub-60 mins!" }
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
    title: "Slowcooker Honey Mustard Chicken Thighs",
    prepTime: "5 mins",
    cookTime: "5 hrs",
    hack: "Boneless chicken thighs cook in a sweet honey-mustard sauce until fall-apart tender. Serve over mash — partner can skip the Dijon if too strong, use mild American mustard instead!",
    macros: "~500 kcal | 46g Protein | 42g Carbs | 14g Fats",
    ingredients: ["600g Boneless skinless chicken thighs", "3 tbsp Honey", "2 tbsp Dijon or mild mustard", "200ml Low-salt chicken stock", "500g Baby potatoes (halved)", "1 tsp Garlic powder & dried thyme"]
    ,
    steps: ["Add all ingredients to slowcooker. Stir sauce to coat chicken.", "Cook on LOW 5-6 hrs until chicken is tender and sauce thickened.", "Serve chicken and potatoes with steamed broccoli or green beans."]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker Chicken & Leek Potato Soup",
    prepTime: "10 mins",
    cookTime: "6 hrs",
    hack: "Blend half the soup at the end for a thick, creamy texture with no visible chunks. Partner gets a smooth velvety bowl — looks like restaurant quality with zero effort!",
    macros: "~470 kcal | 42g Protein | 44g Carbs | 10g Fats",
    ingredients: ["400g Chicken thighs (boneless, skinless)", "2 Large leeks (sliced)", "400g Potatoes (cubed)", "800ml Low-salt chicken stock", "1 tsp Garlic puree & fresh thyme", "50ml Light cream or cream cheese to finish"],
    steps: ["Add all ingredients except cream to slowcooker. Season well.", "Cook LOW 6 hrs until chicken is tender and falls apart.", "Shred chicken, blend half the soup for creaminess, stir in cream and serve with crusty bread."]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Beef & Potato Irish Stew",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Classic comfort food — rich gravy with Guinness (optional). Blend a ladle of broth to thicken the sauce without any cornstarch. Partner will lap this up!",
    macros: "~510 kcal | 42g Protein | 48g Carbs | 12g Fats",
    ingredients: ["500g Lean braising/stewing steak (cubed)", "400g Potatoes (chunked)", "2 Carrots (chunked) & 1 large onion (sliced)", "300ml Beef stock + 1 tbsp Worcestershire sauce", "1 tbsp Tomato puree & fresh thyme"]
    ,
    steps: ["Layer beef, potatoes, carrots and onion in slowcooker.", "Mix stock, Worcestershire sauce and tomato puree, pour over.", "Cook LOW 7-8 hrs. Blend a ladle of liquid to thicken. Serve with bread."]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Thai Green Curry Chicken",
    prepTime: "10 mins",
    cookTime: "4 hrs",
    hack: "Use just 1 tbsp of mild Thai green paste for a fragrant, NOT spicy version. Coconut milk makes it naturally creamy. Partner gets it with plain rice, you add chilli sauce!",
    macros: "~520 kcal | 44g Protein | 48g Carbs | 16g Fats",
    ingredients: ["500g Chicken breast (cubed)", "1 Can (400ml) reduced-fat coconut milk", "1 tbsp Mild Thai green curry paste", "200g Basmati rice (cooked separately)", "1 Courgette & handful mangetout or peas", "Fresh coriander & lime wedge to serve"]
    ,
    steps: ["Add chicken, coconut milk, curry paste and courgette to slowcooker.", "Cook LOW 4 hrs until chicken is tender and sauce fragrant.", "Stir in mangetout last 20 mins. Serve over basmati with lime and coriander."]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Lamb & Rosemary Ragu",
    prepTime: "10 mins",
    cookTime: "7 hrs",
    hack: "Slow-cooked lamb shoulder falls apart into a rich, hearty ragu. Blend smooth or leave chunky. Partner gets it with plain pappardelle pasta; you add grated parmesan and chilli!",
    macros: "~540 kcal | 45g Protein | 50g Carbs | 16g Fats",
    ingredients: ["500g Lamb shoulder (diced)", "1 Can chopped tomatoes & 2 tbsp tomato puree", "200ml Beef stock", "2 sprigs fresh rosemary (or 1 tsp dried)", "1 tsp Garlic puree & 1 large onion (grated)", "Pappardelle or penne pasta to serve"],
    steps: ["Brown lamb pieces in a hot pan 4 mins. Transfer to slowcooker.", "Add tomatoes, stock, tomato puree, rosemary, garlic and onion. Stir well.", "Cook LOW 7-8 hrs until lamb is falling apart. Shred into sauce. Serve over pasta."]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Bang Bang Chicken Rice Bowls",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Mix 0% Greek yogurt, sriracha (tiny amount) and honey for a bang bang sauce that looks spicy but is actually mild and creamy. Serve partner's sauce on the side!",
    macros: "~510 kcal | 46g Protein | 52g Carbs | 11g Fats",
    ingredients: ["300g Chicken breast (diced)", "150g Jasmine rice", "2 tbsp 0% Greek yogurt", "1 tbsp Sweet chilli sauce & 1 tsp honey", "Shredded cucumber, spring onion, sesame seeds"]
    ,
    steps: ["Fry diced chicken in a hot pan with soy sauce for 7 mins until golden.", "Mix yogurt, sweet chilli and honey to make bang bang sauce.", "Serve chicken over rice, drizzle sauce, top with cucumber and spring onion."]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Chicken Shawarma Wraps",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Marinate chicken in yogurt, cumin, turmeric and lemon — these spices are warm not hot. Serve partner a plain wrap with just chicken and garlic sauce, you load up with salad!",
    macros: "~490 kcal | 44g Protein | 46g Carbs | 12g Fats",
    ingredients: ["300g Chicken breast (sliced thin)", "2 tbsp 0% Greek yogurt, juice of ½ lemon", "1 tsp Cumin, ½ tsp turmeric, 1 tsp garlic puree", "2 Large flour tortilla wraps", "Light garlic sauce/mayo, shredded lettuce, tomato"]
    ,
    steps: ["Toss chicken in yogurt, lemon, cumin, turmeric and garlic. Leave 5 mins.", "Pan-fry on high heat 4-5 mins per side until charred at edges.", "Warm wraps, spread garlic sauce, fill with chicken and salad, wrap tight."]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Crispy Chilli Beef Noodles",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Thin strips of beef in cornstarch, fried crispy then tossed in a sweet sticky glaze. Toss noodles on the side rather than in the sauce so partner can have a plain noodle portion!",
    macros: "~530 kcal | 42g Protein | 56g Carbs | 13g Fats",
    ingredients: ["250g Lean beef steak (sliced thin)", "1 tbsp Cornstarch", "3 tbsp Soy sauce, 2 tbsp honey, 1 tsp chilli flakes (optional)", "150g Medium egg noodles", "Sliced spring onions & sesame seeds to serve"]
    ,
    steps: ["Toss beef strips in cornstarch and salt. Air-fry or pan-fry until crispy.", "Make glaze: heat soy, honey and chilli in pan 2 mins until slightly sticky.", "Toss crispy beef in glaze. Boil noodles. Serve beef over noodles, top with spring onion."]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Tandoori Chicken Naan Flatbreads",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Tandoori paste with yogurt makes a mild, flavourful marinade that chars beautifully on a griddle. Serve with mango chutney on the side — zero spice, full flavour!",
    macros: "~500 kcal | 45g Protein | 50g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (sliced into strips)", "3 tbsp 0% Greek yogurt, 1 tbsp mild tandoori paste", "2 Naan breads", "Sliced red onion, lettuce, mango chutney", "Mint raita: 100g yogurt + fresh mint + cucumber"]
    ,
    steps: ["Mix tandoori paste and yogurt. Coat chicken strips and rest 5 mins.", "Cook on a hot griddle/pan 4-5 mins per side until lightly charred.", "Warm naans, load with chicken, red onion, lettuce, chutney and raita."]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Loaded Nacho Chicken Cheese Fries",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Oven chips loaded with seasoned chicken, salsa, melted cheddar and sour cream. Serve sauces on the side so partner can build a plain cheesy chips version — nobody is left out!",
    macros: "~530 kcal | 44g Protein | 52g Carbs | 15g Fats",
    ingredients: ["250g Chicken breast (diced)", "300g Oven chips or seasoned wedges", "1 tbsp Fajita or taco seasoning", "50g Grated light cheddar", "3 tbsp Mild salsa & 2 tbsp sour cream", "Sliced jalapenos (optional, kept on side)"],
    steps: ["Bake chips as per packet. Season chicken with taco seasoning and fry 8 mins until cooked.", "Spread hot chips on an oven tray, scatter chicken over, top with grated cheddar.", "Grill 3-4 mins until cheese melted and bubbling. Drizzle salsa and sour cream to serve."]
  },

  // --- ONE-PAN (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Sun-Dried Tomato & Chicken Orzo",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Orzo pasta cooks directly in the pan with stock, absorbing all the flavour. Use sun-dried tomatoes in oil — they melt into a rich sauce partner will think took hours!",
    macros: "~530 kcal | 47g Protein | 55g Carbs | 12g Fats",
    ingredients: ["2 Chicken breasts (diced)", "150g Orzo pasta", "60g Sun-dried tomatoes (chopped)", "400ml Chicken stock", "50g Light cream cheese", "Fresh basil (optional)"]
    ,
    steps: ["Sear chicken in pan with olive oil spray 4 mins. Season well.", "Add orzo, sun-dried tomatoes and stock. Bring to boil, stir.", "Simmer 10 mins stirring regularly until orzo cooked and liquid absorbed. Stir in cream cheese."]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Creamy Tomato & Chicken Risotto",
    prepTime: "5 mins",
    cookTime: "20 mins",
    hack: "Arborio rice absorbs stock and passata into a naturally creamy risotto — no wine needed. Stir regularly and partner will think it's from a restaurant. Zero visible veg to complain about!",
    macros: "~540 kcal | 46g Protein | 58g Carbs | 11g Fats",
    ingredients: ["2 Chicken breasts (diced)", "200g Arborio risotto rice", "200ml Passata", "600ml Hot chicken stock (added gradually)", "20g Parmesan (grated)", "1 tsp Garlic puree & olive oil spray"],
    steps: ["Fry chicken in pan with garlic 5 mins. Add rice and stir 1 min to coat.", "Add passata then stock one ladle at a time, stirring continuously (15-18 mins).", "When rice is tender and creamy, remove from heat. Stir in parmesan. Season and serve."]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Smoky Bean & Chorizo Skillet",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Spicy cooking chorizo adds huge flavour to the beans so no extra seasoning needed. Use just 50g chorizo to keep fat low but keep all the smokiness. Serve with crusty bread!",
    macros: "~490 kcal | 38g Protein | 54g Carbs | 13g Fats",
    ingredients: ["50g Cooking chorizo (sliced)", "2 Cans (400g each) mixed beans, drained", "1 Can chopped tomatoes", "1 tsp Smoked paprika & 1 tsp garlic puree", "2 Large eggs", "Crusty bread to serve"]
    ,
    steps: ["Fry chorizo in pan 2 mins, add garlic, paprika then tomatoes. Simmer 5 mins.", "Add beans and stir. Make two wells, crack eggs in. Cover with lid.", "Cook 3-4 mins until eggs set. Serve straight from pan with bread."]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Garlic Butter Chicken & Potato Bake",
    prepTime: "10 mins",
    cookTime: "25 mins",
    hack: "Chicken thighs and sliced potatoes roasted in one pan with garlic butter. No chopping vegetables needed. Partner gets crispy golden potatoes with tender chicken — a guaranteed hit!",
    macros: "~530 kcal | 46g Protein | 46g Carbs | 16g Fats",
    ingredients: ["4 Boneless chicken thighs", "400g Baby potatoes (halved)", "2 tbsp Butter (or olive oil)", "4 Garlic cloves (minced) or 2 tsp garlic puree", "1 tsp Mixed herbs, salt & pepper", "Juice of ½ lemon"],
    steps: ["Toss potatoes in garlic butter, herbs and lemon. Spread on large oven tray.", "Place chicken thighs on top. Season. Roast at 200°C for 25 mins turning potatoes halfway.", "Chicken is done when juices run clear. Serve straight from the tray."]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Cajun Chicken Pasta",
    prepTime: "5 mins",
    cookTime: "15 mins",
    hack: "Cajun spice looks bold but the cream cheese completely tames the heat into a mild smoky flavour. Use just 1 tsp — partner will love the creamy orange sauce with zero spice burn!",
    macros: "~530 kcal | 47g Protein | 56g Carbs | 13g Fats",
    ingredients: ["2 Chicken breasts (diced)", "140g Penne pasta", "1 tsp Mild Cajun seasoning", "80g Light garlic & herb cream cheese", "100ml Chicken stock", "100g Cherry tomatoes (halved)"],
    steps: ["Coat chicken in Cajun seasoning and sear in pan 5 mins. Add tomatoes.", "Boil pasta separately. Add cream cheese and stock to chicken pan — stir to make sauce.", "Toss cooked pasta into the sauce. Season, serve immediately."]
  },

  // --- REGULAR MEALS (5) ---
  {
    id: "rg1",
    category: "regular",
    title: "Turkey & Sweet Potato Meatball Bake",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "Turkey mince meatballs baked in a sweet tomato sauce over sweet potato chunks. Partner gets meatballs plain; blitz the tomato sauce smooth so no onion or veg chunks are visible!",
    macros: "~510 kcal | 44g Protein | 48g Carbs | 12g Fats",
    ingredients: ["400g Turkey mince", "1 Egg & 2 tbsp breadcrumbs (to bind meatballs)", "300g Sweet potato (cubed, pre-roasted)", "1 Can (400g) passata + 1 tsp oregano + 1 tsp garlic", "40g Light mozzarella (grated on top)"]
    ,
    steps: ["Mix turkey mince, egg, breadcrumbs and seasoning. Roll into 12 meatballs.", "Bake meatballs at 200°C for 15 mins. Add to baking dish with passata and sweet potato.", "Top with mozzarella and bake another 10 mins until bubbling."]
  },
  {
    id: "rg2",
    category: "regular",
    title: "Honey Garlic Baked Chicken Traybake",
    prepTime: "10 mins",
    cookTime: "30 mins",
    hack: "Everything roasted together on one tray — chicken thighs, broccoli and potatoes in a simple honey-garlic glaze. Serve partner's broccoli on the side so they never see it on the tray!",
    macros: "~510 kcal | 46g Protein | 46g Carbs | 13g Fats",
    ingredients: ["4 Boneless chicken thighs", "400g Baby potatoes (halved)", "1 Broccoli head (cut to florets, kept separate for you!)", "3 tbsp Honey", "2 tbsp Soy sauce & 2 tsp garlic puree", "1 tbsp Olive oil"],
    steps: ["Whisk honey, soy and garlic together. Toss chicken and potatoes in half the glaze.", "Roast at 200°C for 20 mins. Add broccoli florets to your side of the tray, drizzle remaining glaze.", "Roast another 10 mins until chicken is golden and caramelised. Serve straight from tray."]
  },
  {
    id: "rg3",
    category: "regular",
    title: "Cheesy Chicken & Bacon Potato Gratin",
    prepTime: "15 mins",
    cookTime: "35 mins",
    hack: "Thin sliced potatoes baked in a light cheese sauce with chicken and bacon. Blitz the sauce completely smooth — no lumps or veg bits for a fussy partner to pick out. Pure comfort!",
    macros: "~540 kcal | 47g Protein | 46g Carbs | 16g Fats",
    ingredients: ["2 Chicken breasts (sliced thin)", "4 Rashers lean back bacon (chopped)", "500g Potatoes (very thinly sliced)", "150ml Semi-skimmed milk & 80g light cream cheese", "50g Grated light cheddar (for top)", "1 tsp Garlic puree & pinch of nutmeg"],
    steps: ["Heat milk, cream cheese, garlic and nutmeg in pan until smooth sauce. Season well.", "Layer potatoes, chicken and bacon in a baking dish, pour sauce over, top with cheddar.", "Bake covered at 180°C for 25 mins, remove foil and bake 10 more mins until golden and bubbling."]
  },
  {
    id: "rg4",
    category: "regular",
    title: "Chicken Fajita Loaded Potato Skins",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Bake potato skins until crispy, fill with fajita chicken and melted cheese. Everything served separately so partner can build their own plate without unwanted peppers!",
    macros: "~520 kcal | 43g Protein | 54g Carbs | 14g Fats",
    ingredients: ["3 Large baking potatoes (halved and baked)", "250g Chicken breast (sliced)", "1 tbsp Fajita seasoning", "1 Red pepper (sliced, optional)", "50g Grated light cheddar", "Sour cream or guacamole to serve"]
    ,
    steps: ["Scoop out potato flesh (save for mash another day), spray skins and bake 10 mins.", "Fry chicken with fajita seasoning and peppers 7 mins until cooked.", "Fill potato skins with chicken, top with cheese and grill 3 mins until melted."]
  },
  {
    id: "rg5",
    category: "regular",
    title: "High-Protein Tuna Pasta Bake",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Mix tuna, light cream cheese and stock for a creamy sauce — no heavy béchamel needed. Use a blender to make it totally smooth and lump-free. Partner will love it!",
    macros: "~520 kcal | 48g Protein | 56g Carbs | 10g Fats",
    ingredients: ["2 Cans (160g each) tuna in spring water (drained)", "200g Penne pasta (cooked)", "100g Light cream cheese", "150ml Chicken or veg stock", "30g Light cheddar (grated for top)", "50g Sweetcorn (optional, easy to leave out)"]
    ,
    steps: ["Mix cream cheese and stock in pan over low heat until smooth sauce forms.", "Stir in drained tuna, sweetcorn and cooked pasta. Season well.", "Pour into baking dish, top with grated cheddar and bake 200°C for 15 mins until golden."]
  }
];

// ============================================================
// APPLICATION STATE
// ============================================================
const defaultCompleted = {
  w1r1: true, w1r2: true, w1r3: true,
  w2r1: true, w2r2: true, w2r3: true,
  w3r1: true, w3r2: true, w3r3: true,
  w4r1: true, w4r2: true, w4r3: true
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
