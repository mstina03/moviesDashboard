import React from 'react';
import './Dashboard.css';

const Dashboard = ({ uname = "Username" }) => {
    const categories = ["Category1", "Category2", "Category3", "Category4", "Category5"];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="app-title">App Title</h1>
                <div className="user-info">
                    Welcome, {uname} &nbsp;
                    <a href="/logout">Logout</a>
                </div>
            </header>

            <div className="dashboard-body">
                <aside className="sidebar">
                    {categories.map((cat, index) => (
                        <div key={index} className="category">
                            {cat}
                        </div>
                    ))}
                </aside>

                <main className="main-content">
                    <p>Select a Category to view its questions.</p>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
