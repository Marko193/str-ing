"use client";
import {useRef, useState} from "react";
import Image from 'next/image';
import {gsap} from "gsap";
import UserIcon from 'public/svg/UserIcon.svg'
import IconArrowRight from 'public/svg/IconArrowRight.svg'
import IconArrowRightBlue from 'public/svg/IconArrowRightBlue.svg'
import IconArrowLeft from 'public/svg/IconArrowLeft.svg'
import DotMenuIcon from 'public/svg/DotMenuIcon.svg'
import {
    AccordionArtistName,
    AccordionContainer,
    AccordionDetails,
    AccordionFiltersList,
    AccordionHeader,
    AccordionIndicator,
    AccordionItem,
    AccordionItemWrapper,
    AccordionName,
    ContainerTitle,
    ContentLeftSide,
    ContentRightSide,
    DetailsContentWrapper,
    DotMenuBlock,
    FilterListItem,
    Footer,
    FooterDashboardLabel,
    FooterUserNameBlock,
    FooterWrapper,
    MainWrapper,
    RightSideBlock, RightSideBlockDescription,
    RightSideBlockHeader, RightSideDelimeter,
    TitleArtistName,
    TitleFilterListItem,
    TitleFiltersList,
    TitleMainLabel,
    TitleRow,
    TitleViewed,
    UserImageBtn,
    VideoWrapper,
    VisitBlock,
    WrapperTitleFiltersList
} from "./page.styled";

const accordionsData = [
    {
        isWatched: false,
        name: 'QUEENDOM',
        artistName: 'Ilit Azoulay',
        filters: [
            {name: 'exhibition', color: 'red'},
            {name: 'women', color: 'blue'},
            {name: 'photography', color: 'green'}
        ]
    },
    {
        isWatched: false,
        name: 'AUTOXYLOPYROCYCLOBOROS',
        artistName: 'Ilit Azoulay',
        filters: [
            {name: 'exhibition', color: 'green'},
            {name: 'artist', color: 'blue'},
        ]
    },
    {
        isWatched: false,
        name: 'The Larva Society for ...',
        artistName: 'Maya Attoun',
        filters: [
            {name: 'exhibition', color: 'blue'},
            {name: 'women', color: 'green'},
        ]
    },
    {
        isWatched: false,
        name: 'AUTOXYLOPYROCYCLOBOROS',
        artistName: 'Ilit Azoulay',
        filters: [{name: 'exhibition', color: 'red'},
            {name: 'women', color: 'blue'},
            {name: 'photography', color: 'green'}]
    },
]

export default function Home() {
    const [openAccordion, setOpenAccordion] = useState(null);
    const accordionRefs = useRef([]);

    const handleAccordionClick = (index) => {
        if (index === openAccordion) {
            gsap.to(
                accordionRefs.current[index].querySelector(".accordion__details"),
                {
                    height: 0,
                    duration: 1,
                    ease: "power1.inOut",
                    onComplete: () => setOpenAccordion(null),
                }
            );
        } else {
            if (openAccordion !== null) {
                gsap.to(
                    accordionRefs.current[openAccordion].querySelector(
                        ".accordion__details"
                    ),
                    {
                        height: 0,
                        duration: 1,
                        ease: "power1.inOut",
                    }
                );
            }
            setOpenAccordion(index);
            gsap.fromTo(
                accordionRefs.current[index].querySelector(".accordion__details"),
                {height: 0},
                {
                    height: "auto",
                    duration: 1,
                    ease: "power1.inOut",
                }
            );
        }
    };

    return (
        <MainWrapper>
            <AccordionContainer>
                <ContainerTitle>
                    <TitleRow>
                        <TitleViewed>Viewed</TitleViewed>
                        <TitleMainLabel>TITLE</TitleMainLabel>
                        <TitleArtistName>Artist name</TitleArtistName>
                        <TitleFiltersList>
                            <Image src={IconArrowLeft} alt='icon-arrow'/>
                            <WrapperTitleFiltersList>
                                <TitleFilterListItem
                                    style={{color: 'red'}}><span>Exhibition</span></TitleFilterListItem>
                                <TitleFilterListItem style={{color: 'green'}}><span>Woman</span></TitleFilterListItem>
                                <TitleFilterListItem
                                    style={{color: '#0038FF'}}><span>Photography</span></TitleFilterListItem>
                            </WrapperTitleFiltersList>
                            <Image src={IconArrowRight} alt='icon-arrow'/>
                        </TitleFiltersList>
                        <UserImageBtn src={UserIcon} alt='user-icon'/>
                    </TitleRow>
                </ContainerTitle>
                {accordionsData.map((accordion, index) => (

                    <AccordionItem
                        className={`accordion__item  ${openAccordion === index ? "open" : ""}`}
                        ref={(el) => (accordionRefs.current[index] = el)}
                        key={index}
                    >
                        <AccordionItemWrapper>
                            <AccordionHeader
                                className="accordion__header"
                                onClick={() => handleAccordionClick(index)}
                            >
                                <AccordionIndicator className="accordion__number"></AccordionIndicator>
                                <AccordionName className="accordion__name">
                                    {accordion.name}
                                </AccordionName>
                                <AccordionArtistName>{accordion.artistName}</AccordionArtistName>
                                <AccordionFiltersList>
                                    {accordion.filters.map((filter, index) => (<FilterListItem
                                        key={index}><span style={{color: filter.color}}>{filter.name}</span>
                                    </FilterListItem>))}
                                </AccordionFiltersList>
                            </AccordionHeader>
                        </AccordionItemWrapper>
                        <AccordionDetails className="accordion__details">
                            <DetailsContentWrapper>
                                <ContentLeftSide>
                                    <VideoWrapper>
                                        <iframe
                                            src="https://player.vimeo.com/video/709654849?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                                            frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                                            title="Panel 1 - image description"></iframe>
                                    </VideoWrapper>
                                </ContentLeftSide>
                                <ContentRightSide>
                                    <RightSideBlock>
                                        <RightSideBlockHeader>
                                            <span>Queendom Ilit Azoulay </span>
                                            <VisitBlock>
                                                Visit
                                                <Image src={IconArrowRightBlue} alt='arr-blue'
                                                       style={{marginLeft: '10px'}}
                                                />
                                            </VisitBlock>
                                        </RightSideBlockHeader>
                                        <RightSideDelimeter >-</RightSideDelimeter >
                                        <RightSideBlockDescription>
                                            The online exhibition Queendom by artist Ilit Azoulay at the Venice
                                            bienalle. Gallery Rüdiger Schöttle online launch of the exhibition “Room of
                                            One’s Own” further develops the feminist stance Virginia Woolf took in her
                                            1928 lecture at Cambridge University. Later printed into a book, “A Room of
                                            One’s of own” became a standard reading of the women’s movement since the
                                            1970s. As a young woman, Virginia Woolf was subjected to the conditions of
                                            post-victorian society, which provided only a narrow range of activities and
                                            opportunities for women to harness their skills and talents.
                                        </RightSideBlockDescription>
                                    </RightSideBlock>
                                </ContentRightSide>
                            </DetailsContentWrapper>
                        </AccordionDetails>
                    </AccordionItem>

                ))}
                <Footer>
                    <FooterWrapper>
                        <FooterDashboardLabel>DASHBOARD</FooterDashboardLabel>
                        <FooterUserNameBlock>
                            USER&apos;S NAME
                        </FooterUserNameBlock>
                        <DotMenuBlock>
                            <Image src={DotMenuIcon} alt='dot-menu'/>
                        </DotMenuBlock>
                    </FooterWrapper>
                </Footer>

            </ AccordionContainer>
        </MainWrapper>

    );
}
