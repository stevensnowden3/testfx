import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function External() {
  const [state, setState] = useState({ isLoading: false, response: undefined, error: undefined });

  const callApi = async () => {
    setState(previous => ({ ...previous, isLoading: true }));

    try {
      const response = await fetch('/api/shows');
      const data = await response.json();

      setState(previous => ({ ...previous, response: data, error: undefined }));
    } catch (error) {
      setState(previous => ({ ...previous, response: undefined, error }));
    } finally {
      setState(previous => ({ ...previous, isLoading: false }));
    }
  };

  const handle = (event, fn) => {
    event.preventDefault();
    fn();
  };

  const { isLoading, response, error } = state;

  return (
    <>
      <div className="mb-5" data-testid="external">
        <h1 data-testid="external-title"> Material Inspection CheckList System</h1>
        <div data-testid="external-text">
          <p className="lead">Umeme is a leading energy distribution company in Uganda.</p>
          <p>
            Founded in 2005, the company has played a crucial role in improving access to electricity in the country by
            investing in infrastructure and technology to modernize the power grid.
            <br />
            Umeme has also focused on increasing efficiency in the energy sector and reducing losses through theft and
            technical failures.
          </p>
          <p>
            The company has a strong commitment to sustainability and has implemented several renewable energy projects
            in Uganda. <br />
            Through its efforts, Umeme has greatly contributed to the economic development of Uganda and improved the
            lives of millions of people.
            <br /> (see <a href="'https://umeme.co.ug'">Umeme distribution company</a> for more info).
          </p>
        </div>
        <a href="/">
          <Button color="primary" className="mt-5">
            Home
          </Button>
        </a>
      </div>
      <div className="result-block-container">
        {isLoading && <Loading />}
        {(error || response) && (
          <div className="result-block" data-testid="external-result">
            <h6 className="muted">Result</h6>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {response && <Highlight>{JSON.stringify(response, null, 2)}</Highlight>}
          </div>
        )}
      </div>
    </>
  );
}

export default withPageAuthRequired(External, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
