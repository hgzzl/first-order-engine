export const STAT_META = {
  brand: { label: "Brand", color: "#dc6f8e" },
  fulfillment: { label: "Fulfillment", color: "#5d84e6" },
  production: { label: "Production", color: "#e7b84a" },
  staffing: { label: "Staffing", color: "#8a72ce" },
  operations: { label: "Operations", color: "#4f9a70" },
};

export const TALENT_ART = {
  brand: "assets/talent/brand.webp",
  fulfillment: "assets/talent/fulfillment.webp",
  production: "assets/talent/production.webp",
  staffing: "assets/talent/staffing.webp",
  operations: "assets/talent/operations.webp",
};

export const TALENT_CARD_ART = {
  "Launch Lab": "assets/illustrations/shared/launch-plan.webp",
  "Northstar Creative": "assets/illustrations/shared/newspaper.webp",
  "Conversion Studio": "assets/illustrations/shared/checkout.webp",
  "Supply Chain Partners": "assets/illustrations/shared/supplier-contract.webp",
  "Growth Collective": "assets/illustrations/shared/community.webp",
  "Product Design House": "assets/illustrations/shared/product-inspection.webp",
  "Operations Consultancy": "assets/illustrations/shared/operations-gears.webp",
  "Logistics Network": "assets/illustrations/shared/warehouse-key.webp",
  "Brand Director": "assets/illustrations/shared/magazine.webp",
  "Fulfillment Lead": "assets/illustrations/shared/direct-delivery.webp",
  "Production Manager": "assets/illustrations/shared/maker.webp",
  "People Lead": "assets/illustrations/shared/employee-welcome.webp",
  "Operations Manager": "assets/illustrations/shared/operations-gears.webp",
  "Customer Success Rep": "assets/illustrations/shared/customer-chat.webp",
  "Inventory Planner": "assets/illustrations/shared/inventory.webp",
  "Warehouse Crew": "assets/illustrations/shared/shipping-boxes.webp",
  "Shopify Flow": "assets/illustrations/shared/automation.webp",
  "Shopify Sidekick": "assets/illustrations/shared/launch-plan.webp",
  "Shopify Markets": "assets/illustrations/shared/tracking.webp",
  "Shopify Shipping": "assets/illustrations/shared/two-day.webp",
  "Shopify Bundles": "assets/illustrations/shared/premium-gift.webp",
  "Shopify Collabs": "assets/illustrations/shared/partner-handshake.webp",
  "Shopify POS": "assets/illustrations/shared/checkout.webp",
  "Shopify Collective": "assets/illustrations/shared/community.webp",
};

export const MILESTONE_ART = {
  "First profitable order": "assets/illustrations/shared/coins.webp",
  "Weekend market sellout": "assets/illustrations/shared/market-sellout.webp",
  "Reliable supplier network": "assets/illustrations/shared/supplier-contract.webp",
  "A team that scales": "assets/illustrations/shared/employee-welcome.webp",
  "Retailer pilot": "assets/illustrations/shared/retailer-handshake.webp",
  "Repeat customer engine": "assets/illustrations/shared/reviews.webp",
  "Two-day dispatch": "assets/illustrations/shared/two-day.webp",
  "Operational excellence": "assets/illustrations/shared/automation.webp",
  "Holiday rush": "assets/illustrations/shared/holiday-victory.webp",
  "National press feature": "assets/illustrations/shared/press-interview.webp",
  "10,000th order": "assets/illustrations/shared/ten-thousand.webp",
  "Flagship collaboration": "assets/illustrations/shared/partner-handshake.webp",
  "International launch": "assets/illustrations/shared/tracking.webp",
  "BFCM record": "assets/illustrations/shared/crowd.webp",
  "Category leader": "assets/illustrations/shared/category-podium.webp",
};

export const ECONOMY_ART = {
  upkeep: { src: "assets/economy/upkeep-coin.webp", label: "$1 upkeep each turn" },
  permanent: { src: "assets/economy/shopy-bag.webp", label: "Permanent skill, no upkeep" },
};

export const FOUNDER_ART = {
  brand: "assets/founders/brand.webp",
  fulfillment: "assets/founders/fulfillment.webp",
  production: "assets/founders/production.webp",
  staffing: "assets/founders/staffing.webp",
  operations: "assets/founders/operations.webp",
};

export const CHAOS_ART = {
  c1: "assets/illustrations/chaos/algorithm-change.webp",
  c2: "assets/illustrations/chaos/ops-breakthrough.webp",
  c3: "assets/illustrations/chaos/talent-shuffle.webp",
  c4: "assets/illustrations/chaos/new-priorities.webp",
  c5: "assets/illustrations/chaos/hiring-rebate.webp",
};

export const CARD_FLAVOUR = {
  "Launch Lab": "Your launch plan has a launch plan.",
  "Northstar Creative": "The brand deck finally stopped saying ‘TBD.’",
  "Conversion Studio": "The buy button is now doing its job.",
  "Supply Chain Partners": "They hit MOQ. They return emails. They exist.",
  "Growth Collective": "The group chat has become a funnel.",
  "Product Design House": "Prototype seventeen is the one. Probably.",
  "Operations Consultancy": "They made a swimlane. Things moved.",
  "Logistics Network": "Three warehouses. Zero garage boxes.",
  "Brand Director": "Our social account no longer looks like it was made in 2011.",
  "Fulfillment Lead": "Shipping zones are no longer a mystery. We have ascended.",
  "Production Manager": "Speaks fluent MOQ at 2 a.m.",
  "People Lead": "The onboarding doc has an onboarding doc.",
  "Operations Manager": "Stuff just works now. We don't ask questions.",
  "Customer Success Rep": "We finally stopped letting emails sit for six days.",
  "Inventory Planner": "We know what's in stock. No more guessing in Slack.",
  "Warehouse Crew": "They own matching high-vis vests. This is happening.",
  "Shopify Flow": "If inventory is low, email the supplier. Why didn't we do this sooner?",
  "Shopify Sidekick": "A second brain that never asks for equity.",
  "Shopify Markets": "Global selling, local-feeling checkout.",
  "Shopify Shipping": "Labels printed. Tears prevented.",
  "Shopify Bundles": "Two slow movers become one bestseller.",
  "Shopify Collabs": "Creator codes that finance themselves.",
  "Shopify POS": "Same inventory. No spreadsheet reconciliation at 11 p.m.",
  "Shopify Collective": "More products. No new warehouse.",
};

export const talentDeck = [
  ["Launch Lab", "Agency", "agency", { brand: 2, production: 1 }, "#f0aac2"],
  ["Northstar Creative", "Agency", "agency", { brand: 2, operations: 1 }, "#efb6ca"],
  ["Conversion Studio", "Agency", "agency", { brand: 1, fulfillment: 1, operations: 1 }, "#e6a5bc"],
  ["Supply Chain Partners", "Agency", "agency", { production: 2, fulfillment: 1 }, "#eac578"],
  ["Growth Collective", "Agency", "agency", { brand: 2, staffing: 1 }, "#e9afcc"],
  ["Product Design House", "Agency", "agency", { production: 2, brand: 1 }, "#efbd8f"],
  ["Operations Consultancy", "Agency", "agency", { operations: 2, staffing: 1 }, "#9fcbb0"],
  ["Logistics Network", "Agency", "agency", { fulfillment: 2, operations: 1 }, "#a7c7ea"],
  ["Brand Director", "Staff", "staffing", { brand: 3 }, "#dc83a4"],
  ["Fulfillment Lead", "Staff", "staffing", { fulfillment: 3 }, "#729be6"],
  ["Production Manager", "Staff", "staffing", { production: 3 }, "#e2b44e"],
  ["People Lead", "Staff", "staffing", { staffing: 3 }, "#9679cf"],
  ["Operations Manager", "Staff", "staffing", { operations: 3 }, "#63a57c"],
  ["Customer Success Rep", "Staff", "staffing", { brand: 1, fulfillment: 2 }, "#d99db6"],
  ["Inventory Planner", "Staff", "staffing", { production: 1, operations: 2 }, "#bfca8d"],
  ["Warehouse Crew", "Staff", "staffing", { fulfillment: 2, staffing: 1 }, "#9abbe3"],
  ["Shopify Flow", "Shopify Tool", "tool", { operations: 1 }, "#95d5ae"],
  ["Shopify Sidekick", "Shopify Tool", "tool", { staffing: 1 }, "#b8a2e4"],
  ["Shopify Markets", "Shopify Tool", "tool", { brand: 1 }, "#e8a6be"],
  ["Shopify Shipping", "Shopify Tool", "tool", { fulfillment: 1 }, "#9fbfea"],
  ["Shopify Bundles", "Shopify Tool", "tool", { production: 1 }, "#e8c66e"],
  ["Shopify Collabs", "Shopify Tool", "tool", { brand: 1 }, "#e7abc3"],
  ["Shopify POS", "Shopify Tool", "tool", { operations: 1 }, "#8cc9a4"],
  ["Shopify Collective", "Shopify Tool", "tool", { production: 1 }, "#e4c276"],
].map(([name, kind, type, stats, color], id) => ({ id: `t${id}`, name, kind, type, stats, color }));

export const milestoneDeck = [
  // Objectives deliberately reward different engine shapes: specialists, pairs, and balanced teams.
  ["First profitable order", "Order", { brand: 3 }, { cash: 3 }, 1, "#dbeaa2"],
  ["Weekend market sellout", "Order", { fulfillment: 3 }, { cash: 4 }, 0, "#f2c0a7"],
  ["Reliable supplier network", "Milestone", { production: 4 }, { cash: 4 }, 2, "#efd48e"],
  ["A team that scales", "Milestone", { staffing: 4 }, { cash: 0 }, 3, "#cdbbe8"],
  ["Retailer pilot", "Order", { fulfillment: 4, brand: 1 }, { cash: 6 }, 2, "#afd0ed"],
  ["Repeat customer engine", "Milestone", { brand: 4, fulfillment: 1 }, { cash: 3 }, 3, "#eeb6ca"],
  ["Two-day dispatch", "Milestone", { fulfillment: 5, operations: 1 }, { cash: 7 }, 0, "#b6d2ef"],
  ["Operational excellence", "Milestone", { operations: 5, staffing: 1 }, { cash: 0 }, 4, "#add8bf"],
  ["Holiday rush", "Order", { production: 4, staffing: 2 }, { cash: 8 }, 0, "#f0c891"],
  ["National press feature", "Order", { brand: 6, operations: 1 }, { cash: 0 }, 5, "#f0b2c1"],
  ["10,000th order", "Milestone", { fulfillment: 5, operations: 2 }, { cash: 9 }, 0, "#cae49c"],
  ["Flagship collaboration", "Order", { brand: 4, production: 3 }, { cash: 4 }, 4, "#efb99f"],
  ["International launch", "Milestone", { fulfillment: 4, brand: 2, operations: 2 }, { cash: 9 }, 4, "#b5d7cf"],
  ["BFCM record", "Order", { production: 4, fulfillment: 4 }, { cash: 10 }, 4, "#e7c37b"],
  ["Category leader", "Milestone", { operations: 5, brand: 3 }, { cash: 0 }, 6, "#d4b1df"],
].map(([name, kind, requirements, reward, points, color], id) => ({ id: `m${id}`, name, kind, requirements, reward, points, color }));

export const FOUNDER_ARCHETYPES = [
  { name: "The Storyteller", stat: "brand" },
  { name: "The Logistics Pro", stat: "fulfillment" },
  { name: "The Maker", stat: "production" },
  { name: "The People Builder", stat: "staffing" },
  { name: "The Systems Thinker", stat: "operations" },
];

export const CHAOS_CARDS = [
  { id: "c1", name: "Brand tax", title: "The algorithm changed again", description: "Brand requirements increase by 1 on every Order and Milestone until the next Chaos Monkey.", effect: "skill", stat: "brand", delta: 1 },
  { id: "c2", name: "Ops breakthrough", title: "Someone finally read the spreadsheet", description: "Operations requirements decrease by 1 on every Order and Milestone until the next Chaos Monkey.", effect: "skill", stat: "operations", delta: -1 },
  { id: "c3", name: "Talent shuffle", title: "Unexpected re-org", description: "Every founder with Agency or Staff cards must choose one to discard.", effect: "discard" },
  { id: "c4", name: "New priorities", title: "The roadmap has changed", description: "Replace all five open Orders and Milestones.", effect: "refresh" },
  { id: "c5", name: "Hiring rebate", title: "A little free money", description: "Drafting from the Talent Market earns $1 until the next Chaos Monkey.", effect: "cashback" },
];
