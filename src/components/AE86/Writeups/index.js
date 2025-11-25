// Import all metadata and content components
import { sr20deSwapMeta, Sr20deSwapContent } from "./Sr20deSwap";

// Export individual metadata
export { sr20deSwapMeta, Sr20deSwapContent };

// Export metadata array for list display
export const writeupsMeta = [
  sr20deSwapMeta,
];

// Mapping for easy lookup by slug
const contentMap = {
  "sr20de-swap": Sr20deSwapContent,
};

export function getWriteupContent(slug) {
  return contentMap[slug];
}
