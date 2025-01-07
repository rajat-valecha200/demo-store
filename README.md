# Product Listing App

A simple e-commerce product listing application built using Next.js. This app fetches product data from an API and displays it in a responsive grid layout with interactive features like image display, product description, and navigation to individual product details.

## Features

- Fetches product data from [Fake Store API](https://fakestoreapi.com).
- Displays product information like title, description, price, and image.
- Responsive grid layout for product display.
- Click on a product to navigate to its details page.

## Technologies Used

- **Next.js** - Framework for building React applications with server-side rendering and static site generation.
- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Next.js Image Component** - Optimized image handling in Next.js.

## Setup

To run the app locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajat-valecha200/demo-store.git

2. **Install dependencies**:
   Navigate to the project directory and run:
   ```bash
   cd demo-store
   npm install
   ```

3. **Run the development server**:
   Start the Next.js development server:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Open your browser and visit `http://localhost:3000`.

## Folder Structure

```
/src/app
    /components
        /Header.js          - Header component
        /HeroSection.js     - Hero section component
        /ProductsList.js    - Product listing component
    /pages.js
/public
  /assets             - Images and static assets
/styles
  /globals.css        - Global styles (Tailwind CSS)
next.config.js        - Next.js configuration file
```

## API Used

This app fetches product data from the [Fake Store API](https://fakestoreapi.com/products), which provides fake product information for testing and prototyping.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
