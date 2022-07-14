import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home(){
    return(
        <div className="">
            <Head>
                <title>QuikShot</title>
                <link rel="icon" href="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-small-logo.png" />
            </Head>

            
            <Header />


            {/* Feed */}
            <Feed />


            {/* Model */}
        </div>
    );
}