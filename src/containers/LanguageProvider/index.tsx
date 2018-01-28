import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { translationMessages } from '../../i18n/';
import { Dispatch, RootStateType } from '../../constants/types';

interface StateProps {
  locale: string;
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    locale: state.app.locale
  };
}

const mapDispatchToProps = (dispatch: Dispatch): {} => {
  return {};
};

export class LanguageProvider extends React.Component<StateProps> {

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={translationMessages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
