
import * as React from 'react';
import webShare, { WebShareInterface } from 'react-web-share-api';

export interface OwnProps {
  style: object;
}

const SharePet: React.StatelessComponent<WebShareInterface & OwnProps > = ({
  share, isSupported
}) => isSupported
  ?<button onClick={share}>Comparte</button>
  : <button>Comparte</button>;
  // : <div></div>;

export default webShare<OwnProps>()(SharePet);