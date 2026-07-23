import {
  CARD_FLAVOUR,
  CHAOS_ART,
  CHAOS_CARDS,
  ECONOMY_ART,
  FOUNDER_ARCHETYPES,
  FOUNDER_ART,
  MILESTONE_ART,
  STAT_META,
  TALENT_ART,
  TALENT_CARD_ART,
  milestoneDeck,
  talentDeck,
} from "./card-data.js";

const STAT_ORDER = Object.keys(STAT_META);
const CARDS_PER_SHEET = 9;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[character]);
}

function skillIcon(stat, className = "") {
  return `<svg class="skill-icon ${className}" aria-hidden="true"><use href="#icon-${stat}"></use></svg>`;
}

function primaryStat(stats) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1])[0]?.[0] || "operations";
}

function activeStats(stats) {
  return STAT_ORDER.filter(stat => stats[stat]);
}

function renderTalentArtwork(card) {
  const stat = primaryStat(card.stats);
  return `<span class="market-card-art" aria-hidden="true"><img src="${TALENT_CARD_ART[card.name] || TALENT_ART[stat]}" alt="" /></span>`;
}

function renderMarketAccent(stats) {
  return `<div class="market-card-accent" aria-hidden="true">${activeStats(stats).map(stat => `<span style="--stat-color:${STAT_META[stat].color}"></span>`).join("")}</div>`;
}

function renderMarketFooter(stats) {
  return `<div class="market-card-footer" role="list" aria-label="Card attributes">${activeStats(stats).map(stat => {
    const value = stats[stat];
    const label = `${STAT_META[stat].label}: ${value}`;
    return `<span class="market-card-stat" role="listitem" style="--stat-color:${STAT_META[stat].color}" aria-label="${label}">${skillIcon(stat)}<strong>${value}</strong></span>`;
  }).join("")}</div>`;
}

function renderObjectiveRequirements(stats) {
  return `<div class="objective-requirements" role="list" aria-label="Skill requirements">${activeStats(stats).map(stat => {
    const value = stats[stat];
    const label = `${STAT_META[stat].label}: ${value}`;
    return `<span class="objective-requirement" role="listitem" style="--stat-color:${STAT_META[stat].color}" aria-label="${label}">${skillIcon(stat)}<strong>${value}</strong></span>`;
  }).join("")}</div>`;
}

function renderObjectiveRewards(card) {
  const rewards = [
    card.reward.cash ? { icon: "cash", label: `Cash reward: $${card.reward.cash}`, value: `$${card.reward.cash}` } : null,
    card.points ? { icon: "reputation", label: `Reputation reward: ${card.points}`, value: `+${card.points}` } : null,
  ].filter(Boolean);
  return `<div class="objective-rewards" role="list" aria-label="Rewards">${rewards.map(({ icon, label, value }) => `<span class="objective-reward" role="listitem" aria-label="${label}"><svg class="reward-icon" aria-hidden="true"><use href="#icon-${icon}"></use></svg><strong>${value}</strong></span>`).join("")}</div>`;
}

function renderTalentCard(card, index) {
  const economy = card.type === "tool" ? ECONOMY_ART.permanent : ECONOMY_ART.upkeep;
  return `<article class="game-card market-card print-card" aria-label="${escapeHtml(card.name)}, ${card.kind}, ${economy.label}">
    ${renderTalentArtwork(card)}
    <div class="card-top" style="--card-color:${card.color}">
      ${renderMarketAccent(card.stats)}
      <span class="card-economy-badge" title="${economy.label}"><img src="${economy.src}" alt="" aria-hidden="true" /></span>
      <h3>${escapeHtml(card.name)}</h3>
    </div>
    <div class="card-body"><p class="card-flavour">“${escapeHtml(CARD_FLAVOUR[card.name] || "Build it. Ship it. Learn fast.")}”</p></div>
    ${renderMarketFooter(card.stats)}
  </article>`;
}

function renderObjectiveCard(card) {
  return `<article class="game-card milestone-card print-card" style="--objective-color:${card.color}" aria-label="${escapeHtml(card.name)}, ${card.kind}">
    <div class="card-top">
      <span class="objective-card-art" aria-hidden="true"><img src="${MILESTONE_ART[card.name]}" alt="" /></span>
      ${renderObjectiveRequirements(card.requirements)}
      ${renderObjectiveRewards(card)}
      <h3>${escapeHtml(card.name)}</h3>
    </div>
  </article>`;
}

function renderChaosCard(card, index) {
  const cardCode = `C${String(index + 1).padStart(2, "0")}`;
  return `<article class="game-card print-card special-card chaos-print-card" aria-label="${escapeHtml(card.name)}, Chaos Monkey event">
    <div class="special-card-art"><img src="${CHAOS_ART[card.id]}" alt="" aria-hidden="true" /><span class="special-card-label">Chaos Monkey · ${cardCode}</span></div>
    <div class="special-card-body"><p class="eyebrow">EVENT</p><h3>${escapeHtml(card.name)}</h3><strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.description)}</p></div>
  </article>`;
}

function renderFounderCard(founder, index) {
  const stat = STAT_META[founder.stat];
  const cardCode = `F${String(index + 1).padStart(2, "0")}`;
  return `<article class="game-card print-card special-card founder-print-card" style="--stat-color:${stat.color}" aria-label="${escapeHtml(founder.name)}, Founder">
    <div class="special-card-art"><img src="${FOUNDER_ART[founder.stat]}" alt="" aria-hidden="true" /><span class="special-card-label">Founder · ${cardCode}</span></div>
    <div class="special-card-body"><p class="eyebrow">YOUR STARTING STRENGTH</p><h3>${escapeHtml(founder.name)}</h3><div class="founder-skill">${skillIcon(founder.stat)}<span><small>PERMANENT SKILL</small><strong>+1 ${stat.label}</strong></span></div><p>Start the game with this skill. It has no Upkeep.</p></div>
  </article>`;
}

const CARD_GROUPS = [
  { title: "Talent Market", description: "Agency, Staff, and permanent Shopify Tool cards.", cards: talentDeck, render: renderTalentCard },
  { title: "Orders & Milestones", description: "Requirements to meet and rewards to earn.", cards: milestoneDeck, render: renderObjectiveCard },
  { title: "Chaos Monkey", description: "Optional events shuffled into the Talent Market.", cards: CHAOS_CARDS, render: renderChaosCard },
  { title: "Founders", description: "Starting identities and permanent strengths.", cards: FOUNDER_ARCHETYPES, render: renderFounderCard },
];

function renderGroup(group) {
  const cards = group.cards.map((card, index) => group.render(card, index)).join("");
  return `<section class="catalogue-section"><div class="catalogue-heading"><div><p class="eyebrow">${group.cards.length} CARDS</p><h2>${group.title}</h2></div><p>${group.description}</p></div><div class="catalogue-grid">${cards}</div></section>`;
}

function chunkCards(cards, size) {
  return Array.from({ length: Math.ceil(cards.length / size) }, (_, index) => cards.slice(index * size, (index + 1) * size));
}

function renderPrintSheets(cards) {
  return chunkCards(cards, CARDS_PER_SHEET).map((sheet, index) => `<section class="print-sheet" aria-label="Print sheet ${index + 1}">${sheet.join("")}</section>`).join("");
}

const renderedCards = CARD_GROUPS.flatMap(group => group.cards.map((card, index) => group.render(card, index)));
document.querySelector("#screenDeck").innerHTML = CARD_GROUPS.map(renderGroup).join("");
document.querySelector("#printDeck").innerHTML = renderPrintSheets(renderedCards);
document.querySelector("#printButton").addEventListener("click", () => window.print());
