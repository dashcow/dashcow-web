// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// TODO: remove after create-react-app update jest to v26
// Add this due to dom-testing-library breaking change, see
// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0 for more details
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
