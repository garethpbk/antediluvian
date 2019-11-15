import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Document, Page } from 'react-pdf';

// import styled components
import {
  CurrentIssueControlsWrapper,
  CurrentIssuePageNumberWrapper,
  CurrentIssuePagesWrapper,
} from './styled';

const CurrentIssue = () => {
  const data = useStaticQuery(graphql`
    query GET_CURRENT_ISSUE_PDF_URL_QUERY {
      wordpressPage(slug: { eq: "current" }) {
        acf {
          issue_pdf {
            url {
              source_url
            }
          }
        }
      }
    }
  `);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePageNumbers = forward => {
    if (!forward && pageNumber === 1) {
      return null;
    }

    if (forward && pageNumber === numPages - 1) {
      return null;
    }

    if (forward) {
      setPageNumber(pageNumber + 2);
    } else {
      setPageNumber(pageNumber - 2);
    }
  };

  return (
    <>
      <Document
        file={
          'https://cors-anywhere.herokuapp.com/' +
          data.wordpressPage.acf.issue_pdf.url.source_url
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <CurrentIssuePagesWrapper>
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber + 1} />
        </CurrentIssuePagesWrapper>
      </Document>

      <CurrentIssueControlsWrapper>
        <span onClick={() => changePageNumbers(false)}>&#8619;</span>
        <span onClick={() => changePageNumbers(true)}>&#8620;</span>
      </CurrentIssueControlsWrapper>
      <CurrentIssuePageNumberWrapper>
        <p>
          Pages {pageNumber} - {pageNumber + 1} of {numPages}
        </p>
      </CurrentIssuePageNumberWrapper>
    </>
  );
};

export default CurrentIssue;
