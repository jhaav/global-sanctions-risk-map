var sanctionsData = {
  "RUS": { tier: "High - Sectoral", entities: 12450, programs: "OFAC SDN, EU-Russia, CAATSA, UN" },
  "IRN": { tier: "High - Comprehensive", entities: 8500, programs: "OFAC Iran, EU, UN" },
  "PRK": { tier: "High - Comprehensive", entities: 4500, programs: "UN, OFAC DPRK" },
  "SYR": { tier: "High - Comprehensive", entities: 3200, programs: "EU-Syria, OFAC" },
  "BLR": { tier: "Medium - Sectoral", entities: 1800, programs: "EU-Belarus, OFAC" },
  // Add more: "VEN": {...}, "CUB": {...}, etc.
  // Use ISO3 codes matching the GeoJSON (properties.ISO_A3 or ADM0_A3)
};
