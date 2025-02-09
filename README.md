# Next.js Project with Clean Architecture

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

This project implements a **clean architecture** using Next.js, focusing on modularity, scalability, and maintainability. The main objective of this approach is to separate concerns and organize code in a way that facilitates expansion and easier management of the application over time.

### Key Features of the Refactor:
- **Modular Services**: API interaction is handled through services, ensuring a clear separation between the UI and the business logic.
- **State Management**: The global state is managed using [Zustand](https://github.com/pmndrs/zustand), a lightweight and scalable state management library.
- **Error Handling**: A custom `HttpError` class is used to provide centralized error management across the application.
- **Scalable Structure**: This architecture is designed to be easily extended, with clearly defined boundaries between different parts of the application.

## Getting Started

### 1. Install Dependencies

First, make sure you have installed all necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
