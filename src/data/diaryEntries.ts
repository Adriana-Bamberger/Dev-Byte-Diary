import { DiaryEntry } from '../types'

// Sample data
export const sampleEntries: DiaryEntry[] = [
  {
    id: 'entry-1',
    date: '2023-03-23',
    title: 'Thursday The 23th of March 2023',
    description:
      'A day of exploring basic concepts and setting up the development environment.',
    content:
      "This is a demo of the kind of text that would be on these pages, I'm not sure how much I would have here but it would keep going on and on as I make point after point.",
    bullets: [
      "This is not my notion and it doesn't have a good idea of what the rest of notes are",
      "It's a tool to get my github green squares up nothing fancy",
      'It just prints what I tell it too',
      "That kind of thing, don't really have to overcomplicate it",
    ],
  },
  {
    id: 'entry-2',
    date: '2023-03-24',
    title: 'Friday The 24th of March 2023',
    description:
      'Deep dive into React hooks and modern state management approaches.',
    content:
      "This is a demo of the kind of text that would be on these pages, I'm not sure how much I would have here but it would keep going on and on as I make point after point.",
    bullets: [
      'Today I learned about React hooks and how they can replace class components',
      'Worked on implementing useContext for global state management',
      'Fixed that annoying bug with the API response formatting',
      'Need to refactor the authentication flow tomorrow',
      'Started looking into performance optimizations for the app',
      'Found a great article about React best practices',
      'Learned about the new React 18 features and concurrent mode',
      'Discovered a better way to handle form validation',
      'Implemented a custom hook for handling API requests',
      'Read about the benefits of using TypeScript with React',
      'Practiced writing more unit tests for components',
      'Had a productive pair programming session with a colleague',
    ],
  },
  {
    id: 'entry-3',
    date: '2023-03-25',
    title: 'Saturday The 25th of March 2023',
    description:
      'Experimenting with advanced CSS techniques for creating dynamic interfaces.',
    content:
      'Focusing on CSS animations and transitions today. Trying to make the UI more engaging without being distracting.',
    bullets: [
      'Learned about CSS keyframe animations',
      'Implemented smooth page transitions using framer-motion',
      "Discovered the backdrop-filter property - it's amazing!",
      'Need to be careful with performance when animating certain properties',
    ],
  },
  {
    id: 'entry-4',
    date: '2023-03-26',
    title: 'Sunday The 26th of March 2023',
    description:
      'Comparing different state management libraries for medium to large applications.',
    content:
      'Spent the day exploring different state management solutions for React applications. Redux has been the standard for years, but there are so many alternatives now.',
    bullets: [
      'Compared Redux, Zustand, Jotai, and Recoil',
      'Built a small demo app with Zustand - really liked the simplicity',
      'Need to explore the Redux Toolkit more thoroughly',
      'Context API is sufficient for many small to medium applications',
    ],
  },
  {
    id: 'entry-5',
    date: '2023-03-27',
    title: 'Monday The 27th of March 2023',
    description:
      'Learning the new paradigms introduced by Next.js 13 and React Server Components.',
    content:
      'Started working on a new project using Next.js 13 with the app directory. The new React Server Components paradigm is fascinating but requires rethinking how we structure applications.',
    bullets: [
      'Created the initial project structure following best practices',
      'Learned about the differences between server and client components',
      'Set up a database connection with Prisma',
      'Implemented authentication using NextAuth.js',
    ],
  },
  {
    id: 'entry-6',
    date: '2023-03-28',
    title: 'Tuesday The 28th of March 2023',
    description:
      'Mastering TypeScript generics and advanced type manipulation techniques.',
    content:
      "Deep dive into TypeScript generics today. They're powerful but can be confusing when you're first getting started with them.",
    bullets: [
      'Learned how to create generic components in React',
      'Implemented a reusable data fetching hook with proper typing',
      'Explored conditional types and mapped types',
      'Need to practice more with infer keyword and template literal types',
    ],
  },
  {
    id: 'entry-7',
    date: '2023-03-29',
    title: 'Wednesday The 29th of March 2023',
    description:
      'Identifying and resolving performance bottlenecks in React applications.',
    content:
      'Working on optimizing performance in a React application. There are so many aspects to consider from code splitting to memoization.',
    bullets: [
      'Implemented React.memo for expensive component renders',
      'Added useMemo and useCallback hooks where appropriate',
      'Set up code splitting with React.lazy and Suspense',
      'Used Chrome DevTools Performance tab to identify bottlenecks',
    ],
  },
  {
    id: 'entry-8',
    date: '2023-03-30',
    title: 'Thursday The 30th of March 2023',
    description:
      'Evaluating different styling approaches and building a small design system.',
    content:
      'Exploring different styling approaches in React. There are so many options from CSS Modules to CSS-in-JS libraries.',
    bullets: [
      'Compared Styled Components, Emotion, and Tailwind CSS',
      'Decided to use Tailwind for this project for its utility-first approach',
      'Set up a custom theme with extended colors and components',
      'Created a small design system with reusable components',
    ],
  },
]
