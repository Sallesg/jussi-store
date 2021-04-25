import {
  WrapperComponent,
  Header,
  Fullbanner,
  MainStoresBar,
  MainWeAreJussi,
  ContactJussi,
  Newsletter,
  FooterMain,
  ProductSection
} from 'components'

export function MainContent() {
  return (
    <WrapperComponent>
      <Header/>
      <Fullbanner/>
      <MainStoresBar/>
      <ProductSection/>
      <MainWeAreJussi/>
      <ContactJussi/>
      <Newsletter/>
      <FooterMain />
    </WrapperComponent>
  )
}
