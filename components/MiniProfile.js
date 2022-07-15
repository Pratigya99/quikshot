function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                className="w-16 h-16 rounded-full border p-[2px]"
                src="https://raw.githubusercontent.com/Pratigya99/Images/main/profile-photo.png"
                alt="profile photo"
            />

            <div>
                <h2>Pratigya</h2>
                <h3>Welcome to Quikshot</h3>
            </div>

            <button>Sign Out</button>
        </div>
    );
}

export default MiniProfile;