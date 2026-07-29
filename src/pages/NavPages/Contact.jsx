import HeaderNews from "@/components/Header-News.jsx";
import ContactEnquiryForm from "@/components/contact-enquiry-form.jsx";

const Contact = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <HeaderNews title={"Contact"} />

            <div className={"paragraph-styles"}>
                <p>KNOCK ON OUR DOOR: ACDC LANE (NEAR CORNER OF 103 FLINDERS LANE), MELBOURNE, 3000</p>
                <p>SEND LOVE NOTES, SECRETS AND ENQUIRIES:</p>
            </div>

			<ContactEnquiryForm />
        </div>
    )
}
export default Contact
