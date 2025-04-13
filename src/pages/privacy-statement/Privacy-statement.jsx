
import styles from "./Privacy-statement.module.css";
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";

function PrivacyStatement() {
    return (
        <>
        <TitleBar/>
        <main className={styles.privacy_statement__wrapper}>
        <p className={styles.privacy_statement__text}>Privacy Policy for LazyChef L.T.D.
            Effective Date: [Insert Date]

            LazyChef L.T.D. ("we," "our," "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [your website URL], use our services, or interact with us in other ways.

            1. Information We Collect
            We collect information that you provide to us directly, as well as information about your interactions with our website and services. This includes:

            Personal Information: Such as your name, email address, phone number, and any other information you provide to us when registering or contacting us.

            Usage Data: Information about how you use our website, including your IP address, browser type, device information, and browsing behavior.

            Cookies and Tracking Technologies: We may use cookies and similar technologies to enhance your experience and analyze site traffic.

            2. How We Use Your Information
            We use the information we collect for the following purposes:

            To provide and improve our services.

            To communicate with you about your account, updates, and promotional offers (if applicable).

            To personalize your experience on our website.

            To comply with legal obligations and resolve any disputes.

            3. How We Protect Your Information
            We take reasonable precautions to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.

            4. Sharing Your Information
            We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:

            Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as website hosting, analytics, or customer support.

            Legal Requirements: We may disclose your information if required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.

            5. Your Rights and Choices
            You have certain rights regarding your personal information, including the right to:

            Access, update, or delete your personal information.

            Opt out of receiving promotional communications from us.

            Control cookie preferences via your browser settings.

            6. Data Retention
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.

            7. International Transfers
            If you are located outside of [your country], please be aware that your information may be transferred to, processed, and stored in a country that may have different data protection laws than your country of residence. By using our services, you consent to this transfer.

            8. Children’s Privacy
            Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under the age of 13, we will take steps to delete that information.

            9. Changes to This Privacy Policy
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the “Effective Date” will be updated accordingly. We encourage you to review this Privacy Policy periodically.

            10. Contact Us
            If you have any questions or concerns about this Privacy Policy, please contact us at:

            LazyChef L.T.D.
            Email: [Your contact email]
            Address: [Your company address]
            Phone: [Your company phone number]
        </p>
        </main>
        </>
    )
}
export default PrivacyStatement