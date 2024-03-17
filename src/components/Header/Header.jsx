import cover from '../../assets/Banner.png'

const Header = () => {
    return (
        <div className='container mx-auto'>
            <nav>
                <div className="navbar justify-around">
                    {/* drop down menu */}
                    <div className="">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-lg lg:text-2xl font-bold">Recipe Calories</a>
                    </div>

                    {/* middle menu */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>

                    {/* search */}
                    <div className="flex-none gap-2 text-end">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <header className='px-2'>
                <div className="hero lg:h-[600px] rounded-3xl" style={{ backgroundImage: "url(" + cover + ")" }}>
                    <div className="hero-overlay bg-opacity-20 rounded-3xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="space-y-8">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking<br /> class tailored for you!</h1>
                            <p className="mb-5">Elevate your culinary journey with tantalizing recipes and expert tips on our cooking website. From kitchen novices to <br /> seasoned chefs, discover inspiration for every palate.</p>

                            <div className='space-x-6'>
                                <button className="btn bg-[#0BE58A] rounded-full border-none font-bold">Explore Now</button>

                                <button className="btn bg-transparent rounded-full text-white font-bold">Our Feedback</button>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;