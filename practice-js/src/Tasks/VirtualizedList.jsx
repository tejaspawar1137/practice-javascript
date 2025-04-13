import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        backgroundColor: isHovered 
          ? '#f0f4ff' 
          : (index % 2 === 0 ? '#f8f9fa' : '#ffffff'),
      }}
      className="px-4 py-3 border-b border-gray-200 flex items-center text-base hover:shadow-md"
    >
      <span className={`
        w-10 h-10 rounded-full mr-4 flex items-center justify-center 
        ${index % 2 === 0 ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}
      `}>
        {index + 1}
      </span>
      {items[index]}
    </div>
  );
};

const VirtualizedList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search term
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center mb-4">
            Virtualized List Showcase
          </h1>
          <div className="max-w-xl mx-auto mb-4">
            <input 
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <List
            height={window.innerHeight - 250} // Dynamically adjust height
            itemCount={filteredItems.length}
            itemSize={60}
            width="100%"
          >
            {({ index, style }) => (
              <Row 
                index={index} 
                style={style} 
                item={filteredItems[index]}
              />
            )}
          </List>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 Virtualized List Showcase</p>
        </div>
      </footer>
    </div>
  );
};

export default VirtualizedList;