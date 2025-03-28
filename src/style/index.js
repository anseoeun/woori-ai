import PropTypes from 'prop-types';
import { Global } from '@emotion/react'
import GlobalStyles from './globalStyles';

StyleProvider.propTypes = {
  children: PropTypes.node,
};

export default function StyleProvider({ children }) {
  return (
    <>
        <Global styles={ GlobalStyles } />
        { children }
    </>
  );
}
