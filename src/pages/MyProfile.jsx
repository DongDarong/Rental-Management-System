import React, { useState } from 'react';

// Import Components
import ProfileHeader from '../components/profile/ProfileHeader';
import AccountInformation from '../components/profile/AccountInformation';
import DisplaySettings from '../components/profile/DisplaySettings';
import ChangePassword from '../components/profile/ChangePassword';
import Layout from '../components/Layout';

// Import Modals
import SuccessModal from '../components/modals/SuccessModal';
import ErrorModal from '../components/modals/ErrorModal';
import LoadingModal from "../components/modals/LoadingModal";

function Profile() {
  // --- STATE ---
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin.user@mgmt.com",
    role: "Property Manager"
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Modal States
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // --- HANDLERS ---

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    if (!profile.fullName || !profile.email) {
      setErrorMessage("Full Name and Email are required.");
      setShowError(true);
      return;
    }

    setLoadingMessage("Updating Profile...");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Profile information updated successfully.");
      setShowSuccess(true);
    }, 800);
  };

  const handleUpdatePassword = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setErrorMessage("All password fields are required.");
      setShowError(true);
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setErrorMessage("New passwords do not match.");
      setShowError(true);
      return;
    }

    setLoadingMessage("Updating Password...");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Your password has been changed securely.");
      setShowSuccess(true);
      setPasswords({ current: "", new: "", confirm: "" }); 
    }, 1000);
  };

  return (
    <div>
      <Layout>
      <ProfileHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <AccountInformation 
            profile={profile} 
            onChange={handleProfileChange} 
            onSave={handleSaveProfile} 
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          <DisplaySettings 
            isDarkMode={isDarkMode} 
            onToggle={() => setIsDarkMode(!isDarkMode)} 
          />
          
          <ChangePassword 
            passwords={passwords} 
            onChange={handlePasswordChange} 
            onUpdate={handleUpdatePassword} 
          />
        </div>
      </div>

      {/* Modals */}
      <LoadingModal isOpen={isLoading} message={loadingMessage} />
      
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)}
        title="Success!"
        message={successMessage}
      />
      
      <ErrorModal 
        isOpen={showError} 
        onClose={() => setShowError(false)}
        title="Action Failed"
        message={errorMessage}
      />
      </Layout>
    </div>
  );
}

export default Profile;