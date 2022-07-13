import Image from "next/image";

function Header() {
    return (
        <div>
            

            {/* Left */}
            <div className="relation hidden lg:inline-grid h-24 w-24">

                <Image src="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-text.png" layout="fill"
                objectFit="contain" />
            </div>

            {/* Middle */}


            {/* Right */}
        </div>
    ) 
}

export default Header