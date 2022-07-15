function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                className="w-16 h-16 rounded-full border p-[2px]"
                src="https://raw.githubusercontent.com/Pratigya99/Images/main/profile-photo.png"
                alt="profile photo"
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">Pratigya</h2>
                <h3 className="text-sm text-gray-400">Welcome to Quikshot</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    );
}

export default MiniProfile;