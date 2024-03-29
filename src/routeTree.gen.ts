// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const WalletLazyImport = createFileRoute('/wallet')()
const TodosLazyImport = createFileRoute('/todos')()
const SlidesLazyImport = createFileRoute('/slides')()
const SimpleBlockchainLazyImport = createFileRoute('/simple-blockchain')()
const NftMarketLazyImport = createFileRoute('/nft-market')()
const EventLazyImport = createFileRoute('/event')()
const DocumentationLazyImport = createFileRoute('/documentation')()
const BallotVotingLazyImport = createFileRoute('/ballot-voting')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const WalletLazyRoute = WalletLazyImport.update({
  path: '/wallet',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/wallet.lazy').then((d) => d.Route))

const TodosLazyRoute = TodosLazyImport.update({
  path: '/todos',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/todos.lazy').then((d) => d.Route))

const SlidesLazyRoute = SlidesLazyImport.update({
  path: '/slides',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/slides.lazy').then((d) => d.Route))

const SimpleBlockchainLazyRoute = SimpleBlockchainLazyImport.update({
  path: '/simple-blockchain',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/simple-blockchain.lazy').then((d) => d.Route),
)

const NftMarketLazyRoute = NftMarketLazyImport.update({
  path: '/nft-market',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/nft-market.lazy').then((d) => d.Route))

const EventLazyRoute = EventLazyImport.update({
  path: '/event',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/event.lazy').then((d) => d.Route))

const DocumentationLazyRoute = DocumentationLazyImport.update({
  path: '/documentation',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/documentation.lazy').then((d) => d.Route))

const BallotVotingLazyRoute = BallotVotingLazyImport.update({
  path: '/ballot-voting',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/ballot-voting.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/ballot-voting': {
      preLoaderRoute: typeof BallotVotingLazyImport
      parentRoute: typeof rootRoute
    }
    '/documentation': {
      preLoaderRoute: typeof DocumentationLazyImport
      parentRoute: typeof rootRoute
    }
    '/event': {
      preLoaderRoute: typeof EventLazyImport
      parentRoute: typeof rootRoute
    }
    '/nft-market': {
      preLoaderRoute: typeof NftMarketLazyImport
      parentRoute: typeof rootRoute
    }
    '/simple-blockchain': {
      preLoaderRoute: typeof SimpleBlockchainLazyImport
      parentRoute: typeof rootRoute
    }
    '/slides': {
      preLoaderRoute: typeof SlidesLazyImport
      parentRoute: typeof rootRoute
    }
    '/todos': {
      preLoaderRoute: typeof TodosLazyImport
      parentRoute: typeof rootRoute
    }
    '/wallet': {
      preLoaderRoute: typeof WalletLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  BallotVotingLazyRoute,
  DocumentationLazyRoute,
  EventLazyRoute,
  NftMarketLazyRoute,
  SimpleBlockchainLazyRoute,
  SlidesLazyRoute,
  TodosLazyRoute,
  WalletLazyRoute,
])
