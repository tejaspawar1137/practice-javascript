import { useState, useMemo, useEffect } from "react";

// Example 1: Expensive Calculation (Classic Example)
const ExpensiveCalculation = ({ num }) => {
  const computeFactorial = (n) => {
    console.log("Computing factorial...");
    if (n <= 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  
  const factorial = useMemo(() => computeFactorial(num), [num]);
  
  return (
    <div className="example-card">
      <h3>Example 1: Expensive Calculation</h3>
      <p><strong>Industry Use Case:</strong> Data analytics dashboards where complex calculations need to be performed but should only re-run when inputs change.</p>
      <p>Factorial of {num} is {factorial}</p>
    </div>
  );
};

// Add display name
ExpensiveCalculation.displayName = "ExpensiveCalculation";

// Example 2: Filtered Data for Tables/Lists
const DataFiltering = ({ searchTerm }) => {
  // Simulate a large dataset that might come from an API
  const generateLargeDataset = () => {
    console.log("Generating large dataset...");
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index,
      name: `Item ${index}`,
      category: index % 5 === 0 ? "A" : index % 3 === 0 ? "B" : "C",
      value: Math.floor(Math.random() * 1000)
    }));
  };

  const largeDataset = useMemo(() => generateLargeDataset(), []);
  
  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    if (!searchTerm) return largeDataset.slice(0, 5); // Just show first 5 items if no search
    
    return largeDataset
      .filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5); // Limit to 5 items for display
  }, [largeDataset, searchTerm]);

  return (
    <div className="example-card">
      <h3>Example 2: Data Filtering for Tables</h3>
      <p><strong>Industry Use Case:</strong> Enterprise applications with large data tables where filtering should be efficient and prevent re-renders.</p>
      <p>Showing {filteredData.length} results for "{searchTerm || 'all'}":</p>
      <ul className="data-list">
        {filteredData.map(item => (
          <li key={item.id}>
            {item.name} - Category: {item.category}, Value: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add display name
DataFiltering.displayName = "DataFiltering";

// Example 3: Derived State for Charts/Visualizations
const ChartDataProcessor = ({ aggregationType }) => {
  // Simulate raw data that might come from an API
  const generateRawData = () => {
    console.log("Generating raw chart data...");
    return Array.from({ length: 100 }, (_, i) => ({
      date: `2023-${Math.floor(i / 30) + 1}-${(i % 30) + 1}`,
      sales: Math.floor(Math.random() * 1000),
      visitors: Math.floor(Math.random() * 5000),
      region: i % 3 === 0 ? "North" : i % 2 === 0 ? "South" : "East"
    }));
  };

  const sampleRawData = useMemo(() => generateRawData(), []);
  
  // Process data for visualization - expensive operation that depends on aggregation type
  const processedChartData = useMemo(() => {
    console.log("Processing chart data...");
    
    if (aggregationType === "daily") {
      return sampleRawData.slice(0, 5); // Just return a sample for demonstration
    }
    
    if (aggregationType === "monthly") {
      // Group by month and aggregate
      const monthlyData = {};
      sampleRawData.forEach(item => {
        const month = item.date.split('-')[1];
        if (!monthlyData[month]) {
          monthlyData[month] = { month, totalSales: 0, totalVisitors: 0 };
        }
        monthlyData[month].totalSales += item.sales;
        monthlyData[month].totalVisitors += item.visitors;
      });
      return Object.values(monthlyData);
    }
    
    if (aggregationType === "regional") {
      // Group by region
      const regionalData = {};
      sampleRawData.forEach(item => {
        if (!regionalData[item.region]) {
          regionalData[item.region] = { region: item.region, totalSales: 0, totalVisitors: 0 };
        }
        regionalData[item.region].totalSales += item.sales;
        regionalData[item.region].totalVisitors += item.visitors;
      });
      return Object.values(regionalData);
    }
    
    return sampleRawData.slice(0, 5);
  }, [sampleRawData, aggregationType]);

  return (
    <div className="example-card">
      <h3>Example 3: Chart Data Processing</h3>
      <p><strong>Industry Use Case:</strong> Business intelligence dashboards where raw data needs to be transformed for visualization based on user-selected parameters.</p>
      <p>Data aggregated by: {aggregationType}</p>
      <div className="chart-preview">
        {processedChartData.map((item, index) => (
          <div key={index} className="chart-item">
            {aggregationType === "daily" && (
              <span>Date: {item.date} | Sales: {item.sales} | Visitors: {item.visitors}</span>
            )}
            {aggregationType === "monthly" && (
              <span>Month: {item.month} | Total Sales: {item.totalSales} | Total Visitors: {item.totalVisitors}</span>
            )}
            {aggregationType === "regional" && (
              <span>Region: {item.region} | Total Sales: {item.totalSales} | Total Visitors: {item.totalVisitors}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Add display name
ChartDataProcessor.displayName = "ChartDataProcessor";

const UseMemoExamples = () => {
  const [number, setNumber] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [aggregationType, setAggregationType] = useState("daily");

  // Add some basic styling
  useEffect(() => {
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style>
        .usememo-container {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .example-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 20px;
          background-color: #f9f9f9;
        }
        .control-panel {
          margin-bottom: 10px;
          padding: 10px;
          background-color: #eee;
          border-radius: 4px;
        }
        .data-list {
          background-color: white;
          padding: 10px;
          border-radius: 4px;
        }
        .chart-preview {
          background-color: white;
          padding: 10px;
          border-radius: 4px;
        }
        .chart-item {
          padding: 5px;
          border-bottom: 1px solid #eee;
        }
        input, select {
          padding: 5px;
          margin-right: 10px;
        }
      </style>`
    );
  }, []);

  return (
    <div className="usememo-container">
      <h2>Real-World useMemo Examples</h2>
      <p>useMemo is used to memoize expensive calculations or operations to optimize performance by preventing unnecessary recalculations.</p>
      
      <div className="control-panel">
        <label>
          Number for factorial: 
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          />
        </label>
      </div>
      <ExpensiveCalculation num={number} />
      
      <div className="control-panel">
        <label>
          Search items: 
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or category"
          />
        </label>
      </div>
      <DataFiltering searchTerm={searchTerm} />
      
      <div className="control-panel">
        <label>
          Chart aggregation: 
          <select 
            value={aggregationType}
            onChange={(e) => setAggregationType(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="regional">Regional</option>
          </select>
        </label>
      </div>
      <ChartDataProcessor aggregationType={aggregationType} />
    </div>
  );
};

// Add display name
UseMemoExamples.displayName = "UseMemoExamples";

export default UseMemoExamples;