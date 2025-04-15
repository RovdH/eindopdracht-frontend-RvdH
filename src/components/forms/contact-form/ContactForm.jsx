import {useState} from "react";
import Button from "../../buttons/Button.jsx";
import Input from "../controlled-fields/Input.jsx";
import Textarea from "../controlled-fields/Textarea.jsx";
import styles from "./ContactForm.module.css";
import {FaEnvelope, FaPhone, FaUser} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\+?[0-9]{7,15}$/.test(phone);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!formData.firstName) validationErrors.firstName = "First Name is required";
        if (!formData.email || !validateEmail(formData.email)) validationErrors.email = "Valid email is required";
        if (!formData.phone || !validatePhone(formData.phone)) validationErrors.phone = "Valid phone number is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        setMessage("");

        // DEMO PURPOSE om formulier te laten loaden en werken. //
        setTimeout(() => {
            setLoading(false);
            setMessage("Demo Form submitted successfully!");
            setFormData({firstName: "", lastName: "", email: "", phone: "", message: ""});
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contact__form}>
            <fieldset className={styles.contact__input_wrapper}><label>First Name *</label><FaUser
                className={styles.contact__field_icon}/>
                <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.contact__field_input}
                />
                {errors.firstName && <p className={styles.contact__form_errorMessage}>{errors.firstName}</p>}</fieldset>
            <fieldset className={styles.contact__input_wrapper}><label>Last name *</label><FaUser
                className={styles.contact__field_icon}/><Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.contact__field_input}
            /></fieldset>
            <fieldset className={styles.contact__input_wrapper}><label>E-mail *</label><FaEnvelope
                className={styles.contact__field_icon}/><Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.contact__field_input}
            />
                {errors.email && <p className={styles.contact__form_errorMessage}>{errors.email}</p>}</fieldset>
            <fieldset className={styles.contact__input_wrapper}><label>Phone Number * </label><FaPhone
                className={styles.contact__field_icon}/><Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.contact__field_input}
            />
                {errors.phone && <p className={styles.contact__form_errorMessage}>{errors.phone}</p>}</fieldset>
            <fieldset className={styles.contact__input_wrapper}><label>Message </label><FaMessage
                className={styles.contact__field_icon}/><Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.contact__field_input}
            /></fieldset>
            <Button variant="btn_darkgreen" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </Button>
            {message && <p className={styles.contact__form_notify}>{message}</p>}
        </form>
    );
}
