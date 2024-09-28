import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Filen Developer Docs
        </Heading>
        <p className="hero__subtitle">
          Build your own apps and integrations on top of Filen with our API and SDK.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/introduction">
            API Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sdk/introduction">
            SDK Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={"Home"}>
      <main>
        <HomepageHeader/>
      </main>
    </Layout>
  );
}
