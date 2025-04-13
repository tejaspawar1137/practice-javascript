import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-brand">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L2 9V23L16 30L30 23V9L16 2Z" fill="#3A8BFF"/>
          </svg>
          <span className="logo-text">CURSOR</span>
        </div>
      </div>
      <div className="navbar-menu">
        <a href="#" className="nav-link">PRICING</a>
        <a href="#" className="nav-link">FEATURES</a>
        <a href="#" className="nav-link">ENTERPRISE</a>
        <a href="#" className="nav-link">BLOG</a>
        <a href="#" className="nav-link">FORUM</a>
        <a href="#" className="nav-link">CAREERS</a>
      </div>
      <div className="navbar-end">
        <button className="login-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
        </button>
        <button className="download-button">DOWNLOAD</button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-container">
      <h1 className="hero-title">Build software faster</h1>
      <p className="hero-subtitle">
        Intelligent, fast, and familiar, Cursor is the best way to code with AI.
      </p>
      <button className="hero-button">SEE MORE FEATURES</button>
      
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon frontier">
            <svg viewBox="0 0 100 100" width="80" height="80">
              <path d="M50 10L10 30v40l40 20 40-20V30L50 10z" fill="url(#gradient1)" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="50%" stopColor="#FF9933" />
                  <stop offset="100%" stopColor="#33FF99" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="feature-title">Frontier Intelligence</h2>
          <p className="feature-description">
            Powered by a mix of purpose-built and frontier models, Cursor is smart and fast.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon familiar">
            <svg viewBox="0 0 100 100" width="80" height="80">
              <rect x="20" y="20" width="25" height="25" fill="url(#gradient2)" />
              <rect x="55" y="20" width="25" height="25" fill="url(#gradient3)" />
              <rect x="20" y="55" width="25" height="25" fill="url(#gradient4)" />
              <rect x="55" y="55" width="25" height="25" fill="url(#gradient5)" />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3366FF" />
                  <stop offset="100%" stopColor="#33CCFF" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="100%" stopColor="#FF6633" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#33FF66" />
                  <stop offset="100%" stopColor="#66FF33" />
                </linearGradient>
                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF33CC" />
                  <stop offset="100%" stopColor="#FF66CC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="feature-title">Feels Familiar</h2>
          <p className="feature-description">
            Import all your extensions, themes, and keybindings in one click.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon privacy">
            <svg viewBox="0 0 100 100" width="80" height="80">
              <circle cx="50" cy="50" r="30" fill="url(#gradient6)" />
              <text x="85" y="85" fontSize="12" fill="#666">SOC2</text>
              <defs>
                <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF33CC" />
                  <stop offset="50%" stopColor="#FF9933" />
                  <stop offset="100%" stopColor="#33CCFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="feature-title">Privacy Options</h2>
          <p className="feature-description">
            If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const RadixSection = () => (
  <section className="radix-section">
    <div className="radix-container">
      <span className="radix-label">Framework freedom</span>
      
      <h2 className="radix-title">
        Built on Radix, the most popular<br />
        open source design system.
      </h2>
      
      <p className="radix-description">
        AuthKit is built with the same UI components used by<br />
        Vercel, Linear, Supabase, and thousands of others.
      </p>

      <div className="radix-content">
        <div className="code-preview">
          <pre className="code-block">
            <code>
              <span className="code-keyword">await</span> <span className="code-function">workos.users.authenticateUser</span>{'({'}
              <br />
              &nbsp;&nbsp;<span className="code-property">clientId</span>: <span className="code-string">process.env.CLIENT_ID</span>,
              <br />
              &nbsp;&nbsp;<span className="code-property">email</span>: <span className="code-function">formData.get</span>(<span className="code-string">'email'</span>),
              <br />
              &nbsp;&nbsp;<span className="code-property">password</span>: <span className="code-function">formData.get</span>(<span className="code-string">'password'</span>)
              <br />
              {'});'}
            </code>
          </pre>
        </div>

        <div className="ui-preview">
          <div className="ui-components">
            <div className="textbox">
              <input type="email" placeholder="Email" className="input-field" />
            </div>
            <div className="textbox">
              <input type="password" placeholder="Password" className="input-field" />
            </div>
            <div className="verify-code">
              <input type="text" placeholder="Verify Code" className="input-field" />
            </div>
            <div className="success-message">
              <svg viewBox="0 0 24 24" className="check-icon">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
              </svg>
              Your email address has been verified
            </div>
          </div>

          <div className="floating-elements">
            <div className="floating-circle"></div>
            <div className="floating-square"></div>
          </div>
        </div>
      </div>

      <a href="#" className="radix-link">
        Learn more about Radix
        <svg viewBox="0 0 24 24" className="arrow-icon">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image-container">
      <img 
        src={`https://picsum.photos/seed/${product.id}/400/300`} 
        alt={product.title} 
        loading="lazy" 
      />
      <div className="product-overlay">
        <button className="view-button">View Details</button>
      </div>
    </div>
    <div className="product-content">
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <span className="product-category">Category {product.id % 5 + 1}</span>
          <span className="product-price">${(Math.random() * 100 + 10).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const LoadingSkeleton = () => (
  <div className="product-card skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-meta">
        <div className="skeleton-category"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  </div>
);

const CodeProblem = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState(null);

  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.'
    ],
    testCases: [
      { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
      { nums: [3, 2, 4], target: 6, expected: [1, 2] },
      { nums: [3, 3], target: 6, expected: [0, 1] }
    ]
  };

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚙️' }
  ];

  const runCode = () => {
    try {
      // Create a function from the code string
      const userFunction = new Function('nums', 'target', code);
      
      // Run test cases
      const results = problem.testCases.map((testCase, index) => {
        const result = userFunction(testCase.nums, testCase.target);
        const passed = JSON.stringify(result.sort()) === JSON.stringify(testCase.expected.sort());
        return {
          testCase: index + 1,
          input: `nums = [${testCase.nums}], target = ${testCase.target}`,
          expected: testCase.expected,
          output: result,
          passed
        };
      });

      setTestResults(results);
    } catch (error) {
      setTestResults([{
        testCase: 'Error',
        input: 'N/A',
        expected: 'N/A',
        output: error.message,
        passed: false
      }]);
    }
  };

  return (
    <div className="code-problem">
      <div className="problem-header">
        <h1>{problem.id}. {problem.title}</h1>
        <span className="difficulty">{problem.difficulty}</span>
      </div>

      <div className="problem-content">
        <div className="left-panel">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab ${activeTab === 'solution' ? 'active' : ''}`}
              onClick={() => setActiveTab('solution')}
            >
              Solution
            </button>
            <button 
              className={`tab ${activeTab === 'editorial' ? 'active' : ''}`}
              onClick={() => setActiveTab('editorial')}
            >
              Editorial
            </button>
            <button 
              className={`tab ${activeTab === 'submissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('submissions')}
            >
              Submissions
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description">
                <p>{problem.description}</p>
                
                <h3>Examples:</h3>
                {problem.examples.map((example, index) => (
                  <div key={index} className="example">
                    <p><strong>Input:</strong> {example.input}</p>
                    <p><strong>Output:</strong> {example.output}</p>
                    <p><strong>Explanation:</strong> {example.explanation}</p>
                  </div>
                ))}

                <h3>Constraints:</h3>
                <ul>
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'solution' && (
              <div className="solution">
                <h3>Solution Approaches</h3>
                <div className="approach">
                  <h4>1. Brute Force Approach</h4>
                  <p>Time Complexity: O(n²)</p>
                  <p>Space Complexity: O(1)</p>
                </div>
                <div className="approach">
                  <h4>2. Hash Map Approach</h4>
                  <p>Time Complexity: O(n)</p>
                  <p>Space Complexity: O(n)</p>
                </div>
              </div>
            )}
            
            {activeTab === 'editorial' && (
              <div className="editorial">
                <h3>Editorial</h3>
                <p>The optimal solution uses a hash map to achieve O(n) time complexity:</p>
                <ol>
                  <li>Create an empty hash map</li>
                  <li>Iterate through the array</li>
                  <li>For each element, calculate complement = target - current element</li>
                  <li>If complement exists in hash map, return current index and complement&apos;s index</li>
                  <li>Otherwise, add current element and its index to hash map</li>
                </ol>
              </div>
            )}
            
            {activeTab === 'submissions' && (
              <div className="submissions">
                <h3>Your Submissions</h3>
                <div className="submission-stats">
                  <div className="stat">
                    <span>Acceptance Rate</span>
                    <span>75%</span>
                  </div>
                  <div className="stat">
                    <span>Submissions</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="right-panel">
          <div className="code-editor-header">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="language-selector"
            >
              {languages.map(lang => (
                <option key={lang.id} value={lang.id}>
                  {lang.icon} {lang.name}
                </option>
              ))}
            </select>
            <button className="run-button" onClick={runCode}>
              Run
            </button>
          </div>

          <div className="code-editor">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
              spellCheck="false"
            />
          </div>

          {testResults && (
            <div className="test-results">
              <h3>Test Results</h3>
              {testResults.map((result, index) => (
                <div key={index} className={`test-case ${result.passed ? 'passed' : 'failed'}`}>
                  <div className="test-header">
                    <span>Test Case {result.testCase}</span>
                    <span>{result.passed ? '✅ Passed' : '❌ Failed'}</span>
                  </div>
                  <div className="test-details">
                    <p><strong>Input:</strong> {result.input}</p>
                    <p><strong>Expected:</strong> {JSON.stringify(result.expected)}</p>
                    <p><strong>Output:</strong> {JSON.stringify(result.output)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  // Fetch products from API
  const fetchProducts = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=12&_page=${pageNum}`);
      const data = await res.json();
      const transformedData = data.map(item => ({
        id: item.id,
        title: item.title.split(' ').slice(0, 4).join(' '), // Shorten the title
      }));
      setProducts((prev) => [...prev, ...transformedData]);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Observe the bottom element
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }, { threshold: 0.5 });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  // Fetch products when page changes
  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <>
      <Header />
      <HeroSection />
      <RadixSection />
      <CodeProblem />
      <div className="container">
        <header className="header">
          <h1 className="grid-title">Featured Products</h1>
          <p className="grid-subtitle">Discover our latest collection</p>
        </header>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {loading && (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          )}
        </div>
        <div ref={loaderRef} className="loader-container">
          {loading && (
            <div className="loader">
              <div className="loader-spinner"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;