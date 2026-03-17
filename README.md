# How Many Melody Lanes? (それって何メロディーレーン？)

A fun Web application built with React and Vite that allows you to calculate what your weight (or any object's weight) equals in units of the famous Japanese racehorse, "Melody Lane" (メロディーレーン).

## 🐎 About Melody Lane
Melody Lane is known for being an unusually small but beloved Thoroughbred racehorse in Japan. This application uses her approximate racing weight (338kg) as the standard unit of measurement!

## ✨ Features

- **Standard Mode (スタンダード)**: Simply calculates how many "Melody Lanes" the weight corresponds to (1 Melody Lane = 338kg).
- **Various Mode (いろいろ)**: Calculates the weight in a combination of:
  - Adult Melody Lanes (338kg)
  - Newborn Foal Melody Lanes (20kg)
  - Carrots (0.2kg)
- **Share Results**: Share your unique weight calculation results on X (Twitter), LINE, or copy them to your clipboard.
- **Responsive Design**: Designed to work beautifully across devices.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18)
- **Routing**: React Router DOM (v6)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: SCSS / Sass with `sanitize.css`

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd vite-react-melo
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:

```bash
npm run dev
```
The application will be available at `http://localhost:5173/` by default.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the built app locally:

```bash
npm run preview
```

## 📂 Project Structure

- `src/components/`: Contains all React components (`App`, `Title`, `Form`, `StandardResult`, `VariousResult`, etc.)
- `src/assets/`: Contains images and vector graphics used in the application.
- `src/App.scss` & `src/index.scss`: Global/component styles using Sass.

## 📝 License

This project is open-source. (Update with appropriate license if required).
