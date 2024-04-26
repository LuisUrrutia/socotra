## Socotra Car Insurance Work Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and enriched with [Shadcn/UI](https://ui.shadcn.com/).

[Storybook](https://storybook.js.org/) has been utilized in this project as a tool for viewing components during development and for sharing with the design team. In a real-world scenario, we could benefit from the [Figma Storybook plugin](https://www.figma.com/community/plugin/1056265616080331589/storybook-connect) to export components directly to Figma, facilitating rapid prototyping.

This project was built using [Node 20](https://nodejs.org/en), and includes .nvmrc and .tool-versions files to facilitate compatibility with version managers such as [nvm](https://github.com/nvm-sh/nvm), [asdf](https://asdf-vm.com/), and [mise](https://mise.jdx.dev/).

## Getting Started

First, install all dependencies:
```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes

- The requirements did not specify the deletion functionality for vehicles and drivers, nor the ability to navigate backwards in the wizard. Due to the limited timeframe, I focused strictly on meeting the Figma specifications and chose not to implement these features, although I did recognize potential areas for enhancement.
- I initially considered using server-side rendering (SSR) for the project, which led me to skip state managers like Redux or Zustand. However, due to time constraints, I shifted to using purely client-side components. Similarly, I opted not to use libraries like react-hook-form for this reason.
- I thought about implementing unit tests with Jest and end-to-end testing with Playwright, but due to the limited timeframe, I did not prioritize these aspects.
- I showcased Storybook to illustrate that, if it's not already in use on Socotra, I would implement it or utilize it extensively. This is because Storybook allows for the export of components to Figma via the Chromatic plugin, which can significantly reduce prototyping time for both designers and developers.
- I utilized AI tools to assist with coding, such as Copilot, and also employed ChatGPT to generate basic logic for calculating insurance costs.
- I observed that your Figma designs use tokens and also incorporate Tailwind (as indicated by the color naming convention). Consequently, I implemented Shadcn, which is based on Tailwind components. I attempted to export tokens from Figma, but the necessary library was absent, preventing me from doing so. Therefore, I maintained the design consistency using CSS variables and the Tailwind configuration to demonstrate my experience working with design tokens.
- I didn't implement form error feedback or more complex validation logic, such as ensuring the vehicle year is later than the first car's year and no later than the current year, because I focused on the existing requirements. However, given more time, I would have addressed these enhancements.