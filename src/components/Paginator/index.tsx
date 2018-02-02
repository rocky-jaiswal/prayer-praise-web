import * as React from 'react';

import './styles.css';

interface Props {
  currentPage: number;
  totalPages: number;
  fetchSharedMessages(page: number): void;
}

class Paginator extends React.PureComponent<Props> {

  render() {
    return (
      <div className="paginator">
        {
          Array(this.props.totalPages).fill(null).map((_e, i) => i + 1).map((i) => {
            return (
              <button
                disabled={i === this.props.currentPage}
                className={i === this.props.currentPage ? 'pager' : 'pager-inactive'}
                key={i}
                onClick={() => this.props.fetchSharedMessages(i)}
              >
                {i}
              </button>
            );
          })
        }
      </div>
    );
  }

}

export default Paginator;
