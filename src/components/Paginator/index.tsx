import * as React from 'react'

import './styles.css'

interface Props {
  currentPage: number
  totalPages: number
  fetchSharedMessages(page: number): void
}

const Paginator = (props: Props) => {
  return (
    <div className="paginator">
      {Array(props.totalPages)
        .fill(null)
        .map((_e, i) => i + 1)
        .map((i) => {
          return (
            <button
              aria-label="pagination"
              disabled={i === props.currentPage}
              className={i === props.currentPage ? 'pager' : 'pager-inactive'}
              key={i}
              onClick={() => props.fetchSharedMessages(i)}
            >
              {i}
            </button>
          )
        })}
    </div>
  )
}

export default Paginator
