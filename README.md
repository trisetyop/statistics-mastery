# StatQuest: Gamified Statistics Mastery

[cloudflarebutton]

StatQuest is a visually stunning, gamified flashcard-style quiz application designed to help students master introductory statistics. The application leverages a simplified spaced repetition system (SRS), inspired by Anki, to optimize learning and retention. Users can select from various topics, engage in quiz sessions, and receive immediate feedback on their answers. Gamification elements such as points, streaks, and mastery levels are integrated to create an engaging and motivating learning experience. The entire user interface is designed with a focus on visual excellence, featuring a clean, modern aesthetic, smooth animations, and delightful micro-interactions, all built upon a high-performance, serverless architecture using Cloudflare Workers.

## ✨ Key Features

-   **Gamified Learning:** Earn points, build streaks, and track mastery levels to stay motivated.
-   **Spaced Repetition System (SRS):** A simplified Anki-style algorithm prioritizes questions you need to review, maximizing retention.
-   **Comprehensive Content:** Covers a wide range of introductory statistics topics, from descriptive stats to hypothesis testing.
-   **Instant Feedback:** Know immediately if your answer is correct, reinforcing learning in real-time.
-   **Stunning & Responsive UI:** A beautiful, modern interface that looks and works perfectly on any device.
-   **Progress Dashboard:** Visualize your overall progress and see which topics you've mastered.
-   **High-Performance:** Built on Cloudflare's serverless platform for a fast and seamless experience.

## 🛠️ Technology Stack

-   **Frontend:** React, Vite, TypeScript
-   **Backend & Hosting:** Cloudflare Workers, Hono
-   **Styling:** Tailwind CSS, shadcn/ui
-   **State Management:** Zustand
-   **Animation:** Framer Motion
-   **Icons:** Lucide React

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   A code editor like [VS Code](https://code.visualstudio.com/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/statquest.git
    cd statquest
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```bash
    bun install
    ```

3.  **Run the development server:**
    This command starts the Vite development server, making the application available at `http://localhost:3000`.
    ```bash
    bun run dev
    ```

## 📁 Project Structure

-   `src/`: Contains all the frontend React application code.
    -   `components/`: Reusable UI components, including shadcn/ui components.
    -   `pages/`: Top-level page components for each view.
    -   `lib/`: Utility functions and libraries.
    -   `hooks/`: Custom React hooks.
    -   `stores/`: Zustand state management stores.
-   `worker/`: Contains the Cloudflare Worker server-side code (Hono API).
-   `public/`: Static assets that are served directly.

## 💻 Development

-   **Run dev server:** `bun run dev`
-   **Build for production:** `bun run build`
-   **Lint the code:** `bun run lint`

The development server supports hot-reloading, so any changes you make to the code in `src/` will be reflected in your browser instantly.

## ☁️ Deployment

This project is configured for seamless deployment to **Cloudflare Pages**.

### One-Click Deploy

You can deploy your own version of StatQuest with a single click:

[cloudflarebutton]

### Manual Deployment via Wrangler

If you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/) configured, you can deploy the application manually.

1.  **Build the project:**
    ```bash
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    This command will build and deploy your application to your Cloudflare account.
    ```bash
    bun run deploy
    ```

Wrangler will handle the process of uploading the static assets and the serverless worker function.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.