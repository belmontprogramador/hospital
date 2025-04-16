import React, { useState, useEffect } from 'react';

const AccountRecords = () => {
  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:3000/accounts');
        if (!response.ok) {
          throw new Error('Failed to fetch accounts');
        }
        const data = await response.json();
        setAccounts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAccounts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAccounts = accounts.filter((account) =>
    Object.values(account).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Account Records</h2>

      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>#</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Account Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Account Number</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Account Amount</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Account Type</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((account, index) => (
              <tr key={account.acc_number} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{account.acc_name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{account.acc_number}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>${account.acc_amount}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{account.acc_type}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                    // onClick={() => handleView(account.acc_number)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountRecords;