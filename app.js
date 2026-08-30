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

// Application State
let completedRuns = JSON.parse(localStorage.getItem('dadrunner_runs')) || {};
let waterCount = parseInt(localStorage.getItem('dadrunner_water')) || 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderWorkoutPlan();
  initHydrationTracker();
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
