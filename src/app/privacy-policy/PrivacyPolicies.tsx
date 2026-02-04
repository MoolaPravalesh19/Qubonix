export function PrivacyPolicies() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-8 border-b pb-4 text-primary">
                Privacy Policy
            </h1>

            {/* Introduction Section */}
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                    Introduction to Privacy Policy
                </h2>
                <p className="mb-4 text-sm md:text-base">
                    This privacy policy (the "Privacy Policy") applies to your use of the website of Razorpay hosted
                    at razorpay.com, the Services (as defined under the Razorpay "Terms of Use") and Razorpay applications on
                    mobile platforms (Android, Blackberry, Windows Phone, iOS etc.) (collectively ("RAZORPAY" or
                    "WEBSITE")), but does not apply to any third party websites that may be linked to them, or any relationships
                    you may have with the businesses listed on Razorpay.
                </p>
                <p className="text-sm md:text-base">
                    The terms "we", "our" and "us" refer to Razorpay and the terms "you", "your" and "User" refer to you, as a
                    user of Razorpay. The term "Personal Information" means information that you provide to us which
                    personally identifies you to be contacted or identified, such as your name, phone number, email address, and
                    any other data that is tied to such information. Our practices and procedures in relation to the collection and
                    use of Personal Information have been set-out below in order to ensure safe usage of the Website for you.
                </p>
            </section>

            {/* Information Collection Section */}
            <section className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                    Information we collect and how we use it
                </h3>
                <p className="text-sm md:text-base">
                    We collect, receive and store your Personal Information. If you provide your third-party account credentials
                    ("Third Party Account Information") to us, you understand that some content and information in those
                    accounts may be transmitted to your account with us if you authorise such transmissions and that Third Party
                    Account Information transmitted to us shall be covered by this Privacy Policy.
                </p>
            </section>

            {/* Merchant Account Information */}
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                    Account information of Merchants
                </h2>
                <p className="text-sm md:text-base">
                    If you create an account to take advantage of the full range of services offered on Razorpay, we ask for and
                    record Personal Information such as your name, email address and mobile number. We may collect and store
                    your Sensitive Personal Data or Information (such as any financial information including inter alia credit
                    card, debit card details, bank account and know your customer ("KYC") documents as per RBI regulations).
                </p>
            </section>

            {/* Security Section */}
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                    Security
                </h2>
                <p className="text-sm md:text-base italic bg-yellow-50 p-4 border-l-4 border-yellow-400">
                    Your account is password protected. We use industry standard measures to protect the Personal Information
                    that is stored in our database. We follow industry standard best practices on Information Security, as also
                    mentioned in our website.
                </p>
            </section>

            {/* DPO Section */}
            <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">DPO</h2>
                <p className="text-sm text-gray-600">Data Protection Officer details will be listed here.</p>
            </section>
        </div>
    );
}