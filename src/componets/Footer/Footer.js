const Footer = () => (
    <footer style={{
        background: "#8B0000",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem"
    }}
    
    className="footer">
        &copy; {new Date().getFullYear()} Restaurant Delight. All rights reserved.
    </footer>
);
export default Footer;