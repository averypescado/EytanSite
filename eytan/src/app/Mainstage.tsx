import styles from "./page.module.css";
import Image from 'next/image';
import poster from "./poster.jpg";
import headshot from "./headshot.png";
import periodical from "./periodical.png"
import back from "./back.png"
import Link from "next/link";
import RWord from "./components/RWord";
import Bronsons from "./components/Bronsons";
import HoopDreamsD from "./components/HoopdreamsD";
import HoopDreams2 from "./components/HoopDreams2";
import Standup from "./components/Standup";
import Olympics from "./components/Olympics";
import Periodical from "./components/Periodical"

interface MainstageProps {
    project: string;  // or use a more specific type like enum if you have fixed values
  }

export default function Mainstage({ project }: MainstageProps) {
    switch(project) {
        case "R word":
            return (
                <RWord />
            )
        case "Bronsons":
            return (
                <Bronsons />
            )
        case "Hoop Dreams 3D":
            return (
                <HoopDreamsD />
        )

        case "Hoop Dreams 2":
            return (
                <HoopDreams2/>
        )

        case "standup":
            return (
                <Standup />
        )

        case "oly":
            return (
                <Olympics />
        )

        case "Periodical":
            return (
                <Periodical />
            )
    }
}