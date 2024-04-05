import styled from 'styled-components'
import Image from 'next/image';

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  //.open {
  //  border-bottom: none;
  //}

  .open .accordion__details {
    height: auto;
    border-bottom: 1px solid black;
  }

  //.open .accordion__header,
  //.open .accordion__number {
  //  color: #087f5b;
  //}
`

export const AccordionContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #0038FF;
  height: 114px;
  border-bottom: 2px solid #000000;
`

export const TitleRow = styled.div`
  display: inline-grid;
  justify-items: start;
  align-items: center;
  grid-template-columns: 1fr 8fr 2fr 5fr 1fr;
  margin-left: 49px;
`

export const TitleViewed = styled.span`
  font-family: Akkurat-Mono, sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
  margin-right: 85px;
`

export const TitleMainLabel = styled.span`
  font-family: Akkurat-Light, sans-serif;
  font-size: 60px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0;
`

export const TitleArtistName = styled.span`
  margin-right: 50px;
  font-family: Akkurat-Mono;
  font-size: 22px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`

export const TitleFiltersList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 33px;
`

export const WrapperTitleFiltersList = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`

export const TitleFilterListItem = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  border: 1px dashed;
  border-radius: 17px;

  span {
    padding: 8px 23px 8px 23px;
  }
`

export const UserImageBtn = styled(Image)`
  margin-left: 15px;
`

export const ItemWrapper = styled.div`
  :last-child {
    border: none;
  }
`

export const AccordionItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: Akkurat-Light, sans-serif;
  font-size: 60px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0;
`

export const AccordionItemWrapper = styled.div`
  height: 108px;
  border-bottom: 2px dashed #9D9D9D;
`

export const AccordionHeader = styled.div`
  display: grid;
  grid-template-columns: 9% 44% 14% auto auto;
  align-items: center;
  cursor: pointer;
  margin-left: 69px;
  height: 100%;

  @media screen and (min-width: 1920px) {
    grid-template-columns: 1fr 8fr 2fr 5fr 1fr;
  }
`

export const AccordionIndicator = styled.span`
  display: inline-block;
  margin-right: 115px;
  height: 23px;
  width: 23px;
  background-color: #0038FF;
  border-radius: 50%;
`

export const AccordionName = styled.div`
  font-family: Akkurat-Light;
  font-size: 40px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 2200px) {
    font-size: 60px;
  }

`

export const AccordionArtistName = styled.div`
  font-family: Akkurat-Mono;
  font-size: 22px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

`

export const AccordionFiltersList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
`

export const FilterListItem = styled.div`
  font-size: 16px;

  span {
    border: 1px dashed;
    border-radius: 17px;
    padding: 8px 23px 8px 23px;
  }
`

export const AccordionDetails = styled.div`
  overflow: hidden;
  height: 0;
`

export const DetailsContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 506px;
`

export const ContentLeftSide = styled.div`
  width: 60%;
`

export const VideoWrapper = styled.div`
  position: relative;
  height: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
`

export const ContentRightSide = styled.div`
  width: 40%;
  font-family: Akkurat-Mono;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

`

export const RightSideBlock = styled.div`
  padding: 25px 35px 0 35px;
  height: 100%;
`

export const RightSideBlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  span {
    width: 130px;
  }
`

export const VisitBlock = styled.div`
  color: #0038FF;
  cursor: pointer;
`

export const RightSideDelimeter = styled.div`
  margin: 30px 0 30px 0;
`

export const RightSideBlockDescription = styled.div`
  color: #9D9D9D;
`

export const Footer = styled.div`
  width: 100%;
  height: 114px;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 29px 0 40px 31px;
`

export const FooterDashboardLabel = styled.div`
  font-family: Akkurat-Light, sans-serif;
  font-size: 60px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #9D9D9D;
`

export const FooterUserNameBlock = styled.div`
  font-family: Akkurat-Mono, sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`

export const DotMenuBlock = styled.div`
  margin-right: 18px;
`