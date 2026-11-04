# La-Rochelle – Stationery Marketplace

La-Rochelle is a responsive digital stationery marketplace developed as a proposed online shopping platform for an existing stationery shop in my local town. The business does not currently have a digital marketplace, and this project explores how an online platform could help extend its presence beyond its physical store.

The application provides customers with a convenient way to browse stationery products, search and filter the catalogue, view individual product details, and manage items in a shopping cart.

The project was developed as part of the Frontend Development final project using React, Vite and Tailwind CSS.

## Live Demo

- **Live Website:** https://la-rochelle-sigma.vercel.app/
- **GitHub Repository:** https://github.com/Moni19-ghub/Final-Project-La-Rochelle

## Features

- **Product Catalogue:** Browse a collection of 12 stationery products.
- **Search:** Search for products by name.
- **Category Filtering:** Filter products by category.
- **Product Details:** View individual product information through dynamic routes.
- **Shopping Cart:** Add products, remove products and update quantities.
- **Cart Counter:** View the current number of items in the navigation bar.
- **Newsletter Form:** Submit an email address with client-side validation and submission feedback.
- **Responsive Design:** Layout adapts to desktop, tablet and mobile screen sizes.
- **404 Page:** Displays a custom page for invalid routes.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- React Context API
- Tailwind CSS
- Git and GitHub
- Vercel

## Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Moni19-ghub/Final-Project-La-Rochelle.git
```

### 2. Navigate into the project directory

```bash
cd Final-Project-La-Rochelle
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Create a production build

```bash
npm run build
```
### Lighthouse Accessibility and Testing Results

#### Desktop Lighthouse Results

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Home - Before Optimisation | 82 | 100 | 100 | 83 |
| Home - After Optimisation | 100 | 100 | 100 | 92 |
| Product Details | 91 | 100 | 100 | 92 |
| Shopping Cart | 100 | 100 | 100 | 91 |
| Not Found | 100 | 100 | 100 | 91 |

#### Mobile Lighthouse Results

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Home | 100 | 100 | 100 | 92 |
| Product Details | 97 | 100 | 100 | 92 |
| Shopping Cart | 100 | 100 | 100 | 91 |
| Not Found | 100 | 100 | 100 | 91 |

The Home page desktop Performance score improved from 82 to 100, an increase of 18 points. The SEO score also improved from 83 to 92, an increase of 9 points.

All tested pages achieved a Lighthouse Accessibility score of 100 on both desktop and mobile.

## Performance Optimisation

Several optimisations were implemented to improve the application's loading performance and overall user experience.

- **Image Optimisation:** The original JPG product images were converted into WebP format, resized and compressed using Sharp. This reduced the combined image size from approximately 16 MB to 660 KB.
- **Lazy Loading:** Lazy loading was implemented for product images so that images are loaded as they are needed, rather than all being loaded immediately when the page opens. This helps reduce the initial loading workload and improves performance.

These improvements were evaluated using Google Lighthouse audits on both desktop and mobile devices.

## Limitations and Future Improvements

- The newsletter form currently simulates a successful subscription and is not connected to a backend service.
- Future improvements could include backend integration, user accounts and a complete checkout process.

## Author

Monique Warner
