import React, { useState } from 'react';
import DefaultSidebar from '@theme-original/DocSidebar';
import type { Props } from '@theme/DocSidebar';
import Link from '@docusaurus/Link';
import styles from './sidebar.module.css';
import type { JSX } from 'react';

// Helper: Get outline icon by label (add more as needed)
function getSidebarIcon(label: string) {
  switch (label) {
    case 'Innovator':
      return (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="1em" height="1em" style={{marginRight: '0.5em', verticalAlign: 'middle'}}>
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Integrator':
      return (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="1em" height="1em" style={{marginRight: '0.5em', verticalAlign: 'middle'}}>
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Admin':
      return (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="1em" height="1em" style={{marginRight: '0.5em', verticalAlign: 'middle'}}>
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
        </svg>
      );
    case 'Operations':
      return (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="1em" height="1em" style={{marginRight: '0.5em', verticalAlign: 'middle'}}>
          <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Engineering / R&D':
      return (
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" width="1em" height="1em" style={{marginRight: '0.5em', verticalAlign: 'middle'}}>
          <path d="M12 2l4 4-4 4-4-4z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function DocSidebar(props: Props): JSX.Element {
  const [query, setQuery] = useState('');

  // Patch: Render icons for top nav only. For default sidebar, use CSS to target .menu__link and inject icons via swizzle if needed.
  return (
    <div>
      {/* Custom Top Section */}
      <div className={styles.topSection}>
        <input
          type="text"
          placeholder="Search docs..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <nav className={styles.quickNav}>
          <Link to="/docs/intro">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M3 12L12 5l9 7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V9h6v12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>
          <Link to="/docs/guides">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round"/>
              <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20v13" strokeLinecap="round"/>
              <path d="M4 4.5v15" strokeLinecap="round"/>
            </svg>
            Guides
          </Link>
          <Link to="/docs/eas">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M4 20l5-1 7-7a4 4 0 0 0-5-5l-7 7-1 5z" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="15" cy="9" r="1" />
            </svg>
            EAS
          </Link>
          <Link to="/docs/reference">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M2 7v13a2 2 0 0 0 2 2h14" strokeLinecap="round"/>
              <path d="M22 7v13a2 2 0 0 1-2 2H6" strokeLinecap="round"/>
              <path d="M2 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" strokeLinecap="round"/>
            </svg>
            Reference
          </Link>
          <Link to="/docs/learn">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M8 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0V8z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4v16" strokeLinecap="round"/>
            </svg>
            Learn
          </Link>
        </nav>
      </div>
      {/* Default Sidebar */}
      <DefaultSidebar
        {...props}
        // Optionally, you could pass a custom item renderer here if you want to inject icons for sidebar items.
      />
    </div>
  );
}