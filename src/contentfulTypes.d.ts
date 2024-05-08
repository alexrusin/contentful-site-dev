import { Entry, Asset } from 'contentful'
export const CallToActionButton = 'callToActionButton'
export interface CallToActionButton {
  //Call To Action Button
  /*  */
  readonly callToActionText: string
  readonly internalName?: string
}

export const ImageWrapper = 'imageWrapper'
export interface ImageWrapper {
  //Image Wrapper
  /*  */
  readonly altText: string
  readonly image: Asset
  readonly internalName?: string
}

export const LandingPage = 'landingPage'
export interface LandingPage {
  //Landing Page
  /*  */
  readonly internalName?: string
  readonly sections?: ReadonlyArray<Entry<WelcomeSection|ServicesSection>>
  readonly slug: string
  readonly title: string
}

export const ServicesCard = 'servicesCard'
export interface ServicesCard {
  //Services Card
  /*  */
  readonly image: Entry<ImageWrapper>
  readonly internalName?: string
  readonly title: string
}

export const ServicesSection = 'servicesSection'
export interface ServicesSection {
  //Services Section
  /*  */
  readonly callToAction?: Entry<CallToActionButton>
  readonly cards: ReadonlyArray<Entry<ServicesCard>>
  readonly image: Entry<ImageWrapper>
  readonly internalName?: string
  readonly title: string
}

export const WelcomeSection = 'welcomeSection'
export interface WelcomeSection {
  //Welcome Section
  /*  */
  readonly callToAction?: Entry<CallToActionButton>
  readonly internalName?: string
  readonly introduction: string
  readonly title: string
  readonly videoEmbedUrl: string
}

