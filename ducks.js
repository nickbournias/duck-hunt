const duckLibrary = [
  {
    id: 1,
    name: "Muscovy Duck",
    scientificName: "Cairina moschata",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/muscovy.webp",
    features: [
      "Red facial caruncles",
      "Hisses instead of quacks",
      "Large body, often white with black patches"
    ],
    nativeTo: "Central and South America",
    domesticated: true
  },
  {
    id: 2,
    name: "Mallard",
    scientificName: "Anas platyrhynchos",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/mallard.webp",
    features: [
      "Male has iridescent green head",
      "Distinctive blue speculum on wings",
      "Common ancestor of many domestic ducks"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: true
  },
  {
    id: 3,
    name: "Wood Duck",
    scientificName: "Aix sponsa",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/wood-duck.webp",
    features: [
      "Males have iridescent green and purple plumage",
      "Crested head",
      "Nests in tree cavities"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 4,
    name: "Northern Pintail",
    scientificName: "Anas acuta",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/northern_pintail.webp",
    features: [
      "Long, pointed tail",
      "Slim neck and elegant appearance",
      "Males have chocolate-brown head and white neck stripe"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 5,
    name: "American Black Duck",
    scientificName: "Anas rubripes",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/american_black_duck.jpeg",
    features: [
      "Dark brown body",
      "Purple speculum bordered by black",
      "Resembles female mallard but darker"
    ],
    nativeTo: "Eastern North America",
    domesticated: false
  },
  {
    id: 6,
    name: "Canvasback",
    scientificName: "Aythya valisineria",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/canvasback.jpg",
    features: [
      "Sloping forehead and long neck",
      "Males have red head and black chest",
      "Prefers diving for food"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 7,
    name: "Redhead",
    scientificName: "Aythya americana",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/redhead.jpg",
    features: [
      "Rounded head",
      "Males have bright red head and gray back",
      "Diving duck"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 8,
    name: "Ring-necked Duck",
    scientificName: "Aythya collaris",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/ring_necked_duck.jpg",
    features: [
      "Subtle chestnut ring on neck",
      "Males have black back and gray sides",
      "Distinctive white ring on bill"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 9,
    name: "Lesser Scaup",
    scientificName: "Aythya affinis",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/lesser_scaup.webp",
    features: [
      "Males have black head with purple sheen",
      "Light gray back",
      "Diving duck"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 10,
    name: "Greater Scaup",
    scientificName: "Aythya marila",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/greater_scaup.jpg",
    features: [
      "Males have greenish-black head",
      "Broad, rounded head shape",
      "Prefers coastal waters"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 11,
    name: "Gadwall",
    scientificName: "Mareca strepera",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/gadwall.jpg",
    features: [
      "Males have gray-brown body with black rear",
      "White speculum visible in flight",
      "Subtle and understated plumage"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 12,
    name: "Blue-winged Teal",
    scientificName: "Spatula discors",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/blue_winged_teal.jpg",
    features: [
      "Males have blue wing patch and white facial crescent",
      "Small and fast-flying",
      "Prefers shallow wetlands"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 13,
    name: "Green-winged Teal",
    scientificName: "Anas crecca",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/green_winged_teal.jpg",
    features: [
      "Males have chestnut head with green ear patch",
      "Smallest dabbling duck in North America",
      "Green speculum on wings"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 14,
    name: "Northern Shoveler",
    scientificName: "Spatula clypeata",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/northern_shoveler.jpg",
    features: [
      "Large, spatula-shaped bill",
      "Males have green head and white chest",
      "Feeds by skimming water surface"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 15,
    name: "Ruddy Duck",
    scientificName: "Oxyura jamaicensis",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/ruddy_duck.jpg",
    features: [
      "Males have bright blue bill and chestnut body",
      "Stiff tail often held upright",
      "Diving duck"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 16,
    name: "Bufflehead",
    scientificName: "Bucephala albeola",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/bufflehead.webp",
    features: [
      "Small size with large head",
      "Males have white patch on back of head",
      "Diving duck"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 17,
    name: "Common Goldeneye",
    scientificName: "Bucephala clangula",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/common_goldeneye.jpg",
    features: [
      "Males have greenish-black head with white cheek patch",
      "Bright yellow eyes",
      "Nests in tree cavities"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 18,
    name: "Hooded Merganser",
    scientificName: "Lophodytes cucullatus",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/hooded_merganser.jpg",
    features: [
      "Males have large white crest bordered in black",
      "Slender, serrated bill",
      "Diving duck"
    ],
    nativeTo: "North America",
    domesticated: false
  },
  {
    id: 19,
    name: "Common Merganser",
    scientificName: "Mergus merganser",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/common_merganser.jpg",
    features: [
      "Males have dark green head and white body",
      "Females have reddish-brown head",
      "Prefers rivers and lakes"
    ],
    nativeTo: "Northern Hemisphere",
    domesticated: false
  },
  {
    id: 20,
    name: "Mandarin Duck",
    scientificName: "Aix galericulata",
    image: "https://raw.githubusercontent.com/nickbournias/images/main/mandarin_duck.webp",
    features: [
      "Males have ornate, multicolored plumage",
      "Distinctive orange 'sails' on back",
      "Symbol of fidelity in East Asian culture"
    ],
    nativeTo: "East Asia",
    domesticated: false
  }
];

export default duckLibrary;