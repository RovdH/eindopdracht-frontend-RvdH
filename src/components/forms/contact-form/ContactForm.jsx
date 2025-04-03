import { useState } from "react";
import Button from "../../buttons/Button.jsx";
import Input from "../controlled-fields/Input.jsx";
import Textarea from "../controlled-fields/Textarea.jsx";
import styles from "./ContactForm.module.css";

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
        const { name, value } = e.target;
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

        // DEMO PURPOSE om formulier te laten laden. //
        setTimeout(() => {
            setLoading(false);
            setMessage("Form submitted successfully!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contact__form}>
            <label>First Name *</label>
            <fieldset className={styles.contact__form_names}><Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <p className={styles.contact__form_errorMessage}>{errors.firstName}</p>}
            <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            /></fieldset>
            <label>E-mail *</label><Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p className={styles.contact__form_errorMessage}>{errors.email}</p>}
            <label>Phone Number * </label><Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <p className={styles.contact__form_errorMessage}>{errors.phone}</p>}
            <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
            />
            <Button type="submit"disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </Button>
            {message && <p className={styles.contact__form_notify}>{message}</p>}
        </form>
    );
}
