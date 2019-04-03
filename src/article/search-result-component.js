import React, {Fragment} from 'react';

export default function SearchResults({results}) {
  return (
    <dl className="uk-description-list uk-description-list-divider">
      {results.map(({href, title, description}, index) => (
        <Fragment key={index}>
          <dt>
            <a href={href} title={title}>{title}</a>
          </dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </dl>
  )
}