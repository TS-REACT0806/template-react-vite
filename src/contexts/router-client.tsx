// import { useRouter } from 'next/router';
// import { createContext, type ReactNode, useContext } from 'react';

// export type UseRouterClientContext = {
//   push: (url: string) => void;
//   replace: (url: string) => void;
//   pathname: string;
//   query: Record<string, string | string[] | undefined>;
// };

// export type RouterClientContext = {
//   useRouter: () => UseRouterClientContext;
// };

// export function createRouterClientContext(): RouterClientContext {
//   return {
//     useRouter: () => useRouter(),
//   };
// }

// const RouterClientContext = createContext<RouterClientContext | null>(null);

// export type RouterClientProviderProps = {
//   children: ReactNode;
//   client?: RouterClientContext;
// };

// export function RouterClientProvider({ children, client }: RouterClientProviderProps) {
//   const routerClient = client ?? createRouterClientContext();
//   return (
//     <RouterClientContext.Provider value={routerClient}>{children}</RouterClientContext.Provider>
//   );
// }

// export function useRouterClientContext() {
//   const ctx = useContext(RouterClientContext);
//   if (!ctx) {
//     throw new Error('useRouterClientContext must be used within a RouterClientProvider.');
//   }
//   return ctx.useRouter();
// }
