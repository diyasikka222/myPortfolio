const Footer = () => {
    return (
        <footer className="footer w-full py-5">
            <div className="footer-container flex justify-center items-center w-full">
                <p className="text-center text-sm md:text-base text-white/80">
                    © {new Date().getFullYear()} Diya Sikka. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;