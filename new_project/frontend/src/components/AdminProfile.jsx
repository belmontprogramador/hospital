import React, { useState, useEffect } from 'react';

const AdminProfile = ({ adminId }) => {
  const [adminData, setAdminData] = useState({
    ad_fname: '',
    ad_lname: '',
    ad_email: '',
    ad_dpic: '',
  });
  const [updateProfileData, setUpdateProfileData] = useState({
    ad_fname: '',
    ad_lname: '',
    ad_email: '',
    ad_dpic: null,
  });
  const [updatePasswordData, setUpdatePasswordData] = useState({
    oldPassword: '',
    ad_pwd: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/admin/${adminId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch admin data');
        }
        const data = await response.json();
        setAdminData(data);
        setUpdateProfileData({
          ad_fname: data.ad_fname,
          ad_lname: data.ad_lname,
          ad_email: data.ad_email,
          ad_dpic: null,
        });
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchAdminData();
  }, [adminId]);

  const handleProfileInputChange = (e) => {
    const { name, value, files } = e.target;
    setUpdateProfileData({
      ...updateProfileData,
      [name]: name === 'ad_dpic' ? files[0] : value,
    });
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatePasswordData({
      ...updatePasswordData,
      [name]: value,
    });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('ad_fname', updateProfileData.ad_fname);
    formData.append('ad_lname', updateProfileData.ad_lname);
    formData.append('ad_email', updateProfileData.ad_email);
    if (updateProfileData.ad_dpic) {
      formData.append('ad_dpic', updateProfileData.ad_dpic);
    }

    try {
      const response = await fetch(`http://localhost:3000/admin/${adminId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedData = await response.json();
      setAdminData(updatedData);
      setSuccessMessage('Profile Updated');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (updatePasswordData.ad_pwd !== updatePasswordData.confirmPassword) {
      setErrorMessage('New password and confirm password do not match');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/admin/${adminId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ad_pwd: updatePasswordData.ad_pwd,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update password');
      }

      setSuccessMessage('Password Updated');
      setUpdatePasswordData({
        oldPassword: '',
        ad_pwd: '',
        confirmPassword: '',
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{adminData.ad_fname} {adminData.ad_lname}'s Profile</h2>

      <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: '30%', padding: '20px', textAlign: 'center', borderRight: '1px solid #ccc' }}>
          <img
            src={adminData.ad_dpic ? `http://localhost:3000/${adminData.ad_dpic}` : 'default-profile.png'}
            alt="Profile"
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', border: '2px solid #007bff' }}
          />
          <h4 style={{ marginTop: '10px', marginBottom: '5px' }}>{adminData.ad_fname} {adminData.ad_lname}</h4>
          <p style={{ color: '#555', fontSize: '14px' }}>@System_Administrator_HMIS</p>
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <p style={{ marginBottom: '5px' }}><strong>Full Name:</strong> {adminData.ad_fname} {adminData.ad_lname}</p>
            <p style={{ marginBottom: '5px' }}><strong>Email:</strong> {adminData.ad_email}</p>
          </div>
        </div>

        <div style={{ width: '70%', padding: '20px' }}>
          {successMessage && <p style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>}

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>Update Profile</h3>
            <form onSubmit={handleProfileUpdate}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                <div>
                  <label htmlFor="ad_fname" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name:</label>
                  <input
                    type="text"
                    id="ad_fname"
                    name="ad_fname"
                    value={updateProfileData.ad_fname}
                    onChange={handleProfileInputChange}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />
                </div>
                <div>
                  <label htmlFor="ad_lname" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name:</label>
                  <input
                    type="text"
                    id="ad_lname"
                    name="ad_lname"
                    value={updateProfileData.ad_lname}
                    onChange={handleProfileInputChange}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="ad_email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                <input
                  type="email"
                  id="ad_email"
                  name="ad_email"
                  value={updateProfileData.ad_email}
                  onChange={handleProfileInputChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="ad_dpic" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Profile Picture:</label>
                <input
                  type="file"
                  id="ad_dpic"
                  name="ad_dpic"
                  onChange={handleProfileInputChange}
                  style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
              >
                Save
              </button>
            </form>
          </div>

          <div>
            <h3 style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>Change Password</h3>
            <form onSubmit={handlePasswordUpdate}>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="oldPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Old Password:</label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={updatePasswordData.oldPassword}
                  onChange={handlePasswordInputChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="ad_pwd" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>New Password:</label>
                <input
                  type="password"
                  id="ad_pwd"
                  name="ad_pwd"
                  value={updatePasswordData.ad_pwd}
                  onChange={handlePasswordInputChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={updatePasswordData.confirmPassword}
                  onChange={handlePasswordInputChange}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;