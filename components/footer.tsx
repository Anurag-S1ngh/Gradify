import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-neutral-900 text-white text-center py-3 mt-10 ">
        © {new Date().getFullYear()} Gradify. All rights reserved.
    </footer>
);

export default Footer;