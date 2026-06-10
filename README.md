# Lillian Siyoi Foundation Website

A modern, robust, multi-page website for the Lillian Siyoi Foundation built with Next.js 16, React 19, and Stripe integration. Features a stunning hero carousel with professional photography, comprehensive program information, team profiles, and a complete donation system.

## Features

### 🎯 Multi-Page Structure
- **Home** (`/`): Hero carousel with auto-rotating images, programs overview, impact statistics, team, footer
- **About** (`/about`): Mission, vision, and core values with detailed organizational information
- **Contact** (`/contact`): Contact form, location, phone, and email with professional styling
- **Navigation**: Sticky navbar with mobile-responsive drawer menu, persistent donate button

### 🎠 Hero Carousel
- **Auto-Rotating Images**: 5 professional photographs auto-rotate every 5 seconds
- **Manual Navigation**: Previous/Next buttons for manual slide control
- **Indicator Dots**: Visual feedback showing current slide with quick navigation
- **Responsive Overlay**: Beautiful text overlays with mission statements on each slide
- **Dual CTAs**: "Make a Donation" and "Learn More" buttons on each slide

### 💳 Donation System
- **Modal Interface**: Beautiful, accessible donation modal with backdrop
- **Frequency Toggle**: One-time or monthly donation options
- **Preset Amounts**: Quick-select donation tiers (KSh 1,000 / 5,000 / 10,000)
- **Custom Amounts**: Input custom donation amounts with live preview
- **Stripe Integration**: Secure payment processing with Stripe Elements
- **Payment Form**: Card details collection with proper validation and error handling
- **Success Confirmation**: Post-donation success message with thank you note

### 🎨 Professional Visual Design
- **Hero Carousel**: 5 authentic photographs of communities, healthcare, education, environment
- **Program Cards**: Each program has a professional illustration/image with hover effects
- **Team Profiles**: Professional headshots of team members with bios
- **Color Palette**: 
  - Primary: Deep organic green (climate/environmental focus)
  - Secondary: Mid-tone green (wellness focus)
  - Accent: Warm earth tone (education focus)
  - Neutrals: Clean whites and dark grays
- **Typography**: Two-font system with elegant spacing and hierarchy
- **Responsive Design**: Mobile-first approach with smooth transitions and animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, focus states

## Tech Stack

- **Framework**: Next.js 16 with App Router and Turbopack
- **UI Library**: React 19.2 with latest hooks and features
- **Styling**: Tailwind CSS v4 with semantic design tokens and custom animations
- **Images**: Next.js Image component with optimization
- **Payment**: Stripe API with @stripe/react-stripe-js for secure card processing
- **UI Components**: shadcn/ui patterns and custom React components
- **Icons**: Lucide React for consistent iconography
- **Forms**: Client-side form validation with React state management
- **Animations**: CSS keyframes and Tailwind transitions for smooth effects
- **TypeScript**: Full type safety across the codebase
- **Fonts**: Geist Sans and Geist Mono from Next.js

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata and styling
├── page.tsx               # Home page with all sections
├── globals.css            # Global styles and design tokens
├── about/
│   └── page.tsx          # About page with mission, vision, values
├── contact/
│   └── page.tsx          # Contact page with form and contact info
└── api/
    └── donations/
        └── route.ts      # Stripe Payment Intent API endpoint

components/
├── navbar.tsx            # Sticky navigation with mobile menu
├── hero.tsx             # Hero section wrapper
├── hero-carousel.tsx    # Auto-rotating carousel with images
├── programs.tsx         # Programs grid with images
├── impact.tsx          # Impact statistics section
├── team.tsx            # Team member cards with images
├── footer.tsx          # Footer with links and contact info
├── donation-modal.tsx  # Donation modal wrapper
└── payment-form.tsx    # Stripe payment form

public/images/
├── hero-1.png through hero-5.png     # Hero carousel images
├── climate-action.png                # Climate program image
├── health-initiative.png             # Health program image
├── education.png                     # Education program image
└── team-1.png through team-4.png     # Team member photos
```

## Installation & Setup

### Using shadcn CLI (Recommended)
```bash
npx shadcn-cli@latest init --preset v0-llm
cd <project-name>
git clone <this-repo> .
pnpm install
```

### Manual Setup
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd lillian-siyoi-foundation
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Stripe API keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
   Get your keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

## Key Features Implementation

### Donation Modal Flow
1. User clicks "Donate" button anywhere on the page
2. Modal opens with frequency and amount selection
3. User selects preset or custom amount
4. Clicks "Continue to Payment"
5. Payment form opens with card details input
6. Stripe processes the payment
7. Success confirmation displayed

### API Integration
The `/api/donations` endpoint:
- Creates Stripe Payment Intent
- Manages customer records
- Handles both one-time and subscription donations
- Stores donation metadata (donor name, email, type)

### Responsive Design
- **Mobile (320px-767px)**: Single column, stacked navigation drawer, full-width buttons
- **Tablet (768px-1023px)**: Two-column grids, visible navigation
- **Desktop (1024px+)**: Three-column grids, optimized spacing

## Customization

### Colors
Edit design tokens in `app/globals.css`:
```css
:root {
  --primary: oklch(0.38 0.15 142);        /* Deep green */
  --secondary: oklch(0.65 0.11 142);      /* Mid green */
  --accent: oklch(0.55 0.12 37);          /* Earth tone */
}
```

### Content
Update content in respective component files:
- Team members: `/components/team.tsx`
- Programs: `/components/programs.tsx`
- Impact stats: `/components/impact.tsx`
- Contact info: `/components/footer.tsx`

### Stripe Settings
- Test mode: Use test card `4242 4242 4242 4242`
- Update currency codes in `/app/api/donations/route.ts` as needed

## Security

- Stripe Secret Key is server-side only
- Payment Intent creation is backend-only
- Customer data is encrypted by Stripe
- HTTPS enforced in production
- Input validation on all forms
- CSRF protection via Next.js

## Performance

- Next.js 16 Turbopack for fast builds
- React Compiler support for automatic optimization
- CSS Grid/Flexbox for efficient layouts
- Optimized images and icons
- No heavy external libraries

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

Deploy to Vercel with one click:
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in project settings
4. Deploy

Or build for production:
```bash
pnpm build
pnpm start
```

## License

© 2026 Lillian Siyoi Foundation. All rights reserved.

## Support

For issues or questions, please contact:
- Email: info@lilliansiyoifoundation.org
- Phone: +254 (0) 700 000 000
- Location: Nairobi, Kenya
