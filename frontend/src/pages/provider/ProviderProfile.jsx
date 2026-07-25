import ProfileForm from "../../components/provider/ProfileForm";

export default function ProviderProfile() {
    return (
        <div className="min-h-screen bg-gray-300 p-8">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-2">
                    My Profile 
                </h1>

                <p className="text-gray-500 mb-8">
                    Manage your business profile and information.
                </p>

                <ProfileForm />

            </div>
        </div>
    );
}