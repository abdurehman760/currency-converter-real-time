# Currency Converter App

## Overview

The Currency Converter App is a React-based application that allows users to easily convert different currencies using real-time exchange rates. It features a user-friendly interface with dynamic currency selection and a built-in tooltip for additional information.

## Features

- **Currency Conversion:** Convert between a wide range of currencies with real-time exchange rates.
- **Dynamic Currency Selection:** Select currencies from a dropdown menu with search and filter functionality.
- **Responsive Design:** Modern and responsive layout suitable for various screen sizes.
- **Tooltip:** Provides information about the app and developer details.

## Components

### `ConverterForm`

- Handles currency conversion using the Open Exchange Rates API.
- Allows users to input an amount, select currencies, and swap them.
- Displays the conversion result and formatted amounts.

### `CurrencySelect`

- A dropdown component for selecting currencies.
- Includes search and filter functionality to easily find currencies.
- Displays currency names and flags.

### `Tooltip`

- A component that provides additional information about the app and developer.
- Includes a close button and functionality to close when clicking outside the tooltip.

### `App`

- The main application component that integrates `ConverterForm` and `Tooltip`.
- Displays the application title and the converter form.

## Installation

To set up and run the Currency Converter App locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abdurehman760/currency-converter-real-time.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd currency-calculator
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## API Key

The app uses the [Open Exchange Rates API](https://openexchangerates.org/) for fetching exchange rates. You need to replace the placeholder API key in `ConverterForm.jsx` with your own API key to make it work:

```jsx
const API_KEY = "your_api_key_here";

## Development

- **Build the app:** `npm run build`
- **Lint the code:** `npm run lint`
- **Preview the build:** `npm run preview`

## Contributing

Feel free to fork the repository and submit pull requests. For major changes or feature requests, please open an issue.



## Contact

For more information, visit my [GitHub](https://github.com/abdurehman760) or [Website](https://InDevelopment.com).
