import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Document, Page } from 'react-pdf';

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
        <div style={{ display: 'flex' }}>
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber + 1} />
        </div>
      </Document>
      <div>
        <span onClick={() => setPageNumber(pageNumber - 1)}>( - )</span>
        <span onClick={() => setPageNumber(pageNumber + 1)}>( + )</span>
      </div>
      <p>
        Pages {pageNumber} - {pageNumber + 1} of {numPages}
      </p>
    </>
  );
};

export default CurrentIssue;
