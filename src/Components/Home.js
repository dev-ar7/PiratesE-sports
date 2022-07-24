import React from 'react';
import '../Static/Css/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Cards } from 'react-responsive-cards'
import BGMI from '../Static/images/BGMI.png';
import COD from '../Static/images/COD.jpg';
import Valo from '../Static/images/Valo.png';
import FF from '../Static/images/FF.jpg';
import Tx from '../Static/images/Tx.png';
import XLIT from '../Static/images/XLIT.png';
import BULLs from '../Static/images/BULLs.png';
import BLACKCATS from '../Static/images/BLACK-CATS.png';
import NOD from '../Static/images/NOD.png';
import SOUL from '../Static/images/SOUL.png';
import FNATIC from '../Static/images/FNATIC.png';
import BuyMeACoffe from './BuyMeCoffee';
import { useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();
    
    const onClickBtn = () => {
        navigate('/signup');
    }


    const winnersCardDetails = [
        {
            title: 'Team BLACKCATS',
            description: 'Team BLACKCATS won the Valo tournament and got 3.7Lacks Prize Money last week. "BKC-dethrow" was The MVP.',
            image: BLACKCATS,
            renderFooter: <div></div>,
            handleOnClick: () => alert('Custom Event')
        },
        {
          title: 'Team Xspark',
          description: 'Team Xspark won the BGMI tournament and got 1.7Lacks Prize Money last week. "Txsc0ut" was The MVP.',
          image: Tx,
          renderFooter: <div></div>,
          handleOnClick: () => alert('Custom Event')
        },
        {
            title: 'Team X-LIT',
            description: 'Team X-LIT won the CODM tournament and got 70K Prize Money last week. "XlitBerlin" was The MVP.',
            image: XLIT,
            renderFooter: <div></div>,
            handleOnClick: () => alert('Custom Event')
        },
        {
            title: 'Team RED-BULLs',
            description: 'Team RED-BULLs won the Free Fire tournament and got 30KLacks Prize Money last week. "RBantidote" was The MVP.',
            image: BULLs,
            renderFooter: <div></div>,
            handleOnClick: () => alert('Custom Event')
        },
      ]

    const organizersCard = [
        {
            title: 'Nodwin Gaming',
            description: 'They Organized the most number of tournaments with most ammount of prizepool.',
            image: NOD,
            renderFooter: <duv></duv>,
            handleOnClick: () => alert('Custom Event')
        },
        {
            title: 'SOUL',
            description: 'They Organized the most number of tournaments with most ammount of prizepool.',
            image: SOUL,
            renderFooter: <duv></duv>,
            handleOnClick: () => alert('Custom Event')
        },
        {
            title: 'Fnatic Esports',
            description: 'They Organized the most number of tournaments with most ammount of prizepool.',
            image: FNATIC,
            renderFooter: <duv></duv>,
            handleOnClick: () => alert('Custom Event')
        }
    ]


    return (
        <div className='home'>        
            <div className='intro'>
                <h1 className='heading'>Welcome To PIRATES e-Sports Club</h1>
                <p className='p-tag'>At the heart of the esports industry is a massive and diverse collection of esports tournaments. They’re the beating heart of the esports market, serving as the foundation for professional gaming and esports betting. Once upon a time, esports tournaments were small, locally hosted events – today, a single tournament can be worth tens of millions of dollars.</p>
                <p className='p-tag'>It's a platform where you can host a tournament, play a tournament, earn money from tournaments.</p>
                <p className='p-tag'>So, What are you waiting for? <button className='btn' onClick={onClickBtn}>Signup Now</button></p>
            </div>
            <div className='carousel'>
                <h1 className='heading'>Available Games </h1>
                <Carousel>
                    <div>
                        <img src={Valo} />
                        <p className="legend">Valorant</p>
                    </div>
                    <div>
                        <img src={BGMI} />
                        <p className="legend">BattleGrounds Mobile India</p>
                    </div>
                    <div>
                        <img src={COD} />
                        <p className="legend">Call of Duty®</p>
                    </div>
                    <div>
                        <img src={FF} />
                        <p className="legend">Garena Free Fire</p>
                    </div>
                </Carousel>
            </div>
            <div className='last-week-winners'>
                <h1 className='heading'>Last Week Wining Teams</h1>
                <Cards details={winnersCardDetails} />
            </div>
            <div className='top-org'>
                <h1 className='heading'>Top Tournamnt Organizers</h1>
                <Cards details={organizersCard} />
            </div>
            <BuyMeACoffe />
        </div>
        
    );
}


export default Home;