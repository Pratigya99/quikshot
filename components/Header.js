import Image from "next/image";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/* Left */}
                <div className="relative hidden lg:inline-grid h-24 w-24">
        
                    <Image src="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-text.png" layout="fill"
                    objectFit="contain" />
                </div>
        
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
                    <Image
                     src="https://raw.githubusercontent.com/Pratigya99/Images/main/instagram-medium-logo.png"
                     layout="fill"
                     objectFit="contain"
                    />
                </div>
        
                {/* Middle */}
        
        
                {/* Right */}

            </div>

        </div>
    ) 
}

export default Header