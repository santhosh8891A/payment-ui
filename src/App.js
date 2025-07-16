import React, { useState } from 'react';
import './styles/App.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(username);
        } else {
            alert('Please enter username and password.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form" style={{
            maxWidth: 400,
            margin: "40px auto",
            border: "1px solid #ccc",
            padding: 32,
            borderRadius: 12,
            background: "#fafbfc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
            <div style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                <label style={{ width: 120, fontWeight: 500 }}>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    style={{
                        width: "220px",
                        padding: "8px",
                        border: "1px solid #bbb",
                        borderRadius: 4
                    }}
                />
            </div>
            <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
                <label style={{ width: 120, fontWeight: 500 }}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{
                        width: "220px",
                        padding: "8px",
                        border: "1px solid #bbb",
                        borderRadius: 4
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                    type="submit"
                    style={{
                        padding: "8px 24px",
                        background: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        fontWeight: 500,
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </div>
        </form>
    );
}

function AddPayeePage({ onBack, onSubmit, newPayee, handleChange }) {
    return (
        <div
            className="add-payee-page"
            style={{
                maxWidth: 400,
                margin: "40px auto",
                border: "1px solid #ccc",
                padding: 32,
                borderRadius: 12,
                background: "#fafbfc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Add New Payee</h2>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={newPayee.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Account Number:</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={newPayee.accountNumber}
                        onChange={handleChange}
                        required
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Sort Code:</label>
                    <input
                        type="text"
                        name="sortCode"
                        value={newPayee.sortCode}
                        onChange={handleChange}
                        required
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 24px",
                            background: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Add Payee
                    </button>
                    <button
                        type="button"
                        onClick={onBack}
                        style={{
                            padding: "8px 24px",
                            background: "#f5f5f5",
                            color: "#333",
                            border: "1px solid #bbb",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
}

function TransactionPasswordPage({ onBack, onSubmit, transactionPassword, setTransactionPassword }) {
    return (
        <div
            className="transaction-password-page"
            style={{
                maxWidth: 400,
                margin: "40px auto",
                border: "1px solid #ccc",
                padding: 32,
                borderRadius: 12,
                background: "#fafbfc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Enter Transaction Password</h2>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Transaction Password:</label>
                    <input
                        type="password"
                        value={transactionPassword}
                        onChange={e => setTransactionPassword(e.target.value)}
                        required
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 24px",
                            background: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        type="button"
                        onClick={onBack}
                        style={{
                            padding: "8px 24px",
                            background: "#f5f5f5",
                            color: "#333",
                            border: "1px solid #bbb",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
}

function SendMoneyPage({ onBack, onSubmit, amount, setAmount, date, setDate }) {
    return (
        <div
            className="send-money-page"
            style={{
                maxWidth: 400,
                margin: "40px auto",
                border: "1px solid #ccc",
                padding: 32,
                borderRadius: 12,
                background: "#fafbfc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Send Money</h2>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
                        min="1"
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
                    <label style={{ width: 120, fontWeight: 500 }}>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                        style={{
                            width: "220px",
                            padding: "8px",
                            border: "1px solid #bbb",
                            borderRadius: 4
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 24px",
                            background: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={onBack}
                        style={{
                            padding: "8px 24px",
                            background: "#f5f5f5",
                            color: "#333",
                            border: "1px solid #bbb",
                            borderRadius: 4,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
}

function Dashboard({ username, onLogout }) {
    const [showPayment, setShowPayment] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedToAccount, setSelectedToAccount] = useState('');
    const [showAddPayeePage, setShowAddPayeePage] = useState(false);
    const [showSendMoneyPage, setShowSendMoneyPage] = useState(false);
    const [showTransactionPasswordPage, setShowTransactionPasswordPage] = useState(false);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [transactionPassword, setTransactionPassword] = useState('');
    const [newPayee, setNewPayee] = useState({
        accountNumber: '',
        sortCode: '',
        name: ''
    });
    const [existingAccounts, setExistingAccounts] = useState([
        { id: 'acc3', name: 'Friend Account - 4321' },
        { id: 'acc4', name: 'Vendor Account - 8765' }
    ]);
    const userAccounts = [
        { id: 'acc1', name: 'Savings Account - 1234' },
        { id: 'acc2', name: 'Checking Account - 5678' }
    ];

    const handleNewPayeeChange = (e) => {
        const { name, value } = e.target;
        setNewPayee(prev => ({ ...prev, [name]: value }));
    };

    const handleAddPayee = (e) => {
        e.preventDefault();
        setExistingAccounts(prev => [
            ...prev,
            {
                id: `acc${prev.length + 5}`,
                name: `${newPayee.name} - ${newPayee.accountNumber}`
            }
        ]);
        alert(`New payee added:\nName: ${newPayee.name}\nAccount Number: ${newPayee.accountNumber}\nSort Code: ${newPayee.sortCode}`);
        setShowAddPayeePage(false);
        setNewPayee({ accountNumber: '', sortCode: '', name: '' });
    };

    const handleSendMoney = (e) => {
        e.preventDefault();
        setShowSendMoneyPage(false);
        setShowTransactionPasswordPage(true);
    };

    const handleTransactionPassword = (e) => {
        e.preventDefault();
        // Here you would validate the transaction password
        alert(`Money sent!\nAmount: ${amount}\nDate: ${date}`);
        setShowTransactionPasswordPage(false);
        setAmount('');
        setDate('');
        setTransactionPassword('');
    };

    if (showAddPayeePage) {
        return (
            <AddPayeePage
                onBack={() => setShowAddPayeePage(false)}
                onSubmit={handleAddPayee}
                newPayee={newPayee}
                handleChange={handleNewPayeeChange}
            />
        );
    }

    if (showSendMoneyPage) {
        return (
            <SendMoneyPage
                onBack={() => setShowSendMoneyPage(false)}
                onSubmit={handleSendMoney}
                amount={amount}
                setAmount={setAmount}
                date={date}
                setDate={setDate}
            />
        );
    }

    if (showTransactionPasswordPage) {
        return (
            <TransactionPasswordPage
                onBack={() => setShowTransactionPasswordPage(false)}
                onSubmit={handleTransactionPassword}
                transactionPassword={transactionPassword}
                setTransactionPassword={setTransactionPassword}
            />
        );
    }

    return (
        <div className="App">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Payment UI</h1>
                <button
                    onClick={onLogout}
                    style={{
                        padding: "8px 20px",
                        background: "#e53935",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        fontWeight: 500,
                        cursor: "pointer"
                    }}
                >
                    Logout
                </button>
            </div>
            <h2>Welcome, {username}!</h2>
            {!showPayment && (
                <button onClick={() => setShowPayment(true)}>
                    Initiate Payment
                </button>
            )}
            {showPayment && (
                <>
                    <div style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                        <label htmlFor="fromAccount" style={{ width: 120, fontWeight: 500 }}><b>From:</b></label>
                        <select
                            id="fromAccount"
                            value={selectedAccount}
                            onChange={e => setSelectedAccount(e.target.value)}
                            style={{
                                width: "220px",
                                padding: "8px",
                                border: "1px solid #bbb",
                                borderRadius: 4,
                                marginLeft: 0
                            }}
                        >
                            <option value="">Select your account</option>
                            {userAccounts.map(acc => (
                                <option key={acc.id} value={acc.id}>{acc.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
                        <label htmlFor="toAccount" style={{ width: 120, fontWeight: 500 }}><b>To (Existing Account):</b></label>
                        <select
                            id="toAccount"
                            value={selectedToAccount}
                            onChange={e => setSelectedToAccount(e.target.value)}
                            style={{
                                width: "220px",
                                padding: "8px",
                                border: "1px solid #bbb",
                                borderRadius: 4,
                                marginLeft: 0
                            }}
                        >
                            <option value="">Select existing account</option>
                            {existingAccounts.map(acc => (
                                <option key={acc.id} value={acc.id}>{acc.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                        <button onClick={() => setShowAddPayeePage(true)} style={{ marginBottom: 20 }}>
                            Add New Payee
                        </button>
                        <button onClick={() => setShowSendMoneyPage(true)} style={{ marginBottom: 20 }}>
                            Send Money
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <div>
            {!loggedInUser ? (
                <Login onLogin={setLoggedInUser} />
            ) : (
                <Dashboard username={loggedInUser} onLogout={() => setLoggedInUser(null)} />
            )}
        </div>
    );
}

export default App;