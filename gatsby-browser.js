/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = () => {
  import(`typeface-cinzel`);
  import(`typeface-lato`);

  if (typeof window.IntersectionObserver === 'undefined') {
    import(`intersection-observer`);
  }
};
