import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/profileService";

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    business_name: "",
    bio: "",
    years_of_experience: "",
    specialization: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    price_range: "",
    available: true,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      console.log("PROFILE:", data);

      setProfile({
        business_name: data.business_name || "",
        bio: data.bio || "",
        years_of_experience: data.years_of_experience || "",
        specialization: data.specialization || "",
        phone: data.phone || "",
        address: data.address || "",
        city: data.city || "",
        state: data.state || "",
        price_range: data.price_range || "",
        available: data.available ?? true,
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

    try {
      const response = await updateProfile(profile);

      console.log("UPDATED:", response);

      alert("Profile updated successfully.");
    } catch (err) {
      console.error(err);

      alert("Unable to update profile.");
    }

    setSaving(false);
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-5"
    >
      <input
        name="business_name"
        placeholder="Business Name"
        value={profile.business_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="bio"
        placeholder="Bio"
        value={profile.bio}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        rows={4}
      />

      <input
        name="years_of_experience"
        placeholder="Years of Experience"
        value={profile.years_of_experience}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="specialization"
        placeholder="Specialization"
        value={profile.specialization}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="city"
        placeholder="City"
        value={profile.city}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="state"
        placeholder="State"
        value={profile.state}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="price_range"
        placeholder="Price Range"
        value={profile.price_range}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="available"
          checked={profile.available}
          onChange={handleChange}
        />

        Available for work
      </label>

      <button
        type="submit"
        disabled={saving}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {saving ? "Saving..." : "Save Profile"}
      </button>
    </form>
  );
}