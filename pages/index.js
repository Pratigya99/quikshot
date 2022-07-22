import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home(){
    return(
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>QuikShot</title>
                <link rel="icon" href="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-small-logo.png" />
            </Head>

            
            <Header />


            {/* Feed */}
            <Feed />


            {/* Modal */}
            <Modal />
        </div>
    )
}