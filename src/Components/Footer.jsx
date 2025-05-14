export default function Footer() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return(
        <footer>copyright @ {currentYear}</footer>
    )
}