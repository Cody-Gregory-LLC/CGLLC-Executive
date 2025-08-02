import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// --- TagSearch component ---
const tagMap: Record<string, string[]> = {
  'document control': ['integrator/7.5', 'admin/8.6'],
  'training': ['innovator/7.2', 'engineering/6.2'],
  'quality objectives': ['engineering/6.2', 'innovator/5.2'],
  'customer feedback': ['admin/9.1', 'admin/9.2'],
};

function TagSearch() {
  const [query, setQuery] = useState('');

  const matchedTags = Object.entries(tagMap)
    .filter(([tag]) => tag.includes(query.toLowerCase()))
    .flatMap(([, ids]) => ids);

  return (
    <section
      style={{
        marginTop: '3rem',
        padding: '1.5rem',
        background: 'var(--ifm-background-color)',
        borderRadius: '1rem',
        boxShadow: '0 2px 12px #0002',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Search by Tag
      </h2>

      <input
        type="text"
        placeholder="e.g. training, document control..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #fff', // thin white outline
          marginBottom: '1.25rem',
          background: 'var(--ifm-menu-color-background-hover)',
          color: 'var(--ifm-menu-color)',
        }}
      />
      {query && (
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          {matchedTags.length === 0 && (
            <li style={{ color: '#b91c1c', textAlign: 'center' }}>
              No results found.
            </li>
          )}
          {matchedTags.map((id) => (
            <li key={id} style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
              <Link
                to={`/docs/${id}`}
                style={{
                  color: 'var(--ifm-color-primary)',
                  fontWeight: 500,
                  background: 'var(--ifm-color-primary-lightest)',
                  padding: '0.4em 1em',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  border: '1px solid var(--ifm-color-primary)', // thin outline
                  transition: 'background 0.2s, color 0.2s, border 0.2s',
                }}
              >
                {id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
// --- End TagSearch ---

const departmentColors = [
  { accent: '#773030ff', bg: 'linear-gradient(135deg, #18181b 60%, #2d2d2d 100%)' }, // Admin
  { accent: '#736fadff', bg: 'linear-gradient(135deg, #18181b 60%, #23234b 100%)' }, // Engineering
  { accent: '#407a6aff', bg: 'linear-gradient(135deg, #18181b 60%, #1b2d23 100%)' }, // Operations
  { accent: '#ca8b04a9', bg: 'linear-gradient(135deg, #18181b 60%, #2d261b 100%)' }, // Orientation
  { accent: '#8f3392ff', bg: 'linear-gradient(135deg, #18181b 60%, #2d1b2d 100%)' }, // Our Mission
  { accent: '#0ea4e9b9', bg: 'linear-gradient(135deg, #18181b 60%, #1b232d 100%)' }, // R&D
];

const departments = [
  {
    title: 'OUR MISSION',
    description: 'Learn about our purpose and commitment to quality.',
    link: '/docs/intro',
  },
  {
    title: 'ADMIN',
    description: 'Policies, records, and compliance for administration.',
    link: '/docs/admin/index',
  },
  {
    title: 'ENGINEERING',
    description: 'Design, development, and technical documentation.',
    link: '/docs/engineering/index',
  },
  {
    title: 'OPERATIONS',
    description: 'Production, process, and operational excellence.',
    link: '/docs/operations/index',
  },
  {
    title: 'ORIENTATION',
    description: 'Start here for onboarding and company overview.',
    link: '/docs/intro',
  },
  {
    title: 'R&D',
    description: 'Research and development initiatives and records.',
    link: '/docs/engineering/8.3',
  },
];

function DepartmentCards() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      style={{
        margin: '3rem auto',
        maxWidth: 1200,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}
    >
      {departments.map((dept, idx) => (
        <div
          key={dept.title}
          style={{
            background: departmentColors[idx].bg,
            border: `1px solid ${departmentColors[idx].accent}`, // thin outline
            borderRadius: '1.25rem',
            boxShadow: hoveredIdx === idx
              ? `0 6px 24px ${departmentColors[idx].accent}44`
              : `0 2px 12px #0002`,
            minWidth: 260,
            maxWidth: 320,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
            position: 'relative',
            overflow: 'hidden',
            transform: hoveredIdx === idx ? 'translateY(-6px) scale(1.03)' : 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.08,
              background: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png") repeat',
              borderRadius: '1.25rem',
              zIndex: 0,
            }}
          />
          <Link
            to={dept.link}
            style={{
              display: 'inline-block',
              background: hoveredIdx === idx ? departmentColors[idx].accent : '#232329',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.25rem',
              borderRadius: '8px',
              padding: '0.5em 1.25em',
              textDecoration: 'none',
              boxShadow: hoveredIdx === idx
                ? `0 4px 16px ${departmentColors[idx].accent}44`
                : `0 2px 8px #0002`,
              transition: 'background 0.3s, box-shadow 0.3s, transform 0.3s, color 0.3s',
              position: 'relative',
              zIndex: 1,
              transform: hoveredIdx === idx ? 'scale(1.07)' : 'none',
              border: `1px solid ${departmentColors[idx].accent}`, // thin outline
              marginBottom: '0.75rem',
              letterSpacing: '0.01em',
              fontFamily: "'Inter', 'Segoe UI', 'Arial', sans-serif",
              textAlign: 'center',
              width: '100%',
            }}
          >
            {dept.title}
          </Link>
          <p
            style={{
              color: 'var(--ifm-menu-color)',
              fontSize: '1rem',
              marginBottom: '1.25rem',
              opacity: 0.85,
              position: 'relative',
              zIndex: 1,
              transition: 'color 0.3s',
            }}
          >
            {dept.description}
          </p>
        </div>
      ))}
    </section>
  );
}

// --- Animate hero button ---
function HomepageHeader() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        background: 'linear-gradient(90deg, #18181b 60%, #232329 100%)',
        padding: '3rem 0 2rem 0',
        borderRadius: '0 0 2rem 2rem',
        boxShadow: '0 4px 24px #0003',
        borderBottom: '1.5px solid #232329',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <Heading
          as="h1"
          className="hero__title"
          style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: '2.8rem',
            fontFamily: "'Inter', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: '0.01em',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          Cody Gregory LLC
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            color: '#e5e7eb',
            fontSize: '1rem',
            fontFamily: "'Inter', 'Segoe UI', 'Arial', sans-serif",
            fontWeight: 400,
            marginBottom: '2rem',
            marginTop: '2rem',
            letterSpacing: '0.01em',
            fontStyle: 'italic',
          }}
        >
          “We’re taught to do things the way everyone else does them. But progress comes from questioning the norm — and having the right people alongside you to do it.”{' '}
          <span style={{ fontStyle: 'normal', fontWeight: 600 }}>
            - JAMES DYSON
          </span>
        </p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro"
          style={{
            background: btnHover ? '#fff' : '#232329',
            color: btnHover ? '#232329' : '#fff',
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: btnHover ? '0 4px 16px #fff4' : '0 2px 8px #0002',
            border: '1px solid #fff', // thin outline
            fontFamily: "'Inter', 'Segoe UI', 'Arial', sans-serif",
            fontSize: '1.1rem',
            padding: '0.75em 2em',
            transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s',
            transform: btnHover ? 'scale(1.07)' : 'none',
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Let's Begin
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Welcome to the CGLLC Quality System Portal"
    >
      <HomepageHeader />
      <main>
        <DepartmentCards />
        <TagSearch />
        {/* Add more widgets/components here as needed */}
      </main>
    </Layout>
  );
}