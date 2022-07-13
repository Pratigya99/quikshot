import Head from "next/head";

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>QuikShot</title>
                <link rel="icon" href="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-small-logo.png" />
            </Head>

            <h1>This is the QUIKSHOT </h1>
        </div>
    );
}