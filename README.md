# BeerCatalog Project

BeerCatalog is a web application that fetches data from an API about various beers and displays it on a website. The project is built using modern web technologies to provide a seamless and interactive user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Introduction

BeerCatalog is designed to help users discover and learn about different kinds of beers. It fetches data from an external API and presents it in an organized and visually appealing manner.

## Features

- Fetches beer data from an external API
- Displays a list of beers with details such as name, type, alcohol content, and description
- Interactive UI with search functionality
- Responsive design for various screen sizes

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **CSS3**: Style sheet language for styling the web page
- **HTML5**: Markup language for the web page structure

## Project Setup

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/beercatalog.git
    ```

2. Navigate to the project directory:

    ```bash
    cd beercatalog
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Project Structure


- **public/**: Contains the `index.html` file.
- **src/**: Source files for the project.
  - **components/**: React components for the application.
    - **BeerCard.jsx**: Component to display individual beer details.
    - **BeerList.jsx**: Component to display a list of beers.
    - **SearchBar.jsx**: Component for the search functionality.
  - **services/**: Contains the API service file.
    - **api.js**: File for API calls using Axios.
  - **App.jsx**: Main application component.
  - **index.js**: Entry point for the React application.
  - **index.css**: Global styles for the application.

## Usage

After setting up the project, you can start the development server and view the BeerCatalog application in your browser. Use the search bar to find specific beers by name.

## API

The application fetches data from an external beer API. Here is an example of how to fetch data using Axios:

```javascript
import axios from 'axios';

const API_URL = 'https://api.example.com/beers';

export const fetchBeers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching beer data:', error);
    throw error;
  }
};

