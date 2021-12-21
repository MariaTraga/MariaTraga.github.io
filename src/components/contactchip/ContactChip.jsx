import './ContactChip.css';

const ContactChip = ({name, link, img}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="contact-chip">
                <img src={img} alt="Person" width="96" height="96"/>
                {name}
            </div>
        </a>
    )
}

export default ContactChip;