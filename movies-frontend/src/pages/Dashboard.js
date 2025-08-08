import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ uname = "Username" }) => {
    const categories = ["Action", "Comedy", "Documentary", "Drama", "Fantasy", "Horror", "Musical", "Mystery", "Romance", "Science Fiction", "Western"];

    // store which category is selected
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (cat) => {
        setSelectedCategory(cat);
        console.log("Selected category:", cat);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h4 className="app-title">Movie Genres</h4>
                <div className="user-info">
                    Welcome, {uname} &nbsp;
                    <a href="/logout">Logout</a>
                </div>
            </header>

            <div className="dashboard-body">
                <aside className="sidebar">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`category ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </aside>

                <main className="main-content">
                    {selectedCategory ? (
                        <p>What's the top rated <strong>{selectedCategory}</strong> movie of the year?</p>
                    ) : (
                        <p>Select a Genre to view its questions.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
