/* ==========================================================================
   DadRunner Hub - JavaScript Application Logic & LocalStorage Persistence
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
      { id: "w3r3", day: "Saturday/Sunday", title: "Long Run Progression", desc: "7.5 km @ Easy Pace. Fuel with water/banana." }
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
  "Dans Fatyard Ultra Part II",
  "Wasn't what I was promised.",
  "That one sucked.",
  "Ouch.",
  "Pushed a pram in spirit",
  "Outrunning the newborn sleep deprivation",
  "07:00 Dog Walk Warmup Paid Off",
  "Escaped the 17:00 desk chair",
  "Calories burned so I can eat extra pizza",
  "Zone 2 or bust",
  "Dad duty recovery jog",
  "Dog thought we were being chased",
  "Targeting sub-60 10k",
  "Legs were heavy, heart was light",
  "Post-work sweat session"
];

// Fussy-Partner Approved Family Recipes Data (20 Options: 5 Slowcooker, 5 Fakeaways, 5 One-Pan, 5 Regular)
const familyRecipesData = [
  // --- SLOWCOOKER MEALS (5) ---
  {
    id: "sc1",
    category: "slowcooker",
    title: "Slowcooker Beef Chilli Con Carne & Rice",
    prepTime: "10 mins",
    cookTime: "4-6 hrs",
    hack: "Serve guacamole, jalapenos, cheese, sour cream, and tortilla chips on separate side dishes. Partner builds plain beef & rice; you load up the works!",
    macros: "~510 kcal | 44g Protein | 54g Carbs | 12g Fats",
    ingredients: [
      "400g 5% Lean beef mince",
      "1 Can kidney beans & 1 can chopped tomatoes",
      "1 tbsp Mild chilli powder & 1 beef stock cube",
      "Cooked basmati rice",
      "Toppings: light cheddar, sour cream, guacamole, tortilla chips"
    ],
    steps: [
      "Brown mince in a pan for 4 mins, then transfer to slowcooker with tomatoes, kidney beans, stock & seasoning.",
      "Cook on LOW for 6 hours (or HIGH for 4 hours).",
      "Serve over warm rice with customized side toppings."
    ]
  },
  {
    id: "sc2",
    category: "slowcooker",
    title: "Slowcooker BBQ Pulled Chicken Jackets / Sliders",
    prepTime: "5 mins",
    cookTime: "4 hrs",
    hack: "Chicken breasts cooked in low-sugar BBQ sauce until shreddable with two forks. Serve on soft brioche rolls or baked jacket potatoes!",
    macros: "~480 kcal | 45g Protein | 50g Carbs | 10g Fats",
    ingredients: [
      "400g Chicken breasts",
      "150g Low-sugar BBQ sauce",
      "1 tbsp Apple cider vinegar & 1 tsp garlic powder",
      "4 Brioche burger buns or jacket potatoes",
      "Light coleslaw on the side"
    ],
    steps: [
      "Place chicken breasts in slowcooker, cover with BBQ sauce, vinegar & garlic powder.",
      "Cook on LOW for 4-5 hours until tender.",
      "Shred with two forks, toss in sauce, and serve on buns or jacket potatoes."
    ]
  },
  {
    id: "sc3",
    category: "slowcooker",
    title: "Slowcooker Creamy Chicken Tikka Masala",
    prepTime: "10 mins",
    cookTime: "4 hrs",
    hack: "Passata & mild tikka paste simmered with chicken. Stir in 0% Greek yogurt at the end for a silky, non-spicy butter chicken texture partner will love!",
    macros: "~490 kcal | 45g Protein | 52g Carbs | 9g Fats",
    ingredients: [
      "400g Chicken breasts (cubed)",
      "1 Can passata (400g)",
      "2 tbsp Mild tikka masala curry paste",
      "150g 0% Greek yogurt (stirred in at end)",
      "Basmati rice & naan breads"
    ],
    steps: [
      "Add chicken, passata, and tikka paste to slowcooker. Cook on LOW for 4 hours.",
      "Turn off heat, let cool slightly for 5 mins, then fold in Greek yogurt.",
      "Serve over steamed basmati rice with warm naan."
    ]
  },
  {
    id: "sc4",
    category: "slowcooker",
    title: "Slowcooker Rich Beef Bolognese Pasta",
    prepTime: "10 mins",
    cookTime: "6 hrs",
    hack: "Finely grate carrots & onions into the slowcooker—they melt into a sweet, rich tomato sauce with zero visible veggie chunks for fussy partners!",
    macros: "~520 kcal | 44g Protein | 56g Carbs | 12g Fats",
    ingredients: [
      "400g 5% Beef mince",
      "1 Onion & 1 carrot (finely grated)",
      "1 Can chopped tomatoes + 2 tbsp tomato puree",
      "1 Beef stock cube + 1 tsp oregano",
      "Penne or spaghetti pasta"
    ],
    steps: [
      "Brown mince in a pan, then transfer to slowcooker with grated veggies, tomatoes, puree & herbs.",
      "Cook on LOW for 6 hours until super rich & thick.",
      "Toss with freshly boiled pasta and top with light parmesan."
    ]
  },
  {
    id: "sc5",
    category: "slowcooker",
    title: "Slowcooker Sausage & Sweet Potato Casserole",
    prepTime: "10 mins",
    cookTime: "5 hrs",
    hack: "Use 97% lean pork or chicken sausages. Thick sweet onion gravy with smooth mashed potato for partner; add green beans to your plate!",
    macros: "~470 kcal | 38g Protein | 46g Carbs | 14g Fats",
    ingredients: [
      "6 Lean pork or chicken sausages (97% meat)",
      "300g Sweet potato (cubed)",
      "1 Can chopped tomatoes + 200ml onion gravy",
      "1 tsp Smoked paprika & thyme"
    ],
    steps: [
      "Brown sausages in a pan for 4 mins, then place in slowcooker with sweet potatoes, tomatoes & gravy.",
      "Cook on LOW for 5 hours.",
      "Serve piping hot with optional green vegetables."
    ]
  },

  // --- FAKEAWAYS (5) ---
  {
    id: "fk1",
    category: "fakeaway",
    title: "Smash-Style Lean Burgers & Sweet Potato Wedges",
    prepTime: "15 mins",
    cookTime: "15 mins",
    hack: "Serve sauces, gherkins, and salad on separate side plates. Your partner gets a classic cheeseburger while you load yours with extra salad!",
    macros: "~540 kcal | 42g Protein | 55g Carbs | 16g Fats",
    ingredients: [
      "250g 5% fat beef mince (split into 2 thin patties)",
      "2 Brioche or wholemeal burger buns",
      "2 Slices light cheddar cheese",
      "200g Sweet potato (sliced into chips, tossed with 1 tsp olive oil & smoked paprika)",
      "Side salad, pickles, light ketchup / burger sauce"
    ],
    steps: [
      "Oven bake or air-fry sweet potato wedges @ 200°C for 20 mins.",
      "Heat a hot non-stick pan. Press mince patties flat with a spatula for 2 mins per side until charred. Top with cheese.",
      "Lightly toast buns, assemble burgers, and serve with sweet potato wedges."
    ]
  },
  {
    id: "fk2",
    category: "fakeaway",
    title: "Crispy 'KFC' Style Chicken Wraps",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Coating chicken in crushed cornflakes gives an epic crunch without deep frying! Serve with plain mayo for fussy partners.",
    macros: "~460 kcal | 40g Protein | 49g Carbs | 10g Fats",
    ingredients: [
      "250g Chicken breast (cut into thick strips)",
      "30g Cornflakes (crushed)",
      "1 Egg (beaten)",
      "2 Tortilla wraps",
      "Light mayo / Perinaise & shredded lettuce"
    ],
    steps: [
      "Dip chicken strips into beaten egg, then roll in crushed cornflakes.",
      "Air-fry @ 190°C or bake for 12-14 mins until golden & crispy.",
      "Warm tortillas, spread mayo, add crispy chicken and wrap tightly."
    ]
  },
  {
    id: "fk3",
    category: "fakeaway",
    title: "Crispy Sweet & Sour Chicken & Rice",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Air-fry cornstarch-dusted chicken for crunch. Toss sauce separately so partner gets plain crispy chicken nuggets if preferred!",
    macros: "~500 kcal | 44g Protein | 58g Carbs | 9g Fats",
    ingredients: [
      "300g Chicken breast (cubed & tossed in 1 tbsp cornstarch)",
      "3 tbsp Light sweet & sour sauce (or pineapple juice + ketchup + soy)",
      "150g Microwave egg fried or basmati rice",
      "Sliced peppers & pineapple chunks (optional for partner)"
    ],
    steps: [
      "Spray cornstarch-dusted chicken with olive oil and air-fry @ 200°C for 12 mins until super crispy.",
      "Heat sauce in a pan with peppers/pineapple.",
      "Toss crispy chicken in sauce right before serving over hot rice."
    ]
  },
  {
    id: "fk4",
    category: "fakeaway",
    title: "Homemade Pepperoni & Chicken Flatbread Pizza",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Use high-protein flatbreads or Greek yogurt dough. Partner builds a classic cheese & pepperoni pizza, you add chicken & veggies!",
    macros: "~510 kcal | 45g Protein | 48g Carbs | 14g Fats",
    ingredients: [
      "2 High-protein flatbreads or naan breads",
      "4 tbsp Tomato passata + 1 tsp oregano",
      "60g Light mozzarella (grated)",
      "100g Cooked chicken breast & 8 slices pepperoni",
      "Fresh basil or sweetcorn (optional)"
    ],
    steps: [
      "Spread passata evenly over flatbread bases.",
      "Top with mozzarella, cooked chicken, and pepperoni.",
      "Bake in a hot oven @ 210°C for 8-10 mins until cheese is bubbling."
    ]
  },
  {
    id: "fk5",
    category: "fakeaway",
    title: "Greek Doner Gyros Flatbread Wraps with Chips",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Seasoned lean beef/lamb mince pressed thin and sliced into gyros strips. Serve chips inside the wrap for authentic takeaway vibes!",
    macros: "~520 kcal | 42g Protein | 50g Carbs | 15g Fats",
    ingredients: [
      "250g 5% Beef mince (seasoned with garlic, oregano, cumin)",
      "2 Greek pita or flatbreads",
      "100g Oven chips",
      "2 tbsp Tzatziki sauce & sliced tomatoes/cucumber"
    ],
    steps: [
      "Press seasoned mince into a flat sheet in a hot pan, cook 4 mins per side, then slice into thin gyros strips.",
      "Bake oven chips.",
      "Warm pita, spread tzatziki, fill with gyros meat, chips, and fresh salad."
    ]
  },

  // --- ONE-PAN MEALS (5) ---
  {
    id: "op1",
    category: "onepan",
    title: "One-Pan Creamy Garlic & Herb Chicken Pasta",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Swaps heavy double cream for Garlic & Herb Light Cream Cheese (e.g. Philadelphia Light). Smooth, rich, and zero extra pans to wash!",
    macros: "~520 kcal | 46g Protein | 56g Carbs | 11g Fats",
    ingredients: [
      "250g Chicken breast (diced)",
      "140g Penne or fusilli pasta",
      "80g Light Garlic & Herb cream cheese",
      "50ml Pasta cooking water",
      "Handful of baby spinach (optional to stir into your portion!)"
    ],
    steps: [
      "Boil pasta in salted water until al dente (reserve 50ml pasta water).",
      "Sear diced chicken in same pan with olive oil spray until cooked through.",
      "Stir light cream cheese and reserved pasta water into chicken to create a silky sauce, then toss with cooked pasta."
    ]
  },
  {
    id: "op2",
    category: "onepan",
    title: "One-Pan Mexican Chicken Burrito Rice Skillet",
    prepTime: "10 mins",
    cookTime: "12 mins",
    hack: "Chicken, rice, mild salsa & cheddar cooked directly in one skillet. Partner can spoon it into warm plain tortillas!",
    macros: "~510 kcal | 44g Protein | 58g Carbs | 12g Fats",
    ingredients: [
      "300g Cooked shredded chicken breast",
      "250g Microwave basmati or Mexican rice",
      "100g Mild tomato salsa",
      "50g Grated light cheddar",
      "Tortilla wraps or corn chips"
    ],
    steps: [
      "Sauté chicken and rice in a deep skillet with salsa for 5 mins.",
      "Top with grated cheese, cover with lid for 2 mins to melt.",
      "Serve directly from skillet with warm tortilla wraps."
    ]
  },
  {
    id: "op3",
    category: "onepan",
    title: "One-Pan Honey Garlic Chicken Stir-Fry",
    prepTime: "10 mins",
    cookTime: "10 mins",
    hack: "Diced chicken breast glazed in a sweet garlic soy sauce. Serve broccoli/peppers on your side plate if partner prefers plain chicken & rice!",
    macros: "~480 kcal | 45g Protein | 52g Carbs | 9g Fats",
    ingredients: [
      "300g Chicken breast (diced)",
      "2 tbsp Soy sauce + 1 tbsp honey + 1 tsp garlic",
      "150g Microwave Jasmine or basmati rice",
      "Steamed broccoli or sugar snap peas"
    ],
    steps: [
      "Sear chicken in a hot wok/pan for 6 mins.",
      "Pour in soy, honey & garlic, simmer 2 mins until thick shiny glaze forms.",
      "Toss with rice and serve with green veggies."
    ]
  },
  {
    id: "op4",
    category: "onepan",
    title: "One-Pan Loaded Cheeseburger Dirty Fries",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Takeaway comfort food made lean in one pan! Oven wedges topped with 5% beef mince, melted light cheese slice & burger sauce.",
    macros: "~530 kcal | 44g Protein | 48g Carbs | 16g Fats",
    ingredients: [
      "300g Potato wedges (baked crisp)",
      "250g 5% Beef mince",
      "2 Slices light cheddar",
      "2 tbsp Light burger sauce / gherkin relish"
    ],
    steps: [
      "Bake potato wedges in oven tray @ 200°C for 20 mins.",
      "Pan brown beef mince with salt & pepper.",
      "Scatter hot beef mince over wedges on the baking tray, top with cheese slice to melt, and drizzle with burger sauce."
    ]
  },
  {
    id: "op5",
    category: "onepan",
    title: "One-Pan Spanish Chicken & Rice Bake",
    prepTime: "10 mins",
    cookTime: "20 mins",
    hack: "Mild smoked paprika seasoning (zero fiery heat). Serve sliced chorizo on top so partner can easily pick it off if they prefer pure chicken!",
    macros: "~530 kcal | 45g Protein | 52g Carbs | 13g Fats",
    ingredients: [
      "300g Chicken thighs or breast",
      "30g Sliced Spanish chorizo",
      "150g Rice + 300ml chicken stock + 1 tsp smoked paprika",
      "Peppers & sweetcorn"
    ],
    steps: [
      "Sear chicken & chorizo in a deep pan for 5 mins.",
      "Add rice, paprika, stock & veggies. Cover with lid and simmer for 15 mins until rice absorbs stock."
    ]
  },

  // --- REGULAR FAMILY MEALS (5) ---
  {
    id: "reg1",
    category: "regular",
    title: "Lean Beef Cottage Pie with Sweet Potato Mash",
    prepTime: "15 mins",
    cookTime: "25 mins",
    hack: "Grate onions & carrots finely into the beef gravy so they melt into the sauce—zero visible veggie chunks for fussy partners!",
    macros: "~480 kcal | 42g Protein | 48g Carbs | 13g Fats",
    ingredients: [
      "300g 5% Lean beef mince",
      "1 Onion & 1 carrot (finely grated)",
      "1 Beef stock cube + 200ml boiling water + 1 tbsp Worcestershire sauce",
      "300g Sweet potatoes (boiled & mashed with a splash of milk)",
      "50g Frozen garden peas"
    ],
    steps: [
      "Brown mince with grated onion & carrot for 5 mins.",
      "Add stock and Worcestershire sauce, simmer for 10 mins until thick sauce forms.",
      "Transfer to a dish, top with sweet potato mash, and grill for 8 mins until golden."
    ]
  },
  {
    id: "reg2",
    category: "regular",
    title: "Cheesy Chicken & Bacon Quesadillas",
    prepTime: "5 mins",
    cookTime: "10 mins",
    hack: "Golden toasted tortilla triangles filled with shredded chicken, bacon lardons, and melted cheddar. Great for dip-and-eat dinner!",
    macros: "~470 kcal | 41g Protein | 44g Carbs | 14g Fats",
    ingredients: [
      "2 Large tortilla wraps",
      "200g Cooked shredded chicken breast",
      "30g Cooked bacon lardons",
      "50g Grated light cheddar",
      "Mild salsa for dipping"
    ],
    steps: [
      "Place chicken, bacon, and cheese inside folded wraps.",
      "Toast in a hot dry pan for 3 mins per side until cheese is melted and wrap is golden.",
      "Slice into triangles and serve with salsa."
    ]
  },
  {
    id: "reg3",
    category: "regular",
    title: "Mild Japanese Chicken Katsu Curry & Rice",
    prepTime: "10 mins",
    cookTime: "15 mins",
    hack: "Panko breadcrumbed air-fried chicken breast with a silky smooth, no-bits curry sauce over basmati rice.",
    macros: "~510 kcal | 43g Protein | 55g Carbs | 11g Fats",
    ingredients: [
      "250g Chicken breast (flattened with rolling pin)",
      "30g Panko breadcrumbs + 1 egg",
      "150g Basmati rice",
      "1/2 Block S&B Golden Curry paste (blended smooth with 200ml water)"
    ],
    steps: [
      "Dip chicken in egg, coat in panko, and air-fry @ 190°C for 14 mins.",
      "Dissolve curry paste in boiling water to create a silky smooth sauce.",
      "Slice crispy chicken, serve over rice, and pour curry sauce on top."
    ]
  },
  {
    id: "reg4",
    category: "regular",
    title: "Crispy Baked Salmon Wedges & Greens",
    prepTime: "10 mins",
    cookTime: "18 mins",
    hack: "Season salmon with a sweet honey-soy glaze. Serve crispy potato wedges alongside for partner comfort food!",
    macros: "~540 kcal | 42g Protein | 45g Carbs | 20g Fats",
    ingredients: [
      "2 Salmon fillets (coated in 1 tbsp honey + 1 tbsp soy sauce)",
      "300g Potato wedges",
      "Steamed broccoli or green beans"
    ],
    steps: [
      "Bake potato wedges @ 200°C for 20 mins.",
      "Place salmon fillets on baking tray for last 12 mins.",
      "Serve honey-glazed salmon with wedges and green veggies."
    ]
  },
  {
    id: "reg5",
    category: "regular",
    title: "Classic High-Protein Spaghetti Carbonara",
    prepTime: "5 mins",
    cookTime: "12 mins",
    hack: "Blends egg yolks, light cream cheese, and bacon lardons for a rich creamy Italian classic with zero heavy double cream!",
    macros: "~530 kcal | 46g Protein | 54g Carbs | 13g Fats",
    ingredients: [
      "150g Spaghetti",
      "2 Egg yolks",
      "60g Light cream cheese",
      "50g Bacon lardons / pancetta",
      "20g Grated parmesan"
    ],
    steps: [
      "Boil spaghetti (reserve 50ml pasta water). Fry bacon lardons until crisp.",
      "Whisk egg yolks, cream cheese & parmesan with reserved pasta water.",
      "Toss hot spaghetti into the pan off the heat, pour egg cream mixture over and stir until creamy sauce coats pasta."
    ]
  }
];

// Application State
const defaultCompleted = { w1r1: true, w1r2: true, w1r3: true, w2r1: true, w2r2: true, w2r3: true };
let completedRuns = JSON.parse(localStorage.getItem('dadrunner_runs')) || defaultCompleted;
let waterCount = parseInt(localStorage.getItem('dadrunner_water')) || 0;
let currentRecipeCategory = 'all';

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderWorkoutPlan();
  initHydrationTracker();
  renderFamilyRecipes();
  initModal();
});

// Tab Navigation
function initTabs() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchToTab(tabId);
    });
  });
}

function switchToTab(tabId) {
  // Update Buttons
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const targetBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  // Update Panes
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Workout Plan
function renderWorkoutPlan() {
  const container = document.getElementById('workout-list');
  if (!container) return;

  container.innerHTML = '';
  let totalRunsCount = 0;
  let completedCount = 0;

  runningPlanData.forEach(weekBlock => {
    const weekEl = document.createElement('div');
    weekEl.className = 'week-block';

    const weekHeader = document.createElement('div');
    weekHeader.className = 'week-header';
    weekHeader.innerText = weekBlock.title;
    weekEl.appendChild(weekHeader);

    weekBlock.runs.forEach(run => {
      totalRunsCount++;
      const isDone = !!completedRuns[run.id];
      if (isDone) completedCount++;

      const runEl = document.createElement('div');
      runEl.className = `workout-item ${isDone ? 'completed' : ''}`;
      runEl.onclick = () => toggleRunCompletion(run.id);

      runEl.innerHTML = `
        <div class="workout-checkbox">
          <i class="fa-solid fa-check"></i>
        </div>
        <div class="workout-details">
          <h5>${run.day}: ${run.title}</h5>
          <p>${run.desc}</p>
        </div>
      `;

      weekEl.appendChild(runEl);
    });

    container.appendChild(weekEl);
  });

  // Update progress text
  const pct = Math.round((completedCount / totalRunsCount) * 100) || 0;
  const progressText = document.getElementById('plan-completion-text');
  if (progressText) {
    progressText.innerText = `${pct}% Complete (${completedCount}/${totalRunsCount} Runs)`;
  }
}

// Toggle Workout Completion
function toggleRunCompletion(runId) {
  if (completedRuns[runId]) {
    delete completedRuns[runId];
  } else {
    completedRuns[runId] = true;
  }
  localStorage.setItem('dadrunner_runs', JSON.stringify(completedRuns));
  renderWorkoutPlan();
}

// Hydration Tracker
function initHydrationTracker() {
  const trackerContainer = document.getElementById('water-tracker');
  const countText = document.getElementById('water-count');
  if (!trackerContainer || !countText) return;

  trackerContainer.innerHTML = '';
  countText.innerText = `${waterCount} / 6 Glasses (${(waterCount * 0.5).toFixed(1)}L)`;

  for (let i = 1; i <= 6; i++) {
    const glass = document.createElement('div');
    glass.className = `water-glass ${i <= waterCount ? 'active' : ''}`;
    glass.innerHTML = `<i class="fa-solid fa-glass-water"></i>`;
    glass.onclick = () => {
      waterCount = (waterCount === i) ? i - 1 : i;
      localStorage.setItem('dadrunner_water', waterCount);
      initHydrationTracker();
    };
    trackerContainer.appendChild(glass);
  }
}

// Strava Title Generator
function generateStravaTitle() {
  const output = document.getElementById('strava-title-output');
  if (!output) return;
  const randomIndex = Math.floor(Math.random() * stravaTitles.length);
  output.innerText = `"${stravaTitles[randomIndex]}"`;
}

// Pace Calculator
function calculatePaces() {
  const targetInput = document.getElementById('target-5k');
  const resultsBox = document.getElementById('pace-results');
  if (!targetInput || !resultsBox) return;

  const min5k = parseFloat(targetInput.value) || 33;
  
  // Calculate average 5k pace in seconds/km
  const pace5kSec = (min5k * 60) / 5;

  // Easy pace is +60 to +90 seconds per km slower than 5k pace
  const easyMinSec = formatPace(pace5kSec + 60);
  const easyMaxSec = formatPace(pace5kSec + 90);

  // Tempo pace is +15 to +30 seconds per km slower than 5k pace
  const tempoMinSec = formatPace(pace5kSec + 15);
  const tempoMaxSec = formatPace(pace5kSec + 30);

  document.getElementById('pace-easy').innerText = `${easyMinSec} - ${easyMaxSec} /km`;
  document.getElementById('pace-tempo').innerText = `${tempoMinSec} - ${tempoMaxSec} /km`;

  resultsBox.classList.remove('hidden');
}

function formatPace(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.round(totalSeconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Modal Toggle for GitHub Guide
function initModal() {
  const modal = document.getElementById('gh-modal');
  const openBtn = document.getElementById('gh-help-btn');
  const closeBtn = document.querySelector('.close-modal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('active'));
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// Family Recipe Renderer & Filter
function filterRecipes(category) {
  currentRecipeCategory = category;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('onclick').includes(`'${category}'`));
  });
  renderFamilyRecipes();
}

function renderFamilyRecipes() {
  const container = document.getElementById('recipes-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = currentRecipeCategory === 'all' 
    ? familyRecipesData 
    : familyRecipesData.filter(r => r.category === currentRecipeCategory);

  filtered.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const ingredientsList = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
    const stepsList = recipe.steps.map(s => `<li>${s}</li>`).join('');

    card.innerHTML = `
      <div class="recipe-header">
        <h3>${recipe.title}</h3>
      </div>
      <div class="recipe-meta">
        <span><i class="fa-solid fa-clock"></i> Prep: ${recipe.prepTime}</span>
        <span><i class="fa-solid fa-fire"></i> Cook: ${recipe.cookTime}</span>
      </div>
      <div class="fussy-hack">
        <div class="fussy-hack-title"><i class="fa-solid fa-shield-heart"></i> Fussy Partner Hack</div>
        <div class="fussy-hack-text">${recipe.hack}</div>
      </div>
      <div class="recipe-details">
        <div>
          <div class="recipe-section-title">Ingredients (Serves 2-3)</div>
          <ul class="recipe-ingredients-list">${ingredientsList}</ul>
        </div>
        <div>
          <div class="recipe-section-title">Quick Steps</div>
          <ol class="recipe-steps-list">${stepsList}</ol>
        </div>
      </div>
      <div class="recipe-footer">
        <span class="recipe-macro-badge">${recipe.macros}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Strava API Live Integration
async function syncStravaActivities() {
  const tokenInput = document.getElementById('strava-token');
  const outputBox = document.getElementById('strava-sync-output');
  if (!tokenInput || !outputBox) return;

  const token = tokenInput.value.trim() || localStorage.getItem('dadrunner_strava_token');

  if (!token) {
    alert("Please enter your Strava Access Token! Click 'Help' to see how to get it in 30 seconds.");
    return;
  }

  localStorage.setItem('dadrunner_strava_token', token);
  outputBox.classList.remove('hidden');
  outputBox.innerHTML = `<span><i class="fa-solid fa-spinner fa-spin"></i> Connecting to Strava API...</span>`;

  try {
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=5', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Strava API Error: ${response.status} (Invalid or expired token)`);
    }

    const activities = await response.json();

    if (!activities || activities.length === 0) {
      outputBox.innerHTML = `<span>No recent activities found on Strava.</span>`;
      return;
    }

    let html = `<strong><i class="fa-brands fa-strava"></i> Latest Synced Runs:</strong>`;
    activities.forEach(act => {
      if (act.type === 'Run' || act.type === 'Hike') {
        const distKm = (act.distance / 1000).toFixed(2);
        const timeMin = Math.floor(act.moving_time / 60);
        const sec = act.moving_time % 60;
        const paceSecPerKm = act.moving_time / (act.distance / 1000);
        const paceStr = formatPace(paceSecPerKm);

        html += `
          <div class="pace-row" style="padding: 6px 0; border-bottom: 1px dashed rgba(255,255,255,0.1);">
            <div>
              <strong>${act.name}</strong><br>
              <small style="color: var(--text-muted);">${new Date(act.start_date_local).toLocaleDateString()}</small>
            </div>
            <div style="text-align: right;">
              <strong style="color: var(--accent-cyan);">${distKm} km</strong> in ${timeMin}m ${sec}s<br>
              <small>Pace: ${paceStr}/km</small>
            </div>
          </div>
        `;
      }
    });

    outputBox.innerHTML = html;

  } catch (err) {
    outputBox.innerHTML = `<span style="color: #f87171;"><i class="fa-solid fa-circle-exclamation"></i> ${err.message}</span>`;
  }
}

function openStravaTokenGuide() {
  alert("How to get your Strava Access Token:\n\n1. Log into Strava on your computer or phone browser.\n2. Go to: strava.com/settings/api\n3. Copy your 'Your Access Token'.\n4. Paste it into your web app and click Sync!");
}


