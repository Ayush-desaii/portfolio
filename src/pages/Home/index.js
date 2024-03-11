import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";

function Home() {
    return(
        <div className="bg-primary">
            <Header />
            <div className="px-24">
                <Intro />
            </div>
        </div>
    )
}

export default Home;