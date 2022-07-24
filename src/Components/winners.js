import React, {useEffect} from "react";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tx from '../Static/images/Tx.png';
import Scout from '../Static/images/Scout.png';
import SOUL from '../Static/images/SOUL.png';
// import XLIT from '../Static/images/XLIT.png';
// import BULLs from '../Static/images/BULLs.png';
// import BLACKCATS from '../Static/images/BLACK-CATS.png';
// import NOD from '../Static/images/NOD.png';
// import SOUL from '../Static/images/SOUL.png';
// import FNATIC from '../Static/images/FNATIC.png';
import '../Static/Css/winners.css';


function Winners() {

    // const winnersCardDetails = [
    //     {
    //       title: 'Team Xspark',
    //       description: 'Team Xspark won the BGMI tournament and got 1.7Lacks Prize Money last week. "Txsc0ut" was The MVP.',
    //       image: Tx,
    //       renderFooter: <div></div>,
    //       handleOnClick: () => alert('Congratulations Team Xspark')
    //     },
    //     {
    //         title: 'Team SOUL',
    //         description: 'Team SOUL was the 1st runners-up BGMI tournament and got 50K Prize Money last week.',
    //         image: SOUL,
    //         renderFooter: <div></div>,
    //         handleOnClick: () => alert('Congratulations Team SOUL')
    //     }
    // ]

    return(
        <>
            <NavBar />
                <div className="winners">
                    <h1>Winners Details</h1>
                    <div>
                        <h2>BGMI</h2>
                        <div className="container">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <Avatar
                                            alt="Team Xspark"
                                            src={Tx}
                                            sx={{ width: 120, height: 120 }}
                                        />
                                        <h3>Team Xspark</h3>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div>
                                            <p>
                                                Team Xspark won the BGMI tournament and got 1.7Lacks Prize Money last week.<br/>
                                                They made 270 points and sticked to the table top from the day one.<br/>
                                            </p>
                                            <Avatar
                                                alt="Team Xspark"
                                                src={Scout}
                                                sx={{ width: 60, height: 60 }}
                                            />
                                            <h3>"TxscOut" The MVP of the Tournament</h3>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}


export default Winners;