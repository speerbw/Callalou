# Image Assets Organization

This directory contains all image assets for the Callalou Ventures website, organized into subfolders for better management.

## Folder Structure

- `properties/` - Property and interior images used throughout the site
- `brand/` - Brand assets including Emil Brown headshot

## Image Mapping

### Properties Folder (`/images/properties/`)

#### Hero/Property Images

**`hero-property.jpg`**
- **Description:** Bright, empty room with modern industrial-loft aesthetic. Large window with cityscape view showing green trees and red-brick buildings. Represents "home," stability, growth, and community. The cityscape view represents Cincinnati while the overall warmth hints at Antigua or a sense of belonging.
- **Usage:** Homepage hero section (`HomeHero.tsx`)
- **Recommended Size:** 1200x900px
- **Alt Text:** "Callalou Ventures property - a welcoming home with cityscape view"

**`antigua-cincinnati.jpg`**
- **Description:** Outdoor parking lot surrounded by several brick buildings under a partly cloudy blue sky. Urban/industrial area with red brick buildings of different heights. Represents the journey from Antigua to Cincinnati and the urban setting where Callalou Ventures operates.
- **Usage:** Homepage Emil intro section (`HomeEmilIntro.tsx`)
- **Recommended Size:** 800x600px
- **Alt Text:** "Urban Cincinnati scene with brick buildings - representing the journey from Antigua"

#### Interior/Home Images

**`home-interior-1.jpg`**
- **Description:** Modern kitchen interior with light-toned wooden cabinetry, dark granite countertops, and black appliances. Clean, contemporary space with L-shaped layout. Represents quality housing and welcoming home environments.
- **Usage:** Why Home Matters gallery on homepage (`HomeWhyHomeMatters.tsx`)
- **Recommended Size:** 600x600px
- **Alt Text:** "Modern kitchen with quality finishes - representing quality housing"

**`home-interior-2.jpg`**
- **Description:** Bright, empty room with modern industrial-loft aesthetic. Large window spanning most of the far wall with panoramic cityscape view. Warm hardwood floors, neutral walls, exposed conduit. Represents welcoming, light-filled homes.
- **Usage:** Why Home Matters gallery on homepage (`HomeWhyHomeMatters.tsx`)
- **Recommended Size:** 600x600px
- **Alt Text:** "Bright room with large windows - representing welcoming home"

**`property-exterior-1.jpg`**
- **Description:** Empty room with industrial-loft aesthetic. Exposed, distressed red brick wall with large multi-pane windows. Polished concrete floor, white walls, exposed conduit. Represents renovated properties and modern industrial spaces.
- **Usage:** Why Home Matters gallery on homepage (`HomeWhyHomeMatters.tsx`)
- **Recommended Size:** 600x600px
- **Alt Text:** "Industrial loft with brick wall - representing renovated properties"

**`property-exterior-2.jpg`**
- **Description:** Spacious, well-lit art gallery with modern, industrial-chic aesthetic. High white ceilings with exposed beams, wide distressed wooden planks, white walls. Represents community spaces, creative environments, and places where people gather.
- **Usage:** Why Home Matters gallery on homepage (`HomeWhyHomeMatters.tsx`)
- **Recommended Size:** 600x600px
- **Alt Text:** "Art gallery space - representing community and creative spaces"

### Brand Folder (`/images/brand/`)

**`emil-headshot.jpg`**
- **Description:** Professional headshot of Emil Brown. Smiling Black man in business casual attire (dark blue/charcoal blazer, maroon V-neck sweater, plaid shirt). Warm, friendly expression. Light grey background. Professional photography quality.
- **Usage:** About page (`EmilStory.tsx`), brand materials, social media
- **Recommended Size:** 800x1067px (3:4 aspect ratio)
- **Alt Text:** "Emil Brown - Founder of Callalou Ventures"

## Image Requirements

- **Format:** JPG or WebP (preferred for better compression)
- **Optimization:** All images should be compressed for web use
- **Responsive:** Images should work well at various screen sizes
- **Accessibility:** Always include descriptive alt text

## Notes

- These image descriptions are placeholders. Once you have the actual image files, place them in the appropriate folders with the exact filenames listed above.
- The components are already configured to use these paths, so simply adding the files will make them appear on the site.
- Consider using Next.js Image optimization features (already implemented) for best performance.
