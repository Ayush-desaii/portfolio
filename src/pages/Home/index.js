import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import about from "./about";

function Home() {
    return(
        <div>
            <Header />
            <div className="bg-primary px-40">
                <Intro />
                <about />
            </div>
        </div>
    );
}

export default Home