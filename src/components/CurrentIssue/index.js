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
    query GET_CURRENT_ISSUE_PDF_QUERY {
      wordpressWpMedia(title: { eq: "adl-issue-one" }) {
        localFile {
          url
        }
      }
    }
  `);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Document
        file={
          'https://cors-anywhere.herokuapp.com/' +
          data.wordpressWpMedia.localFile.url
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <CurrentIssuePagesWrapper>
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber + 1} />
        </CurrentIssuePagesWrapper>
      </Document>

      <CurrentIssueControlsWrapper>
        <span onClick={() => setPageNumber(pageNumber - 1)}>&#8619;</span>
        <span onClick={() => setPageNumber(pageNumber + 1)}>&#8620;</span>
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
