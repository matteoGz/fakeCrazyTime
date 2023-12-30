import Icon1 from '../assets/1.jpg';
import Icon2 from '../assets/2.jpg';
import Icon5 from '../assets/5.jpg';
import Icon10 from '../assets/10.jpg';
import IconCashHunt from '../assets/CashHunt.jpg';
import IconCoinFlip from '../assets/CoinFlip.jpg';
import IconCrazyTime from '../assets/CrazyTime.jpg';
import IconPachinko from '../assets/Pachinko.jpg';

const segments = [
    { name: "C1", number: 1, color: "#A9D3FF", icon: Icon1},
    { name: "C2", number: 2, color: "#F6E27F", icon: Icon2},
    { name: "C5", number: 5, color: "#643A71", icon: Icon5},
    { name: "C10", number: 10, color: "#8B5FBF", icon: Icon10},
    { name: "CCOIN-FLIP", number: 11, color: "#111344", icon: IconCoinFlip},
    { name: "CCASH-HUNT", number: 12, color: "#94A187", icon: IconCashHunt},
    { name: "CPACHINKO", number: 13, color: "#AA3E98", icon: IconPachinko},
    { name: "CCRAZY-TIME", number: 14, color: "#FF3366", icon: IconCrazyTime}
];

export const mainWheelModel = [
    segments[0], segments[1], segments[2], segments[0], segments[1], segments[6],
    segments[0], segments[2], segments[0], segments[1], segments[0], segments[4],
    segments[0], segments[1], segments[0], segments[3], segments[1], segments[5],
    segments[0], segments[1], segments[0], segments[2], segments[0], segments[4],
    segments[0], segments[2], segments[1], segments[3], segments[0], segments[6],
    segments[0], segments[1], segments[2], segments[0], segments[1], segments[4],
    segments[0], segments[3], segments[0], segments[2], segments[0], segments[5],
    segments[0], segments[1], segments[2], segments[0], segments[1], segments[4],
    segments[1], segments[0], segments[3], segments[1], segments[0], segments[7]
] 